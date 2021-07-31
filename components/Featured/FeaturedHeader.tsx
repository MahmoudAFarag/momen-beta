import { Heading } from '@chakra-ui/react'

const FeaturedHeader = () => {
  const headingAfterStyles = {
    display: 'block',
    content: '""',
    width: '100%',
    height: '0.5rem',
    marginTop: '0.2rem',
    borderRadius: '6px',
    backgroundColor: 'salmon',
  }

  return (
    <Heading
      display='inline-block'
      ml='2rem'
      fontFamily='body'
      fontSize='2.7rem'
      fontWeight='900'
      _after={headingAfterStyles}
    >
      Featured Designs
    </Heading>
  )
}

export default FeaturedHeader
