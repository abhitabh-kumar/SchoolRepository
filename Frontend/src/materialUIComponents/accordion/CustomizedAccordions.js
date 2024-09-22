import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function CustomizedAccordions({ faq }) {
  return (
    <>
      {faq && faq.map((item, index) => {
        return <Accordion key={`panel${index}-content`} sx={{margin:'9px 0px',borderRadius:'0px 0px 8px 8px'}}>
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
    </>
  );
}