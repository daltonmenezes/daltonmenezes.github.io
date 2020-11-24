import React, { PropsWithChildren, ReactElement } from 'react'
import { Link as HyperLink, LinkProps } from 'react-router-dom'

export default function Link({
  to,
  children,
  ...rest
}: PropsWithChildren<LinkProps>): ReactElement {
  return (
    <HyperLink to={to} {...rest} replace>
      {children}
    </HyperLink>
  )
}
