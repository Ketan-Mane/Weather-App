import React, { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'
import { MdVisibility } from "react-icons/md";
import { LuWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { LiaTemperatureLowSolid } from "react-icons/lia";
import { PiWavesLight } from "react-icons/pi";


const AirQuality = () => {

     const { weather } = useContext(WeatherContext)

     return (
          <>
               {
                    weather !== null &&
                    <div className="air">
                         <div className="box">
                              <div className="card">
                                   <span><LiaTemperatureLowSolid fontSize={25} /></span>
                                   <span>{weather.main.feels_like}%</span>
                                   <span>Feels Like</span>
                              </div>
                              <div className="card">
                                   <span><WiHumidity fontSize={25} /></span>
                                   <span>{weather.main.humidity}%</span>
                                   <span>Humidity</span>
                              </div>
                              <div className="card">
                                   <span><PiWavesLight fontSize={25} /></span>
                                   <span>{weather.main.pressure} hPa</span>
                                   <span>Air Pressure</span>
                              </div>
                              <div className="card">
                                   <span><LuWind fontSize={25} /></span>
                                   <span>{weather.wind.speed} km/h</span>
                                   <span>Wind</span>
                              </div>
                              <div className="card">
                                   <span><MdVisibility fontSize={20} /></span>
                                   <span>{weather.visibility / 1000} km</span>
                                   <span>Visibility</span>
                              </div>
                         </div>
                    </div>
               }

          </>
     )
}

export default AirQuality
