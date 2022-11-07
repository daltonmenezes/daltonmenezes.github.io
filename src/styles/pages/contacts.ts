import { PageContainer, PageContent } from './page'
import { styled } from 'styles'

export const ContactsContainer = styled(PageContainer, {
  alignItems: 'center',
  minWidth: '100%',

  '@bp4': {
    paddingTop: '5rem',
  },
})

export const ContactsContent = styled(PageContent, {
  flexFlow: 'row wrap',
  justifyContent: 'center',
  fontSize: '4rem',

  a: {
    display: 'flex',
    transition: '0.5s ease',
    color: '$text-support',
    willChange: 'transform, color',

    '&:hover, &:focus-within': {
      transform: 'scale(1.3)',

      '&:nth-child(odd)': {
        'svg path': {
          fill: '$accent-primary',
        },
      },

      '&:nth-child(even)': {
        'svg path': {
          fill: '$accent-secondary',
        },
      },
    },
  },

  '@bp4': {
    fontSize: '5rem',
  },
})
