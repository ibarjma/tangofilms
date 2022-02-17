import '../styles/globals.css'
import '../styles/index.css'
import Navbar from '../components/Navbar'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
