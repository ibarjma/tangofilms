import '../styles/globals.css'
import '../styles/index.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Loading from '../components/Loader'
import ThemeContext from '../contexts/blurContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [dark, setDark] = useState(false)
  const toggleDark = (e: boolean) => {
    setTimeout(() => {
      setDark(e)
    }, 300)
  }
  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      <Navbar></Navbar>
      <Loading />
      <div className={dark ? `blur` : ''}>
        <Component {...pageProps} />
      </div>
    </ThemeContext.Provider>
  )
}

export default MyApp
