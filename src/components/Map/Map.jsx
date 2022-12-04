import React, { useState, useEffect} from 'react';

export default function Map(props) {
    const API_KEY = "66b7569a93af455d9f8f0d749633affc";
    const [query, setQuery] = useState();

    const WIDTH = 600, HEIGHT = 600;
    const MAX_LOCATIONS = 10;
    
    const TYPES = {
        BUS: 'A',
        TRAM: 'E',
        TROLLEYBUS: 'T'
    }

    const [locationsData, setLocationsData] = useState([]);
    const [routesData, setRoutesData] = useState([]);

    const createMapQuery = (data, locData, center_lat, center_long, zoom, lat_start, long_start, lat_finish, long_finish) => {
        let lines_string = '';
        let markers_string = `marker=lonlat:${long_start},${lat_start};color:%23ffffff;size:small;text:Me&`;
    
        for (let i = 0; i < data.lines.length; i++) {
            let draw_color;
            switch (data.lines[i].type[0]) {
                case TYPES.BUS: {
                    draw_color = '0b26d0';
                    break;
                }
                case TYPES.TRAM: {
                    draw_color = '27b900';
                    break;
                }
                case TYPES.TROLLEYBUS: {
                    draw_color = 'd60c0c';
                    break;
                }
            }
            
            data.lines[i].zastavky = data.lines[i].zastavky.filter(z => z.longitude && z.latitude);
            for (let j = 0; j < data.lines[i].zastavky.length; j++) {
                if (j + 1 == data.lines[i].zastavky.length)
                    break;
    
                lines_string += `polyline:${data.lines[i].zastavky[j].longitude},${data.lines[i].zastavky[j].latitude},${data.lines[i].zastavky[j + 1].longitude},${data.lines[i].zastavky[j + 1].latitude};linecolor:%23${draw_color};linewidth:3%7C`;
    
                if (j == 0)
                    markers_string += `marker=lonlat:${data.lines[i].zastavky[0].longitude},${data.lines[i].zastavky[0].latitude};color:%23${draw_color};size:small;text:${data.lines[i].name.slice(2)}&`;
            }
        }

        if (props.locations) {
            let icon;
            switch(props.locations) {
                case "post": {
                    icon = 'local_post_office';
                    break;
                }
                case "hotels": {
                    icon = 'hotel';
                    break;
                }
            }

            for (let i = 0; i < locData.length; i++) {
                if (props.locations === 'post')
                locData[i].distToStart = Math.sqrt(Math.abs(locData[i].y - lat_start, 2) + Math.abs(locData[i].x - long_start, 2));
                else if (props.locations === 'hotels')
                locData[i].distToStart = Math.sqrt(Math.abs(locData[i].geoCode.latitude - lat_start, 2) + Math.abs(locData[i].geoCode.longitude - long_start, 2));
            }
            setLocationsData(locData.sort((a, b) => a.distToStart - b.distToStart));

            for (let i = 0; i < (locData.length < MAX_LOCATIONS ? locData.length : MAX_LOCATIONS); i++) {
                if (props.locations === 'post')
                    markers_string += `marker=lonlat:${locData[i].x},${locData[i].y};type:material;icontype:material;color:%23dfba12;size:small;icon:${icon}&`;
                else if (props.locations === 'hotels')
                    markers_string += `marker=lonlat:${locData[i].geoCode.longitude},${locData[i].geoCode.latitude};type:material;icontype:material;color:%23dfba12;size:small;icon:${icon}&`;
            }
        }
    
        markers_string += `marker=lonlat:${long_finish},${lat_finish};color:%23ffffff;size:small;text:F&`;
        setQuery(`https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=${WIDTH}&height=${HEIGHT}&format=png&center=lonlat:${center_long},${center_lat}&zoom=${zoom}&${markers_string}geometry=${lines_string.slice(0, -3)}&apiKey=${API_KEY}`);

        const body = {
            map: `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=${WIDTH}&height=${HEIGHT}&format=png&center=lonlat:${center_long},${center_lat}&zoom=${zoom}&${markers_string}geometry=${lines_string.slice(0, -3)}&apiKey=${API_KEY}`
        }

        fetch(`https://firstimeke.tk/scripts/converter.php`, {
            method: 'POST',
            body: JSON.stringify(body)
        }).
        then((response) => response.json())
        .then((data) => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        }); 
    }


    useEffect(() => {
        const routesFetch = async () => {
            const data = await (
            await fetch(
                `https://firstimeke.tk/scripts/geocoder.php?address=${props.address}&uk=${props.uk}&type=zastavka`
            )
            ).json();

            setRoutesData(data);

            const center_lat = (parseFloat(data.a.latitude) + parseFloat(data.b.latitude)) / 2;
            const center_long = (parseFloat(data.a.longitude) + parseFloat(data.b.longitude)) / 2;

            const distance = Math.sqrt(Math.pow(parseFloat(data.b.longitude) - parseFloat(data.a.longitude), 2) + Math.pow(parseFloat(data.b.latitude) - parseFloat(data.a.latitude), 2)) * 1000;
            let zoom;

            if (distance > 200)
                zoom = 10;
            else if (distance <= 200 && distance > 150)
                zoom = 10.5;
            else if (distance <= 150 && distance > 120)
                zoom = 11;
            else if (distance <= 120 && distance > 80)
                zoom = 11.5;
            else if (distance <= 80 && distance > 60)
                zoom = 12;
            else if (distance <= 60 && distance > 35)
                zoom = 12.5;
            else if (distance <= 35 && distance > 15)
                zoom = 13;
            else if (distance <= 15 && distance > 10)
                zoom = 13.5;
            else if (distance <= 10 && distance > 7)
                zoom = 14;
            else if (distance <= 7 && distance > 5)
                zoom = 14.5;
            else
                zoom = 15;

            if (props.locations) {
                const locFetch = async () => {
                    const dataLoc = await (
                    await fetch(
                        `https://firstimeke.tk/scripts/${props.locations}.php`
                    )
                    ).json();
                    setLocationsData(dataLoc);
                    createMapQuery(data, dataLoc, center_lat, center_long, zoom, parseFloat(data.a.latitude), parseFloat(data.a.longitude), parseFloat(data.b.latitude), parseFloat(data.b.longitude));
                };

                locFetch();
            }
            else {
                createMapQuery(data, [], center_lat, center_long, zoom, parseFloat(data.a.latitude), parseFloat(data.a.longitude), parseFloat(data.b.latitude), parseFloat(data.b.longitude));
            }
        };

        routesFetch();
    }, []);

    return (
        <div>
            <img id="map" width={WIDTH} height={HEIGHT} src={query} alt="Nerudova 3836/7, 040 01 Kosice, Slovakia" />
            <div>
                {routesData.lines?.length && routesData.lines.map((rt, index) => {
                    return (
                        <div
                            key={index}
                        >
                            <p>{rt.type == TYPES.BUS ? "Bus" : rt.type == TYPES.TRAM ? "Tram" : "Trolleybus"} {rt.name.slice(2)}</p>
                            <p>{rt.zastavky[0].name} &#8594; {rt.zastavky[rt.zastavky.length - 1].name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
