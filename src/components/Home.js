import '../App.css';
import CurrentWeather from './CurrentWeather';
import Forecast from './TodaysForecast';
import AirQuality from './AirQuality';
import UpcomingWeather from './UpcomingWeather';
import { useContext, useEffect, useState } from 'react';
import foggy from '../images/foggy.jpg'
import cloudy from '../images/cloudy.jpg'
import sunny from '../images/sunny.jpg'
import clear from '../images/clear.jpg'
import thunderstorm from '../images/thunderstorm.jpg'
import rain from '../images/rain.jpg'
import snow from '../images/snow.jpg'
import WeatherContext from '../context/WeatherContext';
import { fetchCurrentWeather, fetchForecastDetails, getLocationDetails } from '../api/WeatherAPI';
import Search from './SearchBox';

const Home = () => {

     const [bgImage, setBgImage] = useState('')
     const [locationPermission, setLocationPermission] = useState(true)
     const { weather, forecast, setWeather, setForecast, setLocationData } = useContext(WeatherContext)

     useEffect(() => {
          if (weather !== null) {
               switch (weather.weather[0].main) {
                    case 'Mist':
                    case 'Smoke':
                    case 'Haze':
                    case 'Dust':
                    case 'Fog':
                    case 'Sand':
                    case 'Dust':
                    case 'Ash':
                    case 'Squall':
                    case 'Tornado':
                         setBgImage(foggy);
                         break;
                    case 'Sunny':
                         setBgImage(sunny);
                         break;
                    case 'Clouds':
                         setBgImage(cloudy);
                         break;
                    case 'Rain':
                    case 'Drizzle':
                         setBgImage(rain);
                         break;
                    case 'Clear':
                         setBgImage(clear);
                         break;
                    case 'Thunderstorm':
                         setBgImage(thunderstorm);
                         break;
                    case 'Snow':
                         setBgImage(snow);
                         break;
                    default:
                         break;
               }

          }

     }, [weather])


     useEffect(() => {

          if (navigator.geolocation) {
               navigator.geolocation.getCurrentPosition(position => {
                    getLocationDetails(position.coords.latitude, position.coords.longitude).then(data => {
                         setLocationData(data);
                         fetchCurrentWeather(data[0].name).then(data => setWeather(data)).catch(error => console.log(error));
                         fetchForecastDetails(data[0].name).then(data => setForecast(data)).catch(error => console.log(error));
                    }).catch(error => console.log(error))
               }, error => {
                    alert('Location permission denied');
                    setLocationPermission(false);
               })
          }
     }, [])


     const backgroundStyle = {
          backgroundImage: `url(${bgImage})`,
     }

     return (
          <>
               <div className="container nunito-sans" style={backgroundStyle}>
                    <div className="bg-cover" >
                         {
                              weather !== null && forecast !== null ? <div className='box'>
                                   <div className="left">
                                        <CurrentWeather />
                                        <AirQuality />
                                        <Forecast />
                                   </div>
                                   <div className="right">
                                        <UpcomingWeather />
                                   </div>
                              </div> :
                                   <>
                                        <img src='images/WeatherIcons.gif' width={150} alt='icon' />
                                        {
                                             locationPermission ? '' :
                                                  <div className='permission-box'>
                                                       <Search />
                                                  </div>
                                        }
                                   </>
                         }

                    </div>
               </div>
          </>
     )
}

export default Home
