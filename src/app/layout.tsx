import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Track Accounting - Professional Accounting Services for Small Businesses',
  description: 'Reliable tax filing, streamlined bookkeeping, and payroll support so you stay compliant and spend less time on numbers. Get your free consultation today.',
  keywords: 'accounting, bookkeeping, tax preparation, payroll, small business, consultation',
  authors: [{ name: 'Track Accounting' }],
  openGraph: {
    title: 'Track Accounting - Professional Accounting Services',
    description: 'Reliable tax filing, streamlined bookkeeping, and payroll support for small businesses.',
    type: 'website',
    locale: 'en_CA',
    siteName: 'Track Accounting',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Track Accounting - Professional Accounting Services',
    description: 'Reliable tax filing, streamlined bookkeeping, and payroll support for small businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="font-body text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}


