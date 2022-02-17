import React from 'react'
import Image from 'next/image'

export const Imagen = ({ img, folder }) => {
  return (
    <div className="flex h-3/4 w-full content-center items-center justify-center">
      <img
        className="h-auto max-h-full w-auto content-center"
        src={`/images/${folder}/${img}.png`}
        alt=""
      />
    </div>
  )
}
