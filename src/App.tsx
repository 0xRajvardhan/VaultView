import React from 'react';
import { WalletProvider } from './contexts/WalletContext';
import { ThemeProvider } from './contexts/ThemeContext';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <ThemeProvider>
      <WalletProvider>
        <AppLayout>
          <Dashboard />
        </AppLayout>
      </WalletProvider>
    </ThemeProvider>
  );
}

export default App;