import React from 'react';
import { theme } from 'assets/styles/theme';
import { GlobalStyles } from 'assets/styles/GlobalStyles.styled';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from 'hooks/useAuth';

const AppProviders = ({ children }) => (
  <Router>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles />
        {children}
      </AuthProvider>
    </ThemeProvider>
  </Router>
);

export default AppProviders;
