import { makeStyles } from '@mui/styles';
import CloudIcon from '@mui/icons-material/Cloud';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const styles = makeStyles(() => ({
  weatherPill: {
    backgroundColor: 'rgb(253,226,205, 0.8)',
    borderRadius: '24px',
    height: '120px',
    width: '60px',
    minWidth: '60px',
    marginRight: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentPill: {
    backgroundColor: 'white',
  },
}));

export default function Pill({
  text,
  selected,
  temperature,
  condition,
}: {
  text: string;
  // day?: string;
  selected: boolean;
  temperature: number;
  condition: string;
}) {
  const classes = styles();
  // const apiHour = new Date(text).getHours();
  // const currentHour = new Date().getHours();

  return (
    <div
      className={`${classes.weatherPill} ${
        selected ? classes.currentPill : ''
      }`}
    >
      <p>{text}</p>
      {condition === 'cloudy' && <CloudIcon />}
      {condition === 'sunny' && <WbSunnyIcon />}
      {condition === 'rainy' && <ThunderstormIcon />}
      <p>{Math.round(temperature) + '°C'}</p>
    </div>
  );
}
