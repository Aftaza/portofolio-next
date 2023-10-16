import React from 'react'
import Circle1 from "^/Circle.svg"
import Image from 'next/image'

const Circle = () => {
  return (
    <div className="absolute top-0 w-40 h-auto">
        <Image src={Circle1} alt="The Bloops" width={533} height={449} />
    </div>
  )
}

export default Circle