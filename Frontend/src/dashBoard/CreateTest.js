import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { colors, useMediaQuery } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const getTabStyles = (isActive) => ({
  color: isActive ? "white" : "black",
  fontWeight: isActive ? "bold" : "normal",
  backgroundColor: isActive ? "#707777" : "lightgray",
  "&:hover": {
    backgroundColor: "#a6a6a6",
    color: "#000000",
  },
});

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const isSmallScreen = useMediaQuery("(min-width:700px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography sx={{ paddingTop: isSmallScreen ? '20px' : '90px', paddingLeft:"20px", paddingBottom: '15px'}}> Create Exam </Typography>
      <Box sx={{ width: "calc(100% - 40px)", border: "1px solid black", margin: "0px 20px", borderRadius:'5px 5px 0px 0px'}}>
        <AppBar position="static" sx={{ width: "100% " }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="black"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Item One" {...a11yProps(0)} 
              sx={getTabStyles(value === 0)} style={{borderRadius: "5px 0px 0px 0px"}}/>
            <Tab label="Item Two" {...a11yProps(1)}
              sx={getTabStyles(value === 1)} style={{ borderLeft: '1px solid black', borderRight: '1px solid black',}}/>
            <Tab label="Item Three" {...a11yProps(2)}
              sx={getTabStyles(value === 2)} style={{borderRadius: "0px 5px 0px 0px"}}
            />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </Box>
    </>
  );
}