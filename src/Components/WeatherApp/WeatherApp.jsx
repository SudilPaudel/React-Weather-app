import React, { useState } from "react";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import Logo from "../Assets/weather.png";
import ILogo from "../Assets/instagram-logo.png";
import "./WeatherApp.css";
const WeatherApp = () => {
  const emailAddress = "sudilcs@gmail.com";
  const instagramUsername = "paudelsudil";
  let api_key = "b3320afdafba2b281103211f18e76aec";
  const [wicon, setWicon] = useState(cloud_icon);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return alert("Please Enter a Correct Location");
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);

    let data = await response.json();
    console.log(data)
    if (data.cod === '404'){
      return alert("Please Enter a Correct Location");
    }
    const humidity = document.getElementsByClassName("humidity-percentage");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = Math.floor(data.main.humidity) + " %";
    wind[0].innerHTML = Math.floor(data.wind.speed) + " Km/hr";
    temperature[0].innerHTML = Math.floor(data.main.temp) + "°C";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(clear_icon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWicon(cloud_icon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWicon(rain_icon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWicon(rain_icon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWicon(snow_icon);
    } else {
      setWicon(clear_icon);
    }
  };
  return (
    <div className="contain">
      {/* <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-app">
            <p>Weather App</p>
          </div>
          <div className="navbar-links">
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="s" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="cloud" />
      </div>
      <div className="weather-temp">13°C</div>
      <div className="weather-location">Kathmandu</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percentage">50</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18KM/hr</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
      <section id="services-section" className="services-section">
        <div className="services-content">
          <h2>Our Service</h2>
          <p>
            With our weather app, you can access real-time temperature, weather
            conditions, humidity, and wind speed for any desired city. Stay
            informed about the current weather conditions wherever you are!So
            travel with weather on your pocket and go wherever with the weather
            of your destination pre-informed.
          </p>
        </div>
      </section>
      <section id="report-problem-section" className="report-problem-section">
        <div className="report-problem-content">
          <h2>Report a Problem</h2>
          <form className="report-form">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Eg: Sudil Paudel"
            />

            <label htmlFor="problem">Problem</label>
            <input
              type="text"
              id="problem"
              name="problem"
              required
              placeholder="Enter the title of the problem you faced"
            />

            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              required
              placeholder="Briefly describe the problem you faced"
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
      <section className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Welcome to our cutting-edge Weather Tracker app, your go-to
            destination for real-time weather updates! We understand the
            importance of staying informed about the elements, and that's why
            our app provides a comprehensive overview of the weather at any
            location you choose. Whether you're planning a weekend getaway or
            just want to know what to expect in your own neighborhood, our app
            delivers accurate and up-to-the-minute information on temperature,
            humidity, and wind speed. You can take the weather of your
            destination in your palms and head towards your destination hassle
            free and make your time productive and enjoyable With a
            user-friendly interface, you can effortlessly input your desired
            location and receive a detailed breakdown of the current weather
            conditions. Stay ahead of the forecast, make informed decisions, and
            never be caught off guard by the weather again. Download our Weather
            Tracker app now and experience the power of precision in the palm of
            your hand.
          </p>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={Logo} alt="Your App Logo" />
            <span>Weather App</span>
          </div>
          <div className="footer-info">
            <p>
              Contact: <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            </p>
            <p>
              Follow us on social media:{" "}
              <a
                href={`https://www.instagram.com/${instagramUsername}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ILogo} alt="Instagram Logo" />
              </a>
            </p>
          </div>
          <div className="footer-copyright">
            <p>&copy; 2024 Weather App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WeatherApp;
