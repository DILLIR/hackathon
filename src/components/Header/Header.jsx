import React from 'react'
import Container from '../UI/Container'
import './header.css'
import icon from '../../img/icon.png'

export default function Header() {
  return (
    <header>
        <Container>
            <div className="header__content">
                <h1 className="header__title">Here you can build a <br></br>convenient route <br></br><span className='blue'>in Košice</span></h1>
                <p className="header__text">You can save the constructed route in PNG or print it for freeat our nearest help point. Our help points are located at the locations listed below.</p>
                <a href="#location" className='button'>Create a map</a>
            </div>
            <div className="header__icon">
              <img src={icon} alt="" />
            </div>
        </Container>
    </header>
  )
}
