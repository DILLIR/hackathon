import React, {useState, useEffect} from 'react'
import Container from '../UI/Container'
import Input from '../UI/Input'
import logo from '../../img/logo.svg'
import './navigation.css'

export const Navigation = () => {

  const [location, setLocation] = useState(" ");

  const [response, setResponse] = useState(" ");

  useEffect(() => {
    getCordinates();
  }, [location]);

  const getCordinates = async (text) => {
    let resp = await fetch("");
    setResponse(resp);
  }

  return (
    <nav className={"navigation"}>
      <Container className={"flex"}>
      <img src={logo} alt="" />
      <div className="menu">
        <div className="menu__item"><a href="" className="menu__link">About help</a></div>
        <div className="menu__item"><a href="" className="menu__link">Get a map</a></div>
        <div className="menu__item"><a href="" className="menu__link">Contact</a></div>
      </div>
      <div className="laguage">
        <div className="laguage__item active">EN</div>
        <div className="laguage__item">SK</div>
        <div className="laguage__item">UA</div>
      </div>
      </Container>
    </nav>
  )
}