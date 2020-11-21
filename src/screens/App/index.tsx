import React, { ReactElement } from 'react'
import { Header, Title } from 'components/Layout'
import Menu, { Item } from 'components/Layout/Menu'

import styles from './styles.module.sass'

export default function App(): ReactElement {
  return (
    <div className="App">
      <Header classNames={[styles.header]}>
        <Title>DALTON MENEZES</Title>

        <Menu horizontal withBullets classNames={[styles.menu]}>
          <Item to="/supporters">COLABORADORES</Item>
          <Item to="/literature">LITERATURA</Item>
          <Item to="/software">SOFTWARE</Item>
          <Item to="/design">DESIGN</Item>
          <Item to="/about">SOBRE</Item>
          <Item to="/contact">CONTATO</Item>
        </Menu>
      </Header>
    </div>
  )
}
