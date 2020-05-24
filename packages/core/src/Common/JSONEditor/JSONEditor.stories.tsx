import React from 'react';
import { JSONEditor, IJSONEditorProps } from '.';

export default {
  title: 'Common|JSON Editor',
  component: JSONEditor,
};

const editorValue = JSON.stringify(
  {
    '@context': ['https://schema.org'],
    '@type': 'SpecialAnnouncement',
    name: 'Stanford announce COVID-19 testing facility',
    text:
      'Stanford Health Care’s same-day primary care program is offering drive-through testing, by appointment, for SARS-CoV-2, the coronavirus that causes COVID-19.',
    datePosted: '2020-03-16',
    url:
      'http://med.stanford.edu/news/all-news/2020/03/stanford-offers-drive-through-coronavirus-test.html',
    category: 'https://www.wikidata.org/wiki/Q81068910',
    announcementLocation: {
      '@type': 'CovidTestingFacility',
      name: 'Stanford Health Care',
      url: 'https://stanfordhealthcare.org/',
    },
  },
  null,
  2
);

const editorOnChange = (data: string) => {
  console.log('editorOnChange', data);
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const JsonEditor = (props?: Partial<IJSONEditorProps>) => (
  <div>
    <JSONEditor value={editorValue} onChange={editorOnChange} {...props} />
  </div>
);
