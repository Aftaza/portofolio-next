import Image from 'next/image'
import Hero from '^/Hero.svg'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <div className='flex justify-center items-center gap-10 w-3/4 px-5'>
                    <div className='ms-0 h-full w-fit '>
                        <Image
                            src={Hero}
                            alt="Aftaza Picture"
                            className='h-82 w-auto'
                        />
                    </div>

                    <div className='mt-20 ms-0 w-full'>
                        <h1 className='font-bold text-4xl'>M Alfian Taftazani</h1>
                        <h3 className='italic text-xl'>Full Stack Web Developer</h3>
                        <br/> <br/>
                        <Link href="/Home" className='font-bold text-lg ease-in-out hover:text-indigo-500'>
                            &gt; Let&lsquo;s Goo . . .
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
