import {red} from '@mui/material/colors';
import {createTheme} from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00B0FF',
      contrastText: 'white',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h1: {
      fontSize: '68px',
      fontWeight: 600,
    },
    h2: {
      fontSize: '42px',
      fontWeight: 600,
    },
    h3: {
      fontSize: '32px',
      fontWeight: 600,
    },
    h4: {
      fontSize: '28px',
      fontWeight: 600,
    },
    h5: {
      fontSize: '24px',
      fontWeight: 600,
    },
    h6: {
      fontSize: '20px',
      fontWeight: 600,
    },
  },
});

export default theme;
