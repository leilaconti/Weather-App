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
import Pill from '../pill/pill';
import { isTypeNode } from 'graphql';

interface IWeather {
  text: string;
  temperature: number;
  condition: string;
}

const styles = makeStyles(() => ({
  weatherApp: {
    padding: '0px 10px',
  },
  weatherAttributeCards: {
    marginTop: '30px',
  },
  pills: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'scroll',
    marginTop: '20px',
  },
}));
export default function Slider({
  selectedCity,
  index,
}: {
  selectedCity: ICity;
  index: number;
}) {
  const [weather, setWeather] = useState<IWeather[]>();
  const classes = styles();

  useEffect(() => {
    if (index === 0 || index === 1) {
      fetch(`api/hourlyWeather`)
        .then((response) => response.json())
        .then((response) => {
          const formattedHourlyData = response.hourlyForecast.map((item) => ({
            text: new Date(item.time).getHours() + ':00',
            condition: item.condition,
            temperature: item.temperature,
          }));

          setWeather(formattedHourlyData);
        });
    } else if (index === 2) {
      fetch(`api/dailyWeather`)
        .then((response) => response.json())
        .then((response) => {
          const formattedDailyData = response.dailyForecast.map((item) => ({
            text: item.day,
            condition: item.condition,
            temperature: item.temperature,
          }));
          setWeather(formattedDailyData);
        });
    }
  }, [selectedCity, index]);

  return (
    <div className={classes.pills}>
      {weather?.map((weatherSnippet, index) => (
        <>
          <Pill
            text={weatherSnippet.text}
            temperature={weatherSnippet.temperature}
            condition={weatherSnippet.condition}
            selected={index === 0}
          />
        </>
      ))}
    </div>
  );
}
