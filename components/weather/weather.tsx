/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { ICity, IWeatherResponse } from '../types';
import Title from '../title/title';
import CurrentDate from '../date/date';
import TemperatureCard from '../temperatureCard/temperatureCard';
import WeatherAttribute from '../weatherAttribute/weatherAttribute';
import { makeStyles } from '@mui/styles';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AirIcon from '@mui/icons-material/Air';
import WaterIcon from '@mui/icons-material/Water';
import BasicTabs from '../tab/tab';

const styles = makeStyles(() => ({
  weatherApp: {
    padding: '0px 10px',
  },
  weatherAttributeCards: {
    marginTop: '30px',
  },
}));
export default function Weather({ selectedCity }: { selectedCity: ICity }) {
  const [weather, setWeather] = useState<IWeatherResponse>();
  const classes = styles();

  useEffect(() => {
    if (selectedCity) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${selectedCity?.lat}&lon=${selectedCity?.lng}&appid=b3ce51004dbeb4457ad89712aae2da7f&units=metric`
      )
        .then((response) => response.json())
        .then((weatherData) => setWeather(weatherData));
    }
  }, [selectedCity]);

  return (
    <>
      {weather && (
        <div className={classes.weatherApp}>
          <Title subTitle={selectedCity?.name} />
          <CurrentDate />
          <TemperatureCard
            temperature={weather.main.temp}
            weatherDescription={weather.weather[0].description}
          />
          <div className={classes.weatherAttributeCards}>
            <WeatherAttribute
              icon={<WaterIcon />}
              title={'Humidity'}
              value={weather.main.humidity + ' %'}
            />
            <WeatherAttribute
              icon={<WbSunnyIcon />}
              title={'Feels like'}
              value={Math.round(weather.main.feels_like) + ' °C'}
            />
            <WeatherAttribute
              icon={<AirIcon />}
              title={'Pressure'}
              value={weather.main.pressure + ' kPa'}
            />
            <BasicTabs />
          </div>
        </div>
      )}
    </>
  );
}
