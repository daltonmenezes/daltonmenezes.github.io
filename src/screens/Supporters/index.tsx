import React, { ReactElement } from 'react'
import { ScreenOverlay, Button } from 'components/Layout'
import { HorizontalRule } from 'components/Layout/Dividers'
import { useI18n, useMatchMedia } from 'hooks'
import { FaPatreon as Patreon, FaHandshake as Handshake } from 'react-icons/fa'
import { SponsorsList, SupportersList } from './List'

import styles from './styles.module.sass'

export default function Supporters(): ReactElement {
  const { getMessage } = useI18n()
  const matches = useMatchMedia('max-width: 470px')
  const matchedStyle = matches ? styles.matchMedia : ''

  function renderBecomeButtons() {
    return (
      <div className={styles.buttonsContainer}>
        <Button
          to="https://www.patreon.com/daltonmenezes"
          classNames={[styles.button, matchedStyle]}
        >
          <Patreon />
          {getMessage('become_supporter')}
        </Button>

        <Button
          to={`mailto:daltonmenezes@outlook.com?subject=${getMessage(
            'sponsorship'
          )}`}
          classNames={[styles.button, matchedStyle]}
        >
          <Handshake size="1.2rem" />
          {getMessage('become_sponsor')}
        </Button>
      </div>
    )
  }

  return (
    <ScreenOverlay classNames={[styles.container, matchedStyle]}>
      <section className={styles.supportersContainer}>
        <SponsorsList />

        <HorizontalRule />

        <SupportersList />

        <HorizontalRule />

        <p>{getMessage('thank_you')}</p>

        {renderBecomeButtons()}
      </section>
    </ScreenOverlay>
  )
}
