import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { colors, useMediaQuery } from '@mui/material';
import TestConfiguration from './TestConfiguration';
import AddQuestions from './AddQuestions';
import PreviewExam from './PreviewExam';

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
  backgroundColor: isActive ? "#46a38b" : "#9ddaca",
  "&:hover": {
    backgroundColor: isActive ? "#46a38b" : "#9ddaca",
    color: isActive ? "white" : "black",
  },
});

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const isSmallScreen = useMediaQuery("(min-width:700px)");
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  const handleSwap = (curr,swapBy)=>{
      // not optimized
      const swapingIndex = curr + swapBy;
      if(swapingIndex>=0 && swapingIndex < selectedQuestions.length){
        const newQuestions = [...selectedQuestions];
        [newQuestions[curr], newQuestions[swapingIndex]] = [newQuestions[swapingIndex], newQuestions[curr]];
        setSelectedQuestions(newQuestions);
      }
  }

  const handleValue = (event, newValue) => {
    setValue(newValue);
  };


  const handleAddQuestion = (question) => {
    if (!selectedQuestions.includes(question)) {
      setSelectedQuestions((prev) => [...prev, question]);
    }
  };

  const handleRemoveQuestion = (questionId) => {
    setSelectedQuestions((prev) =>
      prev.filter((ques) => ques.questionId !== questionId)
    );
  };

  return (
    <>
      <Typography sx={{padding:'18px 0px 18px 24px', fontSize:'1.2rem', fontWeight:'600'}}> Create Exam</Typography>
      <Box sx={{ width: "calc(100% - 40px)", boxShadow:'0px 0px 1px #000000e8', margin: "0px 20px 20px 20px", borderRadius:'5px 5px 0px 0px'}}>
        <AppBar position="static" sx={{ width: "100% " }}>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="black"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Exam details" {...a11yProps(0)} 
              sx={getTabStyles(value === 0)} style={{borderRadius: "5px 0px 0px 0px"}}/>
            <Tab label="Add questions" {...a11yProps(1)}
              sx={getTabStyles(value === 1)} style={{ borderLeft: '1px solid green', borderRight: '1px solid green',}}/>
            <Tab label="Preview" {...a11yProps(2)}
              sx={getTabStyles(value === 2)} style={{borderRadius: "0px 5px 0px 0px"}}
            />
          </Tabs>
        </AppBar> 
        <TabPanel value={value} index={0} dir={theme.direction}>
          <TestConfiguration handleValue={handleValue}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <AddQuestions handleValue={handleValue} selectedQuestions={selectedQuestions} handleAddQuestion={handleAddQuestion} handleRemoveQuestion={handleRemoveQuestion}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <PreviewExam selectedQuestions={selectedQuestions} handleSwap={handleSwap} handleValue={handleValue} />
        </TabPanel>
      </Box>
    </>
  );
}