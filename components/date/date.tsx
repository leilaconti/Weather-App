import { makeStyles } from '@mui/styles';

const styles = makeStyles(() => ({
  date: {
    marginBottom: '30px',
    marginLeft: '10px',
    marginTop: '0px',
  },
}));

export default function CurrentDate() {
  const classes = styles();

  const date = new Date();

  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);

  return <p className={classes.date}>{formattedDate}</p>;
}
