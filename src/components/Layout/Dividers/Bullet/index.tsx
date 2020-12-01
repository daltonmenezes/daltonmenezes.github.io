import React, { ReactElement } from 'react'
import Tag, { ClientTagProps } from 'components/Layout/Tag'

import styles from './styles.module.sass'

export default function BulletDivider({
  classNames,
  ...rest
}: ClientTagProps): ReactElement {
  const classes = [styles.bulletDivider, classNames || '']

  return (
    <Tag classNames={classes} tag="span" {...rest}>
      •
    </Tag>
  )
}
