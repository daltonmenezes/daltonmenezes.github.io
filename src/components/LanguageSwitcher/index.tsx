import React, { useState, useEffect, ReactElement } from 'react'
import Menu, { Item } from 'components/Layout/Menu'
import useI18n, { Language } from 'hooks/useI18n'

import styles from './styles.module.sass'

interface LanguageItem {
  label: string
  language: Language
}

export default function LanguageSwitcher(): ReactElement {
  const [languages, setLanguages] = useState<LanguageItem[]>([])

  const {
    getCurrentLanguage,
    getAvailableLanguages,
    getMessage,
    setLanguage,
  } = useI18n()

  useEffect(() => {
    setLanguages(
      getAvailableLanguages()?.map((language) => ({
        label: getMessage(language),
        language,
      }))
    )
  }, [])

  function isActive(language: string): boolean {
    return getCurrentLanguage() === language
  }

  return (
    <Menu horizontal withBullets classNames={[styles.menu]}>
      {languages.map(({ label, language }) => (
        <Item
          key={language}
          classNames={[isActive(language) ? 'active' : '']}
          onClick={() => setLanguage(language)}
        >
          {label}
        </Item>
      ))}
    </Menu>
  )
}
