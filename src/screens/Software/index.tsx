import React, { ReactElement } from 'react'
import { ScreenOverlay, Button, Link } from 'components/Layout'
import { HorizontalRule } from 'components/Layout/Dividers'
import { useMatchMedia } from 'hooks'
import useI18n, { MessageKeys } from 'hooks/useI18n'

import softwaresData from 'data/softwares.json'

import styles from './styles.module.sass'

export default function Softwares(): ReactElement {
  const { getMessage } = useI18n()
  const matches = useMatchMedia('max-width: 706px')
  const matchedStyle = matches ? styles.matchMedia : ''

  return (
    <ScreenOverlay classNames={[styles.container, matchedStyle]}>
      <section className={styles.softwaresContainer}>
        {softwaresData.map((software) => {
          const { image, name, URL, i18n_key } = software

          return (
            <div className={styles.softwareItems} key={i18n_key}>
              <Link to={URL}>
                <img src={image} alt={name} />
                <h1>{name}</h1>
                <p>{getMessage(i18n_key as MessageKeys)}</p>
              </Link>
            </div>
          )
        })}
      </section>

      <HorizontalRule />

      <div className={styles.buttonContainer}>
        <Button to="https://github.com/daltonmenezes">
          {getMessage('see_more_projects')}
        </Button>
      </div>
    </ScreenOverlay>
  )
}
