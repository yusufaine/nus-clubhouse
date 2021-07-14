import '@fontsource/inter'
import { ChakraProvider } from '@chakra-ui/react'
import 'swiper/swiper.scss';

import customTheme from '../styles/theme'
import { AuthProvider } from '../context/AuthContext'
import { VoiceProvider } from '../context/VoiceContext'

function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
      <VoiceProvider>
        <ChakraProvider resetCSS theme={customTheme} >
          <Component {...pageProps} />
        </ChakraProvider>
      </VoiceProvider>
    </AuthProvider> 
  )
}

export default MyApp
