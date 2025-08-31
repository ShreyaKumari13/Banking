'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#53389E', // Purple color to match Figma
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontSize: '64px',
      fontWeight: 600,
      lineHeight: 1.2,
      color: '#ffffff',
      '@media (max-width: 768px)': {
        fontSize: '36px',
        lineHeight: '44px',
        letterSpacing: '-0.02em',
      }
    },
    body1: {
      fontSize: '20px',
      fontWeight: 400,
      color: '#e9d7fe',
      '@media (max-width: 768px)': {
        fontSize: '18px',
      }
    },
  },
});

export default theme;