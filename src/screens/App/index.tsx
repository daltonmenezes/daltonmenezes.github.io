import React, { ReactElement } from 'react'
import Header from 'components/Layout/Header'
import Menu, { Item } from 'components/Layout/Menu'

import styles from './styles.module.sass'

export default function App(): ReactElement {
  return (
    <div className="App">
      <Header classNames={[styles.header]}>
        <h1>DALTON MENEZES</h1>
        <Menu horizontal withBullets classNames={[styles.menu]}>
          <Item>COLABORADORES</Item>
          <Item>LITERATURA</Item>
          <Item>SOFTWARE</Item>
          <Item>DESIGN</Item>
          <Item>SOBRE</Item>
          <Item>CONTATO</Item>
        </Menu>
      </Header>
    </div>
  )
}
