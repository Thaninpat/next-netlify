import { Flex } from '@chakra-ui/react'
import Link from 'next/link'

const Index = () => {
  return (
    <Flex align={'center'} justify={'center'} p={20}>
      <Link href='/new-page'>New Page &rarr;</Link>
    </Flex>
  )
}

export default Index
