import React from 'react';
import "./style.css";

const Temp = () => {
  return (
    <>
    {/* 85ce8262596ac389c10c0fd21d3b3460
    https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=85ce8262596ac389c10c0fd21d3b3460 */}
    <div className="wrap">
      <div className="search">
        <input type="search" id="search" autoFocus placeholder='Search ...' className='searchTerm'  />
        <button className="serchButton" type="button">Search</button>
      </div>
    </div>
    {/* Our temp card */}
    <article className="widget">
      <div className="weatherIcon">
        <i className={'wi wi-day-sunny'}></i>
      </div>
      <div className="weatherInfo">
        <div className="temperature">
          <span>35.5&deg;</span>
        </div>
        <div className="description">
          <div className="weatherCondition">Sunny</div>
          <div className="place">Mumbai, India</div>
        </div>
      </div>
      <div className="date">{new Date().toLocaleString()}</div>

      {/* Our 4 column selection */}
      <div className="extra-temp">
        <div className="extra-info-minmax">
          <div className="two-sided-section">
            <p><i className={"wi wi-sunset"}></i></p>
            <p className="extra-info-leftside">19:18<br/> Sunset</p>
          </div>
          <div className="two-sided-section">
            <p><i className={"wi wi-humidity"}></i></p>
            <p className="extra-info-leftside">19:18<br/> HUMIDITY</p>
          </div>
        </div>
        <div className="extra-info-minmax">
          <div className="two-sided-section">
            <p><i className={"wi wi-humidity"}></i></p>
            <p className="extra-info-leftside">19:18<br/> HUMIDITY</p>
          </div>
          <div className="two-sided-section">
            <p><i className={"wi wi-humidity"}></i></p>
            <p className="extra-info-leftside">19:18<br/> HUMIDITY</p>
          </div>
        </div>
      </div>
    </article>
    </>
  )
}

export default Temp