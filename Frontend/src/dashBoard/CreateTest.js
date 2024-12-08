import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const tabStyle = {
  maxWidth: '200px',
  color: 'black',
}
const activeTabStyle={
  boxShadow: 'inset 0px 0px 2px black',
  backgroundColor: '#eeeeee',
  borderRadius: '5px 5px 0px 0px'
}

export default function CreateTest() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography>Create Exam</Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab label="Item One" sx={tabStyle}/>
        <Tab label="Item Two" sx={tabStyle} style={activeTabStyle}/>
        <Tab label="Item Three" sx={tabStyle} />
      </Tabs>
    </Box>
  );
}