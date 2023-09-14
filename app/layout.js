import Header from './Header'
import './globals.css'
import { Heebo } from 'next/font/google'

const font = Heebo({ subsets: ['latin'] })

export const metadata = {
  title: 'Front3nd Mentor',
  description: 'Frontend mentor clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} text-[1.6rem]`}>
        <Header />
        <main>
         {children}
        </main>
      </body>
    </html>
  )
}