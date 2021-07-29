import { Flex, Icon } from '@chakra-ui/react'
import { HiChevronDoubleDown } from 'react-icons/hi'

const Chevron = () => (
  <Flex justifyContent='center' mt={{ md: '3rem' }}>
    <Icon as={HiChevronDoubleDown} fontSize='5rem' fill='salmon' cursor='pointer' />
  </Flex>
)

export default Chevron
