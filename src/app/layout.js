import Blops from '@/components/Blops'
import './globals.css'
import { Poppins, Inter } from 'next/font/google'

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
            {children}
            <Blops />
        </body>
    </html>
  )
}
