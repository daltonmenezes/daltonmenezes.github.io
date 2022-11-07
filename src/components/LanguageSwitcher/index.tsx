import { useState, useEffect } from 'react'

import { useI18n, Language } from 'hooks'
import { Separator } from 'components'

import { Item, Menu } from './styles'

interface LanguageItem {
  label: string
  language: Language
}

export function LanguageSwitcher() {
  const [languages, updateLanguages] = useState<LanguageItem[]>([])

  const {
    getMessage,
    updateLanguage,
    getCurrentLanguage,
    getAvailableLanguages,
  } = useI18n()

  useEffect(() => {
    updateLanguages(
      getAvailableLanguages()?.map((language) => ({
        label: getMessage(language),
        language,
      }))
    )
  }, [])

  function isActive(language: string) {
    return getCurrentLanguage() === language
  }

  return (
    <Menu>
      {languages.map((languageItem, index) => {
        const { label, language } = languageItem
        const isLastIndex = languages.length === index + 1
        const isCurrentLanguage = isActive(language)

        return (
          <Item
            key={language}
            active={isCurrentLanguage}
            tabIndex={isCurrentLanguage ? -1 : 0}
            onClick={() => updateLanguage(language)}
          >
            <span>{label}</span>

            {!isLastIndex && <Separator keepBulletOnMobile />}
          </Item>
        )
      })}
    </Menu>
  )
}
