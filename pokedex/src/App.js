import Router from "./router/Router";
import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"


function App() {
  return (
    <ChakraProvider>
       <Router/>
    </ChakraProvider>
  );
}

export default App;
