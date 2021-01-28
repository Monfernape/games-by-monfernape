import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import { Routes } from "./Router"

const App = () => {
  return (
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  );
}

export default App;
