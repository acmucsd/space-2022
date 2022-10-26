import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import s from "./style.module.scss";

interface panelData {
  panelTitles: Array<string>;
  panelContent: Array<string>;
}
const Faq: React.FC<panelData> = ({panelTitles, panelContent}) => {
  return (
    <>
        {panelTitles.map((title, index) => {
          if(index === panelTitles.length - 1){
            return (
              <>
                <Accordion sx = {{ 
                  borderTop: 3,
                  borderBottom: 3,
                  bgcolor: 'transparent',
                  color: 'white',
                  boxShadow: 'none',
                }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon className = {s.header}/>}>
                    <Typography className = {s.header}>{title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className = {s.description}>
                      <p dangerouslySetInnerHTML={{ __html: panelContent[index]}}/>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </>
            )
          }
          else{
            return (
              <>
                <Accordion sx = {{ 
                  borderTop: 3,
                  bgcolor: 'transparent',
                  color: 'white',
                  boxShadow: 'none',
                }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon className = {s.header}/>}>
                    <Typography className = {s.header}>{title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className = {s.description}>
                      <p dangerouslySetInnerHTML={{ __html: panelContent[index]}}/>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </>
            ) 
          }
        })
      }
    </>
  )
}

export default Faq;