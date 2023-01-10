import { makeStyles } from '@mui/styles';

const styles = makeStyles(() => ({
  title: {
    marginLeft: '10px',
    marginBottom: '0px',
  },
}));

export default function Title({ subTitle }: { subTitle: string }) {
  const classes = styles();

  return <h1 className={classes.title}>{subTitle}</h1>;
}
