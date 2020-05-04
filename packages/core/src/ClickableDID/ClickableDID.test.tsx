import React from 'react';
import * as ReactDOM from 'react-dom';
import { Examples as ClickableDIDStories } from './ClickableDID.stories';

describe('ClickableDID', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ClickableDIDStories />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
