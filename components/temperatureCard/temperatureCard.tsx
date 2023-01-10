/* eslint-disable @next/next/no-img-element */
import { makeStyles } from '@mui/styles';
import sun from '../../images/sun.png';
import rain from '../../images/rain.png';
import CloudIcon from '@mui/icons-material/Cloud';

const styles = makeStyles(() => ({
  tempCard: {
    display: 'flex',
    maxWidth: '100%',
    height: '200px',
    padding: '20px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tempImg: {
    maxHeight: '160px',
    maxWidth: '160px',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  temperatureDetails: {
    display: 'flex',
    alignItems: 'center',
  },
  mainTemp: {
    fontSize: '60px',
    margin: 0,
  },
  tempUnit: {
    paddingBottom: '40px',
    margin: 0,
  },
  weatherInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  weatherDesc: {
    margin: 0,
  },
}));

export default function TemperatureCard({
  temperature,
  weatherDescription,
}: {
  temperature: number;
  weatherDescription: string;
}) {
  const classes = styles();

  return (
    <div className={classes.tempCard}>
      <div className={classes.tempImg}>
        {temperature > 25 ? (
          <img className={classes.image} src={sun.src} alt='sunny' />
        ) : (
          <img className={classes.image} src={rain.src} alt='raining' />
          // <CloudIcon />
        )}
      </div>

      <div className={classes.weatherInfo}>
        <div className={classes.temperatureDetails}>
          <h1 className={classes.mainTemp}>{Math.round(temperature)}</h1>
          <p className={classes.tempUnit}>°C</p>
        </div>
        <p className={classes.weatherDesc}>{weatherDescription}</p>
      </div>
    </div>
  );
}
