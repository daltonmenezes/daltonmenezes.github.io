import React, { ReactElement } from 'react'
import { Badge, Link, Title } from 'components/Layout'
import { HorizontalRule } from 'components/Layout/Dividers'
import { useI18n } from 'hooks'

import supportersData from 'data/supporters.json'

import styles from './styles.module.sass'

supportersData.sort((a, b) => Intl.Collator().compare(a.name, b.name))

export default function SupportersList(): ReactElement {
  const { getMessage } = useI18n()

  function renderInactiveSupporters() {
    const filteredSupporters = supportersData.filter(
      ({ active }) => !active
    )

    return filteredSupporters.map(({ name }, index) => {
      const isLastItem = index + 1 === filteredSupporters.length

      return (
        <span key={index}>
          {name}
          {!isLastItem ? ', ' : '.'}
        </span>
      )
    })
  }

  function renderActiveSupporters() {
    const filteredSupporters = supportersData.filter(
      ({ active }) => active
    )

    return filteredSupporters.map(({ name, URL }, index) => {
      const isLastItem = index + 1 === filteredSupporters.length

      return (
        <Link key={index} to={URL} className={styles.supportersLink}>
          {name}
          {!isLastItem ? ', ' : '.'}
        </Link>
      )
    })
  }

  return (
    <section>
      <Title>{getMessage('supporters')}</Title>

      <div className={styles.supportersListContainer}>
        <Badge
          text={getMessage('active')}
          color="black"
          bgColor="green"
          className={styles.activitySupportersBadge}
        />

        {renderActiveSupporters()}
      </div>

      <HorizontalRule />

      <div className={styles.supportersListContainer}>
        <Badge
          text={getMessage('inactive')}
          color="black"
          bgColor="gray"
          className={styles.activitySupportersBadge}
        />

        {renderInactiveSupporters()}
      </div>
    </section>
  )
}
