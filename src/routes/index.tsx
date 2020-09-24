import * as React from 'react';
import { Box, Button, Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface StyleProps {
  open: boolean;
}

const useStyles = makeStyles({
  spaceRoot: {
    position: 'fixed',
    overflow: 'auto',
    width: '100%',
    height: '100%',
  },
  containerSize: {
    //width: (props: StyleProps) => (props.open ? `min(333px, 50vw)` : 0),
    backgroundColor: (props: StyleProps) => (props.open) ? 'red' : 'yellow',
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
});



export function AppRouter() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const classes = useStyles({ open: drawerOpen });
  return (
      <Box className={classes.spaceRoot}>
        <Drawer
          open={drawerOpen}
          variant="persistent"
          className={`${classes.drawer} ${classes.containerSize}`}
          classes={{
            paper: `${classes.drawerPaper} ${classes.containerSize}`,
          }}
        >
          SidePanel
        </Drawer>
        <Button onClick={() => {setDrawerOpen(!drawerOpen)}}>
          {drawerOpen ? "Close drawer" : "Open drawer"}
        </Button>
      </Box>
  );
};
