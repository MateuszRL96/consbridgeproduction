'use client'

import { FaCheckCircle, FaAward, FaLeaf, FaShieldAlt, FaGlobeEurope } from 'react-icons/fa'

export default function About() {
  const values = [
    {
      icon: <FaAward />,
      title: 'Najwyższa Jakość',
      description: 'Certyfikowane produkty zgodne z międzynarodowymi standardami ISO',
    },
    {
      icon: <FaLeaf />,
      title: 'Ekologia',
      description: 'Dbamy o środowisko i promujemy zrównoważony rozwój',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Bezpieczeństwo',
      description: 'Najwyższe standardy bezpieczeństwa w produkcji i transporcie',
    },
    {
      icon: <FaGlobeEurope />,
      title: 'Globalny Zasięg',
      description: 'Eksport do 15 krajów w Europie i na świecie',
    },
  ]

  const achievements = [
    'Ponad 25 lat doświadczenia w branży chemicznej',
    'Certyfikaty ISO 9001, ISO 14001, ISO 45001',
    'Własne laboratorium badawcze',
    'Zespół doświadczonych specjalistów',
    'Nowoczesny park maszynowy',
    'Kompleksowa obsługa klienta',
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-secondary-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              O Nas
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-secondary-900 mt-3 mb-6">
              Lider w Branży Chemicznej od 1998 Roku
            </h2>
            <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
              Consbridge Production to dynamicznie rozwijająca się firma specjalizująca się w produkcji 
              i dystrybucji produktów chemicznych, nawozów oraz świadczeniu usług badawczych.
            </p>
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              Nasza misja to dostarczanie najwyższej jakości produktów i usług, które wspierają rozwój 
              przemysłu, rolnictwa i medycyny. Stawiamy na innowacje, bezpieczeństwo i zrównoważony rozwój.
            </p>

            {/* Achievements */}
            <div className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-secondary-700">{achievement}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block bg-gradient-primary text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Poznaj nas bliżej
            </a>
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-secondary-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white text-2xl mb-4">
                  {value.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg text-secondary-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 pt-16 border-t border-secondary-200">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-3xl text-secondary-900 mb-4">
              Certyfikaty i Standardy
            </h3>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Nasze produkty i procesy produkcyjne spełniają najwyższe standardy jakości i bezpieczeństwa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['ISO 9001', 'ISO 14001', 'ISO 45001', 'GMP'].map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center border border-secondary-100"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">{cert}</div>
                <div className="text-sm text-secondary-600">Certyfikat</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}