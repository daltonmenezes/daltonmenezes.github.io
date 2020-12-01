import React, { ReactElement } from 'react'
import { ScreenOverlay } from 'components/Layout'
import { useI18n, useMatchMedia } from 'hooks'
import AnimatedPatterns from 'components/AnimatedPatterns'

import styles from './styles.module.sass'

const profileImage =
  'https://avatars0.githubusercontent.com/u/1149845?s=460&u=26ca2665a03d396c53557a92ccc666235ce72898&v=4'

export default function About(): ReactElement {
  const { getMessage } = useI18n()
  const matches = useMatchMedia('max-width: 630px')
  const matchedStyle = matches ? styles.matchMedia : ''

  function getYearsCoding() {
    const startedYearCoding = 2001
    const currentYear = new Date().getFullYear()
    const yearsCoding = currentYear - startedYearCoding

    return String(yearsCoding)
  }

  function renderBIO() {
    return getMessage('bio').replace('{YEARS_CODING}', getYearsCoding)
  }

  return (
    <ScreenOverlay classNames={[styles.container, matchedStyle]}>
      <div className={styles.patterns}>
        <AnimatedPatterns />
      </div>

      <section className={styles.aboutContainer}>
        <img src={profileImage} alt="dalton menezes photo" />
        <p>{renderBIO()}</p>
      </section>
    </ScreenOverlay>
  )
}
