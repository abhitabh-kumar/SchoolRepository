import React, { useEffect, useState } from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import {
  SpaceDashboard as SpaceDashboardIcon,
  Quiz as QuizIcon,
  AppsOutage as AppsOutageIcon,
  LibraryAddCheck as LibraryAddCheckIcon,
  Announcement as AnnouncementIcon,
  Assessment as AssessmentIcon,
  AccountBox as AccountBoxIcon,
  QuestionAnswer,
} from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';


const drawerBleeding = 20;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor: grey[100],
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.background.default,
  }),
}));

const StyledBox = styled('div')(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  ...theme.applyStyles('dark', {
    backgroundColor: 'grey',
  }),
  height: '50px'
}));

const Puller = styled('div')(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: grey[300],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
  ...theme.applyStyles('dark', {
    backgroundColor: grey[900],
  }),
}));


const icons = {
  color: '#757575',
  '&:hover': {
    '& > path, use': {
      fill: 'black',
    },
  },
};

function SwipeableEdgeDrawer({ children, menu1, menu2 }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const itemNavigate = (item) => {
    setOpen(false);
    navigate(`${item.url}`)
  }

  return (
    <Root>
        <CssBaseline />
        <Global
          styles={{
            '.MuiDrawer-root > .MuiPaper-root': {
              height: `calc(60% - ${drawerBleeding}px)`,
              overflow: 'visible',
            },
          }}
        />
        <Toolbar sx={{ position: 'fixed', width: '100%', bgcolor: '#e0e0e0', zIndex: '1000' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            edge="start"
            sx={{
              width: '40px',
              marginRight: 5,
              color: '#000'
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ color: "#000" }}>
            Shushila Public School
          </Typography>
        </Toolbar>

        <SwipeableDrawer
          anchor="bottom"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox
            sx={{
              position: 'absolute',
              top: -drawerBleeding,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              right: 0,
              left: 0,
            }}
          >
            <Puller />
          </StyledBox>
          <List sx={{ overflowY: 'auto', paddingBottom: '0px' }}>
            {menu1.map((item) => (
              <ListItem
                key={item.text}
                disablePadding
                onClick={() => itemNavigate(item)}
                sx={{
                  color: "#757575",
                  display: 'block',
                  '&:hover': { color: "black" },
                  backgroundColor: location.pathname === `${item.url}` ? '#d8d7d7' : "#f5f5f5"
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {(item.url === "/teacher/dashHome" || item.url === "/student/dashHome") && <SpaceDashboardIcon sx={icons} />}
                    {(item.url === "/teacher/timeTable" || item.url === "/student/timeTable") && <AppsOutageIcon sx={icons} />}
                    {(item.url === "/teacher/markAttendance" || item.url === "/student/attendance") && <AssessmentIcon sx={icons} />}
                    {(item.url === "/teacher/createTest" || item.url === "/student/tests") && <QuizIcon sx={icons} />}
                    {item.url === "/teacher/createQuestions" && <QuestionAnswer sx={icons} />}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
                <Divider />
              </ListItem>
            ))}
            {menu2.map((item) => (
              <ListItem
                key={item.text}
                disablePadding
                onClick={() => itemNavigate(item)}
                sx={{
                  color: "#757575",
                  display: 'block',
                  '&:hover': { color: "black" },
                  backgroundColor: location.pathname === `${item.url}` ? '#d8d7d7' : "#f5f5f5"
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {(item.url === "/teacher/announcement" || item.url === "/student/announcement") && <AnnouncementIcon sx={icons} />}
                    {(item.url === "/teacher/result" || item.url === "/student/reportCard") && <LibraryAddCheckIcon sx={icons} />}
                    {(item.url === "/teacher/myProfile" || item.url === "/student/myProfile") && <AccountBoxIcon sx={icons} />}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
                <Divider />
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
        <React.Fragment sx={{paddingTop:'70px'}}>{children}</React.Fragment>
      </Root>
  );
}


export default SwipeableEdgeDrawer;
