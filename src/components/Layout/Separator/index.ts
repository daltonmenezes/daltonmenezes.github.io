import { styled } from 'styles'

export const Separator = styled('div', {
  display: 'none',
  background: 'black',

  '&::before': {
    display: 'none',
  },

  compoundVariants: [
    {
      horizontal: true,
      css: {
        borderLeft: 0,
        borderTop: '1px solid rgba(36, 36, 36, 0.547)',
      },
    },
  ],

  variants: {
    opacity: {
      default: {
        borderLeft: '1px solid $text-support',
      },

      low: {
        opacity: 0.4,
      },
    },

    vertical: {
      true: {
        width: 2,
        height: 8,
      },
    },

    horizontal: {
      true: {
        width: '100%',
        height: 1,
      },
    },

    type: {
      bullet: {
        display: 'flex',
        alignSelf: 'stretch',
        width: 4,
        border: 'none',
        background: 'none',

        '&::before': {
          content: '•',
          fontSize: '1rem',
        },
      },
    },

    keepBulletOnMobile: {
      true: {
        display: 'flex',

        '&::before': {
          display: 'block',
        },
      },
    },
  },

  defaultVariants: {
    vertical: true,
    opacity: 'default',
    type: 'bullet',
  },

  '@bp4': {
    display: 'flex',

    '&::before': {
      display: 'block',
    },
  },
})
