import Image from 'next/image'
import React from 'react'
import Logo1 from '^/Logo.svg'

const Logo = () => {
  return (
    <div className='absolute top-0 right-0 h-auto w-90'>
            <Image src={Logo1} alt="Aftaza Logo's"/>
    </div>
  )
}

export default Logo