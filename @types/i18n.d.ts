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
      sponsor: string
      sponsors: string
      supporter: string
      become_a: string
      become_supporter: string
      become_sponsor: string
      thank_you: string
      active: string
      inactive: string
      title: string
      year: string
      blurb: string
      genre: string
      short_story: string
      aphorisms: string
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
      sponsor: string
      sponsors: string
      supporter: string
      become_a: string
      become_supporter: string
      become_sponsor: string
      thank_you: string
      active: string
      inactive: string
      title: string
      year: string
      blurb: string
      genre: string
      short_story: string
      aphorisms: string
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
