import '../styles/globals.css'
import '../styles/index.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Loading from '../components/Loader'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar></Navbar>
      <Loading />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
