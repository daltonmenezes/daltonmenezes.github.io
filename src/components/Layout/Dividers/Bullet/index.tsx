import React, { HTMLAttributes, ReactElement } from 'react'
import join from 'utils/join'

import styles from './styles.module.sass'

interface BulletDividerProps extends HTMLAttributes<HTMLSpanElement> {}

export default function BulletDivider({
  className,
  ...rest
}: BulletDividerProps): ReactElement {
  const classes = join([styles.bulletDivider, className])

  return (
    <span className={classes} {...rest}>
      •
    </span>
  )
}
