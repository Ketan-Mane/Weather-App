
const API_BASE = 'https://api.openweathermap.org/data/2.5'

// api key from .env.local
const API_KEY = process.env.REACT_APP_API_KEY


async function fetchCurrentWeather(location) {
     try {
          const url = `${API_BASE}/weather?q=${location}&units=metric&appid=${API_KEY}`
          const response = await fetch(url);
          const result = await response.json();
          return result;
     } catch (error) {
          console.error(error);
     }
}

async function fetchForecastDetails(location) {
     try {
          const url = `${API_BASE}/forecast?q=${location}&units=metric&appid=${API_KEY}`
          const response = await fetch(url);
          const result = await response.json();
          return result;
     } catch (error) {
          console.log(error);
     }
}

async function getLocationDetails(lat, lon) {
     try {
          const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`;
          const response = await fetch(url);
          const result = await response.json();
          return result;
     } catch (error) {
          console.log(error);
     }
}

module.exports = {
     fetchCurrentWeather,
     fetchForecastDetails,
     getLocationDetails
}