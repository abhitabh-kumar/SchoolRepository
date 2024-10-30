import * as React from 'react';
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
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { data1, data2 } from '../../dummyData/metaData';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  backgroundColor: "#f5f5f5", // Light background color
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#e0e0e0", // Light AppBar background color
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
      '& .MuiDrawer-paper': { width: drawerWidth, backgroundColor: "#f5f5f5" }, // Light drawer background color
    }),
    ...(!open && {
      '& .MuiDrawer-paper': {
        width: `calc(${theme.spacing(7)} + 1px)`,
        backgroundColor: "#f5f5f5",
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
    }),
  }),
);

const icons = {
  color: '#757575', 
  '&:hover': {
    '& > path, use': {
      fill: 'black',
    },
  },
};

export default function DashBoardNavBar({ children }) {

  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

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
              color: '#000',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ color: "#000" }}>
            Shushila Public School
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} style={{ color: '#000', width: '40px' }}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {data1.map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              onClick={() => navigate(`/student/${item.url}`)}
              sx={{
                color: "#757575",
                display: 'block',
                '&:hover': { color: "black" },
                backgroundColor: location.pathname === `/student/${item.url}` ? '#d8d7d7' : "#f5f5f5"
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
                  {item.text === "Dashboard" && <SpaceDashboardIcon sx={icons} />}
                  {item.text === "Time Table" && <AppsOutageIcon sx={icons} />}
                  {item.text === "Attendance" && <AssessmentIcon sx={icons} />}
                  {item.text === "Tests" && <LibraryAddCheckIcon sx={icons} />}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {data2.map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              onClick={() => navigate(`/student/${item.url}`)}
              sx={{
                color: "#757575",
                display: 'block',
                '&:hover': { color: "black" },
                backgroundColor: location.pathname === `/student/${item.url}` ? '#d8d7d7' : "#f5f5f5"
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
                  {item.text === "Announcement" && <AnnouncementIcon sx={icons} />}
                  {item.text === "Report Card" && <QuizIcon sx={icons} />}
                  {item.text === "My Profile" && <AccountBoxIcon sx={icons} />}
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
