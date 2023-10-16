import React from 'react'
import Polygon1 from "^/Polygon.svg"
import Image from 'next/image'

const Polygon = () => {
  return (
    <div className='absolute right-0 bottom-0 h-auto w-32'>
        <Image src={Polygon1} alt="Aftaza Logo's"/>
    </div>
  )
}

export default Polygon