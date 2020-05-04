import React from 'react';
import * as ReactDOM from 'react-dom';
import { Element } from './ClickableDID.stories';

describe('ClickableDID', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Element />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
