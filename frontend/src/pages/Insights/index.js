import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { BarChart } from '@mui/x-charts/BarChart';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import {Loader} from '../../components/Loader';

export const Insights = () => {
  const [seriesNb, setSeriesNb] = React.useState(2);
  const [itemNb, setItemNb] = React.useState(5);
  const [skipAnimation, setSkipAnimation] = React.useState(false);
  const [visible, visbility] = React.useState(true);
  setTimeout(() => visbility(false), 2500)

  const handleItemNbChange = (event, newValue) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setItemNb(newValue);
  };
  const handleSeriesNbChange = (event, newValue) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setSeriesNb(newValue);
  };

  return (
    <div className='insights'>
      <Loader visible={visible}/>
        <h1>Dynamic Staffing Solutions</h1>
        <div style={{"float": "right"}}>
            <IoArrowBackCircleOutline onClick={() => window.open("./landing", "_self")} size={40}/>
            <span style={{padding: "0 12px"}}/>
            <RiLogoutBoxLine onClick={() => window.open("./", "_self")} size={40}/>
        </div>
    <Box sx={{ width: '100%' }}>
      <BarChart
        height={300}
        series={staff.slice(0, seriesNb).map((s) => ({ ...s, data: s.data.slice(0, itemNb) }))}
        skipAnimation={skipAnimation}
      />
      <Typography id="input-item-number" gutterBottom>
        No. of Staff
      </Typography>
      <Slider
        value={itemNb}
        onChange={handleItemNbChange}
        valueLabelDisplay="auto"
        min={1}
        max={20}
        aria-labelledby="input-item-number"
      />
      <Typography id="input-series-number" gutterBottom>
        Days
      </Typography>
      <Slider
        value={seriesNb}
        onChange={handleSeriesNbChange}
        valueLabelDisplay="auto"
        min={1}
        max={10}
        aria-labelledby="input-series-number"
      />
    </Box>
    </div>
  );
}

const highlightScope = {
  highlighted: 'staff',
  faded: 'global',
};

const staff = [
  {
    label: 'Chipotle',
    data: [
      29, 14, 47, 9, 36, 22, 4, 41, 18, 33, 5, 26, 12, 45, 8, 27, 19, 38, 10, 31
    ],
  },
  {
    label: 'Choco',
    data: [
      38, 7, 24, 12, 49, 16, 30, 3, 41, 18, 28, 9, 46, 14, 35, 23, 2, 44, 11, 27
    ],
  },
  {
    label: 'Toast',
    data: [
      43, 7, 28, 15, 39, 22, 9, 36, 19, 45, 11, 32, 5, 47, 14, 25, 8, 41, 18, 30
    ],
  },
  {
    label: 'Thanx',
    data: [
      49, 14, 27, 8, 36, 21, 3, 45, 18, 30, 6, 42, 12, 47, 9, 23, 7, 38, 16, 29
    ],
  },
  {
    label: 'Punchh',
    data: [
      24, 41, 12, 33, 8, 19, 45, 5, 29, 36, 16, 7, 48, 22, 14, 2, 37, 9, 28, 43
    ],
  },
  {
    label: 'Square for Restaurants',
    data: [
      48, 14, 27, 8, 36, 21, 3, 45, 18, 30, 6, 42, 12, 47, 9, 23, 7, 38, 16, 29
    ],
  },
  {
    label: 'Wisely',
    data: [
      9, 42, 15, 28, 36, 5, 17, 48, 22, 31, 7, 14, 39, 26, 11, 43, 19, 33, 8, 45
    ],
  },
  {
    label: 'Zippin',
    data: [
      23, 8, 45, 12, 36, 19, 29, 7, 42, 14, 31, 5, 18, 48, 26, 9, 38, 11, 20, 47
    ],
  },
  {
    label: 'Eats365',
    data: [
      29, 14, 36, 8, 45, 22, 5, 41, 18, 33, 9, 26, 12, 47, 20, 7, 38, 16, 30, 6
    ],
  },
  {
    label: 'Koomi',
    data: [
      14, 36, 8, 45, 22, 5, 41, 18, 33, 9, 26, 12, 47, 20, 7, 38, 16, 30, 6, 43
    ],
  },
].map((s) => ({ ...s, highlightScope }));
