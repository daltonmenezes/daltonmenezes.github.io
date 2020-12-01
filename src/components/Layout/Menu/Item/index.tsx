import React, { ReactElement } from 'react'
import Tag, { ClientTagProps } from 'components/Layout/Tag'
import { Link } from 'components/Layout'

import styles from './styles.module.sass'

export interface MenuItemProps extends ClientTagProps {
  to?: string
}

export default function MenuItem({
  classNames,
  children,
  to,
  ...rest
}: MenuItemProps): ReactElement {
  const classes = [styles.menuItem, classNames || '']

  return (
    <Link to={to || '/'}>
      <Tag classNames={classes} tag="li" {...rest}>
        {children}
      </Tag>
    </Link>
  )
}
