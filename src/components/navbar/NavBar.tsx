import * as React from 'react';

import { AppBar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { NavBarButton } from './NavBarButton';

const useStyles = makeStyles((theme) => ({
  navBar: {
    backgroundColor: `#0000ffdd`,
    height: 'var(--navBarHeight, 64px)',
    '& .MuiToolbar-root': {
      height: '100%',
    },
    zIndex: theme.zIndex.drawer + 1,
  },
  navBarLayout: {
    display: 'grid',
    gridTemplateColumns: '342px auto 142px',
    width: '100%',
    height: '100%',
    '& .MuiIconButton-root': {
      height: '100%',
      width: '71px',
      padding: 0,
    },
  },
}));
type LeftMenuItems = 'left1' | 'left2';
type RightMenuItems = 'right1';

interface Props {
  currentLeftMenu: LeftMenuItems | undefined;
  setCurrentLeftMenu: (currentMenu: LeftMenuItems | undefined) => void;
  currentRightMenu: RightMenuItems | undefined;
  setCurrentRightMenu: (currentMenu: RightMenuItems | undefined) => void;
}

export const NavBar = (props: Props) => {
  const classes = useStyles();

  const openOrCloseLeft = (menuItem: LeftMenuItems) => {
    return () => {
      if (props.currentLeftMenu === menuItem) {
        props.setCurrentLeftMenu(undefined);
      } else {
        props.setCurrentLeftMenu(menuItem);
      }
    };
  };

  const openOrCloseRight = (menuItem: RightMenuItems) => {
    return () => {
      if (props.currentRightMenu === menuItem) {
        props.setCurrentRightMenu(undefined);
      } else {
        props.setCurrentRightMenu(menuItem);
      }
    };
  };

  return (
    <AppBar className={classes.navBar}>
      <Box className={classes.navBarLayout}>
        <Box display="flex" >
          <NavBarButton selected={props.currentLeftMenu === 'left1'} onClick={openOrCloseLeft('left1')}>
            left 1
          </NavBarButton>
          <NavBarButton selected={props.currentLeftMenu === 'left2'} onClick={openOrCloseLeft('left2')}>
            left 2
          </NavBarButton>
        </Box>
        <Box>middle</Box>
        <Box>
          <NavBarButton selected={props.currentRightMenu === 'right1'} onClick={openOrCloseRight('right1')}>
            right 1
          </NavBarButton>
        </Box>
      </Box>
    </AppBar>
  );
};
