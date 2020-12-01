import React, { ReactElement } from 'react'
import { ScreenOverlay, Link } from 'components/Layout'
import { useMatchMedia } from 'hooks'
import { IconType } from 'react-icons/lib'
import AnimatedPatterns from 'components/AnimatedPatterns'

import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
} from 'react-icons/fa'

import contactsData from 'data/contacts.json'

import styles from './styles.module.sass'

interface IconsKeys {
  [key: string]: IconType
}

const icons: IconsKeys = {
  github: FaGithub,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  twitter: FaTwitter,
  linkedin: FaLinkedinIn,
  email: FaEnvelope,
}

export default function Contacts(): ReactElement {
  const matches = useMatchMedia('max-width: 630px')
  const matchedStyle = matches ? styles.matchMedia : ''

  return (
    <ScreenOverlay classNames={[styles.container, matchedStyle]}>
      <div className={styles.patterns}>
        <AnimatedPatterns />
      </div>

      <section className={styles.contactsContainer}>
        {contactsData.map((contact) => {
          const { URL, name } = contact
          const Icon = icons[name.toLocaleLowerCase()]

          return (
            <Link key={URL} to={URL} title={name}>
              <Icon />
            </Link>
          )
        })}
      </section>
    </ScreenOverlay>
  )
}
