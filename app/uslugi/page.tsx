'use client'

import { useTranslation } from '@/hooks/useTranslation'
import Services from '@/components/Services'
import { FaFlask, FaSeedling, FaPills, FaSprayCan, FaMicroscope, FaTruck, FaArrowRight, FaCertificate, FaShieldAlt, FaPhone, FaCheckCircle, FaBox, FaCog } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

export default function ServicesPage() {
  const { t, translations } = useTranslation()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-white py-20 border-b border-slate-300 dark:border-slate-700">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, cyan 2px, cyan 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, cyan 2px, cyan 4px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
          
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
              {t('servicesPage.title')}
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8">
              {t('servicesPage.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-cyan-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/50">
                <span className="font-semibold text-slate-900 dark:text-white">{t('servicesPage.heroProducts')}</span>
              </div>
              <div className="bg-cyan-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/50">
                <span className="font-semibold text-slate-900 dark:text-white">{t('servicesPage.heroCategories')}</span>
              </div>
              <div className="bg-cyan-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/50">
                <span className="font-semibold text-slate-900 dark:text-white">{t('servicesPage.heroCapacity')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Konfekcjonowanie i Opakowanie */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-600 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <FaBox />
                  <span>{t('servicesPage.packaging.title')}</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                  {t('servicesPage.packaging.title')}
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  {t('servicesPage.packaging.description')}
                </p>
                <ul className="space-y-4 mb-8">
                  {(translations?.servicesPage?.packaging?.features || []).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                      <FaCheckCircle className="text-orange-500 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/kontakt"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105 transition-all"
                >
                  {t('servicesPage.cooperation')}
                  <FaArrowRight />
                </Link>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-2xl blur-2xl"></div>
                <Image
                  src="/photos/uslugi/21e076ef-0070-4e0d-a340-5c9bffb5788e.jpg"
                  alt="Konfekcjonowanie"
                  width={500}
                  height={400}
                  className="relative rounded-2xl shadow-2xl w-full h-auto border border-slate-200 dark:border-slate-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wydajność Produkcji */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative order-2 md:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-2xl"></div>
                <Image
                  src="/photos/uslugi/7fcc9ddd-dc09-4394-8fd0-af8cee1e8dfc.jpg"
                  alt="Produkcja"
                  width={500}
                  height={400}
                  className="relative rounded-2xl shadow-2xl w-full h-auto border border-slate-200 dark:border-slate-700"
                />
              </div>

              {/* Content */}
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-600 dark:text-cyan-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <FaCog />
                  <span>{t('servicesPage.production.title')}</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                  {t('servicesPage.production.title')}
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  {t('servicesPage.production.description')}
                </p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {(translations?.servicesPage?.production?.stats || []).map((stat: any, index: number) => (
                    <div key={index} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-lg transition-all">
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                        {stat.label}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {stat.unit}
                      </div>
                    </div>
                  ))}
                </div>

                <Link 
                  href="/kontakt"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all"
                >
                  {t('servicesPage.cooperation')}
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria Zdjęć Fabryki */}
      <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, cyan 2px, cyan 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, cyan 2px, cyan 4px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                Nasza Fabryka
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Nowoczesne obiekty i zaawansowana technologia
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { src: '/photos/uslugi/8ec875c1-f4f2-4e7a-a1b2-f5a034990c26.jpg', alt: 'Obiekty produkcyjne' },
                { src: '/photos/uslugi/993e32cd-9d51-48da-b47d-ce20a34c32d3.jpg', alt: 'Hala produkcyjna' },
                { src: '/photos/uslugi/aad2ede0-e4f6-4f51-83a4-36999645157f.jpg', alt: 'Urządzenia' },
              ].map((photo, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg border border-slate-700">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">{photo.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proces współpracy */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                {t('servicesPage.cooperation')}
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                {t('servicesPage.cooperationDescription')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {(translations?.servicesPage?.steps || []).map((item: any, index: number) => (
                <div key={index} className="relative">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{item.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-cyan-500 text-2xl z-10">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zakres Działalności - Klasy Produktów */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-600 dark:text-cyan-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <FaFlask />
                <span>{t('productClasses.fullScope')}</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                {t('productClasses.productClasses')}
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                {t('productClasses.comprehensiveOffer')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 auto-rows-fr">
              {/* Klasa 1 - Produkty Chemiczne */}
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-xl hover:shadow-2xl hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('productClasses.class1.title')}</h3>
                      <p className="text-sm text-cyan-600 dark:text-cyan-400 font-semibold">{t('productClasses.class1.subtitle')}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    {(translations?.productClasses?.class1?.items || []).map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Klasa 3 - Kosmetyki i Detergenty */}
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-xl hover:shadow-2xl hover:border-pink-500/50 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('productClasses.class3.title')}</h3>
                      <p className="text-sm text-pink-600 dark:text-pink-400 font-semibold">{t('productClasses.class3.subtitle')}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    {(translations?.productClasses?.class3?.items || []).map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Klasa 5 - Farmacja i Medycyna */}
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-xl hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('productClasses.class5.title')}</h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">{t('productClasses.class5.subtitle')}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    {(translations?.productClasses?.class5?.items || []).map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Klasa 39 i 42 - Usługi */}
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-xl hover:shadow-2xl hover:border-orange-500/50 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg flex-shrink-0">
                      39/42
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('productClasses.class39_42.title')}</h3>
                      <p className="text-sm text-orange-600 dark:text-orange-400 font-semibold">{t('productClasses.class39_42.subtitle')}</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-orange-600 dark:text-orange-400 mb-3 flex items-center gap-2">
                        <FaTruck />
                        {t('productClasses.class39_42.class39.title')}
                      </h4>
                      <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                        {(translations?.productClasses?.class39_42?.class39?.items || []).map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-orange-500 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-3 flex items-center gap-2">
                        <FaMicroscope />
                        {t('productClasses.class39_42.class42.title')}
                      </h4>
                      <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                        {(translations?.productClasses?.class39_42?.class42?.items || []).map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-purple-500 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dodatkowe informacje */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {t('productClasses.additionalInfo')}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  {t('productClasses.additionalDescription')}
                </p>
                <Link 
                  href="/kontakt"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all"
                >
                  {t('productClasses.askAboutDetails')}
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 dark:from-slate-950 dark:via-cyan-950 dark:to-slate-950 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FaPhone />
              <span>{t('cta.button')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/kontakt" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                {t('cta.button')}
                <FaArrowRight />
              </Link>
              <a 
                href="tel:+48507070516" 
                className="bg-slate-800/50 backdrop-blur-sm border-2 border-slate-600 text-white px-8 py-4 rounded-lg font-bold hover:border-cyan-500 hover:bg-slate-700/50 transition-all inline-flex items-center gap-2"
              >
                <FaPhone /> {translations.header?.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
