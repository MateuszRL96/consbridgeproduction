import About from '@/components/About'

export const metadata = {
  title: 'O Nas - Consbridge Production',
  description: 'Poznaj historię Consbridge Production - 25 lat doświadczenia w branży chemicznej, nawozy, badania naukowe i transport.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section dla O Nas */}
      <section className="relative bg-gradient-to-br from-sky-500 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              O Firmie Consbridge Production
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              25 lat doświadczenia w branży chemicznej
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Główna treść */}
      <About />

      {/* Dodatkowa sekcja - Nasza Misja */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Nasza Misja i Wizja
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4 text-sky-600">Misja</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dostarczanie najwyższej jakości produktów chemicznych i usług badawczych, 
                  które wspierają rozwój przemysłu, rolnictwa i medycyny w Polsce i Europie.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🔭</div>
                <h3 className="text-2xl font-bold mb-4 text-sky-600">Wizja</h3>
                <p className="text-gray-600 leading-relaxed">
                  Być liderem w branży chemicznej, wyznaczając standardy jakości, 
                  bezpieczeństwa i innowacji w całej Europie Środkowo-Wschodniej.
                </p>
              </div>
            </div>

            {/* Wartości */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Nasze Wartości
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">💎</div>
                  <h4 className="font-bold text-gray-800 mb-2">Jakość</h4>
                  <p className="text-sm text-gray-600">Najwyższe standardy w każdym produkcie</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🤝</div>
                  <h4 className="font-bold text-gray-800 mb-2">Zaufanie</h4>
                  <p className="text-sm text-gray-600">Budujemy długoterminowe relacje</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔬</div>
                  <h4 className="font-bold text-gray-800 mb-2">Innowacja</h4>
                  <p className="text-sm text-gray-600">Ciągły rozwój i badania</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌱</div>
                  <h4 className="font-bold text-gray-800 mb-2">Ekologia</h4>
                  <p className="text-sm text-gray-600">Dbałość o środowisko</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zespół */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
              Nasz Zespół
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Doświadczeni specjaliści z pasją do chemii i innowacji
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr Jan Kowalski",
                  position: "Dyrektor Generalny",
                  description: "25 lat doświadczenia w branży chemicznej"
                },
                {
                  name: "Dr Anna Nowak",
                  position: "Kierownik Działu Badań",
                  description: "Specjalista ds. innowacji i rozwoju produktów"
                },
                {
                  name: "Mgr Piotr Wiśniewski",
                  position: "Kierownik Działu Sprzedaży",
                  description: "Ekspert w zakresie obsługi klienta"
                }
              ].map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-24 h-24 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                    {member.name.split(' ')[1][0]}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sky-600 text-center font-semibold mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-center text-sm">
                    {member.description}
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