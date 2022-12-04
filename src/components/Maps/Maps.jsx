import React from 'react'
import Map from '../Map/Map'
import Container from '../UI/Container'
import './maps.css'
import flag from "../../img/flag.png"
import house from "../../img/home.svg"
import crist from "../../img/criss.svg"
import ua_flag from "../../img/ua_flag.svg"
import map from '../../img/map.png'
import phone from '../../img/phone.svg'
import zavinac from '../../img/@.svg'
import scan from '../../img/print.svg'


export default function Maps(props) {
  return (
    <section className='maps' id='map'>
        <Container>
            {console.log(props)}
            <h2 className="maps__title">Your Map</h2>
            {/* <img src={map} alt="" className='place__map'/> */}
            <Map locations={props.locations} address={props.address} uk={props.uk}></Map>
            
            <div className="legend">
                <div className="legend__block">
                    <div className="legend__block__title">Legend</div>
                    <div className="legend__block__item">
                    <img src={house} alt="" />
                        <p>Cheap housing</p>
                    </div>
                    <div className="legend__block__item">
                    <img src={crist} alt="" />
                        <p>Red Cross points</p>
                    </div>
                    <div className="legend__block__item">
                        <img src={ua_flag} alt="" />
                        <p>Help points for Ukrainians</p>
                    </div>
                </div>
                <div className="legend__block">
                    <div className="legend__block__title">Help contact</div>
                    <div className="legend__block__item">
                        <img src={phone} alt="" className='phone'/>
                        <p>+421 100 000 000</p>
                    </div>
                    <div className="legend__block__item">
                        <img src={phone} alt="" className='phone'/>
                        <p>+421 100 000 000</p>
                    </div>
                    <div className="legend__block__item">
                    <img src={zavinac} alt="" className='phone phone-zavinac'/>
                        <p> firsthelp@firstimeke.sk</p>
                    </div>
                </div>
                <div className="legend__block">
                    <img src={flag} alt="" />
                </div>
            </div>
            <div className="maps__buttons">
                <a href="" className="button">Download file</a>
                <a href="" onClick={(e)=>{e.preventDefault(); document.querySelector(".print").classList.add("active"); e.target.style.display = 'none';}} className="button button-orange">Print</a>
                <img src={scan} alt="" className='print' />
            </div>
        </Container> 
    </section>
  )
}
