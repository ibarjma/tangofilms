export default function About({}) {
  return (
    <>
      <section
        className="w-full bg-cover bg-center "
        style={{
          height: '100vh',
          maxHeight: '50rem',
          backgroundImage: 'url(/about3.jpg) ',
        }}
      >
        <div className="flex h-full w-full items-end justify-start p-8 ">
          <div className="text-left sm:p-4">
            <h1 className="text-3xl font-semibold uppercase text-white sm:text-5xl md:text-6xl">
              About <span className="font-extralight ">us</span>
            </h1>
            {/* <button className="mt-4 rounded bg-blue-600 px-4 py-2 text-sm font-medium uppercase text-white transition-all hover:bg-blue-500 focus:bg-blue-500 focus:outline-none">
              Start project
             </button> */}

            <p className="w-3/4 py-4 text-sm text-white sm:text-base">
              TANGO FILMS fue creada por Diego Conejero y Juampi Lasserre en
              20XX. Nuestras metas son{' '}
              <span className="font-semibold">
                generar y co-producir contenido audiovisual.
              </span>{' '}
              Desarrollar largometrajes, TV y Documentales en colaboración con
              diferenteS países para el mercado mundial.{' '}
              <span className="font-semibold">
                Apoyar nuevas visiones produciendo cortometrajes.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex h-full w-full items-center justify-center bg-white bg-opacity-50 text-black">
          <div className="w-full max-w-4xl text-center">
            <h1 className="mt-8 p-8 pb-4 text-5xl font-semibold italic md:text-6xl">
              meet <span className="font-normal">the team</span>
            </h1>
            <h1 className="s-bold pt-8 pb-4 text-2xl uppercase  tracking-wide md:text-2xl">
              founders
            </h1>

            <div className="mx-4 flex flex-wrap place-content-center items-center divide-y divide-gray-500  pt-2 pb-8 tracking-wider sm:divide-x sm:divide-y-0">
              <p className="s-semibold w-full p-3 uppercase   sm:w-1/3 sm:p-0">
                diego conejero
              </p>
              <p className="s-semibold w-full p-3 uppercase   sm:w-1/3 sm:p-0">
                juan pablo lasserre
              </p>
              <p className="s-semibold  w-full p-3 uppercase sm:w-1/3 sm:p-0">
                julieta biasotti
              </p>
            </div>

            <section className="mx-4 flex flex-wrap place-content-center items-center divide-y divide-gray-500 pt-8 text-center sm:divide-x sm:divide-y-0">
              <div className="flex w-full flex-col items-center justify-center py-4 sm:w-1/4 sm:py-0">
                <p className="s-semibold w-full p-4 px-2 pt-0 text-center font-semibold uppercase">
                  josé maría landi
                </p>
                <div className="flex flex-col items-center justify-center">
                  <p className="w-full p-1 px-2 pb-0 text-sm font-semibold uppercase">
                    executive producer
                  </p>
                  <p className="w-full p-1 px-2  pb-0 text-sm uppercase">
                    argentina
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col items-center justify-center py-4 sm:w-1/4 sm:py-0">
                <p className="s-semibold w-full p-4 px-2 pt-0 text-center font-semibold uppercase">
                  ren biagiola
                </p>
                <div className="flex flex-col items-center justify-center">
                  <p className="w-full p-1 px-2 pb-0 text-sm font-semibold uppercase">
                    line producer
                  </p>
                  <p className="w-full p-1 px-2  pb-0 text-sm uppercase">
                    argentina
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col items-center justify-center py-4 sm:w-1/4 sm:py-0">
                <p className="s-semibold w-full p-4 px-2 pt-0 text-center font-semibold uppercase">
                  alex levi
                </p>
                <div className="flex flex-col items-center justify-center">
                  <p className="w-full p-1 px-2 pb-0 text-sm font-semibold uppercase">
                    executive producer
                  </p>
                  <p className="w-full p-1 px-2  pb-0 text-sm uppercase">
                    los angeles - usa
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col items-center justify-center py-4 sm:w-1/4 sm:py-0">
                <p className="s-semibold w-full p-4 px-2 pt-0 text-center font-semibold uppercase">
                  josé luis campos
                </p>
                <div className="flex flex-col items-center justify-center">
                  <p className="w-full p-1 px-2 pb-0 text-sm font-semibold uppercase">
                    executive producer
                  </p>
                  <p className="w-full p-1 px-2  pb-0 text-sm uppercase">
                    germany
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-2 py-8 pb-2">
              <h1 className="s-bold pt-8 text-2xl  uppercase md:text-2xl">
                contact us
              </h1>
              <div className="flex flex-wrap pt-2 sm:mx-36 md:mx-44">
                <div className="flex w-full flex-col items-center justify-center py-8 sm:w-1/2">
                  <a
                    className="cursor-pointer"
                    target={'_blank'}
                    href="mailto:rbiagiola@farolatam.com"
                  >
                    <p className="w-full p-1 px-2 pb-0 text-sm font-semibold uppercase">
                      ren biagiola
                    </p>
                    <p className="w-full p-1 px-2 text-sm uppercase">
                      rbiagiola@farolatam.com
                    </p>
                  </a>
                </div>
                <div className="flex w-full flex-col items-center justify-center py-8 sm:w-1/2">
                  <a
                    className="cursor-pointer"
                    target={'_blank'}
                    href="mailto:jlandi@farolatam.com"
                  >
                    <p className="w-full p-1 px-2 pb-0 text-sm font-semibold uppercase">
                      josé maría landi
                    </p>
                    <p className="w-full p-1 px-2 text-sm uppercase">
                      jlandi@farolatam.com
                    </p>
                  </a>
                </div>
              </div>
            </section>
            <div className="mb-16 flex w-full items-center justify-center">
              <hr className="m-2 flex w-1/12 justify-center self-center border border-gray-500" />
            </div>

            <section className="mx-2 mb-2 pb-2">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-xl  font-light uppercase  sm:text-2xl md:text-3xl">
                  got an idea?{' '}
                  <span className="font-semibold"> send your seed</span>
                </h1>
                <a
                  target={'_blank'}
                  href="mailto:seeds@farolatam.com?body=My idea for a project is..."
                >
                  <h2 className="s-semibold p-4 text-lg uppercase tracking-wider sm:text-xl">
                    seeds@farolatam.com
                  </h2>
                </a>
                <a
                  className="flex justify-center"
                  target={'_blank'}
                  href="https://faroholding.com"
                >
                  <img
                    src="tango2.png"
                    className="w-40 py-8 pb-6 sm:w-1/3 sm:pb-2"
                    alt=""
                  />
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
