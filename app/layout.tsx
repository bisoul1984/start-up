import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'W&B - Redefining What’s Possible for Africa. Africa, Reimagined.',
  description: 'We harness AI and human-centered design to transform Africa’s most pressing challenges into opportunities — from health to logistics, education to emergency response, and beyond.',
  keywords: 'African tech, AI solutions, healthcare, education, agriculture, emergency response, innovation, Africa',
  authors: [{ name: 'W&B' }],
  openGraph: {
    title: 'W&B - Redefining What’s Possible for Africa. Africa, Reimagined.',
    description: 'We harness AI and human-centered design to transform Africa’s most pressing challenges into opportunities — from health to logistics, education to emergency response, and beyond.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'W&B - Redefining What’s Possible for Africa. Africa, Reimagined',
    description: 'We harness AI and human-centered design to transform Africa’s most pressing challenges into opportunities — from health to logistics, education to emergency response, and beyond.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 