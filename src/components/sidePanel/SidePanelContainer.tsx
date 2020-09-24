import React from 'react';

import { Box, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  open: boolean;
  children: React.ReactNode;
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 5,
    overflow: 'auto',

    height: (props: Props) => (props.open ? '100%' : 0),
    width: (props: Props) => (props.open ? '100%' : 0),
    backgroundColor: 'transparent',
  },
});

export const SidePanelContainer = (props: Props) => {
  const classes = useStyles(props);

  return (
    <Fade in={props.open}>
      <Box className={classes.container}>{props.children}</Box>
    </Fade>
  );
};
