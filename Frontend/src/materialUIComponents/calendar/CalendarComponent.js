import React, { useState } from "react";
import { Box, Button, Grid2, Typography, Avatar, Tooltip } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import dayjs from "dayjs";

const CalendarComponent = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const today = dayjs();

  const calendarData = [
    { day: 2, status: "present" },
    { day: 1, status: "absent" },
    { day: 3, status: "absent" },
    { day: 5, status: "present" },
    { day: 4, status: "present" },
    { day: today.date(), status: "today" },
  ];

  const handlePrevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const handleNextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  const renderDay = (day) => {
    const currentDay = calendarData.find((d) => d.day === day);

    return (
      <Grid2 item xs={1.5} key={day}>
        <Tooltip title={`Day ${day}`} arrow>
          <Box sx={{ textAlign: "center" }}>
            <Avatar
              sx={{
                bgcolor: currentDay?.status === "today" ? "green" : "inherit",
                margin: "auto",
              }}
            >
              {currentDay?.status === "present" && (
                <CheckCircleIcon sx={{color:'rgb(94 118 223)',fontSize:'2rem'}} />
              )}
              {currentDay?.status !== "present" && (
                <Typography variant="subtitle2">{day}</Typography>
              )}
              {currentDay?.status === "absent" && (
                  <FiberManualRecordIcon sx={{ color: "red", fontSize: '0.7rem' }} />
              )}
            </Avatar>
          </Box>
        </Tooltip>
      </Grid2>
    );
  };

  const daysInMonth = currentDate.daysInMonth();

  return (
    <Box sx={{ p: 3, background: "#29354a", color: "#fff", borderRadius: 2,maxWidth:'370px',maxHeight:'fit-content'}}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Button variant="outlined" color="primary" onClick={handlePrevMonth} sx={{borderRadius:'2px',width:'5px',height:'40px',border:'0px','&:hover': {
                            backgroundColor: '#34a159',
                        }}}>
          {`<<`}
        </Button>
        <Typography variant="h9" sx={{ lineHeight: "42px", display: "inline-block" }}>
          {currentDate.format("MMMM YYYY")}
        </Typography>
        <Button variant="outlined" color="primary" onClick={handleNextMonth} sx={{borderRadius:'2px',width:'5px',height:'40px',border:'0px', '&:hover': {
                            backgroundColor: '#34a159',
                        }}}>
          {`>>`}
        </Button>
      </Box>

      <Grid2 container spacing={2}>
        {Array.from({ length: daysInMonth }, (_, i) => renderDay(i + 1))}
      </Grid2>
    </Box>
  );
};

export default CalendarComponent;
