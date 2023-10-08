import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Menu from './menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'La Vieja Adventures',
  description: 'Tour a Ciudad Esmeralda en el cañon del río La Vieja',
  viewport: 'initial-scale=1, width=device-width'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}</body>
    </html>
  )
}
