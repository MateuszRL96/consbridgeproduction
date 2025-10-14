'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    { href: '/o-nas', label: 'O Nas' },
    { href: '/kontakt', label: 'Kontakt' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 hidden md:block border-b border-slate-800">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+48123456789" className="flex items-center gap-2 hover:text-cyan-400 transition">
              <FaPhone className="text-xs" />
              <span>+48 123 456 789</span>
            </a>
            <a href="mailto:kontakt@consbridgeproduction.pl" className="flex items-center gap-2 hover:text-cyan-400 transition">
              <FaEnvelope className="text-xs" />
              <span>kontakt@consbridgeproduction.pl</span>
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
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/50">
                CB
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-white leading-tight">
                  Consbridge
                </span>
                <span className="text-xs text-cyan-400 font-medium tracking-wide">
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

            {/* CTA Button */}
            <Link
              href="/kontakt"
              className="hidden lg:block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
            >
              Skontaktuj się
            </Link>

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