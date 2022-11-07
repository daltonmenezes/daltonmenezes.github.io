import { globalCss, animations } from '.'

globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: 'none',
    boxSizing: 'border-box',
  },

  ':root': {
    fontSynthesis: 'none',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-text-size-adjust': '100%',
    colorScheme: 'dark',
    scrollBehavior: 'smooth',
    scrollbarGutter: 'auto',
  },

  'body, input, button, textarea, select': {
    color: '$text-base',
    background: 'transparent',
    fontFamily: '$default',
  },

  'h1, h2, h3, h4, h5, h6': {
    color: '$text-base',
    lineHeight: 1.1,
  },

  a: {
    color: '$text-base',
    textDecoration: 'none',
    transition: 'all 0.2s ease',

    'svg path': {
      transition: 'all 0.2s ease',
    },

    '&:hover, &:focus-within': {
      color: '$accent-primary',

      'svg path': {
        fill: '$accent-primary',
      },
    },

    '&:active': {
      transform: 'scale(0.95)',
    },
  },

  li: { listStyle: 'none' },

  button: {
    cursor: 'pointer',
    background: 'transparent',
    transition: 'all 0.2s ease',

    'svg path': {
      transition: 'all 0.2s ease',
    },

    '&:hover, &:focus-within': {
      color: '$accent-primary',

      'svg path': {
        fill: '$accent-primary',
      },
    },

    '&:active': {
      transform: 'scale(0.95)',
    },
  },

  body: {
    minWidth: '100vw',
    height: '100vh',
    color: '$text-support',
    backgroundColor: '#000000',
  },

  '::-webkit-scrollbar': {
    width: '0.9rem',
    height: '0.6rem',
    marginRight: '10px',
  },

  '::-webkit-scrollbar-corner': {
    background: 'none',
    border: 'none',
  },

  '::-webkit-scrollbar-thumb': {
    backgroundColor: '$accent-primary',
    borderRadius: '7px',
    border: '3px solid #202020',
    cursor: 'move',
  },

  '::-webkit-scrollbar-track': {
    backgroundColor: 'black',
    border: 'none',
  },

  '::selection': {
    color: 'black',
    backgroundColor: '$accent-primary',
  },

  '.animate': {
    opacity: 0,
    animation: `${animations.fadeIn} 1s ease forwards`,
  },
})()
