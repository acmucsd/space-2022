import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import s from "./style.module.scss";

interface panelData {
  data: {question: string; answer: string|any}[];
}
const Faq: React.FC<panelData> = ({ data }) => {
  return (
    <>
        {data.map((questionObject, index) => 
          <Accordion sx = {{ 
            borderTop: index === 0 ? 3 : 0,
            borderBottom: 3,
            bgcolor: 'transparent',
            color: 'white',
            boxShadow: 'none',
          }} key = {questionObject.question}>
            <AccordionSummary expandIcon={<ExpandMoreIcon className = {s.header}/>}>
              <Typography className = {s.header}>{questionObject.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component="div" className = {s.description}>
                <div>{questionObject.answer}</div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        )}
  </>
  )
}

export default Faq;