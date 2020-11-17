import React, { HTMLAttributes, PropsWithChildren, ReactElement } from 'react'
import join from 'utils/join'

import styles from './styles.module.sass'

interface HeaderProps extends HTMLAttributes<HTMLElement> {}

export default function Header({
  className,
  children,
  ...rest
}: PropsWithChildren<HeaderProps>): ReactElement {
  const classes = join([styles.header, className])

  return (
    <header className={classes} {...rest}>
      {children}
    </header>
  )
}
