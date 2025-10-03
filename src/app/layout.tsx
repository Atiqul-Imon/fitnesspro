import type { Metadata, Viewport } from 'next'
import { Roboto, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-roboto'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'FitLife Pro - Premium Fitness & Training Center',
  description: 'Transform your body and mind at FitLife Pro. Premium fitness center offering personal training, group classes, and state-of-the-art equipment.',
  keywords: 'fitness, gym, personal training, workout, health, wellness, strength training',
  authors: [{ name: 'FitLife Pro Team' }],
  openGraph: {
    title: 'FitLife Pro - Premium Fitness & Training Center',
    description: 'Transform your body and mind at FitLife Pro. Premium fitness center offering personal training, group classes, and state-of-the-art equipment.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FitLife Pro - Premium Fitness & Training Center',
    description: 'Transform your body and mind at FitLife Pro. Premium fitness center offering personal training, group classes, and state-of-the-art equipment.',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={`${roboto.variable} ${playfair.variable} w-full overflow-x-hidden`}>
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

