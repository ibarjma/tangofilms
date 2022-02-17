import { useState } from 'react'
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   let res = await fetch('http://localhost:3000/api/hello')

//   const posts = await res.json()

//   return {
//     props: { posts }, // will be passed to the page component as props
//   }
// }

export default function Title(props: any) {
  const [posts, setPosts] = useState(props.posts)

  return (
    <>
      <section
        className="w-full bg-cover bg-center"
        style={{
          height: '32rem',
          maxHeight: '50rem',
          backgroundImage: 'url(/0.png) ',
        }}
      >
        {/* <p>asd</p>
      {posts.name} */}
        <div className="flex h-full w-full items-end justify-center">
          <hr className="mb-12 flex w-6/12 justify-center self-end border border-white bg-white " />
        </div>
      </section>

      <section className="h-full w-full bg-black">
        <div className="flex h-full w-full items-center justify-center  text-white">
          <div className="w-full max-w-6xl">
            <div className="flex flex-wrap">
              <div className="w-full sm:w-7/12">
                <h2 className="px-8 pt-8 pb-1 text-xl font-light uppercase sm:text-xl">
                  pre producción
                </h2>
                <h1 className="p-8 pb-4 pt-2 text-4xl font-semibold uppercase md:text-5xl">
                  carthago
                </h1>
                <p className="p-8">
                  Malena es una médica de clase media de Buenos Aires. Una tarde
                  recibe el llamado del doctor Costas quién le informa que debe
                  viajar inmediatamente al norte del país, el bebe que estaba
                  esperando está por nacer. De manera súbita y casi sin pensarlo
                  Malena decide emprender un viaje incierto, lleno de
                  encrucijadas en el que deberá enfrentarse a todo tipo de
                  obstáculos legales y morales que le harán preguntarse
                  constantemente que límites está dispuesta a cruzar para
                  conseguir aquello que más desea.
                </p>
                <div className="p-8 pt-4">
                  <p className="py-2 font-semibold uppercase">
                    Estreno:{' '}
                    <span className="font-light normal-case">
                      14 de septiembre 2017
                    </span>
                  </p>
                  <p className="py-2 font-semibold uppercase">
                    Duración:{' '}
                    <span className="font-light normal-case">95 minutos</span>
                  </p>
                  <p className="py-2 font-semibold uppercase">
                    Formato: <span className="font-light normal-case">4k</span>
                  </p>
                </div>
              </div>
              <div className="w-full divide-y divide-white py-12 px-8 sm:w-5/12 sm:pl-0">
                <div className="flex flex-col p-4">
                  <h1 className="text-md  font-semibold  ">Dirigida por</h1>
                  <p className="text-md  font-light  ">Diego Lerman</p>
                </div>
                <div className="flex flex-col p-4">
                  <h1 className="text-md  font-semibold  ">Producida por</h1>
                  <p className="text-md  font-light  ">Campo cine</p>
                </div>
                <div className="flex flex-col p-4">
                  <h1 className="text-md  font-semibold  ">
                    En coproducción con
                  </h1>
                  <p className="text-md  font-light  ">
                    Bossa Nova (Brasil) - Bellota Films (Francia) Staron Films
                    (Polonia) - 27 Films (Alemania) Productora MG (Argentina)
                    -Telefe (Argentina) ACT3 (Dinamarca) - Snowglobe (Dinamarca)
                  </p>
                </div>
                <div className="flex flex-col p-4">
                  <h1 className="text-md  font-semibold  ">
                    Ventas internacionales
                  </h1>
                  <p className="text-md  font-light  ">Film Factory</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex h-full w-full items-center justify-center bg-black text-white">
        <div className="w-full max-w-6xl">
          <h1 className="p-8 pb-4 pt-2 text-4xl font-light  md:text-5xl">
            dossier
          </h1>
        </div>
      </section>
    </>
  )
}
