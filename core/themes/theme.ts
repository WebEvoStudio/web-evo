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
});

export default theme;
