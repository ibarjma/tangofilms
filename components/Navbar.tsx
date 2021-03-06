import logoB from './../public/tango-black.png'
import logoW from './../public/tango-white.png'
import Image from 'next/image'
import Link from 'next/link'
import { Slant as Hamburger } from 'hamburger-react'
import { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import ThemeContext from '../contexts/blurContext'

export default function Navbar() {
  const { dark, toggleDark } = useContext(ThemeContext)
  const handleOnClick = (e: boolean) => {
    toggleDark(e)
  }

  const router = useRouter()
  const [path, setPath] = useState('/')
  useEffect(() => {
    setPath(router.pathname)
  }, [router.pathname])

  // const handleBlanco = () => {
  //   if (
  //     path === '/' ||
  //     path === '/about' ||
  //     path === '/projects/[category]/[title]'
  //   ) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  useEffect(() => {
    let node = document.getElementsByClassName('hamburger-react')[0]
      .childNodes[1] as HTMLElement
    node.classList.add('w')
  }, [])

  const handleSubMenu = (e: any) => {
    e.stopPropagation()
    shown2 === true ? setShown2(false) : setShown2(true)
  }

  const handleShown = (bool: boolean) => {
    if (bool === true) {
      let node = document.getElementsByClassName('hamburger-react')[0]
        .childNodes[1] as HTMLElement
      node.classList.remove('w')
    } else {
      let node = document.getElementsByClassName('hamburger-react')[0]
        .childNodes[1] as HTMLElement
      node.classList.add('w')
    }

    setShown(bool)
    handleOnClick(bool)
  }
  const [shown, setShown] = useState(false)

  const [shown2, setShown2] = useState(false)

  const showMenu = {
    enter: {
      opacity: 1,
      y: 0,
      display: 'flex',
      innerHeight: '100vh',
    },
    exit: {
      y: -5,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: 'none',
      },
      innerHeight: '80vh',
    },
  }

  const showMenu2 = {
    enter: {
      opacity: 1,
      y: 0,
      display: 'flex',
      innerHeight: '100vh',
    },
    exit: {
      y: -5,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: 'none',
      },
      innerHeight: '80vh',
    },
  }

  return (
    <main
      style={shown ? { height: '99.9vh' } : { height: '0.1vh' }}
      className={`fixed z-20 flex  w-full justify-between`}
    >
      <div className="m-3 h-max  sm:m-4 sm:mt-6 ">
        <div className="m-1 w-24 cursor-pointer p-1	sm:w-32">
          <Link href={'/'}>
            <Image
              src={
                path === '/' ||
                path === '/about' ||
                path === '/projects/[category]/[title]'
                  ? logoW
                  : logoB
              }
              alt="Tango-films"
              // blurDataURL="data:3."
              // placeholder="blur"
              draggable={false}
            />
          </Link>
        </div>
      </div>
      <motion.section
        className=" m-3 mb-0 sm:m-8 sm:mx-4"
        onHoverStart={() => handleShown(true)}
        onClick={() => {
          shown === true ? handleShown(false) : handleShown(true)
        }}
      >
        <Hamburger
          color={
            path === '/' ||
            path === '/about' ||
            path === '/projects/[category]/[title]'
              ? '#fff'
              : '#000'
          }
          label="Show menu"
          toggled={shown}
          toggle={setShown}
        />

        <motion.ul
          variants={showMenu}
          initial="exit"
          animate={shown ? 'enter' : 'exit'}
          className="border-blue-strong absolute left-0 -top-40 -z-10 flex h-full w-full flex-col items-start justify-center  bg-cover p-8 text-2xl text-white sm:pl-16 sm:text-3xl"
          transition={{ duration: 0.75 }}
        >
          <Link href="/">
            <motion.li
              whileHover={{
                color: '#d2d8d8',
                x: 4,
              }}
              transition={{ duration: 0.2 }}
              className="z-20 cursor-pointer p-1 font-light uppercase italic text-white"
            >
              home
            </motion.li>
          </Link>

          <motion.li
            whileHover={{
              color: '#d2d8d8',
              x: 4,
            }}
            transition={{ duration: 0.72 }}
            className={
              shown2
                ? `z-20 cursor-pointer p-1 font-semibold uppercase italic text-white`
                : 'z-20 cursor-pointer p-1 font-light uppercase italic text-white'
            }
            onHoverStart={() => setShown2(true)}
            onClick={(e) => {
              handleSubMenu(e)
            }}
          >
            projects
          </motion.li>

          {/* submenu */}

          <motion.ul
            variants={showMenu2}
            initial="exit"
            animate={shown2 ? 'enter' : 'exit'}
            className="border-blue-strong relative ml-2 flex h-auto w-full flex-col items-start justify-center border border-l border-t-0 border-r-0 border-b-0 p-2 pl-4 text-2xl text-white sm:text-3xl"
            transition={{ duration: 0.75 }}
          >
            <Link href="/projects/feature-films">
              <motion.li
                whileHover={{
                  color: '#d2d8d8',
                  x: 4,
                }}
                transition={{ duration: 0.2 }}
                className="z-20 cursor-pointer p-1 font-light capitalize italic text-white"
              >
                Feature films
              </motion.li>
            </Link>

            <Link href="/projects/tv-series">
              <motion.li
                whileHover={{
                  color: '#d2d8d8',
                  x: 4,
                }}
                transition={{ duration: 0.2 }}
                className="z-20 cursor-pointer p-1 font-light capitalize italic text-white"
              >
                TV series
              </motion.li>
            </Link>

            <Link href="/projects/short-films">
              <motion.li
                whileHover={{
                  color: '#d2d8d8',
                  x: 4,
                }}
                transition={{ duration: 0.2 }}
                className="z-20 cursor-pointer p-1 font-light capitalize italic text-white"
              >
                short films
              </motion.li>
            </Link>
            <Link href="/projects/documentary">
              <motion.li
                whileHover={{
                  color: '#d2d8d8',
                  x: 4,
                }}
                transition={{ duration: 0.2 }}
                className="z-20 cursor-pointer p-1 font-light capitalize italic text-white"
              >
                documentary
              </motion.li>
            </Link>

            <motion.li
              whileHover={{
                color: '#d2d8d8',
                x: 4,
              }}
              transition={{ duration: 0.2 }}
              className="z-20 cursor-pointer p-1 font-light capitalize italic text-white"
            >
              <a target={'_blank'} href="https://80daysfilms.com">
                commercials
              </a>
            </motion.li>
          </motion.ul>

          {/* end submenu */}

          <Link href="/about">
            <motion.li
              whileHover={{
                color: '#d2d8d8',
                x: 4,
              }}
              transition={{ duration: 0.2 }}
              className="z-20 cursor-pointer p-1 font-light uppercase italic text-white"
            >
              about & contact
            </motion.li>
          </Link>
        </motion.ul>
      </motion.section>
    </main>
  )
}
