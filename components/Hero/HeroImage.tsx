import NextImage from 'next/image'
import { Box } from '@chakra-ui/react'
import HeroJPG from '../../public/hero.webp'

const HeroImage = () => (
  <Box w='100%' mt={{ base: '2rem' }} padding='1rem' data-aos='fade-left'>
    <NextImage
      src={HeroJPG}
      alt='Hero Image showing some illustration tools'
      className='rounded'
      placeholder='blur'
    />
  </Box>
)

export default HeroImage
