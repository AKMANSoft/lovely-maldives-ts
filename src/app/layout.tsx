import 'reflect-metadata'

import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'

import localFont from 'next/font/local'
// import { dbConnection } from '@/config/db'
import Provider from './provider'

const centuryGothic = localFont({ src: './fonts/century-gothic/gothic.ttf' })

export const metadata: Metadata = {
  title: {
    template: '%s | Lovely Maldives',
    default: 'Lovely Maldives',
  },
  description:
    // eslint-disable-next-line max-len
    'Lovely Maldives, a distinguished travel agency from the Maldives strives to redene Luxury travel experiences in the Maldives.',
}

// dbConnection().catch(() => {})

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactNode {
  return (
    <html lang="en">
      <body className={centuryGothic.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
