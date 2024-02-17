import { useState, useEffect } from 'react';

//change it
function WeatherApp() {
    const [location, setLocation] = useState(null);
    const [weather, setWeather] = useState(null);
  
    function handleLocationClick() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
      } else {
        alert("Geolocation not supported");
      }
    }
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocation({ latitude, longitude });
      //console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  
      // Make API call to OpenWeatherMap +use ` ` for es6
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7f213ff1370ce5696c760658350c1571&units=metric`)
        .then(response => response.json())
        .then(data => {
          setWeather(data);
          console.log(data);
        })
        .catch(error => alert("something went wrong on client server"));
    }
  
    function error() {
      //console.log("Unable to retrieve your location");
    }
  
    return (
      <>
        {!location ? <button onClick={handleLocationClick}>Get Location</button> : null}
        {location && !weather ? <p>Loading weather data...</p> : null}
        {weather ? (
          <div>
            <p>Location: {weather.name}</p>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Weather: {weather.weather[0].description}</p>
          </div>
        ) : null}
      </>
    );
  }
  
  export default WeatherApp;