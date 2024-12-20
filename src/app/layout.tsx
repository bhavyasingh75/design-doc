import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Design Documentation',
  description: 'Guidelines and best practices for design components',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex min-h-screen">
          <Navigation />
          <main className="flex-1 p-8">{children}</main>
        </div>
      </body>
    </html>
  )
}

export default RootLayout

