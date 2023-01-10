import { autocompleteClasses } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ReactElement } from 'react';

const styles = makeStyles(() => ({
  weatherAttributeCard: {
    display: 'flex',
    marginTop: '10px',
    borderRadius: '12px',
    height: '50px',
    backgroundColor: 'rgb(253,226,205, 0.8)',
    maxWidth: '100%',
    padding: '10px',
    justifyContent: 'space-between',
  },
  text: {
    margin: 0,
  },
  weatherTitle: {
    margin: 0,
    marginRight: 'auto',
    marginLeft: '15px',
  },
  weatherIcon: {
    borderRadius: '8px',
    width: '30px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function WeatherAttribute({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: ReactElement;
}) {
  const classes = styles();

  return (
    <div className={classes.weatherAttributeCard}>
      <div className={classes.weatherIcon}>{icon}</div>
      <p className={classes.weatherTitle}>{title}</p>
      <p className={classes.text}>{value}</p>
    </div>
  );
}
