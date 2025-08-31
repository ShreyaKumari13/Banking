import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#53389e',
      light: '#7c5bc7',
      dark: '#3d2875',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#e9d7fe',
      light: '#f4ebff',
      dark: '#d6bbfb',
      contrastText: '#53389e'
    },
    text: {
      primary: '#ffffff',
      secondary: '#e9d7fe',
      disabled: '#475467'
    },
    background: {
      default: '#53389e',
      paper: '#ffffff'
    },
    grey: {
      50: '#f9fafb',
      100: '#f2f4f7',
      200: '#eaecf0',
      300: '#d0d5dd',
      400: '#98a2b3',
      500: '#667085',
      600: '#475467',
      700: '#344054',
      800: '#1d2939',
      900: '#101828'
    },
    common: {
      black: '#000000',
      white: '#ffffff'
    },
    divider: '#eaecf0'
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: '72px',
      fontWeight: 600,
      letterSpacing: '-1.44px',
      lineHeight: '90px',
      color: '#ffffff'
    },
    h2: {
      fontSize: '36px',
      fontWeight: 600,
      letterSpacing: '-0.72px',
      color: '#ffffff'
    },
    body1: {
      fontSize: '20px',
      fontWeight: 400,
      color: '#e9d7fe'
    },
    body2: {
      fontSize: '16px',
      fontWeight: 500,
      color: '#475467'
    },
    button: {
      fontSize: '18px',
      fontWeight: 600,
      textTransform: 'none'
    }
  },
  shape: {
    borderRadius: 8
  },
  shadows: [
    'none',
    '0px 1px 2px rgba(16, 24, 40, 0.05)',
    '0px 8px 8px rgba(16, 24, 40, 0.03), 0px 20px 24px rgba(16, 24, 40, 0.08)',
    '0px 4px 6px rgba(16, 24, 40, 0.07)',
    '0px 10px 15px rgba(16, 24, 40, 0.1)',
    '0px 20px 25px rgba(16, 24, 40, 0.1)',
    '0px 25px 50px rgba(16, 24, 40, 0.25)',
    '0px 32px 64px rgba(16, 24, 40, 0.35)',
    '0px 40px 80px rgba(16, 24, 40, 0.4)',
    '0px 48px 96px rgba(16, 24, 40, 0.45)',
    '0px 56px 112px rgba(16, 24, 40, 0.5)',
    '0px 64px 128px rgba(16, 24, 40, 0.55)',
    '0px 72px 144px rgba(16, 24, 40, 0.6)',
    '0px 80px 160px rgba(16, 24, 40, 0.65)',
    '0px 88px 176px rgba(16, 24, 40, 0.7)',
    '0px 96px 192px rgba(16, 24, 40, 0.75)',
    '0px 104px 208px rgba(16, 24, 40, 0.8)',
    '0px 112px 224px rgba(16, 24, 40, 0.85)',
    '0px 120px 240px rgba(16, 24, 40, 0.9)',
    '0px 128px 256px rgba(16, 24, 40, 0.95)',
    '0px 136px 272px rgba(16, 24, 40, 1)',
    '0px 144px 288px rgba(16, 24, 40, 1)',
    '0px 152px 304px rgba(16, 24, 40, 1)',
    '0px 160px 320px rgba(16, 24, 40, 1)',
    '0px 168px 336px rgba(16, 24, 40, 1)'
  ]
});

export default theme;