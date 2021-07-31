import { Box, SimpleGrid } from '@chakra-ui/react'
import DesignImage from './DesignImage'
import FeaturedHeader from './FeaturedHeader'

interface Props {
  title: string
  id: string
  design_img: {
    url: string
  }
}

const Featured = ({ designs }: { designs: Props[] }) => {
  return (
    <Box mt='4rem' data-aos='zoom-in-up'>
      <FeaturedHeader />
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt='1rem' p='2rem'>
        {designs.map(design => (
          <DesignImage key={design.id} title={design.title} imgSrc={design.design_img.url} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Featured
