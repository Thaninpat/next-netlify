import { AppProps } from 'next/app'
import '../styles/globals.css'
import NavBar from '../components/NavBar'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <CSSReset />
      <NavBar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
