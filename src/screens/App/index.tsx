import React, { ReactElement } from 'react'
import { useMatchMedia, useI18n } from 'hooks'
import { Header, Title } from 'components/Layout'
import Menu, { Item } from 'components/Layout/Menu'
import AnimatedPatterns from 'components/AnimatedPatterns'

import styles from './styles.module.sass'

export default function App(): ReactElement {
  const matches = useMatchMedia('max-width: 500px')
  const { getAllMessages } = useI18n()

  const {
    supporters,
    literature,
    software,
    design,
    about,
    contact,
  } = getAllMessages()

  return (
    <div className="App">
      <Header classNames={[styles.header]}>
        <Title>DALTON MENEZES</Title>

        <Menu
          horizontal={!matches}
          withBullets={!matches}
          classNames={[styles.menu]}
        >
          <Item to="/supporters">{supporters}</Item>
          <Item to="/literature">{literature}</Item>
          <Item to="/software">{software}</Item>
          <Item to="/design">{design}</Item>
          <Item to="/about">{about}</Item>
          <Item to="/contact">{contact}</Item>
        </Menu>
      </Header>
      <AnimatedPatterns />
    </div>
  )
}
