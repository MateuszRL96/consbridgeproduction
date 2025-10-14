'use client'

import { FaArrowRight, FaPhone } from 'react-icons/fa'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
            Gotowy na Współpracę?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Skontaktuj się z nami już dziś i dowiedz się, jak możemy wspierać rozwój Twojego biznesu 
            najwyższej jakości produktami i usługami.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group bg-white text-primary-600 px-8 py-4 rounded-lg font-medium text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Wyślij zapytanie
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+48123456789"
              className="bg-transparent text-white px-8 py-4 rounded-lg font-medium text-lg border-2 border-white hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center gap-2"
            >
              <FaPhone />
              +48 123 456 789
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-blue-400/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-200 text-sm">Wsparcie techniczne</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">48h</div>
                <div className="text-blue-200 text-sm">Czas realizacji</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-200 text-sm">Gwarancja jakości</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-200 text-sm">Krajów eksportu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}