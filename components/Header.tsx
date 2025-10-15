'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '@/contexts/ThemeContext'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Strona Główna' },
    { href: '/uslugi', label: 'Usługi' },
    { href: '/kontakt', label: 'Kontakt' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 dark:bg-slate-900 text-white py-2 hidden md:block border-b border-slate-800 dark:border-slate-800">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+48507070516" className="flex items-center gap-2 hover:text-cyan-400 transition">
              <FaPhone className="text-xs" />
              <span>+48 507 070 516</span>
            </a>
            <a href="mailto:OfficeProduction@consbridgeproduction.pl" className="flex items-center gap-2 hover:text-cyan-400 transition">
              <FaEnvelope className="text-xs" />
              <span>OfficeProduction@consbridgeproduction.pl</span>
            </a>
          </div>
          <div className="text-slate-400">
            Pon - Pt: 8:00 - 16:00
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900 shadow-lg shadow-cyan-500/10 py-3 border-b border-slate-800' 
            : 'bg-slate-900/95 backdrop-blur-sm py-4 border-b border-slate-800'
        }`}
      >
        <nav className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-[72px] h-[72px] rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 bg-white shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 border-2 border-cyan-400/30 group-hover:border-cyan-400/60 p-0.5">
                <Image 
                  src="/photos/logo.png" 
                  alt="Consbridge Production Logo" 
                  width={72} 
                  height={72}
                  className="object-contain brightness-110 contrast-110"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl text-white leading-tight">
                  Consbridge
                </span>
                <span className="text-sm text-cyan-400 font-medium tracking-wide">
                  PRODUCTION
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-cyan-400 font-medium transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme Toggle & CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-3 rounded-lg bg-slate-800 dark:bg-slate-800 hover:bg-slate-700 dark:hover:bg-slate-700 text-cyan-400 transition-all duration-300 hover:scale-110"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
              </button>
              <Link
                href="/kontakt"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
              >
                Skontaktuj się
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white text-2xl p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-slate-800 pt-4 animate-fade-in-up">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-slate-300 hover:text-cyan-400 font-medium transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 transition-all"
                  >
                    {theme === 'dark' ? (
                      <>
                        <FaSun /> Tryb jasny
                      </>
                    ) : (
                      <>
                        <FaMoon /> Tryb ciemny
                      </>
                    )}
                  </button>
                </li>
                <li>
                  <Link
                    href="/kontakt"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:shadow-xl hover:shadow-cyan-500/50 transition-all"
                  >
                    Skontaktuj się
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}