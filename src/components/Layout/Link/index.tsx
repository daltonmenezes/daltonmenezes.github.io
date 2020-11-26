import React, { PropsWithChildren, ReactElement } from 'react'
import { Link as HyperLink, LinkProps } from 'react-router-dom'
import join from 'utils/join'

export interface LinkDef extends LinkProps {
  classNames?: (string | string[])[]
}

export default function Link({
  to,
  children,
  classNames,
  ...rest
}: PropsWithChildren<LinkDef>): ReactElement {
  const URL = String(to || '')
  const isInternalLink = URL.startsWith('/') || !to
  const classes = join(classNames ? classNames?.flat() : [])

  function renderInternalLink() {
    return (
      <HyperLink to={URL} className={classes} {...rest} replace>
        {children}
      </HyperLink>
    )
  }

  function renderExternalLink() {
    return (
      <a
        href={URL}
        target="_blank"
        rel="noreferrer"
        className={classes}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return isInternalLink ? renderInternalLink() : renderExternalLink()
}
