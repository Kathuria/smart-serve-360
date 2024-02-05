import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import {Loader} from '../../components/Loader';

export const Trends = () => {
  const [visible, visbility] = React.useState(true);
  setTimeout(() => visbility(false), 2000)
  return (
    <>
    <Loader visible={visible}/>
    <div className='trends'>
    <h1>Order Trends</h1>
    <div style={{"float": "right"}}>
        <IoArrowBackCircleOutline onClick={() => window.open("./landing", "_self")} size={40}/>
        <span style={{padding: "0 12px"}}/>
        <RiLogoutBoxLine onClick={() => window.open("./", "_self")} size={40}/>
    </div>
    <Stack direction="row" sx={{ width: '100%' }}>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart
          data={[1, 4, 2, 5, 7, 2, 4, 6]}
          xAxis={{
            scaleType: 'time',
            data: [
              new Date(2022, 5, 1),
              new Date(2022, 5, 2),
              new Date(2022, 5, 5),
              new Date(2022, 5, 6),
              new Date(2022, 5, 7),
              new Date(2022, 5, 8),
              new Date(2022, 5, 11),
              new Date(2022, 5, 12),
            ],
            valueFormatter: (value) => value.toISOString().slice(0, 10),
          }}
          height={100}
          showTooltip
          showHighlight
        />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart
          plotType="bar"
          data={[1, 4, 2, 5, 7, 2, 4, 6]}
          height={100}
          showTooltip
          showHighlight
          xAxis={{
            scaleType: 'band',
            data: [
              new Date(2016, 0, 1),
              new Date(2017, 0, 1),
              new Date(2018, 0, 1),
              new Date(2019, 0, 1),
              new Date(2020, 0, 1),
              new Date(2021, 0, 1),
              new Date(2022, 0, 1),
              new Date(2023, 0, 1),
            ],
            valueFormatter: (value) => value.getFullYear(),
          }}
        />
      </Box>
    </Stack>
    </div>
    </>
  );
}