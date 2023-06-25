import React, { useEffect, useState } from 'react';
import "./style.css";
import './weatherCard';
import WeatherCard from './weatherCard';

const Temp = () => {
  const [searchvalue,setSearchValue] = useState("mumbai");
  const [tempInfo,setTempInfo] = useState({});
  const getWeatherInfo = async () =>{
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=85ce8262596ac389c10c0fd21d3b3460`;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      const {humidity,temp,pressure} = data.main;
      const {sunrise,country} = data.sys;
      const {speed} = data.wind;
      const {main:weatherMood} = data.weather[0];
      const {name:cityName} = data;

      const myWeatherInfo = {
        humidity,temp,pressure,sunrise,country,speed,weatherMood,cityName
      }
      setTempInfo(myWeatherInfo);
    }catch(error){
      console.log("error");
    }
  }
  useEffect(() => {
    getWeatherInfo();
  }, []);
  return (
    <>
    {/* 85ce8262596ac389c10c0fd21d3b3460
    https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=85ce8262596ac389c10c0fd21d3b3460 */}
    <div className="wrap">
      <div className="search">
        <input type="search" id="search" autoFocus placeholder='Search ...' className='searchTerm' value={searchvalue} onChange={(e)=>setSearchValue(e.target.value)} />
        <button className="serchButton" type="button" onClick={getWeatherInfo}>Search</button>
      </div>
    </div>
    {/* Our temp card */}
    <WeatherCard tempInfo = {tempInfo}/>
    </>
  )
}

export default Temp