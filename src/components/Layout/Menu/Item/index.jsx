import React, { LiHTMLAttributes, PropsWithChildren, ReactElement } from 'react'
import join from 'utils/join'

import styles from './styles.module.sass'

interface MenuItemProps extends LiHTMLAttributes<HTMLElement> {}

export default function Menu({
  className,
  children,
  ...rest
}: PropsWithChildren<MenuItemProps>): ReactElement {
  const classes = join([styles.menuItem, className])

  return (
    <li className={classes} {...rest}>
      {children}
    </li>
  )
}
