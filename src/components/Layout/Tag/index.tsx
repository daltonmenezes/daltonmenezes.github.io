import React, { HTMLAttributes, PropsWithChildren, ReactElement } from 'react'
import join from 'utils/join'

export interface TagProps extends HTMLAttributes<HTMLOrSVGElement> {
  tag?: keyof JSX.IntrinsicElements
  classNames?: (string | string[])[]
}

export interface ClientTagProps extends Omit<TagProps, 'tag'> {
  classNames?: string[]
}

export default function Tag({
  classNames,
  children,
  tag,
  ...rest
}: PropsWithChildren<TagProps>): ReactElement {
  const Tag = tag as keyof JSX.IntrinsicElements
  const classes = join(classNames ? classNames?.flat() : [])

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  )
}

Tag.defaultProps = {
  tag: 'div',
  classNames: [],
}
