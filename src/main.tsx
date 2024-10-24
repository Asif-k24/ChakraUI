import { createRoot } from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App.tsx'

const customTheme = extendTheme({
  colors: {
    brand: {
      900: '#024fc9',
      800: '#146af5',
      700: '#2977f2',
      600: '#337df2',
      500: '#4287f5'
    }
  },

  fonts: {
    body: 'Courier New',
    heading: 'Courier New'
  }

})

createRoot(document.getElementById('root')!).render(

  <ChakraProvider theme={customTheme}>
    <App />
  </ChakraProvider>
)