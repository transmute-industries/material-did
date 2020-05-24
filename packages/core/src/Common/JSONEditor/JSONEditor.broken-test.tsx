import React from 'react';
import * as ReactDOM from 'react-dom';
import { SpecialAnnouncement } from './JSONEditor.stories';

describe('JSONEditor', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SpecialAnnouncement />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
