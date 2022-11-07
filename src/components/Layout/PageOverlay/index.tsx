import { useEffect, PropsWithChildren } from 'react'
import { VscClose as Close } from 'react-icons/vsc'
import FocusTrap from 'focus-trap-react'
import { useRouter } from 'next/router'

import { CloseButton, Overlay, OverlayContent, OverlayHeader } from './styles'
import { AnimatedPatterns, Layout } from '..'

export function PageOverlay({ children, ...rest }: PropsWithChildren<{}>) {
  const route = useRouter()

  useEffect(() => {
    function listener(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        handleClose()
      }
    }

    window.addEventListener('keydown', listener)

    return () => window.removeEventListener('keydown', listener)
  }, [])

  function handleClose() {
    route.push('/')
  }

  return (
    <>
      <FocusTrap>
        <Layout role="dialog">
          <OverlayHeader>
            <CloseButton onClick={handleClose} tabIndex={0}>
              <Close />
            </CloseButton>
          </OverlayHeader>

          <OverlayContent {...rest}>{children}</OverlayContent>
        </Layout>
      </FocusTrap>

      <AnimatedPatterns style={{ zIndex: 9999 }} />
      <Overlay />
    </>
  )
}
