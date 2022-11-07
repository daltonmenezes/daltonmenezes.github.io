import { createContext, PropsWithChildren, useState, useEffect } from 'react'

type Languages = keyof I18n.I18nDefinition

export interface I18nContextDef {
  language: Languages
  updateLanguage(language: Languages): void
}

export const I18nContext = createContext({
  language: 'en_us',
  updateLanguage: (language: Languages) => {},
} as I18nContextDef)

export function I18nProvider({ children }: PropsWithChildren<{}>) {
  const [language, setLanguage] = useState<Languages>('en_us')

  useEffect(() => {
    const language = window.localStorage.getItem('activeLanguage')

    if (language) {
      setLanguage(language as Languages)
    }
  }, [])

  function updateLanguage(language: Languages) {
    window.localStorage.setItem('activeLanguage', language)

    setLanguage(language)
  }

  return (
    <I18nContext.Provider value={{ language, updateLanguage }}>
      {children}
    </I18nContext.Provider>
  )
}
