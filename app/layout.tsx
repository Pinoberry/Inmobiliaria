import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Inmobiliaria Central',
  description: 'Tu socio confiable en bienes raíces',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
