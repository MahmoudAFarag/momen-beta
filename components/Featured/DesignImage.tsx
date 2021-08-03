import { Box, Button, useDisclosure } from '@chakra-ui/react'
import NextImage from 'next/image'
import { FaTh } from '@react-icons/all-files/fa/FaTh'

import styles from './Shadow.module.css'
import DesignModal from './DesignModal'

interface Props {
  imgSrc: string
  title: string
  publishedAt: string
}

const DesignImage = ({ imgSrc, title, publishedAt }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box position='relative' className={styles.overlay}>
      <NextImage
        src={imgSrc}
        alt='placeholder Image'
        placeholder='blur'
        blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z'
        width='640'
        height='360'
        className='rounded'
      />

      <Button
        onClick={onOpen}
        variant='solid'
        colorScheme='teal'
        p='2.5rem'
        size='lg'
        fontSize='1.5rem'
        position='absolute'
        left={{ base: '22%', md: '33%' }}
        top={{ base: '40%', md: '45%' }}
        rightIcon={<FaTh />}
      >
        Explore Design
      </Button>
      <DesignModal
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        imgSrc={imgSrc}
        publishedAt={publishedAt}
      />
    </Box>
  )
}

export default DesignImage
