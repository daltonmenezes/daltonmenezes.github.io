import { PageContainer, PageContent } from './page'
import { styled } from 'styles'

export const SponsorshipContainer = styled(PageContainer, {})

export const SponsorshipContent = styled(PageContent, {
  p: {
    fontSize: '1.2rem',
    whiteSpace: 'break-spaces',
  },
})

export const LinkContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  flex: 1,
  minWidth: '100%',

  a: {
    display: 'flex',
    minWidth: '100%',
    justifyContent: 'center',
    color: 'black',
    padding: '1rem',
    borderRadius: '0.4rem',
    textTransform: 'uppercase',
    alignItems: 'center',
    gap: '0.5rem',

    '&:hover, &:focus-within': {
      'svg path': {
        fill: 'black',
      },

      filter: 'brightness(0.6)',
    },
  },

  'a:nth-of-type(odd)': {
    backgroundColor: '$accent-primary',

    '&:hover, &:focus-within': {
      backgroundColor: '$accent-secondary',
    },
  },

  'a:nth-of-type(even)': {
    backgroundColor: '$accent-secondary',

    '&:hover, &:focus-within': {
      backgroundColor: '$accent-primary',
    },
  },

  '@bp4': {
    flexDirection: 'row',

    a: {
      minWidth: 'max-content',
    },
  },
})
