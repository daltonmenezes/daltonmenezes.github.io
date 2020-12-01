import React, { ReactElement } from 'react'
import Tag, { ClientTagProps } from 'components/Layout/Tag'

import styles from './styles.module.sass'

export default function Header({
  classNames,
  children,
  ...rest
}: ClientTagProps): ReactElement {
  const classes = [styles.header, classNames || '']

  return (
    <Tag classNames={classes} tag="header" {...rest}>
      {children}
    </Tag>
  )
}
