import { Box, ChakraProvider } from '@chakra-ui/react'
import theme from '../themes/theme'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Box bg='salmon' h='1rem' />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
