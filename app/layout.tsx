import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apple Liquid Glass Template',
  description: 'Built with Next.js and Apple Vision Pro Liquid Glass UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen relative">{children}</body>
    </html>
  )
}
