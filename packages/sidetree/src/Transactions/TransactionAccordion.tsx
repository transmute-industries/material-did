import React from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const TransactionAccordion = ({ summary, details, open }: any) => {
  const [expanded, setExpanded] = React.useState(open);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <AccordionSummary
        style={{ paddingRight: '16px' }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="transaction-panel-content"
        id="transaction-panel-header"
      >
        {summary}
      </AccordionSummary>
      <AccordionDetails>{details}</AccordionDetails>
    </Accordion>
  );
};
