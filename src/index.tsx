import React from 'react'
import ReactDOM from 'react-dom'

import { I18nProvider } from 'hooks/useI18n/Store'
import Routes from './Routes'

import 'styles/global.sass'

ReactDOM.render(
  <React.StrictMode>
    <I18nProvider>
      <Routes />
    </I18nProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
