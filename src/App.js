import React, {useState,useEffect} from "react";
import { Navigation } from "./components/Navigation/Navigation.jsx";
import './App.css';
import Location from './components/Location/Location'
import Header from "./components/Header/Header.jsx";
import Map from './components/Map/Map'
import Maps from "./components/Maps/Maps.jsx";
import House from "./components/House/House.jsx";
import Team from "./components/Team/Team.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./components/About/About.jsx";


function App() {
  
  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <About></About>
      <Location></Location>
      <House></House>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
}

export default App;
