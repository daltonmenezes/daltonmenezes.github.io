import { useEffect, useContext } from 'react'
import { I18nContext } from './Store'
import dictionary from 'i18n/messages.json'

export type Language = keyof I18n.I18nDefinition
export type AvailableLanguages = Array<Language>
export type MessageKeys = I18n.I18nMessageKeys
export type Messages = Record<MessageKeys, string>

export interface I18nHook {
  getMessage: (key: MessageKeys) => string
  getAllMessages: () => Messages
  getCurrentLanguage: () => Language
  getAvailableLanguages: () => AvailableLanguages
  setLanguage: (language: Language) => void
}

export default function useI18n(): I18nHook {
  const { i18n, dispatchI18n } = useContext(I18nContext)
  const typedDictionary: I18n.I18nDictionary = dictionary
  const persistedLanguage = i18n.activeLanguage

  useEffect(() => {
    if (!persistedLanguage) {
      setLanguage(getCurrentLanguage())
    }
  }, [])

  function getCurrentLanguage() {
    const fallback = 'en_us'

    const browserLanguage = getAvailableLanguages().find((key) => {
      const language = window.navigator.language
        ?.replace('-', '_')
        ?.toLocaleLowerCase()

      return key.includes(language)
    })

    return persistedLanguage || browserLanguage || fallback
  }

  function getAvailableLanguages() {
    return Object.keys(typedDictionary) as AvailableLanguages
  }

  function setLanguage(language: Language) {
    window.localStorage.setItem('activeLanguage', language)
    dispatchI18n({ type: 'CHANGE_LANGUAGE', payload: language })
  }

  function getMessage(message: MessageKeys): string {
    return getInterpolatedDictionary()[message] || ''
  }

  function getAllMessages() {
    return getInterpolatedDictionary()
  }

  function getInterpolatedDictionary() {
    const language = getCurrentLanguage()

    return applyInterpolation(typedDictionary[language] as Messages)
  }

  function applyInterpolation(messages: Messages) {
    const interpolatedMessages = Object.keys(messages).reduce((acc, current) => {
      const messageKey = current as MessageKeys
      const template = messages[messageKey].match(/{{(.*?)}}/g) || []
      const clonedMessages = { ...messages }

      for (const templateKey of template) {
        const extractedKeyFromTemplate = templateKey.replace(
          /{{|}}|\s+/g,
          ''
        ) as MessageKeys

        const templateToBeInterpolated = new RegExp(
          `{{(.*?${extractedKeyFromTemplate}.*?)}}`,
          'g'
        )

        const interpolatedValue = clonedMessages[extractedKeyFromTemplate] || ''

        clonedMessages[messageKey] = clonedMessages[messageKey].replace(
          templateToBeInterpolated,
          interpolatedValue
        )
      }

      return {
        ...acc,
        [messageKey]: clonedMessages[messageKey],
      }
    }, {} as Messages)

    return interpolatedMessages
  }

  return {
    getMessage,
    getAllMessages,
    getCurrentLanguage,
    getAvailableLanguages,
    setLanguage,
  }
}
