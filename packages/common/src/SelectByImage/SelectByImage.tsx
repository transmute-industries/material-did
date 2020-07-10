/* eslint-disable no-use-before-define */
import React, { HTMLAttributes } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import { LinkedDataIdentifier } from '../LinkedDataIdentifier';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

export interface ISelectByImageProps extends HTMLAttributes<HTMLDivElement> {
  label: any;
  value: any;
  options: any;
  onChange: any;
}

export const SelectByImage = ({ label, value, options, onChange }: any) => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    selectedOption: value,
  });

  return (
    <Autocomplete
      id="country-select-demo"
      options={options}
      fullWidth
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option: any) => option.label}
      renderOption={(option: any) => (
        <Box style={{ flexDirection: 'column', display: 'flex' }}>
          <Box style={{ flexDirection: 'row', display: 'flex' }}>
            <img
              alt={option.label}
              src={option.logo}
              style={{ height: '32px', width: '32px', paddingRight: '16px' }}
            />
            <Typography style={{ paddingTop: '4px' }}>
              {option.label}
            </Typography>
          </Box>
          <Box style={{ paddingTop: '4px' }}>
            <LinkedDataIdentifier value={option.value} />
          </Box>
        </Box>

        // <React.Fragment>
        //   <img
        //     alt={option.label}
        //     src={option.logo}
        //     style={{ height: '32px', width: '32px', paddingRight: '16px' }}
        //   />
        //   {option.label}
        //   <LinkedDataIdentifier value={option.value} />
        // </React.Fragment>
        //   <LinkedDataIdentifier value={option.value} />
        // <React.Fragment>
        //   <img
        //     alt={option.label}
        //     src={option.logo}
        //     style={{ height: '32px', width: '32px', paddingRight: '16px' }}
        //   />
        //   {option.label}
        // </React.Fragment>
        // <div style={{ flexDirection: 'column' }}>
        //   <div style={{ flexDirection: 'row', flexGrow: 1 }}>
        //     <img
        //       alt={option.label}
        //       src={option.logo}
        //       style={{ height: '32px', width: '32px', paddingRight: '16px' }}
        //     />
        //     {option.label}
        //   </div>

        //   {/*  */}
        // </div>
      )}
      onChange={(_event: any, vendor: any) => {
        // console.log(vendor)
        if (vendor) {
          setState({
            ...state,
            selectedOption: vendor,
          });
          onChange(vendor.value);
        }
      }}
      value={state.selectedOption}
      renderInput={(params: any) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
};
