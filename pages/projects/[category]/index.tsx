import { useState } from 'react'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

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
    <main>
      <p>asd</p>
      {posts.name}
    </main>
  )
}
