import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '7Wealth',
  description: '7Wealth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
