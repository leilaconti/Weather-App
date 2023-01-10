import type { NextPage } from 'next';
import { makeStyles } from '@mui/styles';
import Header from '../components/header/header';
import Weather from '../components/weather/weather';
import { useState } from 'react';
import { ICity } from '../components/types';
import styles from './index.module.css';

// const styles = makeStyles(() => ({
//   pageBackground: {
//     height: '100%',
//     width: '100%',
//     left: 0,
//     top: 0,
//     overflow: 'hidden',
//     position: 'fixed',
//     backgroundColor: 'red',
//     // background:
//     //   'linear-gradient(153deg,rgba(255, 255, 255, 1) 0%,rgba(235, 153, 61, 1) 68%,rgba(255, 143, 0, 1) 100%)',
//   },
// }));

const Home: NextPage = () => {
  // const classes = styles();

  const defaultLocation: ICity = {
    country: 'London',
    name: 'London',
    lat: '51.509865',
    lng: '-0.118092',
  };

  const [selectedCity, setSelectedCity] = useState<ICity>(defaultLocation);

  return (
    <div className={styles.pageBackground}>
      <Header setSelectedCity={setSelectedCity} />
      <Weather selectedCity={selectedCity} />
    </div>
  );
};

export default Home;
