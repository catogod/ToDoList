import { useState, useEffect } from 'react';

//exporting the weather api
export default function WeatherApp() {

    const [location, setLocation] = useState(null);//the location of the human
    const [weather, setWeather] = useState(null);//the weather stats from th api
  
    //using in built navigator 
    function handleLocationClick() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
      } else {
        alert("Geolocation not supported");
      }
    }
    //function that happens on success to the location + setting the location
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocation({ latitude, longitude });
  
      //API call to OpenWeatherMap 
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7f213ff1370ce5696c760658350c1571&units=metric`)
        .then(response => response.json())//getting response
        .then(data => {//setting the data in useState
          setWeather(data);
        })
        .catch(error => alert("something went wrong on client server"));//problems with connection to the api alert
    }
    //problems with the location  access
    function error() {
      alert("Unable to retrieve your location");
    }
  //return the weather button of check navigation/weather data 
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
  