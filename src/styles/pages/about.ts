import { PageContainer, PageContent } from './page'
import { styled } from 'styles'

export const AboutContainer = styled(PageContainer, {
  backgroundImage: 'url("/background.png")',
  backgroundSize: 'auto',
  backgroundPosition: 'bottom center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',

  '@bp4': {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
})

export const AboutContent = styled(PageContent, {
  p: {
    fontSize: '1.2rem',
    whiteSpace: 'break-spaces',
  },

  img: {
    width: 200,
    height: 200,
    borderRadius: '50%',
  },

  '@bp4': {
    display: 'inline-block',

    img: {
      margin: '-1.5rem 2rem 1rem 0',
      float: 'left',
    },
  },
})
