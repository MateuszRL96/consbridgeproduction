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
      <body className="font-sans antialiased">
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