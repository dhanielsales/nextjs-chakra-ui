import { ColorModeProvider, CSSReset, ThemeProvider as ChakraThemeProvider } from '@chakra-ui/core';
import React from 'react';
import theme from 'styles/theme';

const ThemeContainer: React.FC = ({ children }) => (
  <ChakraThemeProvider theme={theme}>
    <ColorModeProvider
      options={{
        initialColorMode: 'dark',
        useSystemColorMode: false,
      }}
      value="dark"
    >
      <CSSReset />
      {children}
    </ColorModeProvider>
  </ChakraThemeProvider>
);

export default ThemeContainer;
