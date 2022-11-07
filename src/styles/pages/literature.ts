import { PageContainer, PageContent } from './page'
import { styled } from 'styles'

export const LiteratureContainer = styled(PageContainer, {})

export const LiteratureContent = styled(PageContent, {
  flexFlow: 'row wrap',
  justifyContent: 'center',
  padding: '0 0.5rem 2rem 0.5rem',
  gap: '0.5rem',

  p: {
    fontSize: '1.2rem',
    whiteSpace: 'break-spaces',
  },

  '@bp4': {
    gap: 0,
  },
})

export const BookContent = styled('div', {
  opacity: 0,
  visibility: 'hidden',
  display: 'flex',
  flexFlow: 'column wrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  color: '$text-title',
  border: '5px solid black',
  backgroundColor: '#000000e0',
  transition: '.5s ease',
  position: 'absolute ',

  ul: {
    padding: '0 1rem',

    p: {
      height: '16rem',
      fontSize: '1rem',
      whiteSpace: 'break-spaces',
      overflowY: 'auto',
    },
  },
})

export const LiteratureItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',

  '&:hover, &:focus-within': {
    zIndex: 100,

    [`> ${BookContent}`]: {
      opacity: 1,
      visibility: 'visible',
    },
  },

  '@bp4': {
    width: 306,
    height: 489,

    '&:hover, &:focus-within': {
      transform: 'scale(1.2)',
      boxShadow: '5px 5px 30px black',
    },
  },
})

export const BookBlurbLabel = styled('strong', {
  display: 'block',
  fontSize: '.9rem',
  paddingVertical: ' 1rem',
})

export const DownloadSection = styled('section', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  a: {
    backgroundColor: '$accent-primary',
    padding: '0.5rem',
    color: 'black',
    borderRadius: '0.4rem',

    '&:hover, &:focus-within': {
      backgroundColor: '$accent-secondary',
      filter: 'brightness(0.6)',
    },

    '&:nth-child(even)': {
      backgroundColor: '$accent-secondary',

      '&:hover, &:focus-within': {
        backgroundColor: '$accent-primary',
      },
    },
  },
})
