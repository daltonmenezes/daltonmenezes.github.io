import React, { ReactElement } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import App from 'screens/App'
import Supporters from 'screens/Supporters'
import Literature from 'screens/Literature'
import Software from 'screens/Software'

export default function Routes(): ReactElement {
  return (
    <HashRouter>
      <App />

      <Switch>
        <Route exact path="/" />
        <Route exact path="/supporters" component={Supporters} />
        <Route exact path="/literature" component={Literature} />
        <Route exact path="/software" component={Software} />
      </Switch>
    </HashRouter>
  )
}
