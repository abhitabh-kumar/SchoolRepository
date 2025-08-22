import {React,useState} from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { colors, useMediaQuery } from '@mui/material';

import CreateExamPage from '../components/createexamform/CreateExamForm';


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

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const isSmallScreen = useMediaQuery("(min-width:700px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

const activeTabStyle={
  boxShadow: 'inset 0px 0px 2px black',
  // backgroundColor: '#eeeeee',
  borderRadius: '5px 5px 0px 0px',
  color:'black'
}

  return (
    <div><CreateExamPage></CreateExamPage></div>
  );
}