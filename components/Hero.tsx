'use client'
import { FaFlask, FaSeedling, FaPills, FaSprayCan, FaMicroscope, FaTruck, FaArrowRight, FaCertificate, FaShieldAlt, FaPhone } from 'react-icons/fa'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import Image from 'next/image'

export default function Home() {
  const { translations } = useTranslation()

  return (
    <>
      {/* HERO Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:text-white py-24 md:py-32">
        {/* Glow blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-500/20"></div>
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-600/20"></div>

        {/* Background pattern is now global via layout */}

        <div className="container mx-auto px-4 relative z-10">
          <div className="min-h-[60vh] grid items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2.5 text-blue-600 dark:text-blue-400 backdrop-blur-sm text-sm font-medium">
                <FaFlask className="text-blue-600 dark:text-blue-400" />
                <span>Consbridge Chemicals</span>
              </div>
              <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 dark:text-white">
                Produkcja środków chemicznych na najwyższym poziomie
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Specjalizujemy się w kompleksowej produkcji dla przemysłu, rolnictwa i medycyny. Nowoczesne linie, kontrola jakości i certyfikaty ISO.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/uslugi" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40">
                  Zobacz ofertę
                  <FaArrowRight />
                </Link>
                <Link href="/kontakt" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800/50 px-8 py-4 font-semibold text-slate-900 dark:text-white backdrop-blur-sm transition-all hover:border-blue-500 dark:hover:border-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800">
                  Skontaktuj się
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-2"><FaCertificate className="text-blue-600 dark:text-blue-400" /> ISO 9001 / 14001</span>
                <span className="inline-flex items-center gap-2"><FaShieldAlt className="text-blue-600 dark:text-blue-400" /> ADR & bezpieczeństwo</span>
                <span className="inline-flex items-center gap-2"><FaMicroscope className="text-blue-600 dark:text-blue-400" /> Laboratorium R&D</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Krótki opis firmy */}
      <section className="py-24 md:py-32 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 text-blue-600 dark:text-blue-400 px-5 py-2.5 rounded-full text-sm font-medium mb-8">
              <FaFlask className="text-blue-600 dark:text-blue-400" />
              <span>{translations.header.nav.services}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              {translations.about.title}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
              {translations.pageDescriptions?.aboutCompany || 'Consbridge Production is a modern chemical manufacturing plant specialized in the production of high-quality chemical products. We have advanced production lines, a quality control system and ISO certificates. Since 2022 we have been providing solutions for industry, agriculture and medicine.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/uslugi"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all"
              >
                {translations.features.cta}
                <FaArrowRight />
              </Link>
              <Link 
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800/50 px-8 py-4 font-semibold text-slate-900 dark:text-white hover:border-blue-500 dark:hover:border-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
              >
                {translations.cta.button}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Szybki przegląd usług */}
      <section className="py-24 md:py-32 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 text-blue-600 dark:text-blue-400 px-5 py-2.5 rounded-full text-sm font-medium mb-6">
                <FaMicroscope className="text-blue-600 dark:text-blue-400" />
                <span>{translations.features.badge}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                {translations.features.title}
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                {translations.features.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <FaFlask className="text-4xl" />,
                  title: translations.services?.items?.chemicals?.title || "Chemical Products",
                  description: translations.services?.items?.chemicals?.desc || "Wide range of chemical products",
                  link: "/uslugi#chemiczne",
                },
                {
                  icon: <FaSeedling className="text-4xl" />,
                  title: translations.services?.items?.fertilizers?.title || "Fertilizers",
                  description: translations.services?.items?.fertilizers?.desc || "Fertilizers and plant protection products",
                  link: "/uslugi#nawozy",
                },
                {
                  icon: <FaPills className="text-4xl" />,
                  title: translations.services?.items?.pharma?.title || "Pharmaceutical Products",
                  description: translations.services?.items?.pharma?.desc || "Pharmaceutical preparations",
                  link: "/uslugi#farmaceutyki",
                },
                {
                  icon: <FaSprayCan className="text-4xl" />,
                  title: translations.services?.items?.cosmetics?.title || "Cosmetics",
                  description: translations.services?.items?.cosmetics?.desc || "Cosmetic raw materials",
                  link: "/uslugi#kosmetyki",
                },
                {
                  icon: <FaShieldAlt className="text-4xl" />,
                  title: translations.services?.items?.research?.title || "Research",
                  description: translations.services?.items?.research?.desc || "Research and analysis services",
                  link: "/uslugi#badania",
                },
                {
                  icon: <FaTruck className="text-4xl" />,
                  title: translations.services?.items?.transport?.title || "Transport",
                  description: translations.services?.items?.transport?.desc || "Transport and logistics",
                  link: "/uslugi#transport",
                }
              ].map((service, index) => (
                <Link 
                  key={index}
                  href={service.link}
                  className="group relative bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-blue-500/50 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all text-sm">
                    {translations.features.moreInfo} <FaArrowRight className="text-xs" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link 
                href="/uslugi"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all"
              >
                {translations.features.cta}
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dlaczego my? */}
      <section className="py-24 md:py-32 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 text-blue-600 dark:text-blue-400 px-5 py-2.5 rounded-full text-sm font-medium mb-6">
                <FaCertificate className="text-blue-600 dark:text-blue-400" />
                <span>{translations.about.badge}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                {translations.about.title}
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                {translations.about.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <FaCertificate className="text-3xl" />,
                  title: translations.about?.items?.iso?.title || "ISO Certificates",
                  description: translations.about?.items?.iso?.desc || "ISO 9001, ISO 14001 and EU compliance",
                },
                {
                  icon: <FaTruck className="text-3xl" />,
                  title: translations.about?.items?.logistics?.title || "ADR Logistics",
                  description: translations.about?.items?.logistics?.desc || "Safe transport of dangerous materials",
                },
                {
                  icon: <FaMicroscope className="text-3xl" />,
                  title: translations.about?.items?.quality?.title || "Quality Control",
                  description: translations.about?.items?.quality?.desc || "Own laboratory and testing",
                },
                {
                  icon: <FaShieldAlt className="text-3xl" />,
                  title: translations.about?.items?.safety?.title || "Safety",
                  description: translations.about?.items?.safety?.desc || "Highest OSH and environmental standards",
                },
                {
                  icon: <FaMicroscope className="text-3xl" />,
                  title: translations.about?.items?.rnd?.title || "R&D Laboratory",
                  description: translations.about?.items?.rnd?.desc || "Modern research and development laboratory",
                }
              ].map((benefit, index) => (
                <div key={index} className="group relative bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 text-center hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:shadow-blue-500/50 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{benefit.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Factory Photos */}
      <section className="py-24 md:py-32 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                Nasza Produkcja
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Zaawansowana technologia i profesjonalne urządzenia
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                <Image
                  src="/photos/uslugi/c8848c1b-6bd1-4d35-b95a-a36b40941e43.jpg"
                  alt="Linia produkcyjna"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-bold text-xl">Linia produkcyjna</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                <Image
                  src="/photos/uslugi/e05bd4cc-c218-4b94-aece-19b6d15f9a1e.jpg"
                  alt="Laboratorium"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-bold text-xl">Laboratorium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 px-5 py-2.5 rounded-full text-sm font-medium mb-8">
              <FaPhone className="text-blue-300" />
              <span>{translations.cta.button}</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {translations.cta.title}
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-slate-300">
              {translations.cta.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/kontakt"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                {translations.cta.button}
                <FaArrowRight />
              </Link>
              <a 
                href={`tel:${translations.header.phone.replace(/\s/g, '')}`}
                className="rounded-xl bg-slate-800/50 backdrop-blur-sm border-2 border-slate-600 text-white px-8 py-4 font-semibold hover:border-blue-500 hover:bg-slate-700/50 transition-all inline-flex items-center gap-2"
              >
                <FaPhone />
                {translations.header.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
