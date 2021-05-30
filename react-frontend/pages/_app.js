import '@fontsource/inter'
import { ChakraProvider } from '@chakra-ui/react'

import customTheme from '../styles/theme'
import { AuthProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
      <ChakraProvider resetCSS theme={customTheme} >
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider> 
  )
}

export default MyApp
