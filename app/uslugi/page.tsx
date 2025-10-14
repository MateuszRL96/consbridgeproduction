import Services from '@/components/Services'
import { FaFlask, FaSeedling, FaPills, FaSprayCan, FaMicroscope, FaTruck } from 'react-icons/fa'

export const metadata = {
  title: 'Usługi - Consbridge Production',
  description: 'Kompleksowe usługi chemiczne: produkty chemiczne, nawozy, pestycydy, kosmetyki, badania laboratoryjne i transport.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-500 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nasze Usługi
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Kompleksowe rozwiązania dla przemysłu, rolnictwa i medycyny
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">500+ Produktów</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">6 Kategorii Usług</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">1000+ Klientów</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Główna sekcja usług */}
      <Services />

      {/* Dodatkowe informacje o usługach */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Dlaczego Warto Wybrać Nasze Usługi?
            </h2>
            
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
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proces współpracy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
              Jak Wygląda Współpraca?
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Prosty i przejrzysty proces od zapytania do dostawy
            </p>
            
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
                  <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <div className="text-5xl font-bold text-sky-500 mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-sky-500 text-2xl">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-sky-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Gotowy na Współpracę?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Skontaktuj się z nami już dziś i poznaj nasze możliwości
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/kontakt" 
              className="bg-white text-sky-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Skontaktuj się z nami
              <span>→</span>
            </a>
            <a 
              href="tel:+48123456789" 
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/30 transition-colors inline-flex items-center gap-2"
            >
              📞 +48 123 456 789
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}