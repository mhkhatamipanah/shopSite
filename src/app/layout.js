import './globals.css'
import Navbar from '@/Components/User/NavbarMobile/Navbar'


export const metadata = {
  title: 'Shopping website',
  // description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        {children}</body>
    </html>
  )
}
