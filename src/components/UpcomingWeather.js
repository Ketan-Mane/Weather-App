import React, { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'

const UpcomingWeather = () => {

     const { forecast, weather } = useContext(WeatherContext)

     return (
          <>
               <div>
                    <h3>Tomorrow's Temperature</h3>
                    <div className="box">
                         {
                              weather !== null && <div className="card" key={weather.dt}>
                                   <span>{new Date(weather.dt * 1000).toLocaleString('en-US', { weekday: 'short' })}</span>
                                   <span><img src={`images/weather-icons/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} title={weather.weather[0].description} width={40} /></span>
                                   <span>{Math.floor(weather.main.temp_min)}/{Math.floor(weather.main.temp_max)}</span>
                              </div>
                         }
                         {
                              forecast !== null && forecast.list.map((data) => {
                                   const date = new Date(data.dt_txt)
                                   if (data.dt_txt.includes('12:00:00')) {
                                        return (
                                             <div className="card" key={data.dt}>
                                                  <span>{date.toLocaleString('en-US', { weekday: 'short' })}</span>
                                                  <span><img src={`images/weather-icons/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} title={weather.weather[0].description} width={40} /></span>
                                                  <span>{Math.floor(data.main.temp_min)}/{Math.floor(data.main.temp_max)}</span>
                                             </div>
                                        )
                                   }
                                   return "";
                              })
                         }
                    </div>
               </div>

          </>
     )
}

export default UpcomingWeather
