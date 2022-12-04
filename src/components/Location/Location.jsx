import React, {useState, useEffect} from 'react'
import Input from "../UI/Input.jsx";
import Container from "../UI/Container.jsx";
import './location.css'
import Select from '../UI/Select.jsx';

export default function Location() {

  const [value, setValue] = useState("");

  const [type, setType] = useState("zastavka");

  const [location, setLocation] = useState();

  const getLocation = async (text, types)=>{
    let pattern = /[\p{Cyrillic}]/;
    let regex = pattern.test(text)
    fetch("https://firstimeke.tk/scripts/geocoder.php?type=" + types + "&uk= "+ !regex + "&address=" + text).then((response) => {return response.json()}).then((res) => {setLocation(res); window.location_t = location; console.log(location);});
  }

  const buttonHandler = () => {
    getLocation(value, type);
  }

  return (
    <section className='location' id='location'>
      <Container>
          <h2 className='location__title'>Building a route is very easy!<br></br> Specify the <span className='orange'>end</span> point of the destination.</h2>
          <div className="location__subtitle">Most popular queries</div>
              <div className="location__bubles">
              <div className="buble">Cathedral of St. Elizabeth</div>
              <div className="buble">Technical University</div>
              <div className="buble">Aupark</div>
              <div className="buble">District Office</div>
              <div className="buble">Main post</div>
          </div> 
          <div className="together forms">
            <Input className="input__block" handler={setValue} value={value} placeholder={"University Hospital"}></Input>
            <Select hendler={setType} values={type}>
              <option value="Categoris" key="option_0" disabled>Category</option>
              <option value="Dwelling" key="option_1">Dwelling</option>
              <option value="Medical facilities" key="option_2">Medical facilities</option>
              <option value="zastavka" key="option_3">Public transport stops</option>
              <option value="High schools" key="option_4">High schools</option>
              <option value="KSK road network" key="option_5">KSK road network</option>
              <option value="Post office" key="option_6">Post office</option>
              <option value="Cultural organizations" key="option_7">Cultural organizations </option>
              <option value="Galleries, libraries and museums" key="option_8">Galleries, libraries and museums</option>
            </Select>
            
          </div>
          <p className="location__text">We consider Station square as the starting point</p>
          <a className="submit" onClick={()=>{getLocation(value, type)}}>Get a map</a>
      </Container>
    </section>
  )
}
