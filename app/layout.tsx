import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'W&B - Real Solutions for Africa. Powered by Intelligence.',
  description: 'We use AI and human-centered design to solve Africa\'s most urgent challenges — from health to logistics, education to emergency response.',
  keywords: 'African tech, AI solutions, healthcare, education, agriculture, emergency response, innovation, Africa',
  authors: [{ name: 'W&B' }],
  openGraph: {
    title: 'W&B - Real Solutions for Africa',
    description: 'We use AI and human-centered design to solve Africa\'s most urgent challenges.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'W&B - Real Solutions for Africa',
    description: 'We use AI and human-centered design to solve Africa\'s most urgent challenges.',
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'light';
                document.documentElement.classList.add(theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 