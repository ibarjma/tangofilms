// import Head from 'next/head'
import Link from 'next/link'
import { VirtualizedPage } from '../components/VirtualPages'
import Image from 'next/image'
// import { useState, useEffect } from 'react'
import facebook from './../public/facebook.svg'
import instagram from './../public/instagram.svg'
import izq from './../public/izq.svg'
import der from './../public/der.svg'

const images = [
  'https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=640',
  'https://unsplash.com/photos/9wg5jCEPBsw/download?force=true&w=640',
  'https://unsplash.com/photos/phIFdC6lA4E/download?force=true&w=640',
]

export default function Home() {
  // const caca = async () => {
  //   let res = await fetch('/api/hello')
  //   console.log(await res.json())
  // }
  // caca()

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: '100vw', height: '100vh' }}>
        <VirtualizedPage>
          {({ index }) => {
            const modulo = index % images.length
            let imageIndex = modulo < 0 ? images.length + modulo : modulo
            return (
              <section
                className="w-full bg-cover bg-center"
                style={{
                  height: '100vh',
                  backgroundImage: `url(${images[imageIndex]})`,
                }}
              >
                <div className="absolute flex h-full w-full items-center justify-between  py-4 sm:py-8	">
                  <div className="m-1 cursor-pointer p-1	">
                    <Image
                      src={izq}
                      alt="Tango-films"
                      width={30}
                      height={30}
                      blurDataURL="data:3."
                      placeholder="blur"
                      draggable={false}
                    />
                  </div>
                  <div className="m-1 cursor-pointer p-1	">
                    <Image
                      src={der}
                      alt="Tango-films"
                      width={30}
                      height={30}
                      blurDataURL="data:3."
                      placeholder="blur"
                      draggable={false}
                    />
                  </div>
                </div>
                <div className="absolute mx-2 flex h-full items-end justify-start py-4 sm:mx-4 sm:py-8">
                  <Link href={'https://instagram.com/tangofilmsla'}>
                    <div className="m-1 cursor-pointer p-1 ">
                      <Image
                        src={instagram}
                        alt="Tangofilms instagram"
                        width={30}
                        height={30}
                        blurDataURL="data:3."
                        placeholder="blur"
                        draggable={false}
                      />
                    </div>
                  </Link>
                  <Link href={'https://facebook.com/tangofilms'}>
                    <div className="m-1 cursor-pointer p-1">
                      <Image
                        src={facebook}
                        alt="Tangofilms facebook"
                        width={30}
                        height={30}
                        blurDataURL="data:3."
                        placeholder="blur"
                        draggable={false}
                      />
                    </div>
                  </Link>
                </div>
                <div className="mx-2 flex h-full flex-col items-end justify-end py-4 sm:mx-4 sm:py-8">
                  {images.map((value, index) => {
                    return (
                      <div
                        onClick={() => {
                          console.log('asd')
                        }}
                        className={`m-1 h-4  w-4 rounded-full ${
                          imageIndex === index || imageIndex > index
                            ? 'bg-white'
                            : 'border border-white'
                        } p-2`}
                      ></div>
                    )
                  })}
                </div>
              </section>
            )
          }}
        </VirtualizedPage>
      </div>
    </div>
  )
}
