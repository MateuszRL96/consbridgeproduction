'use client'

import { FaIndustry, FaFlask, FaCertificate, FaTruck, FaShieldAlt, FaAtom } from 'react-icons/fa'

export default function Stats() {
  const stats = [
    {
      icon: <FaIndustry />,
      number: '5,000',
      unit: 'm²',
      label: 'Powierzchnia produkcyjna',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: <FaFlask />,
      number: '15,000',
      unit: 'ton',
      label: 'Roczna produkcja',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: <FaCertificate />,
      number: 'ISO 9001',
      unit: '',
      label: 'Certyfikat jakości',
      color: 'from-teal-500 to-emerald-600',
    },
    {
      icon: <FaShieldAlt />,
      number: '24/7',
      unit: '',
      label: 'Kontrola bezpieczeństwa',
      color: 'from-indigo-500 to-purple-600',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 border-y border-slate-700">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nasza Fabryka w Liczbach
          </h2>
          <p className="text-slate-400 text-lg">
            Nowoczesne zaplecze produkcyjne i najwyższe standardy jakości
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 group-hover:border-cyan-500/50 transition-all duration-300"></div>
              
              {/* Card Content */}
              <div className="relative p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-white text-2xl shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 group-hover:scale-110 transition-all duration-300`}>
                  {stat.icon}
                </div>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    {stat.number}
                  </div>
                  {stat.unit && (
                    <div className="text-xl font-semibold text-cyan-400">
                      {stat.unit}
                    </div>
                  )}
                </div>
                <div className="text-sm md:text-base text-slate-400">
                  {stat.label}
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional Info Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">200+</div>
            <div className="text-sm text-slate-400 mt-1">Pracowników</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">50+</div>
            <div className="text-sm text-slate-400 mt-1">Produktów</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">15</div>
            <div className="text-sm text-slate-400 mt-1">Krajów eksportu</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">99.9%</div>
            <div className="text-sm text-slate-400 mt-1">Czystość produktów</div>
          </div>
        </div>
      </div>
    </section>
  )
}