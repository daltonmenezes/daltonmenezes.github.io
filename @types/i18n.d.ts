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
      literature: string
      software: string
      design: string
      about: string
      contacts: string
      sponsors: string
      sponsorship: string
      sponsor: string
      on: string
      become_a: string
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
      opendocs_description: string
      interprocess_description: string
      aura_description: string
      electron_router_dom_description: string
      electron_app_description: string
      discord_guardian_action_description: string
      discord_malicious_domains_description: string
      use_exit_intent_description: string
      yout_description: string
      netflix_list_exporter_description: string
      electron_screen_recorder_description: string
      uni_description: string
      recipes_for_uni_description: string
      hyperinit_description: string
      pepper_description: string
      omeletetabs_description: string
      see_more_projects: string
      bio: string
    }
    en_us: {
      en_us: string
      pt_br: string
      literature: string
      software: string
      design: string
      about: string
      contacts: string
      sponsor: string
      sponsors: string
      sponsorship: string
      on: string
      become_a: string
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
      opendocs_description: string
      interprocess_description: string
      aura_description: string
      electron_router_dom_description: string
      electron_app_description: string
      discord_guardian_action_description: string
      discord_malicious_domains_description: string
      use_exit_intent_description: string
      yout_description: string
      netflix_list_exporter_description: string
      electron_screen_recorder_description: string
      uni_description: string
      recipes_for_uni_description: string
      hyperinit_description: string
      pepper_description: string
      omeletetabs_description: string
      see_more_projects: string
      bio: string
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
