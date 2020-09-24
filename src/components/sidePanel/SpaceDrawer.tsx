import _ from 'lodash';
import React from 'react';

import { Drawer, DrawerProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { LeftPanel1 } from './LeftPanel1';
import { LeftPanel2 } from './LeftPanel2';
import { RightPanel1 } from './RightPanel1';

const PANEL_WIDTH=333;

interface StyleProps {
  open: boolean;
  currentMenu: MenuItems | undefined;
}

const useStyles = makeStyles((theme) => ({
  containerSize: {
    width: (props: StyleProps) => (props.open ? `min(${PANEL_WIDTH}px, 50vw)` : 0),
//    transition: theme.transitions.create('width', {
//      easing: theme.transitions.easing.easeOut,
//      duration: theme.transitions.duration.enteringScreen,
//    }),
    [theme.breakpoints.down('xs')]: {
      width: (props: StyleProps) => (props.open ? '100%' : 0),
    },
  },
  drawer: {
    overflow: 'hidden',
    flexShrink: 1,
  },
  drawerPaper: {
    top: 'var(--navBarHeight, 0)',
    bottom: 0,
    overflow: 'auto',
    height: 'auto',
  },
}));

type MenuItems = 'left1' | 'left2' | 'right1';

interface Props {
  currentMenu: MenuItems | undefined;
  entries: MenuItems[];
}

export const SpaceDrawer = (props: Props & DrawerProps) => {
  const classes = useStyles({ open: props.currentMenu !== undefined, currentMenu: props.currentMenu });

  return (
    <Drawer
      open={props.currentMenu !== undefined && props.entries.includes(props.currentMenu)}
      variant="persistent"
      className={`${classes.drawer} ${classes.containerSize}`}
      classes={{
        paper: `${classes.drawerPaper} ${classes.containerSize}`,
      }}
      {..._.omit(props, 'currentMenu', 'entries')}
    >
      {props.entries.includes('left1') && <LeftPanel1 />}
      {props.entries.includes('left2') && <LeftPanel2 />}
      {props.entries.includes('right1') && <RightPanel1 />}
    </Drawer>
  );
};
