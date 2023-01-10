import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Slider from '../slider/slider';
import { ICity } from '../types';

const styles = makeStyles(() => ({
  weatherTabs: {
    width: '100%',
    marginTop: '20px',
  },
  tabs: {
    padding: '20px',
    '& .Mui-selected': {
      fontWeight: 'bold',
      color: 'black',
    },
    '& .MuiTabs-indicator': {
      backgroundColor: 'black',
    },
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ selectedCity }: { selectedCity: ICity }) {
  const [value, setValue] = React.useState(0);
  const classes = styles();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.weatherTabs}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          className={classes.tabs}
        >
          <Tab label='Today' {...a11yProps(0)} />
          <Tab label='Tomorrow' {...a11yProps(1)} />
          <Tab
            label='Next 7 Days
'
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Slider selectedCity={selectedCity} index={value} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Slider selectedCity={selectedCity} index={value} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Slider selectedCity={selectedCity} index={value} />
      </TabPanel>
    </Box>
  );
}
