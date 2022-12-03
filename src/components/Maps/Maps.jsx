import React from 'react'
import Map from '../Map/Map'
import Container from '../UI/Container'
import './maps.css'
import flag from "../../img/flag.png"
import house from "../../img/home.svg"
import crist from "../../img/criss.svg"
import ua_flag from "../../img/ua_flag.svg"


export default function Maps() {
  return (
    <section className='maps'>
        <Container>
            <h2 className="maps__title">Station square - OC Galeria</h2>
            <Map></Map>
            <div className="timetable">
                <div className="timetable__block">
                    <b>Tram 3</b><br></br>
                    22:37 Station square   -  22:40 Liberator square 
                </div>
                <div className="timetable__block">
                    <b>Bus 71</b><br></br>
                    22:57 Liberator square   -  23:01 OC Galeria
                </div>
            </div>
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
                        <span>📱</span>
                        <p>+421 100 000 000</p>
                    </div>
                    <div className="legend__block__item">
                        <span>📱</span>
                        <p>+421 100 000 000</p>
                    </div>
                    <div className="legend__block__item">
                        <span>@</span>
                        <p>firsthelp@firstimeke.sk</p>
                    </div>
                </div>
                <div className="legend__block">
                    <img src={flag} alt="" />
                </div>
            </div>
            <div className="maps__buttons">
                <a href="" className="button">Download file</a>
                <a href="" className="button button-orange">Print</a>
            </div>
        </Container> 
    </section>
  )
}
