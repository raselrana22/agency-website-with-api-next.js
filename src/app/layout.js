import './globals.css'

export const metadata = {
  title: 'agency website',
}


// this is the rootlayout also the home layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  )
}
