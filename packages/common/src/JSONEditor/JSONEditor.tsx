import React, { FC, HTMLAttributes } from 'react';

import 'brace';
import 'brace/mode/json';
import 'brace/theme/github';

const AceEditor = require('react-ace').default;

export interface IJSONEditorProps extends HTMLAttributes<HTMLDivElement> {
  value: any;
  onChange?: any;
  style?: any;
}

export const JSONEditor: FC<IJSONEditorProps> = ({
  value,
  onChange,
  style,
}) => {
  return (
    <AceEditor
      mode="json"
      theme="github"
      style={{ ...style, width: '100%' }}
      onChange={(data: string) => {
        if (onChange) {
          onChange(data);
        }
      }}
      readOnly={onChange === undefined}
      wrapEnabled={true}
      name="JSONEditorEditor"
      value={value}
      editorProps={{ $blockScrolling: true }}
    />
  );
};
