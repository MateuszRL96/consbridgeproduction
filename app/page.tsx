import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import { FaFlask, FaSeedling, FaPills, FaSprayCan, FaMicroscope, FaTruck, FaArrowRight, FaCertificate, FaShieldAlt, FaPhone } from 'react-icons/fa'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Stats Section */}
      <Stats />

      {/* Krótki opis firmy */}
      <section className="py-20 bg-slate-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.05) 10px,
              rgba(255,255,255,0.05) 20px
            )`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FaFlask />
              <span>Produkcja Chemiczna</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Nowoczesna Fabryka Chemiczna
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Consbridge Production to nowoczesny zakład produkcyjny wyspecjalizowany w produkcji 
              wysokiej jakości środków chemicznych. Dysponujemy zaawansowanymi liniami produkcyjnymi, 
              własnym laboratorium R&D oraz certyfikatami ISO. Od 1998 roku dostarczamy rozwiązania 
              dla przemysłu, rolnictwa i medycyny.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/o-nas"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all"
              >
                Poznaj naszą fabrykę
                <FaArrowRight />
              </Link>
              <Link 
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-slate-700/50 backdrop-blur-sm border-2 border-slate-600 text-white px-8 py-4 rounded-lg font-bold hover:border-cyan-500 hover:bg-slate-700 transition-all"
              >
                Zapytaj o produkcję
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Szybki przegląd usług */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <FaMicroscope />
                <span>Zakres Produkcji</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-white">
                Nasze Możliwości Produkcyjne
              </h2>
              <p className="text-xl text-slate-400">
                Kompleksowa produkcja środków chemicznych na najwyższym poziomie
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaFlask className="text-5xl" />,
                  title: "Chemikalia Przemysłowe",
                  description: "Produkcja chemikaliów dla przemysłu ciężkiego i lekkiego",
                  link: "/uslugi#chemiczne",
                  color: "from-cyan-500 to-blue-600"
                },
                {
                  icon: <FaSeedling className="text-5xl" />,
                  title: "Środki dla Rolnictwa",
                  description: "Nawozy, pestycydy i środki ochrony roślin",
                  link: "/uslugi#nawozy",
                  color: "from-green-500 to-emerald-600"
                },
                {
                  icon: <FaPills className="text-5xl" />,
                  title: "Surowce Farmaceutyczne",
                  description: "Produkcja zgodna z normami GMP i standardami medycznymi",
                  link: "/uslugi#farmaceutyki",
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  icon: <FaSprayCan className="text-5xl" />,
                  title: "Surowce Kosmetyczne",
                  description: "Składniki aktywne dla przemysłu kosmetycznego",
                  link: "/uslugi#kosmetyki",
                  color: "from-pink-500 to-rose-600"
                },
                {
                  icon: <FaMicroscope className="text-5xl" />,
                  title: "Laboratorium R&D",
                  description: "Badania, analizy i rozwój nowych produktów",
                  link: "/uslugi#badania",
                  color: "from-purple-500 to-violet-600"
                },
                {
                  icon: <FaTruck className="text-5xl" />,
                  title: "Logistyka ADR",
                  description: "Transport materiałów niebezpiecznych z certyfikatem ADR",
                  link: "/uslugi#transport",
                  color: "from-orange-500 to-red-600"
                }
              ].map((service, index) => (
                <Link 
                  key={index}
                  href={service.link}
                  className="relative group"
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 group-hover:border-cyan-500/50 transition-all duration-300"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-cyan-500/50 transition-all duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <span className="text-cyan-400 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      Dowiedz się więcej <FaArrowRight className="text-sm" />
                    </span>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-300"></div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/uslugi"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all"
              >
                Zobacz pełną ofertę produkcyjną
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dlaczego my? */}
      <section className="py-20 bg-slate-800 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 50px,
              rgba(255,255,255,0.05) 50px,
              rgba(255,255,255,0.05) 51px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 50px,
              rgba(255,255,255,0.05) 50px,
              rgba(255,255,255,0.05) 51px
            )`
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <FaCertificate />
                <span>Nasze Przewagi</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-white">
                Dlaczego Nasza Fabryka?
              </h2>
              <p className="text-xl text-slate-400">
                25 lat doświadczenia w produkcji chemicznej i setki zadowolonych klientów
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <FaCertificate className="text-4xl" />,
                  title: "Certyfikaty ISO",
                  description: "ISO 9001, ISO 14001 i zgodność z normami UE",
                  color: "from-cyan-500 to-blue-600"
                },
                {
                  icon: <FaTruck className="text-4xl" />,
                  title: "Logistyka ADR",
                  description: "Bezpieczny transport materiałów niebezpiecznych",
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  icon: <FaMicroscope className="text-4xl" />,
                  title: "Kontrola Jakości",
                  description: "Własne laboratorium i testy każdej partii",
                  color: "from-teal-500 to-emerald-600"
                },
                {
                  icon: <FaShieldAlt className="text-4xl" />,
                  title: "Bezpieczeństwo",
                  description: "Najwyższe standardy BHP i ochrony środowiska",
                  color: "from-indigo-500 to-purple-600"
                }
              ].map((benefit, index) => (
                <div key={index} className="relative group">
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 group-hover:border-cyan-500/50 transition-all duration-300"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:shadow-cyan-500/50 transition-all duration-300`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">{benefit.title}</h3>
                    <p className="text-slate-400 text-sm">{benefit.description}</p>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FaPhone />
              <span>Skontaktuj się z nami</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Potrzebujesz Produkcji Chemicznej?
            </h2>
            <p className="text-xl mb-8 text-slate-300">
              Skontaktuj się z nami już dziś i poznaj możliwości naszej fabryki. 
              Oferujemy produkcję na zamówienie i doradztwo techniczne.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/kontakt"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                Wyślij zapytanie
                <FaArrowRight />
              </Link>
              <a 
                href="tel:+48123456789"
                className="bg-slate-800/50 backdrop-blur-sm border-2 border-slate-600 text-white px-8 py-4 rounded-lg font-bold hover:border-cyan-500 hover:bg-slate-700/50 transition-all inline-flex items-center gap-2"
              >
                <FaPhone />
                +48 123 456 789
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Zaufali nam */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FaShieldAlt />
              <span>Nasi Klienci</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">
              Zaufali Naszej Fabryce
            </h2>
            <p className="text-slate-400 mb-12 text-lg">
              Współpracujemy z wiodącymi firmami z różnych branż
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
              {[
                { name: "Przemysł Chemiczny", icon: "🏭" },
                { name: "Rolnictwo", icon: "🌾" },
                { name: "Farmacja", icon: "💊" },
                { name: "Kosmetyka", icon: "💄" },
                { name: "Budownictwo", icon: "🏗️" },
                { name: "Motoryzacja", icon: "🚗" },
                { name: "Spożywczy", icon: "🍽️" },
                { name: "Medycyna", icon: "⚕️" }
              ].map((client, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 group-hover:border-cyan-500/50 transition-all duration-300"></div>
                  <div className="relative p-6 flex flex-col items-center justify-center h-24">
                    <span className="text-3xl mb-2">{client.icon}</span>
                    <span className="text-slate-400 text-xs group-hover:text-cyan-400 transition-colors">{client.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}