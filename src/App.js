import React, {useState,useEffect} from "react";
import { Navigation } from "./components/Navigation/Navigation.jsx";
import './App.css';
import Location from './components/Location/Location'
import Header from "./components/Header/Header.jsx";
import Map from './components/Map/Map'
import Maps from "./components/Maps/Maps.jsx";
import House from "./components/House/House.jsx";


function App() {

  

  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <Location></Location>
      <Maps></Maps>
      <House></House>
    </div>
  );
}

export default App;
