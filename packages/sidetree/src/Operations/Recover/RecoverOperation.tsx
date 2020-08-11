import React, { FC, HTMLAttributes } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';

import FingerprintIcon from '@material-ui/icons/Fingerprint';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import {
  LinkedDataIdentifier,
  JSONEditor,
  TabPanels,
} from '@material-did/common';

import { OperationAccordion } from '../OperationAccordion';
import { OperationPreviewHeader } from '../OperationPreviewHeader';
import { fullyDecodedRecoverOperation } from '../../core-utils';

export interface IRecoverOperationProps extends HTMLAttributes<HTMLDivElement> {
  operation: any;
  didMethodPrefix: string;
}

export const RecoverOperation: FC<IRecoverOperationProps> = ({
  didMethodPrefix,
  operation,
}) => {
  const did = `did:${didMethodPrefix}:${operation.did_suffix}`;
  const decodedRecoverOperation = fullyDecodedRecoverOperation(operation);

  return (
    <div>
      <OperationAccordion
        open={false}
        summary={
          <OperationPreviewHeader
            operation={operation}
            controller={<LinkedDataIdentifier value={did} />}
          />
        }
        details={
          <React.Fragment>
            <TabPanels
              tabs={[
                {
                  index: 0,
                  label: 'Preview',
                  panel: (
                    <List>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <FingerprintIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={<LinkedDataIdentifier value={did} />}
                        />
                        <ListItemSecondaryAction>
                          <IconButton
                            edge="end"
                            aria-label="link"
                            onClick={() => {
                              window.open('https://dev.uniresolver.io/#' + did);
                            }}
                          >
                            <OpenInNewIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    </List>
                  ),
                },
                {
                  index: 1,
                  label: 'Source',
                  panel: (
                    <JSONEditor
                      value={JSON.stringify(decodedRecoverOperation, null, 2)}
                    />
                  ),
                },
              ]}
            />
          </React.Fragment>
        }
      />
    </div>
  );
};
