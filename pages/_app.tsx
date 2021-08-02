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
      <Box
        backgroundImage='linear-gradient(to right, #f7cec1, #f6c7b7, #f5bfae, #f4b8a4, #f3b19b, #f3b19b, #f3b09a, #f3b09a, #f5b7a3, #f6beab, #f8c5b4, #f9ccbd)'
        h='1rem'
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}
export default MyApp
