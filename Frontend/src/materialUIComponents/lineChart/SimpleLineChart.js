import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function SimpleLineChart({lineData,xLabels,height,width}) {
  return (
    <LineChart
      width={width}
      height={height}
      series={lineData}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}