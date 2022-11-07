import { styled } from 'styles'

export const RootContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '5rem',
  alignItems: 'stretch',
  width: '100vw',
  height: '100vh',
  gap: '1.5rem',
  backgroundImage: `url("/background.png")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
})
