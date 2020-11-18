import React, { HTMLAttributes, PropsWithChildren, ReactElement } from 'react'
import join from 'utils/join'

import styles from './styles.module.sass'

interface MenuProps extends HTMLAttributes<HTMLElement> {}

export default function Menu({
  className,
  children,
  ...rest
}: PropsWithChildren<MenuProps>): ReactElement {
  const classes = join([styles.menu, className])

  return (
    <ul className={classes} {...rest}>
      {children}
    </ul>
  )
}
