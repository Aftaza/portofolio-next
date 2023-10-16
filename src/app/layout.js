import Blops from '@/components/Blops'
import './globals.css'
import { Poppins, Inter } from 'next/font/google'
import Cross from '@/components/Cross'
import Circle from '@/components/Circle'
import Logo from '@/components/Logo'
import Polygon from '@/components/Polygon'
import ParticlesBg from '@/components/ParticlesBg'

const poppins = Poppins({
     subsets: ['latin'],
     weight: ['300', '100']
})

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Aftaza | Portofolio',
  description: 'Aftaza Portofolio latest project and description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={poppins.className}>
            <ParticlesBg className="absolute" />
            <Circle />
            <Cross />
            {children}
            <Logo />
            <Polygon />
            <Blops />
        </body>
    </html>
  )
}
