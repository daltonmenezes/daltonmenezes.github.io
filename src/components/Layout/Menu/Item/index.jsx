import React, { ReactElement } from 'react'
import Tag, { ClientTagProps } from 'components/Layout/Tag'

import styles from './styles.module.sass'

export default function MenuItem({
  classNames,
  children,
  ...rest
}: ClientTagProps): ReactElement {
  const classes = [styles.menuItem, classNames || '']

  return (
    <Tag classNames={classes} tag="li" {...rest}>
      {children}
    </Tag>
  )
}
