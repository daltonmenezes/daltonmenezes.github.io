import React, { ReactElement } from 'react'
import { useMatchMedia, useI18n } from 'hooks'
import { Header, Title } from 'components/Layout'
import Menu, { Item } from 'components/Layout/Menu'
import AnimatedPatterns from 'components/AnimatedPatterns'
import LanguageSwitcher from 'components/LanguageSwitcher'

import styles from './styles.module.sass'

export default function App(): ReactElement {
  const { getAllMessages } = useI18n()
  const matcheWidth = useMatchMedia('max-width: 500px')
  const matcheHeight = useMatchMedia('max-height: 320px')
  const matchMedia = matcheWidth && !matcheHeight

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
        <LanguageSwitcher />

        <Title>DALTON MENEZES</Title>

        <Menu
          horizontal={!matchMedia}
          withBullets={!matchMedia}
          classNames={[styles.menu]}
        >
          <Item to="/supporters">{supporters}</Item>
          <Item to="/literature">{literature}</Item>
          <Item to="/software">{software}</Item>
          <Item to="https://en.99designs.com.br/profiles/daltonmenezes">
            {design}
          </Item>
          <Item to="/about">{about}</Item>
          <Item to="/contact">{contact}</Item>
        </Menu>
      </Header>
      <AnimatedPatterns />
    </div>
  )
}
