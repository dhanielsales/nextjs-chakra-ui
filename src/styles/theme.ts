import { DefaultTheme } from '@chakra-ui/core';

const customTheme: DefaultTheme = {
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: {
    sm: '5px',
    md: '8px',
  },
  fontSizes: {
    '6xl': '54px',
  },
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
  },
};

export default customTheme;
