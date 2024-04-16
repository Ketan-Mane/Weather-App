import './App.css';
import Home from './components/Home';
import WeatherContexProvider from './context/WeatherContextProvider';


function App() {
  return (

    <WeatherContexProvider>
      <Home />
    </WeatherContexProvider>
  );
}

export default App;
