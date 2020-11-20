import React, { HTMLAttributes, PropsWithChildren, ReactElement } from 'react'
import { BulletDivider } from 'components/Layout/Dividers'
import join from 'utils/join'

import styles from './styles.module.sass'

interface MenuProps extends HTMLAttributes<HTMLElement> {
  withBullets?: boolean
  horizontal?: boolean
}

export default function Menu({
  className,
  children,
  withBullets,
  horizontal,
  ...rest
}: PropsWithChildren<MenuProps>): ReactElement {
  const classes = join([
    styles.menu,
    horizontal ? styles.horizontal : '',
    className,
  ])

  function renderMenuChildrenWithDividers() {
    return React.Children.map(children, (child, index) => {
      if (index === 0 && horizontal) {
        return <div className={styles.menuItemWrapper}>{child}</div>
      }

      return (
        <div className={styles.menuItemWrapper}>
          <BulletDivider />
          {child}
        </div>
      )
    })
  }

  return (
    <ul className={classes} {...rest}>
      {withBullets ? renderMenuChildrenWithDividers() : children}
    </ul>
  )
}

export { default as Item } from './Item'
