import React, { useContext } from 'react'
import Search from './SearchBox'
import WeatherContext from '../context/WeatherContext'


const CurrentWeather = () => {

     const { weather, locationData } = useContext(WeatherContext)

     return (
          <>
               {
                    weather !== null && locationData !== null ?
                         <div className="weather">
                              <div className="weather-info">
                                   <Search />
                                   <div>
                                        <h3>{weather.name}</h3>
                                        <p style={{ fontSize: '14px' }}>{locationData[0].state},{locationData[0].country}</p>
                                   </div>
                                   <div>
                                        <h1>{weather.main.temp}<sup>o</sup></h1>
                                        <p style={{ fontSize: '14px' }}>{(weather.weather[0].main).charAt(0).toUpperCase() + (weather.weather[0].main).slice(1)}</p>
                                   </div>
                              </div>
                              <div className="weather-icon">
                                   <img src={`images/weather-icons/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} title={weather.weather[0].description} width={130} />
                              </div>
                         </div>
                         :
                         <Search />
               }

          </>
     )
}

export default CurrentWeather
