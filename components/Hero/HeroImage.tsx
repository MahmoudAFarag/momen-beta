import Image from 'next/image'
import { Box } from '@chakra-ui/react'
import HeroJPG from '../../public/hero.jpg'

const HeroImage = () => (
  <Box w='100%' mt={{ base: '2rem' }} padding='1rem'>
    <Image src={HeroJPG} alt='Hero Image showing some illustration tools' className='rounded' />
  </Box>
)

export default HeroImage
