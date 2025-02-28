// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1da1f2',
    },
    background: {
      default: '#15202B', 
      paper: '#192734',   
    },
    text: {
      primary: '#fff',    
      secondary: '#8899A6' 
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: 'none',
          borderRadius: 0,
          backgroundColor: '#192734',
          color: '#fff',
          boxShadow: 'none',
          borderBottom: '1px solid #38444d',
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '8px 16px',
        },
        title: {
          fontWeight: 700,
        },
        subheader: {
          color: '#8899A6',
        },
      },
    },
  },
});

export default theme;
