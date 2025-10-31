import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Consbridge Production - Fabryka Chemiczna | Produkcja Środków Chemicznych',
  description: 'Nowoczesna fabryka chemiczna w Jaworznie. Produkcja wysokiej jakości środków chemicznych dla przemysłu, rolnictwa i medycyny. Certyfikaty ISO, 5000m² powierzchni produkcyjnej, nowoczesne technologie.',
  keywords: 'fabryka chemiczna, produkcja chemikaliów, środki chemiczne, chemikalia przemysłowe, produkcja na zamówienie, ISO 9001, kontrola jakości, transport ADR, Jaworzno',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white">
        {/* Global honeycomb background */}
        <div
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52'%3E%3Cpath d='M30 1 L59 16 L59 36 L30 51 L1 36 L1 16 Z' fill='none' stroke='rgba(37,99,235,0.08)' stroke-width='1'/%3E%3C/svg%3E\")",
            backgroundSize: '60px 52px'
          }}
        />
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}