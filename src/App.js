import React, { useState } from "react";
import './App.css';

const App = () => {
    const ApiKey = '0e7a643e1d1eca06a4957a7a5c97ebd1';
    const [weatherdata, setWeatherData] = useState({});
    const [city, setCity] = useState("");

    const getWeather = (event) => {
        if (event.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${ApiKey}`)
                .then(Response => Response.json())
                .then(data => {
                    setWeatherData(data)
                    setCity("")
                })
        }
    }

    return (
        <div className="container">
            <input
                className="input"
                placeholder="Enter City..."
                onChange={e => setCity(e.target.value)}
                value={city}
                onKeyPress={getWeather}
            />
            {Object.keys(weatherdata).length === 0 ? (
                <div>
                    <p> Welcome to the weather app! Enter a city to get the weather.</p>
                </div>
            ) : (
                <div className="weatherD">
                    <p className="city">{weatherdata.name}</p>
                    <p className="temperature">{Math.round(weatherdata.main.temp)}F</p>
                    <p className="weather">{weatherdata.weather[0].main}</p>
                </div>
            )}
            {Object.keys(weatherdata).length === "404" ? (
                <p> city not found </p>
            ):(
                <></>
            )}
        </div>
    );
};

export default App;
