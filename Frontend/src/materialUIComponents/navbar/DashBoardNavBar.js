import React, { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Drawer as MuiDrawer,
  AppBar as MuiAppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  SpaceDashboard as SpaceDashboardIcon,
  Quiz as QuizIcon,
  AppsOutage as AppsOutageIcon,
  LibraryAddCheck as LibraryAddCheckIcon,
  Announcement as AnnouncementIcon,
  Assessment as AssessmentIcon,
  AccountBox as AccountBoxIcon,
  QuestionAnswer,
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import './NavBar.css'
// import { data1, data2 } from '../../dummyData/studentMenuData';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  borderBottom:'1px solid white',
  borderRight:'1px solid #1f2f4a',
  padding: theme.spacing(0, 1),
  backgroundColor: "#1f2f4a", // Light background color
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#1f2f4a", // Light AppBar background color
  borderBottom:'1px solid white',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      '& .MuiDrawer-paper': { width: drawerWidth, backgroundColor: "#1f2f4a"}, // Light drawer background color
    }),
    ...(!open && {
      '& .MuiDrawer-paper': {
        overflowX:'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        backgroundColor: "#1f2f4a",
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
    }),
  }),
);


export default function DashBoardNavBar({ children, menu1 ,menu2,notificationCount}) {

  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              width: '40px',
              marginRight: 5,
              color: 'white',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ color: "#3eb065" }}>
            Shushila Public School
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} style={{ color: 'white', width: '40px' }}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menu1.map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              onClick={() => navigate(`${item.url}`)}
              sx={{
                color: location.pathname === `${item.url}` ? "#3eb065" : "#b7b7b7",
                display: 'block',
                backgroundColor: location.pathname === `${item.url}` ? '#152033' : "#1f2f4a"
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
                  {( item.url === "/teacher/dashHome" || item.url === "/student/dashHome") && <SpaceDashboardIcon sx={{color: location.pathname === `${item.url}` ? "#3eb065" : "#b7b7b7"}} />}
                  {( item.url === "/teacher/timeTable" || item.url === "/student/timeTable") && <AppsOutageIcon sx={{color: location.pathname === `${item.url}` ? "#3eb065" : "#b7b7b7"}} />}
                  {( item.url === "/teacher/markAttendance" || item.url === "/student/attendance") && <AssessmentIcon sx={{color: location.pathname === `${item.url}` ? "#3eb065" : "#b7b7b7"}} />}
                  {( item.url === "/teacher/createTest" || item.url === "/student/tests") && <QuizIcon sx={{color: location.pathname === `${item.url}` ? "#3eb065" : "#b7b7b7"}} />}
                  {item.url === "/teacher/createQuestions" && <QuestionAnswer sx={{color: location.pathname === `${item.url}` ? "#3eb065" : "#b7b7b7"}} />}
                </ListItemIcon>
                <ListItemText primary={item.text} variant="body2" sx={{ opacity: open ? 1 : 0}} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {menu2.map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              onClick={() => navigate(`${item.url}`)}
              sx={{
                color: location.pathname === `${item.url}` ? "#3eb065" : "#b7b7b7",
                display: 'block',
                backgroundColor: location.pathname === `${item.url}` ? '#152033' : "#1f2f4a"
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
                
                      {( item.url === "/teacher/announcement" || item.url === "/student/announcement") &&
                        <Badge badgeContent={notificationCount} classes={{ badge: "customBadge" }}> 
                              <AnnouncementIcon sx={{color: location.pathname === `${item.url}` ? "#3eb065" : "#b7b7b7"}} />
                        </Badge>}
                  
                  {( item.url === "/teacher/result" || item.url === "/student/reportCard" ) && <LibraryAddCheckIcon sx={{color: location.pathname === `${item.url}` ? "#3eb065" : "#b7b7b7"}} />}
                  {( item.url === "/teacher/myProfile" || item.url === "/student/myProfile")&& <AccountBoxIcon sx={{color: location.pathname === `${item.url}` ? "#3eb065" : "#b7b7b7"}} />}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{
        flexGrow: 1, color: '#000', minHeight: "100vh", backgroundColor: "#ffffff",
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: open ? `${drawerWidth}px` : `calc(${theme.spacing(7)} + 1px)`,
        width: open ? `calc(100% - ${drawerWidth}px)` : `calc(100% - (${theme.spacing(7)} + 1px))`,
        paddingTop:"70px"
      }}>
        {
          children
        }
      </Box>
    </Box>
  );
}
