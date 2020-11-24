import React, {
  createContext,
  useReducer,
  PropsWithChildren,
  ReactNode,
  ReactElement,
  Dispatch,
} from 'react'

import { initialState, i18nReducer } from './reducer'

export interface I18nContextDef {
  i18n: I18n.I18nState
  dispatchI18n: Dispatch<I18n.I18nActionType>
}

export const I18nContext = createContext({
  i18n: initialState,
  dispatchI18n: () => null,
} as I18nContextDef)

export function I18nProvider({
  children,
}: PropsWithChildren<ReactNode>): ReactElement {
  const [i18n, dispatchI18n] = useReducer(i18nReducer, initialState)

  return (
    <I18nContext.Provider value={{ i18n, dispatchI18n }}>
      {children}
    </I18nContext.Provider>
  )
}
