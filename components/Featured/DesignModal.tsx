import NextImage from 'next/image'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

interface Props {
  isOpen: boolean
  onClose: () => void
  title: string
  imgSrc: string
}

const DesignModal = ({ isOpen, onClose, title, imgSrc }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='6xl' isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize='2rem' textTransform='uppercase'>
          {title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <NextImage
            src={imgSrc}
            alt='placeholder Image'
            placeholder='blur'
            blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z'
            width='1280'
            height='720'
            className='rounded'
          />
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
