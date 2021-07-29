import Image from 'next/image'
import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/layout'

import HeroImage from '../../public/hero.jpg'

const Hero = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} mt={{ base: '3rem', md: '12rem' }}>
      <Box ml={{ base: '3rem', md: '10rem' }} mt='2rem'>
        <Heading as='h1' fontSize='7rem' fontFamily='body'>
          Mo'men
        </Heading>
        <Heading as='h1' fontSize='7rem' fontFamily='body'>
          Designs
        </Heading>
        <Text fontSize='2.3rem' mt='2rem' width='27ch'>
          Where ideas and imaginations are not abstract
        </Text>
      </Box>
      <Box w='100%'>
        <Image
          src={HeroImage}
          alt='Hero Image showing some illustration tools'
          className='rounded'
        />
      </Box>
    </SimpleGrid>
  )
}

export default Hero
