import Contact from '@/components/Contact'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export const metadata = {
  title: 'Kontakt - Consbridge Production',
  description: 'Skontaktuj się z Consbridge Production. Telefon: +48 123 456 789, Email: kontakt@consbridgeproduction.pl',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-500 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Skontaktuj Się z Nami
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Jesteśmy do Twojej dyspozycji - odpowiemy na wszystkie pytania
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+48123456789"
                className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-colors flex items-center gap-2"
              >
                <FaPhone />
                <span className="font-semibold">+48 123 456 789</span>
              </a>
              <a 
                href="mailto:kontakt@consbridgeproduction.pl"
                className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-colors flex items-center gap-2"
              >
                <FaEnvelope />
                <span className="font-semibold">kontakt@consbridgeproduction.pl</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Szybki kontakt */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-sky-50 transition-colors">
                <FaPhone className="text-4xl text-sky-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-800 mb-2">Telefon</h3>
                <a href="tel:+48123456789" className="text-sky-600 hover:underline">
                  +48 123 456 789
                </a>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-sky-50 transition-colors">
                <FaEnvelope className="text-4xl text-sky-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                <a href="mailto:kontakt@consbridgeproduction.pl" className="text-sky-600 hover:underline text-sm">
                  kontakt@consbridgeproduction.pl
                </a>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-sky-50 transition-colors">
                <FaMapMarkerAlt className="text-4xl text-sky-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-800 mb-2">Adres</h3>
                <p className="text-gray-600 text-sm">
                  ul. Przykładowa 123<br />
                  00-000 Warszawa
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-sky-50 transition-colors">
                <FaClock className="text-4xl text-sky-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-800 mb-2">Godziny</h3>
                <p className="text-gray-600 text-sm">
                  Pn-Pt: 8:00 - 18:00<br />
                  Sb: 9:00 - 14:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Główna sekcja kontaktu */}
      <Contact />

      {/* Dodatkowe działy */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
              Działy Kontaktowe
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Skontaktuj się bezpośrednio z odpowiednim działem
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  department: "Dział Sprzedaży",
                  icon: "🛒",
                  phone: "+48 123 456 789",
                  email: "sprzedaz@consbridgeproduction.pl",
                  description: "Zapytania ofertowe, zamówienia, negocjacje cenowe"
                },
                {
                  department: "Dział Techniczny",
                  icon: "🔧",
                  phone: "+48 123 456 790",
                  email: "techniczny@consbridgeproduction.pl",
                  description: "Wsparcie techniczne, doradztwo, specyfikacje produktów"
                },
                {
                  department: "Dział Badań",
                  icon: "🔬",
                  phone: "+48 123 456 791",
                  email: "badania@consbridgeproduction.pl",
                  description: "Usługi laboratoryjne, analizy, certyfikaty"
                },
                {
                  department: "Dział Logistyki",
                  icon: "🚚",
                  phone: "+48 123 456 792",
                  email: "logistyka@consbridgeproduction.pl",
                  description: "Transport, dostawy, śledzenie przesyłek"
                },
                {
                  department: "Dział Jakości",
                  icon: "✅",
                  phone: "+48 123 456 793",
                  email: "jakosc@consbridgeproduction.pl",
                  description: "Kontrola jakości, reklamacje, certyfikaty"
                },
                {
                  department: "Księgowość",
                  icon: "💰",
                  phone: "+48 123 456 794",
                  email: "ksiegowosc@consbridgeproduction.pl",
                  description: "Faktury, płatności, rozliczenia"
                }
              ].map((dept, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <div className="text-4xl mb-4">{dept.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{dept.department}</h3>
                  <p className="text-sm text-gray-600 mb-4">{dept.description}</p>
                  <div className="space-y-2">
                    <a href={`tel:${dept.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sky-600 hover:underline text-sm">
                      <FaPhone className="text-xs" />
                      {dept.phone}
                    </a>
                    <a href={`mailto:${dept.email}`} className="flex items-center gap-2 text-sky-600 hover:underline text-sm break-all">
                      <FaEnvelope className="text-xs" />
                      {dept.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mapa (placeholder) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
              Jak Nas Znaleźć?
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Nasza siedziba znajduje się w centrum Warszawy
            </p>
            
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg" style={{ height: '400px' }}>
              {/* Placeholder dla mapy Google */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-6xl text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-semibold mb-2">Mapa Google</p>
                  <p className="text-gray-600 text-sm">ul. Przykładowa 123, 00-000 Warszawa</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700 transition-colors"
                  >
                    Otwórz w Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Dojazd */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl mb-3">🚗</div>
                <h3 className="font-bold text-gray-800 mb-2">Samochodem</h3>
                <p className="text-sm text-gray-600">
                  Parking dla klientów dostępny na miejscu. Wjazd od ul. Przykładowej.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl mb-3">🚇</div>
                <h3 className="font-bold text-gray-800 mb-2">Komunikacją</h3>
                <p className="text-sm text-gray-600">
                  Metro: Centrum (5 min pieszo)<br />
                  Autobus: 123, 456 (przystanek obok)
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl mb-3">🚶</div>
                <h3 className="font-bold text-gray-800 mb-2">Pieszo</h3>
                <p className="text-sm text-gray-600">
                  10 minut od Dworca Centralnego. Wejście główne od ul. Przykładowej.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Kontakt */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Najczęstsze Pytania
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "Jaki jest czas odpowiedzi na zapytanie?",
                  a: "Odpowiadamy na wszystkie zapytania w ciągu 24 godzin roboczych."
                },
                {
                  q: "Czy mogę odwiedzić Waszą siedzibę?",
                  a: "Tak, zapraszamy! Prosimy o wcześniejsze umówienie wizyty telefonicznie."
                },
                {
                  q: "Czy oferujecie wsparcie techniczne?",
                  a: "Tak, nasz dział techniczny służy bezpłatnym doradztwem dla wszystkich klientów."
                },
                {
                  q: "Jak mogę złożyć reklamację?",
                  a: "Reklamacje prosimy kierować na email: jakosc@consbridgeproduction.pl lub telefonicznie."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
                    <span className="text-sky-600">Q:</span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 ml-6">
                    <span className="text-sky-600 font-bold">A:</span> {faq.a}
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