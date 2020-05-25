/* eslint-disable no-use-before-define */
import React, { HTMLAttributes } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import { LinkedDataIdentifier } from '../../Common';
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

export interface ISelectWalletContentProps
  extends HTMLAttributes<HTMLDivElement> {
  label: any;
  value: any;
  options: any;
  onChange: any;
}

export const SelectWalletContent = ({
  label,
  value,
  options,
  onChange,
}: any) => {
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
      getOptionLabel={(option: any) => option.name}
      renderOption={(option: any) => (
        <Box style={{ flexDirection: 'column', display: 'flex' }}>
          <Box style={{ flexDirection: 'row', display: 'flex' }}>
            <img
              alt={option.name}
              src={option.image}
              style={{ height: '32px', width: '32px', paddingRight: '16px' }}
            />
            <Typography style={{ paddingTop: '4px' }}>{option.name}</Typography>
          </Box>
          <Box style={{ paddingTop: '4px' }}>
            <LinkedDataIdentifier value={option.id} />
          </Box>
        </Box>
      )}
      onChange={(_event: any, option: any) => {
        if (option) {
          setState({
            ...state,
            selectedOption: option,
          });
          onChange(option);
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
