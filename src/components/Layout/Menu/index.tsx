import React, { ReactElement } from 'react'
import Tag, { ClientTagProps } from 'components/Layout/Tag'
import { BulletDivider } from 'components/Layout/Dividers'

import styles from './styles.module.sass'

export interface MenuProps extends ClientTagProps {
  withBullets?: boolean
  horizontal?: boolean
}

export default function Menu({
  classNames,
  children,
  withBullets,
  horizontal,
  ...rest
}: MenuProps): ReactElement {
  const classes = [
    styles.menu,
    horizontal ? styles.horizontal : '',
    classNames || '',
  ]

  function renderMenuChildrenWithDividers() {
    return React.Children.map(children, (child, index) => {
      if (index === 0 && horizontal) {
        return (
          <Tag classNames={[styles.menuItemWrapper]}>{child}</Tag>
        )
      }

      return (
        <Tag classNames={[styles.menuItemWrapper]}>
          <BulletDivider />
          {child}
        </Tag>
      )
    })
  }

  return (
    <Tag classNames={classes} tag="ul" {...rest}>
      {withBullets ? renderMenuChildrenWithDividers() : children}
    </Tag>
  )
}

export { default as Item } from './Item'
