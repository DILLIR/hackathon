import React from 'react'
import Container from '../UI/Container'
import argon from '../../img/Argon.png'
import logo from '../../img/logo.svg'
import './footer.css'


export default function Footer() {
  return (
    <footer className='footer'>
        <Container>
            <div className="footer__content">
                <img src={argon} alt="" />
                <img src={logo} alt="" />
                <p className='footer__text'>Created by Argon 2022©</p>
            </div>
        </Container>
    </footer>
  )
}
