import React, { ReactElement } from 'react'
import { Tag } from 'components/Layout'

import styles from './styles.module.sass'

export interface BadgeProps {
  text: string
  bgColor?: string
  color?: string
  className?: string
}

export default function Badge({
  text,
  color,
  bgColor,
  className,
  ...rest
}: BadgeProps): ReactElement {
  return (
    <Tag
      classNames={[
        styles.badge,
        bgColor ? `bg-${bgColor}` : '',
        className || '',
      ]}
      style={{ color }}
      tag="span"
      {...rest}
    >
      {text}
    </Tag>
  )
}
