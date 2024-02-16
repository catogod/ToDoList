import { useState, useEffect } from 'react';

//change it
function WeatherApp() {
    const [location, setLocation] = useState(null);
    const [weather, setWeather] = useState(null);
  
    function handleLocationClick() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
      } else {
        console.log("Geolocation not supported");
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
        .catch(error => console.log(error));
    }
  
    function error() {
      //console.log("Unable to retrieve your location");
    }
  
    return (
      <div>
        {!location ? <button onClick={handleLocationClick}>Get Location</button> : null}
        {location && !weather ? <p>Loading weather data...</p> : null}
        {weather ? (
          <div>
            <p>Location: {weather.name}</p>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Weather: {weather.weather[0].description}</p>
          </div>
        ) : null}
      </div>
    );
  }
  
  export default WeatherApp;



//
// fetch('https://api.openweathermap.org/data/2.5/weather?lat='+position.latitude+'&lon='+position.longitude+'&appid=7f213ff1370ce5696c760658350c1571&units=metric')
// .then((res) => {
//   //check later for response type
//   return res.json();
// })
// .then((data) => {
//     console.log(data);
//     console.log(data['main']['temp']);
//     setWeatherData(data['main']['temp']);
// });

// {weatherData===null ? "sorry could not get your location, try to refresh the page and press yes, it it doesn't show again delete history/cookies of the last hour and try again" :"Current temp is "+weatherData }