import { Link } from '@chakra-ui/react'
import React from 'react'

interface Props {
  icon: React.ReactNode
  href: string
  label: string
}

const FooterLink = ({ icon, label, href }: Props) => (
  <Link href={href} isExternal aria-label={label} mr='2rem' display='block'>
    {icon}
  </Link>
)

export default FooterLink
