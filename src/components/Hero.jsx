import React, { useState } from "react";
import day from "../assets/main-day.jpg";
import night from "../assets/main-night.jpg";
import axios from "axios";
import DarkModeToggle from "react-dark-mode-toggle";

const Hero = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(() => true);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=aae360e0f78839e133fa3f90687fd767`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("hi");
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="w-full h-screen relative overflow-auto">
      <img
        className="w-full h-full object-cover"
        src={isDarkMode ? night : day}
      />

      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>

      <div className="absolute top-0 w-full h-full flex flex-col justify-top items-center text-center text-white p-4">
        <h1 className="py-4 font-bold text-[48px]">Manas' Weather App</h1>
        <form>
          <div>
            <input
              className="h-[30px] rounded-lg bg-[#fafafa] text-[#121212] px-3"
              type="text"
              placeholder="Search Cities"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onKeyPress={searchLocation}
            />
          </div>
        </form>

        {data.name != undefined && (
          <div className="py-1 rounded-lg">
            <div className={`max-w-sm max-h-30px rounded-lg overflow-hidden shadow-lg py-0`}>
              {data.weather ? (
                <img
                  className="w-full rounded-t-lg"
                  src={`/images/${data.weather[0].main}.gif`}
                />
              ) : (
                <img
                  className="w-full rounded-t-lg"
                  src={`/images/Default.gif`}
                />
              )}
              <div className="px-3 py-2">
                <div className="font-bold text-xl mb-2">{data.name}</div>
                <div className="font-bold text-xl mb-1">
                  {data.weather ? <p>{data.weather[0].main}</p> : null}
                </div>
                <p>
                  Temperature: {data.main?.temp.toFixed()}°F
                  <br></br>
                  Feels Like: {data.main?.feels_like.toFixed()}°F
                  <br></br>
                  Wind Speed: {data.wind?.speed.toFixed()} MPH
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="py-2">
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={80}
          />

          <div className="object-bottom">
            Created by Manas Katta
            <br></br>
            manas.katta@gmail.com
            <br></br>
            <a href="https://www.linkedin.com/in/manaskatta/">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
