/// <reference path="index.d.ts" />

namespace I18n {
  export interface I18nDictionary {
    [key: string]: {
      [key: string]: string
    }
  }

  export type I18nMessageKeys = keyof {
    [key in keyof I18nDefinition[keyof I18nDefinition]]: string
  }

  export type I18nDefinition = {
    pt_br: {
      pt_br: string
      en_us: string
      supporters: string
      literature: string
      software: string
      design: string
      about: string
      contact: string
    }
    en_us: {
      en_us: string
      pt_br: string
      supporters: string
      literature: string
      software: string
      design: string
      about: string
      contact: string
    }
  }

  export interface I18nState {
    activeLanguage: keyof I18nDefinition
  }

  export interface I18nActionType {
    type: string
    payload: Partial<i18nState>
  }
}
