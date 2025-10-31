import { useEffect, useState } from 'react'
import en from '@/translations/en.json'
import pl from '@/translations/pl.json'

type LanguageType = 'en' | 'pl'

export const useTranslation = () => {
  const [language, setLanguage] = useState<LanguageType>('en')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Get language from localStorage or detect from port/browser
    const savedLang = localStorage.getItem('language') as LanguageType | null
    if (savedLang) {
      setLanguage(savedLang)
    } else {
      // First try to detect from port (localhost)
      const portDetectedLang = detectLanguageFromPort()
      if (portDetectedLang) {
        setLanguage(portDetectedLang)
        localStorage.setItem('language', portDetectedLang)
      } else {
        // Fallback to browser language
        const browserLang = navigator.language.split('-')[0] as LanguageType
        const detectedLang = browserLang === 'pl' ? 'pl' : 'en'
        setLanguage(detectedLang)
        localStorage.setItem('language', detectedLang)
      }
    }
    setIsLoaded(true)
  }, [])

  const translations = language === 'pl' ? pl : en

  const switchLanguage = (lang: LanguageType) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const getDomain = (lang: LanguageType) => {
    // For production
    if (typeof window === 'undefined') {
      return lang === 'pl' ? 'consbridgeproduction.pl' : 'consbridgeproduction.com'
    }
    
    // For localhost development - map languages to ports
    const hostname = window.location.hostname
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return lang === 'pl' ? 'localhost:3000' : 'localhost:3001'
    }
    
    return lang === 'pl' ? 'consbridgeproduction.pl' : 'consbridgeproduction.com'
  }

  const getFullUrl = (lang: LanguageType, path: string = '') => {
    const domain = getDomain(lang)
    const protocol = typeof window !== 'undefined' && window.location.protocol === 'https:' ? 'https' : 'http'
    return `${protocol}://${domain}${path}`
  }

  const detectLanguageFromPort = () => {
    if (typeof window === 'undefined') return 'en' as LanguageType
    
    const hostname = window.location.hostname
    const port = window.location.port
    
    // If on localhost, detect based on port
    if ((hostname === 'localhost' || hostname === '127.0.0.1') && (port === '3000' || port === '3001')) {
      return port === '3000' ? ('pl' as LanguageType) : ('en' as LanguageType)
    }
    
    return 'en' as LanguageType
  }

  return {
    language,
    translations,
    switchLanguage,
    getDomain,
    getFullUrl,
    isLoaded,
    detectLanguageFromPort,
    t: (path: string, defaultValue: string = '') => {
      try {
        return path.split('.').reduce((obj, key) => obj?.[key], translations as any) || defaultValue
      } catch {
        return defaultValue
      }
    }
  }
}