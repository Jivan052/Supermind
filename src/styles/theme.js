// ...existing code...
import { createTheme } from '@mui/material/styles';

export const muiTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  palette: {
    primary: { main: '#1A73E8' },
    secondary: { main: '#34A853' }
  }
});

export const theme = {
  colors: {
    primary: '#1A73E8',
    secondary: '#34A853',
    gradient: 'linear-gradient(45deg, rgb(43, 106, 188) 30%, #34A853 90%)',
    background: 'linear-gradient(145deg, #EFFFFD 0%, #F9FFEB 100%)'
  },
  spacing: {
    padding: '24px',
    borderRadius: '8px'
  },
  typography: {
    fontSize: '18px'
  }
};
// ...existing code...