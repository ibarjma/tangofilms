import { useState } from 'react'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Link from 'next/link'

export const getServerSideProps: GetServerSideProps = async (context) => {
  let res = await fetch('http://localhost:3000/api/hello')

  const posts = await res.json()

  return {
    props: { posts }, // will be passed to the page component as props
  }
}

export default function Category(props: any) {
  const [posts, setPosts] = useState(props.posts)

  return (
    <>
      <section className="my-8 mb-4 h-full w-full bg-white pt-16">
        <div className="flex h-full w-full items-center justify-center  text-black">
          <div className="w-full max-w-6xl">
            <h1 className=" flex justify-center text-4xl font-bold">
              PROJECTS
            </h1>
            <h2 className="flex justify-center py-2 text-4xl font-semibold ">
              feature films
            </h2>
          </div>
        </div>
      </section>
      <section
        className="w-full bg-cover bg-center grayscale transition-all hover:grayscale-0"
        style={{
          height: '32rem',
          maxHeight: '50rem',
          backgroundImage: 'url(/0.png) ',
        }}
      >
        <div className="flex h-full w-full items-end justify-start p-8 ">
          <div className="flex flex-col">
            <div className="text-left sm:p-4">
              <h1 className="text-5xl uppercase text-white md:text-6xl">
                Carthago
              </h1>
            </div>
            <Link href={'/projects/category/title'}>
              <button className="text-md m-4 w-40 border border-white bg-transparent px-4 py-2 pb-4 text-3xl font-extralight italic text-white  transition-all hover:border-white hover:bg-black focus:outline-none">
                wach
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section
        className="w-full bg-cover bg-center grayscale transition-all hover:grayscale-0"
        style={{
          height: '32rem',
          maxHeight: '50rem',
          backgroundImage: 'url(/0.png) ',
        }}
      >
        <div className="flex h-full w-full items-end justify-start p-8 ">
          <div className="flex flex-col">
            <div className="text-left sm:p-4">
              <h1 className="text-5xl uppercase text-white md:text-6xl">
                Carthago
              </h1>
            </div>
            <Link href={'/projects/category/title'}>
              <button className="text-md m-4 w-40 border border-white bg-transparent px-4 py-2 pb-4 text-3xl font-extralight italic text-white  transition-all hover:border-white hover:bg-black focus:outline-none">
                wach
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section
        className="w-full bg-cover bg-center grayscale transition-all hover:grayscale-0"
        style={{
          height: '32rem',
          maxHeight: '50rem',
          backgroundImage: 'url(/0.png) ',
        }}
      >
        <div className="flex h-full w-full items-end justify-start p-8 ">
          <div className="flex flex-col">
            <div className="text-left sm:p-4">
              <h1 className="text-5xl uppercase text-white md:text-6xl">
                Carthago
              </h1>
            </div>
            <Link href={'/projects/category/title'}>
              <button className="text-md m-4 w-40 border border-white bg-transparent px-4 py-2 pb-4 text-3xl font-extralight italic text-white  transition-all hover:border-white hover:bg-black focus:outline-none">
                wach
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section
        className="w-full bg-cover bg-center grayscale transition-all hover:grayscale-0"
        style={{
          height: '32rem',
          maxHeight: '50rem',
          backgroundImage: 'url(/0.png) ',
        }}
      >
        <div className="flex h-full w-full items-end justify-start p-8 ">
          <div className="flex flex-col">
            <div className="text-left sm:p-4">
              <h1 className="text-5xl uppercase text-white md:text-6xl">
                Carthago
              </h1>
            </div>
            <Link href={'/projects/category/title'}>
              <button className="text-md m-4 w-40 border border-white bg-transparent px-4 py-2 pb-4 text-3xl font-extralight italic text-white  transition-all hover:border-white hover:bg-black focus:outline-none">
                wach
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section
        className="w-full bg-cover bg-center grayscale transition-all hover:grayscale-0"
        style={{
          height: '32rem',
          maxHeight: '50rem',
          backgroundImage: 'url(/0.png) ',
        }}
      >
        <div className="flex h-full w-full items-end justify-start p-8 ">
          <div className="flex flex-col">
            <div className="text-left sm:p-4">
              <h1 className="text-5xl uppercase text-white md:text-6xl">
                Carthago
              </h1>
            </div>
            <Link href={'/projects/category/title'}>
              <button className="text-md m-4 w-40 border border-white bg-transparent px-4 py-2 pb-4 text-3xl font-extralight italic text-white  transition-all hover:border-white hover:bg-black focus:outline-none">
                wach
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
