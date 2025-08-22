import React from 'react'
import WelcomeContent from '../WelcomeContent'
import { Box, Card, Container, Grid2, Typography } from '@mui/material'
import CalendarComponent from '../../materialUIComponents/calendar/CalendarComponent';
import { CalendarMonth, Assessment, BarChart, Description } from '@mui/icons-material';
import DashHomeInfoCard from '../../materialUIComponents/card/DashHomeInfoCard'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SchoolIcon from '@mui/icons-material/School';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EventCard from '../../materialUIComponents/card/EventCard';
import eventData from '../../dummyData/eventCard';
import Pie from '../../materialUIComponents/pieChart/Pie';
import SimpleLineChart from '../../materialUIComponents/lineChart/SimpleLineChart';

//dummy data we have to remove it
const schoolDetails = [
  {
    title: "250",
    desc: "Total Student",
    backgroundColor: '#eaf6ff',
    icon: <SchoolIcon sx={{ backgroundColor: '#7ab5df', color: '#fff', borderRadius: '3px', fontSize: '3.5rem', padding: '8px' }} />
  },
  {
    title: "15",
    desc: "Total Teachers",
    backgroundColor: '#fff0f5',
    icon: <PeopleAltIcon sx={{ backgroundColor: '#ea83a6', color: '#fff', borderRadius: '3px', fontSize: '3.5rem', padding: '8px' }} />
  },
  {
    title: "10",
    desc: "Total Staff",
    backgroundColor: '#e5ffe7',
    icon: <AccountBoxIcon sx={{ backgroundColor: '#8fdc95', color: '#fff', borderRadius: '3px', fontSize: '3.5rem', padding: '8px' }} />
  },
  {
    title: "82",
    desc: "Total Subjects",
    backgroundColor: '#f2eaff',
    icon: <LibraryBooksIcon sx={{ backgroundColor: '#b593e8', color: '#fff', borderRadius: '3px', fontSize: '3.5rem', padding: '8px' }} />
  },
]

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];
const lineData = [
  { data: pData, label: 'pv' },
  { data: uData, label: 'uv' },
]

const TeacherDashHome = () => {
  return (
    <Container>
      <WelcomeContent />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px',flexWrap:'wrap'}} mb={3}>
        <Box sx={{ width: 'calc(100% - 390px)', minWidth:'380px'}}>
          <Card sx={{ px: 3, py: 2, borderRadius: '5px', height: 'fit-content',width:'-webkit-fill-available'}}>
            <Typography variant="h6" sx={{ mb: 5, textAlign: 'center' }}>
              Quick Links
            </Typography>
            <Grid2 container spacing={2} sx={{ textAlign: 'center' }}>
              <Grid2 item size={{ xs: 3 }} sx={{ cursor: 'pointer' }}>
                <CalendarMonth sx={{ backgroundColor: '#f44336', color: '#fff', borderRadius: '3px', fontSize: '2rem' }} />
                <Typography sx={{ fontSize: '0.8rem', textAlign: 'center' }}>Time Table</Typography>
              </Grid2>
              <Grid2 item size={{ xs: 3 }} sx={{ cursor: 'pointer' }}>
                <BarChart sx={{ backgroundColor: '#03a9f4', color: '#fff', borderRadius: '3px', fontSize: '2rem' }} />
                <Typography sx={{ fontSize: '0.8rem', textAlign: 'center' }}>Attendance</Typography>
              </Grid2>
              <Grid2 item size={{ xs: 3 }} sx={{ cursor: 'pointer' }}>
                <Assessment sx={{ backgroundColor: '#ff9800', color: '#fff', borderRadius: '3px', fontSize: '2rem' }} />
                <Typography sx={{ fontSize: '0.8rem', textAlign: 'center' }}>Exam Result</Typography>
              </Grid2>
              <Grid2 item size={{ xs: 3 }} sx={{ cursor: 'pointer' }}>
                <Description sx={{ backgroundColor: '#4caf50', color: '#fff', borderRadius: '3px', fontSize: '2rem' }} />
                <Typography sx={{ fontSize: '0.8rem', textAlign: 'center' }}>Reports</Typography>
              </Grid2>
            </Grid2>
          </Card>
          <Box sx={{width:'-webkit-fill-available',boxShadow:'0px 0px 3px #a6a6a6',borderRadius:'4px',marginTop:'11px',display:'flex',justifyContent:'center',alignItems:'center',paddingLeft:'10px'}}>
            <SimpleLineChart lineData={lineData} xLabels={xLabels} height={250} width={500} />
          </Box>
        </Box>
        <CalendarComponent sx={{minWidth:"370px"}}/>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'space-between' }} mb={3}>
        {
          schoolDetails && schoolDetails.map((cardDeatils, index) => {
            return <DashHomeInfoCard key={`${index}736card`} title={cardDeatils.title} description={cardDeatils.desc} activeColor={cardDeatils.backgroundColor}>
              {cardDeatils.icon}
            </DashHomeInfoCard>
          })
        }
      </Box>
      <Container sx={{ display: 'flex', gap: '15px', justifyContent: 'space-between', padding: '0px !important',flexWrap:'wrap'}}>
        <Box sx={{minWidth:'390px', height: '370px', boxShadow: '0px 0px 5px #8f8f8f', width: 'initial', borderRadius: '5px',width : 'calc(100% - 370px)' }}>
          <Pie />
        </Box>
        <Box sx={{ maxHeight: '370px', overflowY: 'scroll', display: 'flex', flexDirection: 'column', gap: '20px', boxShadow: '0px 0px 3px #727272', borderRadius: '5px', paddingBottom: '20px', minWidth: '350px' }} mb={3}>
          <Typography sx={{ backgroundColor: '#1f2f4a', position: 'sticky', top: '0px', color: 'white', padding: "10px", zIndex: "10" }}>Upcoming Events :</Typography>
          {
            eventData && eventData.map((event, index) => {
              return <EventCard />
            })
          }
        </Box>
      </Container>
    </Container>
  )
}

export default TeacherDashHome