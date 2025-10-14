'use client'

import { FaFlask, FaTruck, FaMicroscope, FaIndustry, FaLeaf, FaShieldAlt } from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      icon: <FaFlask />,
      title: 'Produkty Chemiczne',
      description: 'Szeroka gama produktów chemicznych dla przemysłu, nauki i fotografii. Najwyższa jakość i bezpieczeństwo.',
      features: ['Chemikalia przemysłowe', 'Żywice syntetyczne', 'Tworzywa sztuczne', 'Preparaty konserwujące'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <FaLeaf />,
      title: 'Nawozy i Środki Ochrony',
      description: 'Efektywne nawozy, pestycydy i środki chwastobójcze dla rolnictwa, ogrodnictwa i leśnictwa.',
      features: ['Nawozy azotowe', 'Pestycydy', 'Fungicydy', 'Środki chwastobójcze'],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Produkty Farmaceutyczne',
      description: 'Preparaty farmaceutyczne, weterynaryjne oraz suplementy diety najwyższej jakości.',
      features: ['Preparaty medyczne', 'Produkty weterynaryjne', 'Suplementy diety', 'Środki dezynfekcyjne'],
      color: 'from-red-500 to-red-600',
    },
    {
      icon: <FaIndustry />,
      title: 'Kosmetyki i Detergenty',
      description: 'Profesjonalne kosmetyki, mydła, detergenty i preparaty pielęgnacyjne dla przemysłu i konsumentów.',
      features: ['Kosmetyki przemysłowe', 'Detergenty', 'Olejki eteryczne', 'Preparaty toaletowe'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <FaMicroscope />,
      title: 'Badania i Analizy',
      description: 'Kompleksowe usługi badawcze, analizy laboratoryjne i kontrola jakości produktów.',
      features: ['Badania naukowe', 'Analizy laboratoryjne', 'Kontrola jakości', 'Certyfikacja'],
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: <FaTruck />,
      title: 'Transport i Logistyka',
      description: 'Profesjonalny transport, pakowanie i składowanie towarów chemicznych zgodnie z normami.',
      features: ['Transport specjalistyczny', 'Składowanie', 'Pakowanie', 'Logistyka międzynarodowa'],
      color: 'from-orange-500 to-orange-600',
    },
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-secondary-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Nasze Usługi
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-secondary-900 mt-3 mb-6">
            Kompleksowe Rozwiązania dla Twojej Branży
          </h2>
          <p className="text-lg text-secondary-600">
            Oferujemy szeroki zakres produktów i usług dostosowanych do potrzeb przemysłu, 
            rolnictwa, medycyny i nauki.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-secondary-100"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-3">
                {service.title}
              </h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-secondary-700">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="mt-6 pt-6 border-t border-secondary-100 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#contact" className="text-primary-600 font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Dowiedz się więcej
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}