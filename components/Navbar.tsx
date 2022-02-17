import logoB from './../public/tango-black.png'
import logoW from './../public/tango-white.png'
import Image from 'next/image'
import Link from 'next/link'
import { Slant as Hamburger } from 'hamburger-react'

export default function Navbar() {
  return (
    <main className="absolute z-20 flex h-20 w-full justify-between">
      <div className="m-8 mt-6 h-full">
        <div className="m-1 w-32 cursor-pointer	p-1">
          <Link href={'/'}>
            <Image
              src={logoW}
              alt="Tango-films"
              blurDataURL="data:3."
              placeholder="blur"
              draggable={false}
            />
          </Link>
        </div>
      </div>
      <div className="m-8 h-full">
        <Hamburger color="#ffff" label="Show menu" />
      </div>
    </main>
  )
}
