import Contact from '@/components/Contact'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export const metadata = {
  title: 'Kontakt - Consbridge Production | Fabryka Chemiczna Jaworzno',
  description: 'Skontaktuj się z fabryką chemiczną w Jaworznie. Adres: ul. Fryderyka Chopina 94, 43-600 Jaworzno. Telefon: +48 507 070 516',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-white py-20 border-b border-slate-300 dark:border-slate-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, cyan 2px, cyan 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, cyan 2px, cyan 4px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
              Skontaktuj Się z Fabryką
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8">
              Jesteśmy do Twojej dyspozycji - odpowiemy na wszystkie pytania dotyczące produkcji
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+48507070516"
                className="bg-cyan-600/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-cyan-600/30 border border-cyan-500/50 transition-all flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <FaPhone />
                <span className="font-semibold text-slate-900 dark:text-white">+48 507 070 516</span>
              </a>
              <a 
                href="mailto:OfficeProduction@consbridgeproduction.pl"
                className="bg-cyan-600/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-cyan-600/30 border border-cyan-500/50 transition-all flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <FaEnvelope />
                <span className="font-semibold text-slate-900 dark:text-white">OfficeProduction@consbridgeproduction.pl</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Szybki kontakt */}
      <section className="py-12 bg-slate-100 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-cyan-500/50 transition-all">
                <FaPhone className="text-4xl text-cyan-600 dark:text-cyan-400 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Telefon</h3>
                <a href="tel:+48507070516" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300">
                  +48 507 070 516
                </a>
              </div>
              
              <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-cyan-500/50 transition-all">
                <FaEnvelope className="text-4xl text-cyan-600 dark:text-cyan-400 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Email</h3>
                <a href="mailto:OfficeProduction@consbridgeproduction.pl" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 text-sm break-all">
                  OfficeProduction@consbridgeproduction.pl
                </a>
              </div>
              
              <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-cyan-500/50 transition-all">
                <FaMapMarkerAlt className="text-4xl text-cyan-600 dark:text-cyan-400 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Adres</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  ul. Fryderyka Chopina 94<br />
                  43-600 Jaworzno
                </p>
              </div>
              
              <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-cyan-500/50 transition-all">
                <FaClock className="text-4xl text-cyan-600 dark:text-cyan-400 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Godziny</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  Pn-Pt: 8:00 - 18:00<br />
                  Sb: 9:00 - 14:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Główna sekcja kontaktu - Mapa i Formularz */}
      <Contact />

      {/* Dojazd do fabryki */}
      <section className="py-20 bg-slate-100 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
              Jak Dojechać?
            </h2>
            <p className="text-center text-slate-700 dark:text-slate-300 mb-12">
              Fabryka znajduje się w Jaworznie - dogodny dojazd z całego regionu
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-cyan-500/50 transition-all">
                <div className="text-5xl mb-4">🚗</div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-xl">Samochodem</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  Parking dla klientów i dostawców dostępny na terenie fabryki. 
                  Wjazd od ul. Fryderyka Chopina. Dogodny dojazd z autostrady A4.
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-cyan-500/50 transition-all">
                <div className="text-5xl mb-4">🚌</div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-xl">Komunikacją</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  Przystanek autobusowy w pobliżu fabryki. 
                  Połączenia z centrum Jaworzna i okolicznych miejscowości.
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-cyan-500/50 transition-all">
                <div className="text-5xl mb-4">🚚</div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-xl">Transport Ciężki</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  Wydzielony plac manewrowy dla ciężarówek. 
                  Rampa załadunkowa dostępna 24/7. Prosimy o wcześniejsze zgłoszenie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Kontakt */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
              Najczęstsze Pytania
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "Jaki jest czas odpowiedzi na zapytanie?",
                  a: "Odpowiadamy na wszystkie zapytania w ciągu 24 godzin roboczych."
                },
                {
                  q: "Czy mogę odwiedzić fabrykę?",
                  a: "Tak, zapraszamy! Prosimy o wcześniejsze umówienie wizyty telefonicznie ze względów bezpieczeństwa."
                },
                {
                  q: "Czy oferujecie wsparcie techniczne?",
                  a: "Tak, nasz dział techniczny służy bezpłatnym doradztwem dla wszystkich klientów."
                },
                {
                  q: "Jak mogę złożyć reklamację?",
                  a: "Reklamacje prosimy kierować na email: OfficeProduction@consbridgeproduction.pl lub telefonicznie."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-cyan-500/50 transition-all">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-start gap-2">
                    <span className="text-cyan-600 dark:text-cyan-400">Q:</span>
                    {faq.q}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 ml-6">
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold">A:</span> {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}