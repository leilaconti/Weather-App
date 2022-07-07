import type { NextPage } from 'next'
import { makeStyles } from "@mui/styles"; 
import Header from '../components/header/header';


const styles = makeStyles(() => ({
  pageBackground: {
    background: "linear-gradient(342deg, rgba(22,21,122,1) 7%, rgba(61,61,235,1) 42%, rgba(0,212,255,1) 100%)",
    height: '100%',
    width: '100%',
    left: 0,
    top: 0,
    overflow: 'hidden',
    position: 'fixed',
  },
}));

const Home: NextPage = () => {

  const classes = styles();


  return (
    <div className={classes.pageBackground}>
     <Header /> 
    </div>
  )
}

export default Home
