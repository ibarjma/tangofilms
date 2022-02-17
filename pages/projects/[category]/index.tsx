import { useState } from 'react'
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Link from 'next/link'

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   let res = await fetch('http://localhost:3000/api/hello')

//   const posts = await res.json()

//   return {
//     props: { posts }, // will be passed to the page component as props
//   }
// }

export default function Category(props: any) {
  const [posts, setPosts] = useState(props.posts)

  return (
    <>
      <section className="mb-4 h-full w-full bg-white pt-16">
        <div className="flex h-full w-full items-center justify-center  text-black">
          <div className="w-full max-w-6xl">
            <h1 className=" flex justify-center text-2xl font-bold sm:text-4xl">
              PROJECTS
            </h1>
            <h2 className="flex justify-center py-1 text-2xl first-letter:font-semibold sm:py-2 sm:text-4xl ">
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
        <div className="flex h-full w-full items-end justify-start p-2 sm:p-8 ">
          <div className="flex flex-col">
            <div className="p-2 text-left sm:p-4">
              <h1 className="text-4xl uppercase text-white sm:text-5xl md:text-6xl">
                Carthago
              </h1>
            </div>
            <Link href={'/projects/category/title'}>
              <button className="text-md m-2 my-4 w-28 border border-white bg-transparent px-4 py-2 pb-4 text-xl font-extralight italic text-white transition-all hover:border-white hover:bg-black  focus:outline-none sm:m-4 sm:w-40 sm:text-3xl">
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
        <div className="flex h-full w-full items-end justify-start p-2 sm:p-8 ">
          <div className="flex flex-col">
            <div className="p-2 text-left sm:p-4">
              <h1 className="text-4xl uppercase text-white sm:text-5xl md:text-6xl">
                Carthago
              </h1>
            </div>
            <Link href={'/projects/category/title'}>
              <button className="text-md m-2 my-4 w-28 border border-white bg-transparent px-4 py-2 pb-4 text-xl font-extralight italic text-white transition-all hover:border-white hover:bg-black  focus:outline-none sm:m-4 sm:w-40 sm:text-3xl">
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
        <div className="flex h-full w-full items-end justify-start p-2 sm:p-8 ">
          <div className="flex flex-col">
            <div className="p-2 text-left sm:p-4">
              <h1 className="text-4xl uppercase text-white sm:text-5xl md:text-6xl">
                Carthago
              </h1>
            </div>
            <Link href={'/projects/category/title'}>
              <button className="text-md m-2 my-4 w-28 border border-white bg-transparent px-4 py-2 pb-4 text-xl font-extralight italic text-white transition-all hover:border-white hover:bg-black  focus:outline-none sm:m-4 sm:w-40 sm:text-3xl">
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
        <div className="flex h-full w-full items-end justify-start p-2 sm:p-8 ">
          <div className="flex flex-col">
            <div className="p-2 text-left sm:p-4">
              <h1 className="text-4xl uppercase text-white sm:text-5xl md:text-6xl">
                Carthago
              </h1>
            </div>
            <Link href={'/projects/category/title'}>
              <button className="text-md m-2 my-4 w-28 border border-white bg-transparent px-4 py-2 pb-4 text-xl font-extralight italic text-white transition-all hover:border-white hover:bg-black  focus:outline-none sm:m-4 sm:w-40 sm:text-3xl">
                wach
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
