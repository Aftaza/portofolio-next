import Image from 'next/image'
import React from 'react'
import Plus from '^/Plus.svg'

const Cross = () => {
  return (
    <div className="absolute top-0 right-0 w-40 h-auto">
        <Image src={Plus} alt="The Cross" width={533} height={449} />
    </div>
  )
}

export default Cross