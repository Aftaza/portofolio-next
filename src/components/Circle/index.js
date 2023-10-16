import React from 'react'
import Circlee from "^/Circle.svg"
import Image from 'next/image'

const Circle = () => {
  return (
    <div className="absolute top-0 w-40 h-auto">
        <Image src={Circlee} alt="The Bloops" width={533} height={449} />
    </div>
  )
}

export default Circle