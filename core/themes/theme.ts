import {red} from '@mui/material/colors';
import {createTheme} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00B0FF',
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
      fontWeight: 500,
    },
    h2: {
      fontSize: '42px',
      fontWeight: 500,
    },
    h3: {
      fontSize: '32px',
      fontWeight: 500,
    },
    h4: {
      fontSize: '28px',
      fontWeight: 500,
    },
    h5: {
      fontSize: '24px',
      fontWeight: 500,
    },
    h6: {
      fontSize: '20px',
      fontWeight: 500,
    },
  },
});

export default theme;
