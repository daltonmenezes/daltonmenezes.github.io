import { styled } from '../'

export const PageContainer = styled('section', {
  display: 'flex',
  paddingTop: '6rem',
  justifyContent: 'center',
  overflowY: 'overlay',
  minWidth: '100vw',
  height: '100%',
  position: 'fixed',
  top: 0,
  left: 0,

  '@bp4': {
    paddingTop: '11rem',
  },
})

export const PageContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '0 2.5rem 4rem 2.5rem',
  maxWidth: '90%',
  height: 'fit-content',
  gap: '3rem',

  '@bp4': {
    width: '80%',
    maxWidth: '1200px',
  },
})
