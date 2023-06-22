import { Footer } from '@/components'
import './globals.css'
import Navbar from '@/components/Navbar'
import Providers from '@/app/providers'

export const metadata = {
  title: 'Car Zone ',
  description: 'Car Hub yes its awesome ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative">
      <Providers>
        <Navbar/>
       
        {children}
        <Footer />
        </Providers>
        </body>
    </html>
  )
}
