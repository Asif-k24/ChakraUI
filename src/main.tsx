import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
