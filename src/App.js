/**
 * Climbee
 *
 */

import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './Stylesheet';
import LoginPage from './components/pages/LoginPage';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <LoginPage />
    </PaperProvider>
  );
}
