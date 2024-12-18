import React from 'react'
import { ThemeProvider } from '../components/theme-provider'
import './globals.css'

export const metadata = {
  title: 'Image Filter App',
  description: 'Filter and search images by tags',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
