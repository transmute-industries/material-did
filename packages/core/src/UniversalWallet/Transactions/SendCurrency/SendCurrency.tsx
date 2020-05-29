import React, { FC, HTMLAttributes } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import CardContent from '@material-ui/core/CardContent';

import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { makeStyles } from '@material-ui/core/styles';
import { LinkedDataIdentifier } from '../../../Common/LinkedDataIdentifier';
import { TripleCard } from '../TripleCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // backgroundColor: '#f5f5f5',
  },
  media: {
    height: 256,
  },
  listRoot: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  pink: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.main,
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export interface ITransactionPreviewSendCurrencyProps
  extends HTMLAttributes<HTMLDivElement> {
  //   value: string;
  sender: any;
  envelope: any;
  receiver: any;
}

export const TransactionPreviewSendCurrency: FC<ITransactionPreviewSendCurrencyProps> = ({
  sender,
  envelope,
  receiver,
}) => {
  const classes = useStyles();
  return (
    <Paper
      style={{
        padding: '16px',
        wordBreak: 'break-all',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant={'h5'}>Transfer Currency</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          {/* Subject / Sender */}
          <TripleCard
            title={'Sender'}
            icon={<PermIdentityIcon />}
            content={
              <CardContent>
                <LinkedDataIdentifier value={sender.id} />
              </CardContent>
            }
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          {/* Predicate / Transfer */}
          <TripleCard
            subheader={envelope.currency}
            title={envelope.amount}
            icon={<ArrowForwardIcon />}
            content={
              <CardContent>
                <LinkedDataIdentifier value={envelope.id} />
              </CardContent>
            }
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          {/* Object / Receiver */}
          <TripleCard
            title={'Receiver'}
            icon={<PermIdentityIcon />}
            content={
              <CardContent>
                <LinkedDataIdentifier value={receiver.id} />
              </CardContent>
            }
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
