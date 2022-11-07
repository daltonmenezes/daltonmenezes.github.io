import { styled } from 'styles'

export const Overlay = styled('section', {
  top: 0,
  left: 0,
  minWidth: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(16, 16, 16, 0.89)',
  zIndex: 9998,
  overflow: 'hidden',
  position: 'fixed',
  pointerEvents: 'none',
})

export const OverlayContent = styled('div', {
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: 999999,
  padding: '0 2rem',
  overflowX: 'hidden',
  overflowY: 'auto',
  position: 'fixed',
})

export const OverlayHeader = styled('header', {
  display: 'flex',
  minWidth: '100vh',
  width: '100%',
  maxWidth: '1200px',
  justifyContent: 'flex-end',
  position: 'relative',
})

export const CloseButton = styled('button', {
  display: 'flex',
  top: '1rem',
  right: '1rem',
  alignSelf: 'flex-end',
  position: 'fixed',
  fontSize: '3rem',
  zIndex: 9999999,
  transition: '.5s ease',

  '&:hover, &:focus-within': {
    color: '$accent-primary',
  },
})
