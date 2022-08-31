import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="paginaPrincipal">
    <ChakraProvider >
      <Home />
    </ChakraProvider>
    </div>
  );
}

export default App;
