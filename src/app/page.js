import Image from 'next/image'
import Hero from '^/Hero.svg'
import Logo from '^/Logo.svg'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <div className="ms-40 mt-40">
                <div className='grid grid-cols-3 p-2 w-11/12'>
                    <div className='relative ms-5 w-60 '>
                        <Image
                            src={Hero}
                            alt="Aftaza Picture"
                            className='absolute h-80 w-auto'
                        />
                    </div>

                    <div className='mt-20 ms-px w-full'>
                        <h1 className='font-bold text-4xl'>M Alfian Taftazani</h1>
                        <h3 className='italic text-xl'>Full Stack Web Developer</h3>
                        <br/> <br/>
                        <Link href="/Home" className='font-bold text-lg ease-in-out hover:text-indigo-500'>
                            &gt; Let&lsquo;s Goo . . .
                        </Link>
                    </div>
                    <Image src={Logo} alt="Aftaza Logo's"/>
                </div>
            </div>
        </>
    )
}

export default page
