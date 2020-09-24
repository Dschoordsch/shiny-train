import React from 'react';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import { AppRouter } from './routes';

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xl: false; // xl breakpoint is unused, remove
  }
}

const theme = responsiveFontSizes(
  createMuiTheme({
    overrides: {
      MuiPaper: {
        root: {
          backgroundColor: '#ffffffe2',
        },
      },
    },
  })
);

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </>
  );
};

export default App;
