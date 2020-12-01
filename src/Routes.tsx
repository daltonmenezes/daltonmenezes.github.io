import React, { ReactElement } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import App from 'screens/App'
import Supporters from 'screens/Supporters'
import Literature from 'screens/Literature'
import Software from 'screens/Software'
import About from 'screens/About'
import Contacts from 'screens/Contacts'

export default function Routes(): ReactElement {
  return (
    <HashRouter>
      <App />

      <Switch>
        <Route exact path="/" />
        <Route exact path="/supporters" component={Supporters} />
        <Route exact path="/literature" component={Literature} />
        <Route exact path="/software" component={Software} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contacts" component={Contacts} />
      </Switch>
    </HashRouter>
  )
}
