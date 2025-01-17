import React from 'react'
import WeatherBox from './WeatherBox';
import Sun from '../assets/sun.png';
import Cloudy from '../assets/cloudy.png';
import Rain from '../assets/heavy-rain.png';
import Snow from '../assets/snowflake.png';

const Main = (props) => {

  let atmosphere = props.current_observation ? props.current_observation.atmosphere : ""; 
  let wind = props.current_observation ? props.current_observation.wind : ""; 

  return (
    <div className={`h-full w-2/3 mr-5 rounded-xl px-10 py-5 flex flex-col justify-between ${props.isDarkMode ? 'dark-bg-contrast dark-shadow' : 'light-bg-contrast light-shadow'}`}>
      <div>
        <h2 className={`text-3xl font-medium mb-5 ${ props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>Current Weather</h2>
        {/* Main upper section */}
        <div className="flex justify-between items-center">
          {/* Temperature */}
          {/* then text ex: mostly cloudy */}
          <div className='flex flex-col items-center'>
            <h2 className={`text-8xl font-medium outfit ${ props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>{props.current_observation ? props.current_observation.condition.temperature : "00" }<span>&deg;c</span></h2>
            <div className='flex items-center w-full'>
              <div className={`w-full h-1 bg-black rounded-full ${props.isDarkMode ? 'dark-bg-primary' : 'light-bg-primary'}`}></div>
            <h4 className={`text-4xl outfit mx-2 text-nowrap ${ props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>{props.current_observation ? props.current_observation.condition.text : "------" }</h4>
              <div className={`w-full h-1 bg-black rounded-full ${props.isDarkMode ? 'dark-bg-primary' : 'light-bg-primary'}`}></div>
            </div>
          </div>
          {/* For Image */}
          <div className='w-[170px] mr-32'>
            {/* data props ke through get krna uski basis pr yeh set hoga  */}
            {1 && <img className="hover:scale-110 transition" src={Sun} alt="Sun" />}
            {/* haze bhi hota hai */}
            {/* 1 && <img className="hover:scale-110 transition" src={Rain} alt="Rain" /> */}
            {/* 1 && <img className="hover:scale-110 transition" src={Cloudy} alt="Cloudy" /> */}
            {/* 1 && <img className="hover:scale-110 transition" src={Snow} alt="Snow" /> */}
          </div>
        </div>
      </div>
      {/* Main lower section */}
      <div className="flex justify-between items-center mt-8">
        {/* // humidity pressure visibility */}
        <WeatherBox isDarkMode={props.isDarkMode} type={"Humidity"} value={atmosphere.humidity} />
        <WeatherBox isDarkMode={props.isDarkMode} type={"Visibility"} value={atmosphere.visibility} />
        <WeatherBox isDarkMode={props.isDarkMode} type={"Pressure"} value={atmosphere.pressure} />
        {/* // wind: chill speed direction */}
        <WeatherBox isDarkMode={props.isDarkMode} type={"Wind Chills"} value={wind.chill} />
        <WeatherBox isDarkMode={props.isDarkMode} type={"Wind Direction"} value={wind.direction} />
        <WeatherBox isDarkMode={props.isDarkMode} type={"Wind Speed"} value={wind.speed} />
      </div>
    </div>
  )
}

export default Main

