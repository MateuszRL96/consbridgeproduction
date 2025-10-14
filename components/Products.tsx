'use client'

import { useState } from 'react'
import { FaFlask, FaSeedling, FaPills, FaSprayCan, FaMicroscope, FaBoxes } from 'react-icons/fa'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'Wszystkie', icon: <FaBoxes /> },
    { id: 'chemical', label: 'Chemikalia', icon: <FaFlask /> },
    { id: 'agriculture', label: 'Rolnictwo', icon: <FaSeedling /> },
    { id: 'pharma', label: 'Farmacja', icon: <FaPills /> },
    { id: 'cosmetics', label: 'Kosmetyki', icon: <FaSprayCan /> },
    { id: 'research', label: 'Badania', icon: <FaMicroscope /> },
  ]

  const products = [
    {
      category: 'chemical',
      name: 'Produkty Chemiczne Przemysłowe',
      description: 'Wysokiej jakości chemikalia dla przemysłu i nauki',
      items: ['Kwasy i zasady', 'Rozpuszczalniki', 'Katalizatory', 'Odczynniki'],
      image: '🧪',
    },
    {
      category: 'chemical',
      name: 'Żywice i Tworzywa',
      description: 'Nieprzetworzone żywice syntetyczne i tworzywa sztuczne',
      items: ['Żywice epoksydowe', 'Poliuretany', 'Polimery', 'Dodatki'],
      image: '⚗️',
    },
    {
      category: 'agriculture',
      name: 'Nawozy Azotowe',
      description: 'Efektywne nawozy dla rolnictwa i ogrodnictwa',
      items: ['Mocznik', 'Saletra amonowa', 'RSM', 'Nawozy wieloskładnikowe'],
      image: '🌱',
    },
    {
      category: 'agriculture',
      name: 'Środki Ochrony Roślin',
      description: 'Pestycydy, fungicydy i herbicydy',
      items: ['Pestycydy', 'Fungicydy', 'Herbicydy', 'Insektycydy'],
      image: '🌾',
    },
    {
      category: 'pharma',
      name: 'Preparaty Farmaceutyczne',
      description: 'Produkty medyczne i weterynaryjne',
      items: ['Leki', 'Preparaty weterynaryjne', 'Środki dezynfekcyjne', 'Antyseptyki'],
      image: '💊',
    },
    {
      category: 'pharma',
      name: 'Suplementy Diety',
      description: 'Wysokiej jakości suplementy i preparaty biochemiczne',
      items: ['Witaminy', 'Minerały', 'Probiotyki', 'Preparaty białkowe'],
      image: '💉',
    },
    {
      category: 'cosmetics',
      name: 'Kosmetyki Profesjonalne',
      description: 'Produkty kosmetyczne dla przemysłu i konsumentów',
      items: ['Perfumy', 'Olejki eteryczne', 'Kremy', 'Balsamy'],
      image: '💄',
    },
    {
      category: 'cosmetics',
      name: 'Detergenty i Mydła',
      description: 'Środki czyszczące i preparaty pielęgnacyjne',
      items: ['Mydła', 'Detergenty', 'Środki wybielające', 'Preparaty do polerowania'],
      image: '🧼',
    },
    {
      category: 'research',
      name: 'Usługi Laboratoryjne',
      description: 'Kompleksowe badania i analizy naukowe',
      items: ['Analizy chemiczne', 'Badania jakości', 'Certyfikacja', 'Konsultacje'],
      image: '🔬',
    },
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Nasze Produkty
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-secondary-900 mt-3 mb-6">
            Szeroka Gama Produktów i Usług
          </h2>
          <p className="text-lg text-secondary-600">
            Oferujemy ponad 500 produktów z różnych kategorii, dostosowanych do potrzeb Twojej branży.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-primary text-white shadow-lg scale-105'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-secondary-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-secondary-100"
            >
              {/* Image/Icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                {product.image}
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-3">
                {product.name}
              </h3>
              <p className="text-secondary-600 mb-6">
                {product.description}
              </p>

              {/* Items List */}
              <div className="space-y-2 mb-6">
                {product.items.map((item, idx) => (
                  <div key={idx} className="flex items-center text-sm text-secondary-700">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></span>
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="block w-full text-center bg-white text-primary-600 px-6 py-3 rounded-lg font-medium border-2 border-primary-200 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300"
              >
                Zapytaj o produkt
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-secondary-600 mb-6">
            Nie znalazłeś tego, czego szukasz? Skontaktuj się z nami!
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-primary text-white px-8 py-4 rounded-lg font-medium text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Skontaktuj się z ekspertem
          </a>
        </div>
      </div>
    </section>
  )
}