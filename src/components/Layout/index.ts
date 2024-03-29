import { styled } from 'styles'

export * from './AnimatedPatterns'
export * from './HorizontalRule'
export * from './RootContainer'
export * from './PageOverlay'
export * from './Separator'
export * from './Header'
export * from './Title'
export * from './Nav'

export const BaseLayout = styled('div', {
  display: 'flex',
  flexFlow: 'column wrap',
  width: '100%',
  gap: '1rem',
})

export const Layout = styled(BaseLayout, {
  alignItems: 'center',
  maxWidth: `1250px`,
  width: `100%`,
  padding: `0 20px`,
  margin: '0 auto',
  position: 'relative',
})

export const LayoutSpacing = styled('div', {
  variants: {
    size: {
      extraSmall: {
        height: '0.5rem',
      },

      small: {
        paddingBottom: '1rem',
      },

      medium: {
        paddingBottom: '2rem',

        '@bp4': {
          paddingBottom: '4rem',
        },
      },

      large: {
        paddingBottom: '4rem',

        '@bp4': {
          paddingBottom: '8rem',
        },
      },
    },
  },

  defaultVariants: {
    size: 'large',
  },
})
