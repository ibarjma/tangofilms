import Head from 'next/head'
import Link from 'next/link'
import { VirtualizedPage } from '../components/VirtualPages'
import { useState, useEffect } from 'react'

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
                <div className="mx-2 flex h-full flex-col items-end justify-end py-4 sm:mx-4 sm:py-8">
                  {images.map((value, index) => {
                    return (
                      <div
                        onClick={() => {
                          console.log('asd')
                        }}
                        className={`m-1 h-4  w-4 rounded-full ${
                          imageIndex === index
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
