'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white border-t border-slate-700 dark:border-slate-800">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[72px] h-[72px] rounded-lg flex items-center justify-center bg-white shadow-lg shadow-cyan-500/20 border-2 border-cyan-400/30 p-0.5 hover:shadow-cyan-500/40 hover:border-cyan-400/60 transition-all duration-300">
                <Image 
                  src="/photos/logo.png" 
                  alt="Consbridge Production Logo" 
                  width={72} 
                  height={72}
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
              Nowoczesna fabryka chemiczna. Produkcja wysokiej jakości środków chemicznych dla przemysłu, rolnictwa i medycyny.
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
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Szybkie Linki</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Strona Główna
                </a>
              </li>
              <li>
                <a href="/uslugi" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Usługi
                </a>
              </li>
              <li>
                <a href="/kontakt" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Zakres Produkcji</h3>
            <ul className="space-y-3">
              <li className="text-slate-400 text-sm">Chemikalia Przemysłowe</li>
              <li className="text-slate-400 text-sm">Środki dla Rolnictwa</li>
              <li className="text-slate-400 text-sm">Surowce Kosmetyczne</li>
              <li className="text-slate-400 text-sm">Surowce Farmaceutyczne</li>
              <li className="text-slate-400 text-sm">Kontrola Jakości</li>
              <li className="text-slate-400 text-sm">Logistyka ADR</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  Fryderyka Chopina 94<br />
                  43-600 Jaworzno
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-cyan-400 flex-shrink-0" />
                <a href="tel:+48507070516" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  +48 507 070 516
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400 flex-shrink-0" />
                <a href="mailto:OfficeProduction@consbridgeproduction.pl" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  OfficeProduction@consbridgeproduction.pl
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
              © {currentYear} Consbridge Production. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex gap-6">
              <Link href="/polityka-prywatnosci" className="hover:text-cyan-400 transition-colors">
                Polityka Prywatności
              </Link>
              <Link href="/regulamin" className="hover:text-cyan-400 transition-colors">
                Regulamin
              </Link>
            </div>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-slate-800">
            <p className="text-xs text-slate-600">
              Wykonane przez mkcup2.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}