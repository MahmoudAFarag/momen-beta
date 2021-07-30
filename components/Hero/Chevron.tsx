import { Flex, Icon } from '@chakra-ui/react'
import { FiChevronsDown } from '@react-icons/all-files/fi/FiChevronsDown'

const Chevron = () => (
  <Flex justifyContent='center' mt={{ md: '3rem' }}>
    <Icon as={FiChevronsDown} fontSize='5rem' color='salmon' cursor='pointer' />
  </Flex>
)

export default Chevron
