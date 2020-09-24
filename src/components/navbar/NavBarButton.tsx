import * as React from 'react';

import { Box, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface StyleProps {
  selected?: boolean;
  onClick?: () => void;
}

const useStyles = makeStyles({
  navBarButtonContainer: {
    position: 'relative',
    height: '100%',
    width: '71px',
  },
  navBarButton: (props: StyleProps) => ({
    height: '100%',
    width: '71px',
    padding: 0,
    color: props.selected ? '#00AAff' : 'white',
  }),
  navBarButtonHighlight: (props: StyleProps) => ({
    visibility: props.selected ? 'visible' : 'hidden',
    backgroundColor: 'blue',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '4px',
  }),
});

type Props = StyleProps & {
  children: React.ReactNode;
};

export const NavBarButton = (props: Props) => {
  const classes = useStyles(props);

  return (
    <Box className={classes.navBarButtonContainer}>
      <IconButton className={classes.navBarButton} onClick={props.onClick}>
        {props.children}
      </IconButton>
      <Box className={classes.navBarButtonHighlight} />
    </Box>
  );
};
