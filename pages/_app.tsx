import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import theme from '../themes/theme'

import AOS from 'aos'
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => AOS.init(), [])

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Box bg='salmon' h='1rem' />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}
export default MyApp
