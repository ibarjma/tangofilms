import logoB from './../public/tango-black.png'
import logoW from './../public/tango-white.png'
import Image from 'next/image'
import Link from 'next/link'
import { Slant as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [shown, setShown] = useState(false)

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

  return (
    <main
      style={shown ? { height: '99.9vh' } : { height: '0.1vh' }}
      className={`fixed z-20 flex  w-full justify-between`}
    >
      <div className="m-8  mt-6 h-max ">
        <div className="m-1 w-32 cursor-pointer	p-1">
          <Link href={'/'}>
            <Image
              src={logoW}
              alt="Tango-films"
              // blurDataURL="data:3."
              // placeholder="blur"
              draggable={false}
            />
          </Link>
        </div>
      </div>
      <motion.section
        className=" m-8 mb-0 "
        onHoverStart={() => setShown(true)}
        onClick={() => {
          shown === true ? setShown(false) : setShown(true)
        }}
      >
        <Hamburger
          color="#ffff"
          label="Show menu"
          toggled={shown}
          toggle={setShown}
        />

        <motion.ul
          variants={showMenu}
          initial="exit"
          animate={shown ? 'enter' : 'exit'}
          className="border-blue-strong absolute left-0 top-0 -z-10 flex h-full w-full flex-col items-start justify-center bg-black bg-opacity-50 bg-cover p-8 pl-16 text-3xl text-white"
          transition={{ duration: 0.75 }}
        >
          <Link href="/">
            <motion.li
              whileHover={{
                color: '#d2d8d8',
                x: 2,
                textDecoration: 'underline',
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
              x: 2,
              textDecoration: 'underline',
            }}
            transition={{ duration: 0.72 }}
            className="z-20 cursor-pointer p-1 font-light uppercase italic text-white"
          >
            projects
          </motion.li>
          <Link href="/about">
            <motion.li
              whileHover={{
                color: '#d2d8d8',
                x: 2,
                textDecoration: 'underline',
              }}
              transition={{ duration: 0.2 }}
              className="z-20 cursor-pointer p-1 font-light uppercase italic text-white"
            >
              about + contact
            </motion.li>
          </Link>
        </motion.ul>
      </motion.section>
    </main>
  )
}
