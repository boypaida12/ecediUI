import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ChakraProvider} from '@chakra-ui/react'
import Navigation from './components/navbar/Navigation.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Navigation/>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
