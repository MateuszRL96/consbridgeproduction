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

  const address = {
    street: 'Fryderyka Chopina 94',
    city: '43-600 Jaworzno',
    fullAddress: 'Fryderyka Chopina 94, 43-600 Jaworzno',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2556.8!2d19.2744!3d50.2056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d0c0c0c0c0c0%3A0x0!2sFryderyka%20Chopina%2094%2C%2043-600%20Jaworzno!5e0!3m2!1spl!2spl!4v1234567890'
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm uppercase tracking-wider">
            Kontakt
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-900 dark:text-white mt-3 mb-6">
            Skontaktuj się z Nami
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Masz pytania? Chcesz złożyć zamówienie? Nasz zespół jest gotowy, aby Ci pomóc!
          </p>
        </div>

        {/* Map and Contact Form Section */}
        <div className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Map - Left Side */}
              <div className="h-[600px] lg:h-full min-h-[600px]">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2556.8!2d19.2744!3d50.2056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce8c8c8c8c8d%3A0x0!2sFryderyka%20Chopina%2094%2C%2043-600%20Jaworzno!5e0!3m2!1spl!2spl!4v1234567890`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa lokalizacji Consbridge Production"
                ></iframe>
              </div>

              {/* Contact Form - Right Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-6">
                  Formularz Kontaktowy
                </h3>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg text-green-700 dark:text-green-300">
                    ✓ Dziękujemy! Twoja wiadomość została wysłana. Skontaktujemy się wkrótce.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Imię i Nazwisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
                      placeholder="Jan Kowalski"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
                      placeholder="jan@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
                      placeholder="+48 123 456 789"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Firma
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
                      placeholder="Nazwa firmy"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Temat *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
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
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Wiadomość *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none resize-none"
                      placeholder="Opisz swoje zapytanie..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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

                  <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                    * Pola wymagane. Twoje dane są bezpieczne i nie będą udostępniane osobom trzecim.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}