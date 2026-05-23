import Navbar from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { DATA } from '@/data/resume'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import './globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: `${DATA.name}`,
    card: 'summary_large_image'
  },
  verification: {
    google: '',
    yandex: ''
  }
}

// ✅ FIXED: This function now just returns the JSX element
function GridBackground() {
  return <div className="grid-background" />
}

function AmbientGlows() {
  return (
    <>
      <div className="ambient-glow ambient-glow-primary" />
      <div className="ambient-glow ambient-glow-secondary" />
    </>
  )
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased relative overflow-x-hidden',
          fontSans.variable
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          {/* Background layers */}
          <GridBackground />
          <AmbientGlows />
          
          <TooltipProvider delayDuration={0}>
            <ScrollProgress />
            <main className='relative w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-24'>
              {children}
            </main>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}