import { keyframes as Keyframes } from '.'

export const createKeyframes = (keyframes: typeof Keyframes) => ({
  fadeIn: keyframes({
    from: {
      opacity: 0,
    },

    to: {
      opacity: 1,
    },
  }),

  reveal: keyframes({
    from: {
      opacity: 0,
      transform: 'translateY(1rem)',
    },

    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  }),

  spin: keyframes({
    from: {
      transform: 'rotate(0deg)',
    },

    to: {
      transform: 'rotate(360deg)',
    },
  }),
})
