import React, { ReactElement } from 'react'
import Tag, { ClientTagProps } from 'components/Layout/Tag'

import styles from './styles.module.sass'

export default function HorizontalRule({
  classNames,
  ...rest
}: ClientTagProps): ReactElement {
  const classes = [styles.horizontalRule, classNames || '']

  return <Tag classNames={classes} tag="hr" {...rest}></Tag>
}
