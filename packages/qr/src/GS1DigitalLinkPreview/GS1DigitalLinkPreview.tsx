import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';

import QRCode from 'qrcode.react';

import { DigitalLink } from 'digital-link.js';

import { IDL, AIL, KQL } from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    flex: 1,
  },
}));

function GS1DigitalLinkPreview({ digiLink }: any) {
  // Examples:

  // Transmute Prod
  // digiLink = 'https://transmute.world/app/credential-did/did:elem:EiAmE_ygLylXm2-nb6QL-SVuv1bi0qVOVrYu_RNHozrawA';

  // Transmute Local
  // digiLink = 'http://localhost:3000/credential-did/did:elem:EiAmE_ygLylXm2-nb6QL-SVuv1bi0qVOVrYu_RNHozrawA';

  // Real DigiLink with attributes
  // digiLink = 'https://dlnkd.tn.gg/01/9780345418913/21/43786?thngId=UMwxDXBdUbxgtyRaR2HBrc4r';

  // Real DigiLink without attributes
  // digiLink = 'https://dlnkd.tn.gg/01/9780345418913/21/43786';
  const classes = useStyles();

  const [panelValues, setPanelValues]: any = React.useState({
    qrCode: true,
    Qualifiers: true,
    Attributes: true,
  });

  const handleChange = (panel: any) => () => {
    const currentValue: boolean = panelValues[panel];
    setPanelValues({
      ...panelValues,
      [panel]: !currentValue,
    });
  };

  let dl: any;
  // These are hacks because of GS1 not supporting DIDs
  if (digiLink.includes('credential-did')) {
    const url = new URL(digiLink);
    const domain = url.origin;
    const did = url.pathname.split('/').pop();

    dl = DigitalLink();
    dl.setDomain(domain);
    dl.setIdentifier('did', did);
    url.searchParams.forEach((value, name) => {
      dl.setAttribute(name, value);
    });
  } else {
    dl = DigitalLink(digiLink);
  }

  const digitalLinkAsJson: any = JSON.parse(dl.toJsonString());

  const data: any = Object.keys(digitalLinkAsJson.identifier)
    .map((k: any) => {
      const identifier: any = IDL.find((i: any) => i.ruleName === `${k}-value`);
      if (identifier) {
        return {
          key: k,
          value: digitalLinkAsJson.identifier[k],
          label: identifier.label,
        };
      }
      return undefined;
    })
    .filter(Boolean);

  const myIdentifiers: any = [
    {
      key: 'link',
      value: digiLink,
      label: 'Link',
    },
  ].concat(data);

  const myKeyQualifiers = Object.keys(digitalLinkAsJson.keyQualifiers)
    .map((k) => {
      const keyQualifier = KQL.find((i) => i.code === k);
      if (keyQualifier) {
        return {
          key: k,
          value: digitalLinkAsJson.keyQualifiers[k],
          label: keyQualifier.label,
        };
      }
      return undefined;
    })
    .filter(Boolean);

  // /!\ Attributes will not work if they are referred to value and not by code
  const myAttributes = Object.keys(digitalLinkAsJson.attributes)
    .map((k) => {
      const attribute = AIL.find((i) => i.code === k);
      if (attribute) {
        return {
          key: k,
          value: digitalLinkAsJson.attributes[k],
          label: attribute.label,
        };
      }
      return undefined;
    })
    .filter(Boolean);

  const renderPanel = ({ panelTitle, values }: any) => {
    if (!values.length) {
      return '';
    }
    return (
      <ExpansionPanel
        key={panelTitle}
        // eslint-disable-next-line
        expanded={panelValues[panelTitle]}
        onChange={handleChange(panelTitle)}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${panelTitle}-content`}
          id={`${panelTitle}-header`}
        >
          <Typography className={classes.heading}>{panelTitle}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={6}>
            {/* eslint-disable-next-line */}
            {values.map((i: any) => {
              return (
                <Grid item xs={6} key={i.key}>
                  <TextField
                    label={i.label}
                    value={i.value}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
              );
            })}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  };

  const panels = [
    {
      panelTitle: 'Qualifiers',
      values: myKeyQualifiers,
    },
    {
      panelTitle: 'Attributes',
      values: myAttributes,
    },
  ];

  return (
    <div className={classes.root}>
      <ExpansionPanel
        key={'qrCode'}
        // eslint-disable-next-line
        expanded={panelValues['qrCode']}
        onChange={handleChange('qrCode')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${'qrCode'}-content`}
          id={`${'qrCode'}-header`}
        >
          <Typography className={classes.heading}>GS1 Digital Link</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={8}>
            {/* eslint-disable-next-line */}
            {myIdentifiers.map((i: any) => {
              return (
                <Grid item xs={12} sm={4} key={i.key}>
                  <TextField
                    label={i.label}
                    value={i.value}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
              );
            })}
            <Grid item xs={12} sm={4}>
              <QRCode
                value={digiLink}
                style={{ margin: 'auto', display: 'block' }}
              />
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      {panels.map(renderPanel)}
    </div>
  );
}

GS1DigitalLinkPreview.propTypes = {
  digiLink: PropTypes.any.isRequired,
  panelTitle: PropTypes.any,
  values: PropTypes.any,
};

export { GS1DigitalLinkPreview };
