'use client'

import { FaFlask, FaTruck, FaMicroscope, FaIndustry, FaLeaf, FaShieldAlt } from 'react-icons/fa'
import { useTranslation } from '@/hooks/useTranslation'

export default function Services() {
  const { translations } = useTranslation()
  
  const serviceKeys = ['chemicals', 'fertilizers', 'pharma', 'cosmetics', 'research', 'transport'] as const
  const icons = [
    <FaFlask key="chemicals" />,
    <FaLeaf key="fertilizers" />,
    <FaShieldAlt key="pharma" />,
    <FaIndustry key="cosmetics" />,
    <FaMicroscope key="research" />,
    <FaTruck key="transport" />,
  ]
  const iconGradient = 'from-blue-500 to-blue-600'
  
  const services = serviceKeys.map((key, index) => {
    const serviceData = translations.services?.items?.[key as keyof typeof translations.services.items]
    return {
      icon: icons[index],
      title: serviceData?.title || 'Service',
      description: serviceData?.desc || 'Service description',
      features: Array.isArray(serviceData?.features) ? serviceData.features : [],
    }
  })

  return (
    <section id="services" className="section-padding bg-transparent">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            {translations.services.badge}
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-secondary-900 mt-3 mb-6">
            {translations.services.title}
          </h2>
          <p className="text-lg text-secondary-600">
            {translations.services.description}
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
              <div className={`w-16 h-16 bg-gradient-to-br ${iconGradient} rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
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
                  {translations.services.moreInfo}
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