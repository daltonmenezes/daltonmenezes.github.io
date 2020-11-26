import React, { ReactElement } from 'react'
import { Link, Title } from 'components/Layout'
import { useI18n } from 'hooks'

import sponsorsData from 'data/sponsors.json'

import styles from './styles.module.sass'

export default function SponsorsList(): ReactElement {
  const { getMessage } = useI18n()

  function renderSponsors() {
    return sponsorsData.map(({ name, image, URL }, index) => {
      return (
        <Link key={index} to={URL} title={name}>
          <img src={image} alt={name} />
        </Link>
      )
    })
  }

  return (
    <section>
      <Title>{getMessage('sponsors')}</Title>

      <section className={styles.sponsorsItemsContainer}>
        {renderSponsors()}
      </section>
    </section>
  )
}
