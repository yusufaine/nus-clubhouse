import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../styles/theme'
import Navbar from '../components/Navbar/Navbar'

function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider resetCSS theme={customTheme} >
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
