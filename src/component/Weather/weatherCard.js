import React, { useEffect, useState } from 'react'

const WeatherCard = ({tempInfo}) => {
    const [weatherState, setWeatherState] = useState("");
    const {humidity,temp,pressure,sunrise,country,speed,weatherMood,cityName} = tempInfo;
    let time1 = sunrise;
    let date = new Date(time1 * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
    // console.log(tempInfo);
    useEffect(() => {
      if(weatherMood){
        switch (weatherMood ) {
          case "Clouds":
            setWeatherState("wi-day-cloudy")
            break;
          case "Haze":
            setWeatherState("wi-fog")
            break;
          case "Clear":
            setWeatherState("wi-day-sunny ")
            break;
          case "Smoke":
            setWeatherState("wi-smog")
            break;
        
          default:
            setWeatherState("wi-day-sunny ");
            break;
        }
      }
    }, [weatherMood])
  return (
    <>
    <article className="widget">
      <div className="weatherIcon">
        <i className={`wi ${weatherState}`}></i>
      </div>
      <div className="weatherInfo">
        <div className="temperature">
          <span>{temp}&deg;</span>
        </div>
        <div className="description">
          <div className="weatherCondition">{weatherMood}</div>
          <div className="place">{cityName}, {country}</div>
        </div>
      </div>
      <div className="date">{new Date().toLocaleString()}</div>

      {/* Our 4 column selection */}
      <div className="extra-temp">
        <div className="weather-extra-info">
          <div className="two-sided-section">
            <p><i className={"wi wi-sunset"}></i></p>
            <p className="extra-info-leftside">{timeStr}<br/> Sunrise</p>
          </div>
          <div className="two-sided-section">
            <p><i className={"wi wi-humidity"}></i></p>
            <p className="extra-info-leftside">{humidity}<br/> HUMIDITY</p>
          </div>
        </div>
        <div className="weather-extra-info">
          <div className="two-sided-section">
            <p><i className={"wi wi-humidity"}></i></p>
            <p className="extra-info-leftside">{pressure}MM<br/> Pressure</p>
          </div>
          <div className="two-sided-section">
            <p><i className={"wi wi-humidity"}></i></p>
            <p className="extra-info-leftside">{speed}<br/> Wind</p>
          </div>
        </div>
      </div>
    </article>
    </>
  )
}

export default WeatherCard