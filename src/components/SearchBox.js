import '../App.css'
import React, { useState } from 'react'
import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';
import { fetchCurrentWeather, fetchForecastDetails, getLocationDetails } from '../api/WeatherAPI';


const Search = () => {

     const [location, setLocation] = useState('satara');
     const { setWeather, setForecast, setLocationData } = useContext(WeatherContext)

     const handleChange = (e) => {
          setLocation(e.target.value)
     }

     const handleEnterKey = (e) => {
          if (e.keyCode === 13) {
               if (location.length > 0) {
                    setWeather(null);
                    fetchCurrentWeather(location).then(data => {
                         setWeather(data);
                         getLocationDetails(data.coord.lat, data.coord.lon).then(response => setLocationData(response)).catch(error => console.log(error))
                    }).catch(error => {
                         alert('City not found')
                         setWeather(null)
                         window.location.reload();
                    });
                    fetchForecastDetails(location).then(data => setForecast(data)).catch(error => console.log(error));
               }
               else {
                    alert("Enter city name");
               }
          }
     }

     return (
          <>
               <div className="searchbox">
                    <input type="text" placeholder="Search for city" onChange={handleChange} onKeyDown={handleEnterKey} />
               </div>
          </>
     )
}

export default Search
