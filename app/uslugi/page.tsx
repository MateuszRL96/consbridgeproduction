import Services from '@/components/Services'
import { FaFlask, FaSeedling, FaPills, FaSprayCan, FaMicroscope, FaTruck, FaArrowRight, FaCertificate, FaShieldAlt, FaPhone, FaCheckCircle } from 'react-icons/fa'
import Link from 'next/link'

export const metadata = {
  title: 'Usługi - Consbridge Production | Produkcja Chemiczna',
  description: 'Kompleksowe usługi produkcji chemicznej: chemikalia przemysłowe, środki dla rolnictwa, surowce farmaceutyczne i kosmetyczne, kontrola jakości, transport ADR.',
}

export default function ServicesPage() {
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
              Nasze Usługi Produkcyjne
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8">
              Kompleksowa produkcja środków chemicznych dla przemysłu, rolnictwa i medycyny
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-cyan-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/50">
                <span className="font-semibold text-slate-900 dark:text-white">30+ Produktów</span>
              </div>
              <div className="bg-cyan-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/50">
                <span className="font-semibold text-slate-900 dark:text-white">6 Kategorii</span>
              </div>
              <div className="bg-cyan-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/50">
                <span className="font-semibold text-slate-900 dark:text-white">5,000+ ton/rok</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Główna sekcja usług - Services Component */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                Zakres Naszej Produkcji
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Nowoczesne technologie i najwyższe standardy jakości
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaFlask className="text-5xl" />,
                  title: "Chemikalia Przemysłowe",
                  description: "Produkcja wysokiej jakości chemikaliów dla przemysłu ciężkiego i lekkiego",
                  features: ["Kwasy i zasady", "Rozpuszczalniki", "Odczynniki chemiczne"],
                  color: "from-cyan-500 to-blue-600"
                },
                {
                  icon: <FaSeedling className="text-5xl" />,
                  title: "Środki dla Rolnictwa",
                  description: "Nawozy, pestycydy i środki ochrony roślin zgodne z normami UE",
                  features: ["Nawozy mineralne", "Pestycydy", "Regulatory wzrostu"],
                  color: "from-green-500 to-emerald-600"
                },
                {
                  icon: <FaPills className="text-5xl" />,
                  title: "Surowce Farmaceutyczne",
                  description: "Produkcja zgodna z normami GMP i standardami medycznymi",
                  features: ["API (substancje czynne)", "Surowce pomocnicze", "Certyfikaty GMP"],
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  icon: <FaSprayCan className="text-5xl" />,
                  title: "Surowce Kosmetyczne",
                  description: "Składniki aktywne dla przemysłu kosmetycznego i pielęgnacyjnego",
                  features: ["Emulgatory", "Konserwanty", "Substancje aktywne"],
                  color: "from-pink-500 to-rose-600"
                },
                {
                  icon: <FaShieldAlt className="text-5xl" />,
                  title: "Kontrola Jakości",
                  description: "Kompleksowe badania i analizy każdej partii produktów",
                  features: ["Testy laboratoryjne", "Certyfikaty jakości", "Dokumentacja"],
                  color: "from-purple-500 to-violet-600"
                },
                {
                  icon: <FaTruck className="text-5xl" />,
                  title: "Logistyka ADR",
                  description: "Bezpieczny transport materiałów niebezpiecznych z certyfikatem ADR",
                  features: ["Transport ADR", "Magazynowanie", "Dostawa 24-48h"],
                  color: "from-orange-500 to-red-600"
                }
              ].map((service, index) => (
                <div key={index} className="relative group">
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 group-hover:border-cyan-500/50 dark:group-hover:border-cyan-500/50 transition-all duration-300 shadow-lg group-hover:shadow-xl"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-cyan-500/50 transition-all duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <FaCheckCircle className="text-cyan-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dlaczego Warto Wybrać Nasze Usługi */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 50px,
              rgba(6, 182, 212, 0.5) 50px,
              rgba(6, 182, 212, 0.5) 51px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 50px,
              rgba(6, 182, 212, 0.5) 50px,
              rgba(6, 182, 212, 0.5) 51px
            )`
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-600 dark:text-cyan-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <FaCertificate />
                <span>Nasze Przewagi</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                Dlaczego Warto Wybrać Nas?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Nowoczesne technologie produkcyjne i najwyższe standardy jakości
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "⚡",
                  title: "Szybka Realizacja",
                  description: "Dostawa w 24-48h na terenie całej Polski"
                },
                {
                  icon: "🎯",
                  title: "Doradztwo Techniczne",
                  description: "Bezpłatne konsultacje z naszymi specjalistami"
                },
                {
                  icon: "📋",
                  title: "Certyfikaty Jakości",
                  description: "ISO 9001, ISO 14001, ISO 45001"
                },
                {
                  icon: "💰",
                  title: "Konkurencyjne Ceny",
                  description: "Najlepszy stosunek jakości do ceny"
                },
                {
                  icon: "🔒",
                  title: "Bezpieczeństwo",
                  description: "Zgodność z normami UE i polskim prawem"
                },
                {
                  icon: "📞",
                  title: "Wsparcie 24/7",
                  description: "Zawsze jesteśmy do Twojej dyspozycji"
                }
              ].map((benefit, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 group-hover:border-cyan-500/50 transition-all duration-300 shadow-lg group-hover:shadow-xl"></div>
                  <div className="relative p-6">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{benefit.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{benefit.description}</p>
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
                Jak Wygląda Współpraca?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Prosty i przejrzysty proces od zapytania do dostawy
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Zapytanie",
                  description: "Skontaktuj się z nami telefonicznie lub przez formularz"
                },
                {
                  step: "02",
                  title: "Oferta",
                  description: "Otrzymasz spersonalizowaną ofertę w ciągu 24h"
                },
                {
                  step: "03",
                  title: "Zamówienie",
                  description: "Potwierdzenie zamówienia i przygotowanie produktów"
                },
                {
                  step: "04",
                  title: "Dostawa",
                  description: "Szybka i bezpieczna dostawa do Twojej firmy"
                }
              ].map((item, index) => (
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
                <span>Pełny Zakres Działalności</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                Klasy Produktów i Usług
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Kompleksowa oferta produkcyjna zgodna z międzynarodowymi standardami
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
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Produkty Chemiczne</h3>
                      <p className="text-sm text-cyan-600 dark:text-cyan-400 font-semibold">Przemysł, Rolnictwo, Nauka</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>Nawozy i mieszanki nawozów (w tym nawozy azotowe)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>Produkty chemiczne stosowane w przemyśle i w nauce</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>Produkty chemiczne stosowane w fotografii</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>Preparaty chemiczne do stosowania w przemyśle spożywczym</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>Środki chemiczne stosowane w rolnictwie, ogrodnictwie i leśnictwie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>Żywice syntetyczne nieprzetworzone i nieprzetworzone tworzywa sztuczne</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>Preparaty chemiczne do konserwowania artykułów spożywczych</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>Substancje garbujące</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>Dekstryna (klej), kleje i preparaty klejące przeznaczone dla przemysłu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>Chemikalia czyszczące</span>
                    </li>
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
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Kosmetyki i Detergenty</h3>
                      <p className="text-sm text-pink-600 dark:text-pink-400 font-semibold">Pielęgnacja i Czystość</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Mydła i detergenty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Środki wybielające stosowane w pralnictwie (ultramaryna)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Preparaty do wybielania, odnawiania i polerowania</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Substancje do szorowania</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Produkty perfumeryjne i perfumy do zastosowań przemysłowych</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Kosmetyki i kosmetyki do pielęgnacji urody</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Olejki eteryczne</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Preparaty do pielęgnacji zębów</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Preparaty toaletowe</span>
                    </li>
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
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Farmacja i Medycyna</h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">Zdrowie i Ochrona</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Pestycydy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Preparaty farmaceutyczne, medyczne i weterynaryjne</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Środki dezynfekcyjne i antyseptyczne</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Żywność dla diet medycznych</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Preparaty higieniczne do użytku medycznego</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Preparaty biochemiczne do użytku medycznego</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Suplementy diety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Plastry, materiały opatrunkowe i medyczne</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Materiały dentystyczne do plombowania i naprawiania zębów</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Środki odkażające, chwastobójcze i fungicydy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Lecznicze preparaty toaletowe</span>
                    </li>
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
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Usługi Specjalistyczne</h3>
                      <p className="text-sm text-orange-600 dark:text-orange-400 font-semibold">Transport i Badania</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-orange-600 dark:text-orange-400 mb-3 flex items-center gap-2">
                        <FaTruck />
                        Klasa 39 - Transport i Logistyka
                      </h4>
                      <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>Transport materiałów chemicznych</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>Pakowanie i składowanie towarów</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>Organizowanie transportu i podróży</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-3 flex items-center gap-2">
                        <FaMicroscope />
                        Klasa 42 - Badania i Analizy
                      </h4>
                      <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>Badania i analizy naukowe</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>Prace badawcze nad produktami</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>Badania naukowe i przemysłowe</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>Usługi naukowe i technologiczne</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>Analizy laboratoryjne</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>Usługi kontroli jakości i uwierzytelniania</span>
                        </li>
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
                  Kompleksowe Rozwiązania dla Twojej Branży
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  Nasza fabryka oferuje pełen zakres produktów i usług chemicznych zgodnych z międzynarodowymi 
                  standardami jakości. Dysponujemy certyfikatami ISO, własnym laboratorium badawczym oraz 
                  możliwością transportu ADR. Każdy produkt przechodzi rygorystyczną kontrolę jakości.
                </p>
                <Link 
                  href="/kontakt"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all"
                >
                  Zapytaj o szczegóły produkcji
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
              <span>Skontaktuj się z nami</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Gotowy na Współpracę?
            </h2>
            <p className="text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
              Skontaktuj się z nami już dziś i poznaj nasze możliwości produkcyjne
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/kontakt" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                Skontaktuj się z nami
                <FaArrowRight />
              </Link>
              <a 
                href="tel:+48507070516" 
                className="bg-slate-800/50 backdrop-blur-sm border-2 border-slate-600 text-white px-8 py-4 rounded-lg font-bold hover:border-cyan-500 hover:bg-slate-700/50 transition-all inline-flex items-center gap-2"
              >
                <FaPhone /> +48 507 070 516
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
