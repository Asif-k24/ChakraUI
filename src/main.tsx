import { createRoot } from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App.tsx'

const customTheme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      900: '#1a202c'
    }
  }
})

createRoot(document.getElementById('root')!).render(

  <ChakraProvider theme={customTheme}>
    <App />
  </ChakraProvider>
)