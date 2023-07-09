import React, { useState } from "react";
import axios from "axios"
import { Searchbar } from "./components/searchbar";
import { Top } from "./components/top";
import { Bottom } from "./components/bottom";

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=YOUR_KEY`

  const searchLocation = (e) => {
    if (e.key === 'Enter'){
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setData(data)
          console.log(data)  
        })
        setLocation('')
    }
  }
  return (
    <div className="app">
      <Searchbar location={location} setLocation={setLocation} searchLocation={searchLocation}/>
      <div className="container">
        <Top data={data}/>

        {data.name !=undefined && 
          <Bottom data={data}/>
        }
      </div>
    </div>
  );
}

export default App;
