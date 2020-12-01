import React, { ReactElement, PropsWithChildren } from 'react'
import Link, { LinkDef } from 'components/Layout/Link'

import styles from './styles.module.sass'

export default function Button({
  children,
  to,
  classNames,
  ...rest
}: PropsWithChildren<LinkDef>): ReactElement {
  const classes = [styles.button, classNames as string[]]
  return (
    <Link to={to} classNames={classes} {...rest}>
      {children}
    </Link>
  )
}
