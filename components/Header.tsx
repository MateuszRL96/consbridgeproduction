'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaSun, FaMoon, FaGlobe } from 'react-icons/fa'
import { useTheme } from '@/contexts/ThemeContext'
import { useTranslation } from '@/hooks/useTranslation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { language, translations, getFullUrl, isLoaded } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: translations.header.nav.home },
    { href: '/uslugi', label: translations.header.nav.services },
    { href: '/kariera', label: translations.header.nav.career },
    { href: '/kontakt', label: translations.header.nav.contact },
  ]

  const handleLanguageSwitch = (lang: 'pl' | 'en') => {
    if (!isLoaded) return
    window.location.href = getFullUrl(lang, window.location.pathname)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 dark:bg-slate-900 text-white py-2 hidden md:block border-b border-slate-800 dark:border-slate-800">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href={`tel:+48507070516`} className="flex items-center gap-2 hover:text-cyan-400 transition">
              <FaPhone className="text-xs" />
              <span>{translations.header.phone}</span>
            </a>
            <a href={`mailto:${translations.header.email}`} className="flex items-center gap-2 hover:text-cyan-400 transition">
              <FaEnvelope className="text-xs" />
              <span>{translations.header.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              {translations.header.hours}
            </span>
            {/* Language Switcher */}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-slate-700">
              <FaGlobe className="text-cyan-400 text-xs" />
              <button
                onClick={() => handleLanguageSwitch('pl')}
                className={`px-2 py-1 rounded text-xs font-medium transition ${
                  language === 'pl'
                    ? 'bg-cyan-500 text-white'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
                title="Polish version"
              >
                PL
              </button>
              <span className="text-slate-500">/</span>
              <button
                onClick={() => handleLanguageSwitch('en')}
                className={`px-2 py-1 rounded text-xs font-medium transition ${
                  language === 'en'
                    ? 'bg-cyan-500 text-white'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
                title="English version"
              >
                ENG
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900 shadow-lg shadow-blue-500/10 py-2 lg:py-3 xl:py-4 border-b border-slate-800' 
            : 'bg-slate-900/95 backdrop-blur-sm py-2 lg:py-3 xl:py-4 border-b border-slate-800'
        }`}
      >
        <nav className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 xl:gap-4 group">
              <div className="w-[88px] h-[88px] xl:w-[112px] xl:h-[112px] rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-300 bg-white shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 border-2 border-blue-400/30 group-hover:border-blue-400/60 p-0.5">
                <Image 
                  src="/photos/logo.png" 
                  alt="Consbridge Production Logo" 
                  width={112} 
                  height={112}
                  className="object-contain brightness-110 contrast-110"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl xl:text-3xl text-white leading-tight">
                  Consbridge
                </span>
                <span className="text-sm xl:text-base text-cyan-400 font-medium tracking-wide">
                  PRODUCTION
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8 xl:gap-12">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 font-medium lg:text-base xl:text-lg transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme Toggle, Language Switcher & CTA */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              {/* Language Switcher */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all">
                <FaGlobe className="text-cyan-400 text-sm" />
                <button
                  onClick={() => handleLanguageSwitch('pl')}
                  className={`px-2 py-1 rounded text-xs font-medium transition ${
                    language === 'pl'
                      ? 'bg-cyan-500 text-white'
                      : 'text-slate-300 hover:text-cyan-400'
                  }`}
                  title="Polish version"
                >
                  PL
                </button>
                <span className="text-slate-500">/</span>
                <button
                  onClick={() => handleLanguageSwitch('en')}
                  className={`px-2 py-1 rounded text-xs font-medium transition ${
                    language === 'en'
                      ? 'bg-cyan-500 text-white'
                      : 'text-slate-300 hover:text-cyan-400'
                  }`}
                  title="English version"
                >
                  ENG
                </button>
              </div>

              <button
                onClick={toggleTheme}
                className="p-3 rounded-lg bg-slate-800 dark:bg-slate-800 hover:bg-slate-700 dark:hover:bg-slate-700 text-cyan-400 transition-all duration-300 hover:scale-110"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
              </button>
              <Link
                href="/kontakt"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 xl:px-8 py-3 xl:py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
              >
                {translations.header.cta}
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
                  <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-slate-800 mb-2">
                    <FaGlobe className="text-cyan-400" />
                    <button
                      onClick={() => handleLanguageSwitch('pl')}
                      className={`px-3 py-1 rounded text-sm font-medium transition ${
                        language === 'pl'
                          ? 'bg-cyan-500 text-white'
                          : 'text-slate-300 hover:text-cyan-400'
                      }`}
                      title="Polish version"
                    >
                      PL
                    </button>
                    <span className="text-slate-500">/</span>
                    <button
                      onClick={() => handleLanguageSwitch('en')}
                      className={`px-3 py-1 rounded text-sm font-medium transition ${
                        language === 'en'
                          ? 'bg-cyan-500 text-white'
                          : 'text-slate-300 hover:text-cyan-400'
                      }`}
                      title="English version"
                    >
                      ENG
                    </button>
                  </div>
                </li>
                <li>
                  <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 transition-all mb-2"
                  >
                    {theme === 'dark' ? (
                      <>
                        <FaSun /> Light Mode
                      </>
                    ) : (
                      <>
                        <FaMoon /> Dark Mode
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
                    {translations.header.cta}
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