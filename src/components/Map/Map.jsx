import React, { useState, useEffect } from 'react'

export default function Map() {
    const WIDTH = 600, HEIGHT = 600;

    const lat_start = 48.714074, long_start = 21.270970;
    const lat_finish = 48.709774, long_finish = 21.268570;
    
    const center_lat = (lat_start + lat_finish) / 2;
    const center_long = (long_start + long_finish) / 2;

    const distance = Math.sqrt(Math.pow(long_finish - long_start, 2) + Math.pow(lat_finish - lat_start, 2)) * 1000;
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

    const TYPES = {
        BUS: 'A',
        TRAM: 'E',
        TROLLEYBUS: 'T'
    }

    const transports = [
        { 
            type: TYPES.BUS, 
            num: "52",
            stations: [ 
                { name: "Stodolova", lat: 48.713574, long: 21.270070 }, 
                { name: "Lunik VIII", lat: 48.713474, long: 21.270470 }, 
                { name: "Nemocnica", lat: 48.712874, long: 21.269770 }, 
            ] 
        },
        { 
            type: TYPES.TRAM,
            num: "R6",
            stations: [
                { name: "Zimna", lat: 48.712274, long: 21.269570 }, 
                { name: "Namestie", lat: 48.712074, long: 21.269070 }, 
                { name: "Obchodna", lat: 48.711574, long: 21.269470 }, 
            ] 
        },
        { 
            type: TYPES.TROLLEYBUS, 
            num: "13",
            stations: [
                { name: "Kriva", lat: 48.711074, long: 21.270070 }, 
                { name: "Lambda", lat: 48.710674, long: 21.269370 }, 
                { name: "Lunik IX", lat: 48.710274, long: 21.269070 }, 
            ] 
        },
    ]
    
    const [transfers, setTransfers] = useState([]);

    let lines_string = '';
    let markers_string = `marker=lonlat:${long_start},${lat_start};color:%23ffffff;size:small;text:Me&`;

    for (let i = 0; i < transports.length; i++) {
        let draw_color;
        switch (transports[i].type) {
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

        for (let j = 0; j < transports[i].stations.length; j++) {
            if (j + 1 == transports[i].stations.length)
                break;

            lines_string += `polyline:${transports[i].stations[j].long},${transports[i].stations[j].lat},${transports[i].stations[j + 1].long},${transports[i].stations[j + 1].lat};linecolor:%23${draw_color};linewidth:3%7C`;

            if (j == 0)
                markers_string += `marker=lonlat:${transports[i].stations[0].long},${transports[i].stations[0].lat};color:%23${draw_color};size:small;text:${transports[i].num}&`;
        }
    }


    markers_string += `marker=lonlat:${long_finish},${lat_finish};color:%23ffffff;size:small;text:F&`;


    const API_KEY = "66b7569a93af455d9f8f0d749633affc";
    const query = `https://maps.geoapify.com/v1/staticmap?style=klokantech-basic&width=${WIDTH}&height=${HEIGHT}&center=lonlat:${center_long},${center_lat}&zoom=${zoom}&${markers_string}geometry=${lines_string.slice(0, -3)}&apiKey=${API_KEY}`;
    return (
        <div>
            <img width={WIDTH} height={HEIGHT} src={query} alt="Nerudova 3836/7, 040 01 Kosice, Slovakia" />
            <div>
                {transfers.map((tr, index) => {
                    return (
                        <div
                            key={index}
                        >
                            <p>{tr.type == TYPES.BUS ? "Bus" : tr.type == TYPES.TRAM ? "Tram" : "Trolleybus"} {tr.num}</p>
                            <p>{tr.first_station} &#8594; {tr.last_station}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}