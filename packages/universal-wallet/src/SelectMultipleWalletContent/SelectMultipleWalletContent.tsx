import React, { HTMLAttributes } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { LinkedDataIdentifier } from '@material-did/common';
import { startCase } from 'lodash';

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    width: '100%',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      // width: 250,
    },
  },
};

const getMatchingOptions = (options: any, ids: any) => {
  let _options: any = [];
  options.forEach((opt: any) => {
    if (ids.indexOf(opt.id) !== -1) {
      _options.push(opt);
    }
  });
  return _options;
};

export interface ISelectMultipleWalletContentProps
  extends HTMLAttributes<HTMLDivElement> {
  label: any;
  value: any;
  options: any;
  onChange: any;
}
export const SelectMultipleWalletContent = ({
  label,
  value,
  options,
  onChange,
}: any) => {
  const classes = useStyles();

  let defaultSelected = [];

  if (value) {
    defaultSelected = value.map((v: any) => {
      return v.id;
    });
  }

  const [selectedOptions, setSelectedOptions] = React.useState(defaultSelected);

  const handleChange = (event: any) => {
    let opts = getMatchingOptions(options, event.target.value);
    onChange(opts);
    setSelectedOptions(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        value={selectedOptions}
        onChange={handleChange}
        input={<Input />}
        renderValue={(selected: any) => (
          <div className={classes.chips}>
            {selected.map((value: any) => (
              <div key={value} className={classes.chip}>
                <LinkedDataIdentifier value={value} />
              </div>
            ))}
          </div>
        )}
        MenuProps={MenuProps}
      >
        {options.map((option: any) => (
          <MenuItem key={option.id} value={option.id}>
            <Box style={{ flexDirection: 'column', display: 'flex' }}>
              <Box style={{ flexDirection: 'row', display: 'flex' }}>
                <img
                  alt={option.name}
                  src={
                    option.image ||
                    'https://issuer.interop.transmute.world/logo512.png'
                  }
                  style={{
                    height: '32px',
                    width: '32px',
                    paddingRight: '16px',
                  }}
                />
                <Typography style={{ paddingTop: '4px' }}>
                  {option.name ||
                    startCase(
                      Array.isArray(option.type)
                        ? option.type[option.type.length - 1]
                        : option.type
                    )}
                </Typography>
              </Box>
              <Box style={{ paddingTop: '4px' }}>
                <LinkedDataIdentifier value={option.id} />
              </Box>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
