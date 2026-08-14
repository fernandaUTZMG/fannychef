import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { brand, translations, type Lang, type Translations } from './translations'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translations
  whatsapp: string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'fannychef-lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es')

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'es' || saved === 'en') setLangState(saved)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang: setLangState,
      t: translations[lang],
      whatsapp: lang === 'en' ? brand.whatsappEn : brand.whatsappEs,
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
