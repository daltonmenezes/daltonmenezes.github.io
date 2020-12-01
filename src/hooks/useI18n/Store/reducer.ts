export const initialState = {
  activeLanguage: localStorage.getItem(
    'activeLanguage'
  ) as keyof I18n.I18nDefinition,
}

export function i18nReducer(
  state: I18n.I18nState,
  action: I18n.I18nActionType
): I18n.I18nState {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return { activeLanguage: action.payload }
    default:
      return state
  }
}
