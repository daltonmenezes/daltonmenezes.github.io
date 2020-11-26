import React, { ReactElement } from 'react'
import { Button, ScreenOverlay } from 'components/Layout'
import useI18n, { MessageKeys } from 'hooks/useI18n'
import { useMatchMedia } from 'hooks'
import AnimatedPatterns from 'components/AnimatedPatterns'

import booksData from 'data/books.json'

import styles from './styles.module.sass'

export default function Literature(): ReactElement {
  const { getMessage } = useI18n()
  const matches = useMatchMedia('max-width: 706px')
  const matchedStyle = matches ? styles.matchMedia : ''

  return (
    <ScreenOverlay classNames={[styles.container, matchedStyle]}>
      <div className={styles.patterns}>
        <AnimatedPatterns />
      </div>

      <section className={styles.booksSection}>
        {booksData.map((book) => {
          const { title, year, genre, blurb, pdf, mobi, image } = book

          return (
            <div key={pdf} className={styles.bookContainer}>
              <img src={image} alt={title} />

              <div className={styles.bookContent}>
                <ul className={styles.bookInfo}>
                  <li>
                    <strong>{getMessage('title')}: </strong> {title}
                  </li>

                  <li>
                    <strong>{getMessage('year')}: </strong>
                    {year}
                  </li>

                  <li>
                    <strong>{getMessage('genre')}: </strong>
                    {getMessage(genre as MessageKeys)}
                  </li>

                  <strong className={styles.blurbLabel}>
                    {getMessage('blurb')}:
                  </strong>

                  <p>{blurb}</p>
                </ul>

                <section className={styles.downloadSection}>
                  <Button to={mobi} aria-label="download mobi">
                    MOBI
                  </Button>

                  <Button to={pdf} aria-label="download pdf">
                    PDF
                  </Button>
                </section>
              </div>
            </div>
          )
        })}
      </section>
    </ScreenOverlay>
  )
}
