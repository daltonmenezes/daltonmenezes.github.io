import { styled, keyframes } from 'styles'

const animation = keyframes({
  '0%': {
    backgroundPosition: '0 -100vh',
    opacity: '0',
  },

  '10%': {
    opacity: '.1',
  },

  '100%': {
    backgroundPosition: '0 100vh',
    opacity: 0,
  },
})

export const AnimatedPatterns = styled('div', {
  backgroundImage: 'url("/patterns.png")',
  backgroundSize: 'cover',
  top: 0,
  left: 0,
  height: '100vh',
  minWidth: '100vw',
  animation: `${animation} 30s infinite linear`,
  position: 'fixed',
  pointerEvents: 'none',
})
