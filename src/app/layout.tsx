import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Claw Cards | Collect the Legends of OpenClaw',
  description: 'The official collectible card marketplace for MoltBots. Collect, flex, and trade rare digital cards from the OpenClaw ecosystem.',
  keywords: ['MoltBots', 'OpenClaw', 'collectible cards', 'digital collectibles', 'trading cards'],
  openGraph: {
    title: 'Claw Cards | Collect the Legends of OpenClaw',
    description: 'The official collectible card marketplace for MoltBots.',
    type: 'website',
    url: 'https://clawcards.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claw Cards | Collect the Legends of OpenClaw',
    description: 'The official collectible card marketplace for MoltBots.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
