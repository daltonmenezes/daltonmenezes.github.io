import { styled } from 'styles'

export const Nav = styled('nav', {
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.4rem',

  a: {
    fontSize: '0.91rem',
    color: '$text-support',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',

    '&:hover, &:focus-within': {
      color: '$accent-primary',
    },

    '&:nth-child(n + 6):hover, &:nth-child(n + 6):focus-within': {
      color: '$accent-secondary',
    },
  },

  '@bp4': {
    flexFlow: 'row wrap',
    gap: '1.6em',
  },
})
