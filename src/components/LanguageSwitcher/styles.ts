import { styled } from 'styles'

export const Menu = styled('nav', {
  display: 'flex',
  minWidth: 'max-content',
  fontSize: '.9rem',
  top: '0',
  right: '0',
  position: 'fixed',
  padding: '1rem',

  button: {
    margin: '0 .5rem',
    transition: '.5s ease',
  },
})

export const Item = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 .5rem',
  gap: '0.5rem',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  transition: '.5s ease',
  color: '$text-support',
  textTransform: 'uppercase',

  '&:nth-of-type(odd):hover, &:nth-of-type(odd):focus-within': {
    color: '$accent-primary',
  },

  '&:nth-of-type(even):hover, &:nth-of-type(even):focus-within': {
    color: '$accent-secondary',
  },

  div: {
    marginLeft: '0.5rem',
  },

  span: {
    fontSize: '0.9rem',
  },

  variants: {
    active: {
      true: {
        color: '$accent-primary',
        cursor: 'default',
        pointerEvents: 'none',
      },
    },
  },
})
