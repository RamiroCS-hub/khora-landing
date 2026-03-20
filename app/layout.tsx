import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const KHORA_LOGO_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%202%20feb%202026%2C%2007_33_48%20p.m.-agTM3kgW0EZxhQtisrkMifJlF6xhlZ.png";

export const metadata: Metadata = {
  title: 'Khora | People Intelligence con IA',
  description: 'Agentes de IA para entender y potenciar organizaciones tecnológicas. People Intelligence que transforma datos en decisiones estratégicas.',
  generator: 'v0.app',
  icons: {
    icon: KHORA_LOGO_URL,
    shortcut: KHORA_LOGO_URL,
    apple: KHORA_LOGO_URL,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
