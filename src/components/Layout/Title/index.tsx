import React, { ReactElement } from 'react'
import Tag, { ClientTagProps } from 'components/Layout/Tag'

import styles from './styles.module.sass'

export default function Title({
  classNames,
  children,
  ...rest
}: ClientTagProps): ReactElement {
  const classes = [styles.title, classNames || '']

  return (
    <Tag classNames={classes} tag="h1" {...rest}>
      {children}
    </Tag>
  )
}
