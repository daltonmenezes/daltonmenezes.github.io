import { PageContainer, PageContent } from './page'
import { styled } from 'styles'

export const SoftwareContainer = styled(PageContainer, {})

export const SoftwareContent = styled(PageContent, {
  flexFlow: 'row wrap',
  justifyContent: 'center',

  p: {
    fontSize: '1.2rem',
    whiteSpace: 'break-spaces',
  },
})

export const SoftwareItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: 300,

  '@bp4': {
    height: 300,
  },

  a: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',

    'h1, p': {
      color: '$text-support',
      textAlign: 'center',
    },

    h1: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
    },

    p: {
      fontSize: '1rem',
    },

    img: {
      width: 100,
      height: 100,
    },

    '> *': {
      transition: 'all 0.2s ease-in-out',
    },
  },

  '&:nth-child(odd) a:hover > *, &:nth-child(odd) a:focus-within > *': {
    color: '$accent-primary',
  },

  '&:nth-child(even) a:hover > *, &:nth-child(even) a:focus-within > *': {
    color: '$accent-secondary',
  },
})

export const SeeMoreContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',

  a: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.6rem',
    backgroundColor: '$accent-primary',
    color: 'black',
    padding: '1rem 2rem',
    borderRadius: '0.4rem',

    '&:hover, &:focus-within': {
      'svg path': {
        fill: 'black',
      },

      backgroundColor: '$accent-secondary',
      filter: 'brightness(0.6)',
    },
  },
})
