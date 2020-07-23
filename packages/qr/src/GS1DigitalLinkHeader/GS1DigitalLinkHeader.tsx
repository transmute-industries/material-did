import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { QR } from '@bloomprotocol/qr-react';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    flex: 1,
  },
}));

function GS1DigitalLinkHeader({ logo, digiLink, actions }: any) {
  const classes = useStyles();

  const qrOptions = {
    size: 128,
    logoImage: logo,
    logoWidth: 32,
    logoHeight: 32,
    logoOpacity: 0,

    bgColor: '#fff',
    fgColor: '#000',
    padding: 0,
  };

  return (
    <div className={classes.root}>
      <Box display="flex" style={{ marginBottom: '16px' }}>
        <Box>
          <QR data={digiLink} options={qrOptions} />
        </Box>
        <Box flexGrow={1}>
          <div style={{ padding: '32px' }}>
            <Typography variant={'h5'}>GS1 Digital Link</Typography>
            <Typography style={{ color: 'grey' }}>{`${digiLink.substring(
              0,
              32
            )}...`}</Typography>
          </div>
        </Box>

        <Box>
          <div style={{ padding: '32px' }}>{actions}</div>
        </Box>
      </Box>
    </div>
  );
}

GS1DigitalLinkHeader.propTypes = {
  logo: PropTypes.any.isRequired,
  digiLink: PropTypes.any.isRequired,
  actions: PropTypes.any.isRequired,
};

export { GS1DigitalLinkHeader };
