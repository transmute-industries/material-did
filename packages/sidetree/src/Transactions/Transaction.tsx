import React from 'react';

import {
  LinkedDataIdentifier,
  JSONEditor,
  TabPanels,
} from '@material-did/common';

import { TransactionAccordion } from './TransactionAccordion';
import { TransactionPreviewHeader } from './TransactionPreviewHeader';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';

import GavelIcon from '@material-ui/icons/Gavel';
import StorageIcon from '@material-ui/icons/Storage';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

export interface ITransactionProps {
  transaction: any;
}
export const Transaction = ({ transaction }: ITransactionProps) => {
  return (
    <TransactionAccordion
      open={false}
      summary={<TransactionPreviewHeader transaction={transaction} />}
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
                          <GavelIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={'Transaction Time'}
                        secondary={transaction.transactionTimeHash}
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          aria-label="link"
                          onClick={() => {
                            window.open(
                              'https://ropsten.etherscan.io/tx/' +
                                transaction.transactionTimeHash
                            );
                          }}
                        >
                          <OpenInNewIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <AccountBalanceIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <LinkedDataIdentifier value={transaction.writer} />
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          aria-label="link"
                          onClick={() => {
                            window.open(
                              'https://dev.uniresolver.io/#' +
                                transaction.writer
                            );
                          }}
                        >
                          <OpenInNewIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <StorageIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={'Anchor String'}
                        secondary={transaction.anchorString}
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          aria-label="link"
                          onClick={() => {
                            window.open(
                              'https://ipfs.io/ipfs/' +
                                transaction.anchorString.split('.')[1]
                            );
                          }}
                        >
                          <CloudDownloadIcon />
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
                  <JSONEditor value={JSON.stringify(transaction, null, 2)} />
                ),
              },
            ]}
          />
        </React.Fragment>
      }
    />
  );
};
