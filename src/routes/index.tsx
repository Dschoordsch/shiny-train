import * as React from 'react';
import { Box, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { SpaceDrawer } from 'components/sidePanel/SpaceDrawer';
import { NavBar } from 'components/navbar/NavBar';

const useStyles = makeStyles({
  spaceRoot: {
    position: 'fixed',
    overflow: 'auto',
    width: '100%',
    height: '100%',
    '--navBarHeight': 'clamp(44px, calc(1.5vw + 35px), 64px)',
  },
  spaceContainer: {
    position: 'absolute',
    top: 'var(--navBarHeight, 0)',
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'row',
  },
  spaceTimer: {
    position: 'fixed',
    zIndex: 10,
    width: '100%',
    justifyContent: 'center',
    pointerEvents: 'none',
  },
});

export function AppRouter() {
  const theme = useTheme();
  const xsDownLayout = useMediaQuery(theme.breakpoints.down('xs'));

  const [currentLeftMenu, setCurrentLeftMenu] = React.useState<'left1' | 'left2' | undefined>();
  const [currentRightMenu, setCurrentRightMenu] = React.useState<'right1' | undefined>();

  const classes = useStyles();

  const onSetCurrentLeftMenu = React.useCallback(
    (menu: 'left1' | 'left2' | undefined) => {
      if (xsDownLayout) {
        setCurrentRightMenu(undefined);
      }
      setCurrentLeftMenu(menu);
    },
    [xsDownLayout]
  );

  const onSetCurrentRightMenu = React.useCallback(
    (menu: 'right1' | undefined) => {
      if (xsDownLayout) {
        setCurrentLeftMenu(undefined);
      }
      setCurrentRightMenu(menu);
    },
    [xsDownLayout]
  );

  React.useEffect(() => {
    if (xsDownLayout) {
      setCurrentLeftMenu(undefined);
      setCurrentRightMenu(undefined);
    }
  }, [xsDownLayout]);

  return (
      <Box className={classes.spaceRoot}>
        <NavBar
          currentLeftMenu={currentLeftMenu}
          setCurrentLeftMenu={onSetCurrentLeftMenu}
          currentRightMenu={currentRightMenu}
          setCurrentRightMenu={onSetCurrentRightMenu}
        />
        <Box className={classes.spaceContainer}>
          <SpaceDrawer entries={['left1', 'left2']} currentMenu={currentLeftMenu} />
          <Box>some content</Box>
          <SpaceDrawer entries={['right1']} currentMenu={currentRightMenu} anchor="right" />
        </Box>
      </Box>
  );
};
