import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CustomizedAccordions({ faq }) {
  return (
    <div style={{display:"flex","justifyContent":"center","flexDirection":"column","alignItems":"center"}}>
      {faq && faq.map((item, index) => {
        return <Accordion key={`panel${index}-content`} sx={{margin: '5px',borderRadius:'0px 0px 8px 8px', maxWidth:"700px",width:"-webkit-fill-available"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-content`}
          >
            {item.question}
          </AccordionSummary>
          <AccordionDetails>
            {item.answer}
          </AccordionDetails>
        </Accordion>
      })}
    </div>
  );
}