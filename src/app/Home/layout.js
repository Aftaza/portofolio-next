import { Poppins} from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '100']
})

export const metadata = {
    title: 'Home | Aftaza\'s Portofolio',
    description: 'Aftaza Portofolio latest project and description',
  }
  
export default function RootLayout({ children }) {
    return (
      <html lang="en">
          <body className={poppins.className}>
              {children}
          </body>
      </html>
    )
  }