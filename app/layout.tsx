import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { NavTab } from '@/components/NavTab'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import * as React from 'react'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  authors: [
    {
      name: 'Enchanted Realms Staff',
      url: siteConfig.links.author
    }
  ],
  creator: 'Heet Patel',
  icons: [
    {
      url: '/images/serverlogo.ico',
      href: '/images/serverlogo.ico'
    }
  ],
  openGraph: {
    type: 'website',
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: 'en_UK',
    siteName: siteConfig.name,
    images: [
      {
        url: '/serverlogo.jpg',
        alt: siteConfig.name
      }
    ]
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn('min-h-screen w-screen bg-background flex flex-col', inter.className)}>
        <NavTab />
        <div className='flex-1 relative'>
          {children}
        </div>
        <Toaster duration={1500} richColors/>
      </body>
    </html>
  )
}