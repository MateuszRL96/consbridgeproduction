'use client'

import { FaArrowRight, FaFlask, FaIndustry, FaMicroscope, FaShieldAlt, FaCertificate, FaAtom } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Industrial Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.03) 2px,
            rgba(255,255,255,0.03) 4px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.03) 2px,
            rgba(255,255,255,0.03) 4px
          )`
        }}></div>
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 px-5 py-2.5 rounded-full text-sm font-medium">
              <FaIndustry className="text-cyan-600 dark:text-cyan-400" />
              <span>Produkcja Chemiczna od 2022</span>
            </div>
            
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-slate-900 dark:text-white leading-tight">
              Zaawansowana
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 dark:from-cyan-400 dark:via-blue-400 dark:to-teal-400">
                Produkcja Chemiczna
              </span>
              dla Przemysłu
            </h1>

            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
              Nowoczesna fabryka chemiczna wyposażona w najnowocześniejsze technologie produkcyjne. 
              Produkujemy wysokiej jakości środki chemiczne dla przemysłu, rolnictwa i medycyny 
              zgodnie z najwyższymi standardami bezpieczeństwa i jakości.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/kontakt"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Zapytaj o Produkcję
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/uslugi"
                className="bg-slate-800/50 backdrop-blur-sm border-2 border-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-cyan-500 hover:bg-slate-700/50 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                Nasze Możliwości
              </a>
            </div>

            {/* Production Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-300 dark:border-slate-700">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400">5,000+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">m² powierzchni</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400">2+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Lata Doświadczenia</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400">ISO 9001</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Certyfikat</div>
              </div>
            </div>
          </div>

          {/* Right Content - Industrial Feature Cards */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-300 dark:border-slate-700 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl mb-4 shadow-lg shadow-cyan-500/50">
                  <FaFlask />
                </div>
                <h3 className="font-heading font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  Produkcja Chemikaliów
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Nowoczesne linie produkcyjne
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-300 dark:border-slate-700 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl mb-4 shadow-lg shadow-blue-500/50">
                  <FaIndustry />
                </div>
                <h3 className="font-heading font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  Zakład Produkcyjny
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  5000 m² powierzchni produkcyjnej
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-300 dark:border-slate-700 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300 hover:-translate-y-2 hover:border-teal-500/50">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center text-white text-2xl mb-4 shadow-lg shadow-teal-500/50">
                  <FaShieldAlt />
                </div>
                <h3 className="font-heading font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  Bezpieczeństwo
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Najwyższe standardy BHP
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-2 text-white border border-cyan-500/30">
                <div className="flex items-center gap-2 text-3xl font-bold mb-2">
                  <FaCertificate />
                  <span>ISO</span>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Certyfikowane
                </h3>
                <p className="text-cyan-100 text-sm">
                  Najwyższe standardy jakości
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-600 dark:border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-600 dark:bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}