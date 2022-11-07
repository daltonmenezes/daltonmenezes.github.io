import { useEffect, useContext } from 'react'

import dictionary from 'i18n/messages.json'
import { I18nContext } from '../store'

export type Language = keyof I18n.I18nDefinition
export type AvailableLanguages = Array<Language>
export type MessageKeys = I18n.I18nMessageKeys
export type Messages = Record<MessageKeys, string>

export interface I18nHook {
  getMessage: (key: MessageKeys) => string
  getAllMessages: () => Messages
  getCurrentLanguage: () => Language
  getAvailableLanguages: () => AvailableLanguages
  updateLanguage: (language: Language) => void
}

export function useI18n(): I18nHook {
  const { language, updateLanguage } = useContext(I18nContext)
  const typedDictionary: I18n.I18nDictionary = dictionary

  useEffect(() => {
    if (!language) {
      updateLanguage(getCurrentLanguage())
    }
  }, [])

  function getCurrentLanguage() {
    const fallback = 'en_us'

    const browserLanguage = getAvailableLanguages().find((key) => {
      if (typeof window === 'undefined') {
        return false
      }

      const language = window.navigator.language
        ?.replace('-', '_')
        ?.toLocaleLowerCase()

      return key.includes(language)
    })

    return language || browserLanguage || fallback
  }

  function getAvailableLanguages() {
    return Object.keys(typedDictionary) as AvailableLanguages
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
    const interpolatedMessages = Object.keys(messages).reduce(
      (acc, current) => {
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

          const interpolatedValue =
            clonedMessages[extractedKeyFromTemplate] || ''

          clonedMessages[messageKey] = clonedMessages[messageKey].replace(
            templateToBeInterpolated,
            interpolatedValue
          )
        }

        return {
          ...acc,
          [messageKey]: clonedMessages[messageKey],
        }
      },
      {} as Messages
    )

    return interpolatedMessages
  }

  return {
    getMessage,
    updateLanguage,
    getAllMessages,
    getCurrentLanguage,
    getAvailableLanguages,
  }
}
