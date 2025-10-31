"use client"

import { useState } from 'react'
import { FaBriefcase, FaPaperPlane } from 'react-icons/fa'
import { useTranslation } from '@/hooks/useTranslation'

interface CareerFormData {
  name: string
  email: string
  cv: File | null
  consent: boolean
  position: string
}

export default function Career() {
  const { translations } = useTranslation()
  const [formData, setFormData] = useState<CareerFormData>({
    name: '',
    email: '',
    cv: null,
    consent: false,
    position: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle')
  const [cvError, setCvError] = useState('')

  const jobPositions = (translations.career.positions || []) as Array<{
    title: string
    requirements?: string[]
    link?: string
  }>
  const positionsSection = translations.career.positionsSection || {}
  const fallbackApplyLink = positionsSection.fallbackLink || '#'

  const buildErrorMessage = (key: 'type' | 'size' | 'missing') =>
    translations.career.form.errors?.[key] || ''

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) {
      setFormData((prev) => ({ ...prev, cv: null }))
      setCvError('')
      return
    }

    const isPdf = file.type === 'application/pdf'
    const isUnder10Mb = file.size <= 10 * 1024 * 1024

    if (!isPdf) {
      setCvError(buildErrorMessage('type'))
      e.target.value = ''
      return
    }

    if (!isUnder10Mb) {
      setCvError(buildErrorMessage('size'))
      e.target.value = ''
      return
    }

    setCvError('')
    setFormData((prev) => ({ ...prev, cv: file }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.cv) {
      setCvError(buildErrorMessage('missing'))
      return
    }

    if (!formData.consent) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        cv: null,
        consent: false,
        position: '',
      })

      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1500)
  }

  return (
    <>
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
              {translations.career.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8">
              {translations.career.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-cyan-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/50">
                <span className="font-semibold text-slate-900 dark:text-white">{translations.career.badge}</span>
              </div>
              <div className="bg-cyan-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/50">
                <span className="font-semibold text-slate-900 dark:text-white">Doświadczony Zespół</span>
              </div>
              <div className="bg-cyan-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/50">
                <span className="font-semibold text-slate-900 dark:text-white">Rozwój Kariery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Job Positions Section (Left) */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="p-8 lg:p-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20">
                    <FaBriefcase className="text-2xl" />
                  </span>
                  <h3 className="text-2xl font-semibold">
                    {translations.career.positionsSection.title}
                  </h3>
                </div>
                <p className="text-slate-100/90 text-base leading-relaxed max-w-2xl">
                  {translations.career.positionsSection.description}
                </p>
                <div className="mt-10 grid gap-6">
                  {jobPositions.map((position, index) => (
                    <div
                      key={index}
                      className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm border border-white/30 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
                    >
                      <div>
                        <h3 className="text-xl font-semibold mb-3">
                          {position.title}
                        </h3>
                        <ul className="space-y-2 text-sm text-slate-100/80">
                          {position.requirements?.map((requirement: string, reqIndex: number) => (
                            <li key={reqIndex} className="flex items-start gap-2">
                              <span className="mt-1 text-blue-100">•</span>
                              <span>{requirement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, position: position.title }))
                          const el = document.getElementById('career-form')
                          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-white text-blue-700 font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                        aria-label={`${positionsSection.apply} - ${position.title}`}
                      >
                        <FaPaperPlane />
                        {positionsSection.apply}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Application Form Section (Right) */}
            <div id="career-form" className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="p-8 lg:p-10">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                  {translations.career.form.title}
                </h3>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg text-green-700 dark:text-green-300">
                    {translations.career.form.success}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Stanowisko (opcjonalnie)
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleSelectChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    >
                      <option value="">Brak</option>
                      {jobPositions.map((position, idx) => (
                        <option key={idx} value={position.title}>{position.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      {translations.career.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      {translations.career.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="cv" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      {translations.career.form.cv}
                    </label>
                    <input
                      type="file"
                      id="cv"
                      name="cv"
                      accept="application/pdf"
                      onChange={handleFileChange}
                      required
                      className="w-full cursor-pointer text-sm text-slate-600 dark:text-slate-300"
                    />
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                      {translations.career.form.cvHelp}
                    </p>
                    {cvError && (
                      <p className="text-xs text-red-500 mt-1">
                        {cvError}
                      </p>
                    )}
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      required
                      className="mt-1 h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="consent" className="text-sm text-slate-600 dark:text-slate-300">
                      {translations.career.form.consent}
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        {translations.career.form.sending}
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        {translations.career.form.submit}
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                    {translations.career.form.required}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}