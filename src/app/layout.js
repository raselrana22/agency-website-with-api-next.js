import Footer from '@/components/footer'
import './globals.css'
import Navbar from '@/components/nav-bar'
import NextTopLoader from 'nextjs-toploader'

export const metadata = {
  title: 'agency website',
}


// this is the rootlayout also the home layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <NextTopLoader color="#269669" height={3} speed={200} shadow="0 0 10px #2299DD,0 0 5px #2299DD" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
