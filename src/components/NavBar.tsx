import React, { useContext } from 'react'
import Link from 'next/link'
import Router from 'next/router'

import { Box, Flex } from '@chakra-ui/react'

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Box bg='#888' w='100%' p={2} color='white'>
      <Flex justifyContent='space-around' alignItems='center'>
        <Link href='/'>Home</Link>
        <Link href='/budgetOverview'>Budget</Link>
        <Link href='/dashboard'>Dashboard</Link>
        <Link href='/job'>Job</Link>
        <Link href='/new-page'>New Page</Link>
        <Link href='/admin'>Admin</Link>
      </Flex>
    </Box>
  )
}

export default NavBar
