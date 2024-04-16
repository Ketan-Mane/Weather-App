import { useState } from "react"
import WeatherContext from "./WeatherContext"


const WeatherContexProvider = ({ children }) => {

     const [weather, setWeather] = useState(null)
     const [forecast, setForecast] = useState(null)
     const [locationData, setLocationData] = useState(null)

     return (
          <WeatherContext.Provider value={{ weather, setWeather, forecast, setForecast, locationData, setLocationData }}>
               {children}
          </WeatherContext.Provider>
     )
}

export default WeatherContexProvider