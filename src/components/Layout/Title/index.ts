import { styled, animations } from 'styles'

export const Title = styled('h1', {
  fontSize: '2rem',
  letterSpacing: '0.2em',
  textAlign: 'center',
  fontWeight: 300,
  color: '$text-title',
  lineHeight: 1.2,
  animation: `${animations.reveal} 2s ease-in-out`,
  backgroundImage: '$text-gradient',
  backgroundClip: 'text',
  '-webkit-background-clip': 'text',
  textFillColor: 'transparent',
  '-webkit-text-fill-color': 'transparent',

  userSelect: 'none',

  variants: {
    uppercase: {
      true: {
        textTransform: 'uppercase',
      },
    },
  },
})
