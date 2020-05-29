import React, { FC, HTMLAttributes } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

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

export interface ITripleCardProps extends HTMLAttributes<HTMLDivElement> {
  content: any;
  icon: any;
  title: any;
  subheader?: any;
}

export const TripleCard: FC<ITripleCardProps> = ({
  icon,
  title,
  subheader,
  content,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="operation icon" className={classes.avatar}>
            {icon}
          </Avatar>
        }
        title={title}
        subheader={subheader}
      />
      {content}
    </Card>
  );
};
