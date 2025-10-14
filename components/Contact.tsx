'use client'

import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Symulacja wysyłki formularza
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      })
      
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Adres',
      content: 'ul. Przykładowa 123\n00-000 Warszawa, Polska',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <FaPhone />,
      title: 'Telefon',
      content: '+48 123 456 789\n+48 987 654 321',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'kontakt@consbridgeproduction.pl\nsprzedaz@consbridgeproduction.pl',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <FaClock />,
      title: 'Godziny Pracy',
      content: 'Pon - Pt: 8:00 - 16:00\nSob - Ndz: Zamknięte',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-secondary-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Kontakt
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-secondary-900 mt-3 mb-6">
            Skontaktuj się z Nami
          </h2>
          <p className="text-lg text-secondary-600">
            Masz pytania? Chcesz złożyć zamówienie? Nasz zespół jest gotowy, aby Ci pomóc!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-secondary-100 text-center"
            >
              <div className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white text-xl`}>
                {info.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg text-secondary-900 mb-2">
                {info.title}
              </h3>
              <p className="text-secondary-600 text-sm whitespace-pre-line">
                {info.content}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-secondary-100">
            <h3 className="font-heading font-bold text-2xl text-secondary-900 mb-6">
              Formularz Kontaktowy
            </h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                ✓ Dziękujemy! Twoja wiadomość została wysłana. Skontaktujemy się wkrótce.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Imię i Nazwisko *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="Jan Kowalski"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="jan@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="+48 123 456 789"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                    Firma
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="Nazwa firmy"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                  Temat *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                >
                  <option value="">Wybierz temat</option>
                  <option value="products">Zapytanie o produkty</option>
                  <option value="order">Złożenie zamówienia</option>
                  <option value="research">Usługi badawcze</option>
                  <option value="transport">Transport i logistyka</option>
                  <option value="cooperation">Współpraca</option>
                  <option value="other">Inne</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Wiadomość *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Opisz swoje zapytanie..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary text-white px-8 py-4 rounded-lg font-medium text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Wysyłanie...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Wyślij wiadomość
                  </>
                )}
              </button>

              <p className="text-sm text-secondary-500 text-center">
                * Pola wymagane. Twoje dane są bezpieczne i nie będą udostępniane osobom trzecim.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}