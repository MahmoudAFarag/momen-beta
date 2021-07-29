import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'body',
        bg: '#fef9f8',
      },
      html: {
        boxSizing: 'border-box',
        fontSize: '62.5%',
      },
      '.rounded': {
        borderRadius: '7px',
      },
    },
  },
  fonts: {
    body: 'Montserrat, sans-serif',
  },
  colors: {
    black: '#16161D',
    salmon: '#ef9273',
  },
})

export default theme
