'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa'
import { useTranslation } from '@/hooks/useTranslation'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { translations } = useTranslation()

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white border-t border-slate-700 dark:border-slate-800">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[80px] h-[80px] rounded-lg flex items-center justify-center bg-white shadow-lg shadow-cyan-500/20 border-2 border-cyan-400/30 p-0.5 hover:shadow-cyan-500/40 hover:border-cyan-400/60 transition-all duration-300">
                <Image 
                  src="/photos/logo.png" 
                  alt="Consbridge Production Logo" 
                  width={80} 
                  height={80}
                  className="object-contain brightness-110 contrast-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl leading-tight">
                  Consbridge
                </span>
                <span className="text-sm text-cyan-400 font-medium tracking-wide">
                  PRODUCTION
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {translations.footer.description}
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                <FaLinkedin />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">{translations.footer.quickLinks}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  {translations.footer.links.home}
                </Link>
              </li>
              <li>
                <Link href="/uslugi" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  {translations.footer.links.services}
                </Link>
              </li>
              <li>
                <Link href="/kariera" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  {translations.footer.links.career}
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  {translations.footer.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">{translations.footer.production}</h3>
            <ul className="space-y-3">
              {translations.footer.scope.map((item, index) => (
                <li key={index} className="text-slate-400 text-sm">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">{translations.footer.contactTitle}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  {translations.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-cyan-400 flex-shrink-0" />
                <a href={`tel:${translations.header.phone.replace(/\s/g, '')}`} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  {translations.header.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400 flex-shrink-0" />
                <a href={`mailto:${translations.header.email}`} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  {translations.header.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>
              © {currentYear} Consbridge Production. {translations.footer.copyright}
            </p>
            <div className="flex gap-6">
              <Link href="/polityka-prywatnosci" className="hover:text-cyan-400 transition-colors">
                {translations.footer.privacy}
              </Link>
              <Link href="/regulamin" className="hover:text-cyan-400 transition-colors">
                {translations.footer.terms}
              </Link>
            </div>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-slate-800">
            <p className="text-xs text-slate-600">
              {translations.footer.by}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}