import { Flex, Icon } from '@chakra-ui/react'
import { FiChevronsDown } from '@react-icons/all-files/fi/FiChevronsDown'
import { MouseEventHandler } from 'react'

interface Props {
  onClick: MouseEventHandler<SVGElement>
}

const Chevron = ({ onClick }: Props) => (
  <Flex justifyContent='center' mt={{ base: '1rem', md: '3rem' }}>
    <Icon as={FiChevronsDown} fontSize='5rem' color='salmon' cursor='pointer' onClick={onClick} />
  </Flex>
)

export default Chevron
