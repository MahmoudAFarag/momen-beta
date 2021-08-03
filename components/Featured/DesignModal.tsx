import NextImage from 'next/image'
import { parseISO, format } from 'date-fns'
import { RiLightbulbLine } from '@react-icons/all-files/ri/RiLightbulbLine'

import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Flex,
  Tag,
  TagLabel,
  Icon,
} from '@chakra-ui/react'

interface Props {
  isOpen: boolean
  onClose: () => void
  title: string
  imgSrc: string
  publishedAt: string
}

const DesignModal = ({ isOpen, onClose, title, imgSrc, publishedAt }: Props) => {
  const date = parseISO(publishedAt)

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='6xl' isCentered>
      <ModalOverlay />
      <ModalContent>
        {/* <ModalHeader fontSize='2rem' textTransform='uppercase'>
          {title}
        </ModalHeader>
        <ModalCloseButton /> */}
        <ModalBody mt='2rem'>
          <NextImage
            src={imgSrc}
            alt='placeholder Image'
            placeholder='blur'
            blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z'
            width='1280'
            height='720'
            className='rounded'
          />
          <Flex direction='column' align='center' p='2rem'>
            <Text textTransform='uppercase' mb='2rem' fontSize='1.9rem' fontWeight='700'>
              {title}
            </Text>
            <Flex align='center' w='100%' mt={{ base: '2rem', md: '0' }}>
              <Tag colorScheme='green' p='1rem' mr='auto'>
                <Icon as={RiLightbulbLine} fontSize='2rem' />
                <TagLabel ml='1rem' fontSize='1.4rem' fontWeight='700'>
                  Banner
                </TagLabel>
              </Tag>
              <Text fontSize='1.5rem'>
                <time dateTime={publishedAt}>{format(date, 'LLLL	d, yyyy')}</time>
              </Text>
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='teal' mr={3} onClick={onClose} fontSize='1.5rem' p='2rem'>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default DesignModal
