import React from 'react';
import { SelectByImage, ISelectByImageProps } from '..';

export default {
  title: 'Select',
  component: SelectByImage,
};

const options = [
  {
    value:
      'did:key:z6Mkn28V7Mk7TyvS82GH5CByFWgBeTbtUedc3HDvJz4bta5f#z6Mkn28V7Mk7TyvS82GH5CByFWgBeTbtUedc3HDvJz4bta5f',
    logo: 'https://issuer.interop.transmute.world/logo512.png',
    label: 'Key 0',
  },
  {
    value:
      'did:key:z6Mkn28V7Mk7TyvS82GH5CByFWgBeTbtUedc3HDvJz4bta5f#z6Mkn28V7Mk7TyvS82GH5CByFWgBeTbtUedc3HDvJz4bta5f',
    logo: 'https://issuer.interop.transmute.world/logo512.png',
    label: 'Key 1',
  },
];

const value = options[0];

const label = 'Select issuer key';

const onChange = (option: any) => {
  console.log('selected: ', option);
};

export const OneByImage = (props?: Partial<ISelectByImageProps>) => (
  <div>
    <SelectByImage
      label={label}
      value={value}
      options={options}
      onChange={onChange}
      {...props}
    />
  </div>
);
