import React, { useContext } from 'react'
import WeatherContext from '../context/WeatherContext';

const Forecast = () => {

     const { forecast } = useContext(WeatherContext)

     return (
          <>
               <div className="forecast">
                    <div className="box">
                         {
                              forecast !== null && forecast.list.map((day) => {
                                   const currentDate = new Date();
                                   const date = new Date(day.dt_txt);
                                   const time = (date.getHours() % 12 || 12) + ":" + date.getMinutes().toString().padStart(2, '0') + " " + (date.getHours() >= 12 ? 'PM' : 'AM')
                                   return (
                                        date.getTime() > currentDate.getTime() && <div className="card" key={day.dt}>
                                             <p>{time}</p>
                                             <p><img src={`images/weather-icons/${day.weather[0].icon}.png`} alt={day.weather[0].description} title={day.weather[0].description} width={30} /></p>
                                             <p>{day.main.temp}<sup>o</sup></p>
                                        </div>
                                   );
                              })
                         }

                    </div>
               </div>
          </>
     )
}

export default Forecast


// <div className="card">
//                               <p>0:00 AM</p>
//                               <p><img src="images/clouds.png" width="30" alt="1" /></p>
//                               <h3>34<sup>o</sup></h3>
//                          </div>
//                          <div className="card">
//                               <p>6:00 AM</p>
//                               <p><img src="images/clouds.png" width="30" alt="2" /></p>
//                               <h3>34 <sup>o</sup></h3>
//                          </div>
//                          <div className="card">
//                               <p>6:00 AM</p>
//                               <p><img src="images/clouds.png" width="30" alt="3" /></p>
//                               <h3>34 <sup>o</sup></h3>
//                          </div>
//                          <div className="card">
//                               <p>6:00 AM</p>
//                               <p><img src="images/clouds.png" width="30" alt="4" /></p>
//                               <h3>34 <sup>o</sup></h3>
//                          </div>
//                          <div className="card">
//                               <p>6:00 AM</p>
//                               <p><img src="images/clouds.png" width="30" alt="5" /></p>
//                               <h3>34 <sup>o</sup></h3>
//                          </div>
//                          <div className="card">
//                               <p>6:00 AM</p>
//                               <p><img src="images/clouds.png" width="30" alt="6" /></p>
//                               <h3>34 <sup>o</sup></h3>
//                          </div>
//                          <div className="card">
//                               <p>6:00 AM</p>
//                               <p><img src="images/clouds.png" width="30" alt="7" /></p>
//                               <h3>34 <sup>o</sup></h3>
//                          </div>
//                          <div className="card">
//                               <p>6:00 AM</p>
//                               <p><img src="images/clouds.png" width="30" alt="8" /></p>
//                               <h3>34 <sup>o</sup></h3>
//                          </div>