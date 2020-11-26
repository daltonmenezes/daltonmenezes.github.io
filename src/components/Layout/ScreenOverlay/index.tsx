import React, { useEffect, ReactElement, useState } from 'react'
import Tag, { ClientTagProps } from 'components/Layout/Tag'
import { useMatchMedia } from 'hooks'
import { useHistory } from 'react-router-dom'
import { FaTimes as Close } from 'react-icons/fa'

import styles from './styles.module.sass'

let timeout: NodeJS.Timer

export default function ScreenOverlay({
  children,
  classNames,
  ...rest
}: ClientTagProps): ReactElement {
  const history = useHistory()
  const matches = useMatchMedia('max-width: 520px')
  const [animationEndClass, setAnimationEndClass] = useState('')

  const animationStartClass = matches
    ? styles.showOnMobile
    : styles.showOnLargeScreens

  const classes = [
    styles.container,
    animationStartClass,
    animationEndClass,
    classNames || '',
  ]

  useEffect(() => {
    function listener(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        handleClose()
      }
    }

    window.addEventListener('keydown', listener)

    return () => {
      window.removeEventListener('keydown', listener)
      clearTimeout(timeout)
    }
  }, [matches])

  function handleClose() {
    clearTimeout(timeout)

    setAnimationEndClass(
      matches ? styles.hideOnMobile : styles.hideOnLargeScreens
    )

    timeout = setTimeout(() => history.replace('/'), 400)
  }

  return (
    <Tag classNames={classes} tag="section" {...rest}>
      <button onClick={handleClose} className={styles.close}>
        <Close size="3rem" />
      </button>

      {children}
    </Tag>
  )
}
