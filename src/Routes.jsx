import React, { ReactElement } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import App from 'screens/App'

export default function Routes(): ReactElement {
  return (
    <HashRouter>
      <App />

      <Switch>
        <Route exact path="/" />
      </Switch>
    </HashRouter>
  )
}
