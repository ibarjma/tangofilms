import { useState, useEffect, React } from 'react'

import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'

import CustomCardSlide2 from './CustomCardSlide2'

import { Imagen } from './Image'

const marcas = Array.from({ length: 4 }, (_, i) => i)

export default function CardCarousel2() {
  const [innerWidth, setInnerWidth] = useState(0)

  useEffect(() => {
    const hideMenu = () => {
      setInnerWidth(window.innerWidth)
    }
    setInnerWidth(window.innerWidth)
    window.addEventListener('resize', hideMenu)
  }, [])

  return (
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1.25}
      interval={1000}
      infinite={true}
      isPlaying={false}
      isIntrinsicHeight={true}
      totalSlides={marcas.length}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflowX: 'hidden',
      }}
      visibleSlides={innerWidth < 767 ? 1 : innerWidth < 1023 ? 2 : 3}
    >
      <ButtonBack className="z-20 text-4xl">{'<'}</ButtonBack>
      <Slider>
        {marcas.map((element, index) => (
          <CustomCardSlide2
            content={<Imagen img={element} folder={'carthago'}></Imagen>}
            key={index + 1}
          />
        ))}
      </Slider>
      <ButtonNext className="z-20 text-4xl">{'>'}</ButtonNext>
      {/* <CustomDotGroup slides={7} /> */}
    </CarouselProvider>
  )
}
