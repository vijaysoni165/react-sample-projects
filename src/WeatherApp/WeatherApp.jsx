import React, { useEffect } from 'react'
import './Weather.css' ;
import SearchIcon  from '../assets/search.png'
import ClearIcon  from '../assets/clear.png'
import CloudIcon  from '../assets/cloud.png'
import DrizzleIcon  from '../assets/drizzle.png'
import HumidityIcon  from '../assets/humidity.png'
import RainIcon  from '../assets/rain.png'
import SnowIcon  from '../assets/snow.png'
import WindIcon  from '../assets/wind.png'



function WeatherApp() {
  const search = async (state)=>{
    try{
      const url = `https://api.openweathermap.org/geo/1.0/direct?q={state}&appid=${import.meta.env.VITE_APP_ID}`
      const response = await fetch(url);
      const date = await response.json();
      console.log(date);

    }
    catch (error){

    }
  }
 useEffect(()=>{
  search("New South Wales") 
 },[])

  return (
    <div className="weather-container">
      <div className="weather-card">
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <button><img src={SearchIcon} alt="Weather" /></button>
        </div>

        <div className="weather-icon">
          <img src={ClearIcon} alt="Weather" />
          
        </div>

        <h1>21°C</h1>
        <h2>New York</h2>

        <div className="details">
          <div className="humidity">
            <img src={HumidityIcon} alt="Humidity" style={{maxWidth:'22px'}} />
            <p>67%<br /><span>Humidity</span></p>
          </div>
          <div className="wind">
            <img src={WindIcon} alt="Wind" style={{maxWidth:'22px'}} />
            <p>2.06 Km/h<br /><span>Wind Speed</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
