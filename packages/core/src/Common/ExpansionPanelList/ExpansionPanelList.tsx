import React, { FC, HTMLAttributes } from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export interface IExpansionPanelList extends HTMLAttributes<HTMLDivElement> {
  panels: any;
}

export const ExpansionPanelList: FC<IExpansionPanelList> = ({ panels }) => {
  return (
    <React.Fragment>
      {panels &&
        panels.map((panel: any) => (
          <ExpansionPanel disabled={panel.disabled} key={panel.title}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{panel.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>{panel.children}</ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
    </React.Fragment>
  );
};
