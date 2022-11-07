import { createStitches, ScaleValue, CSS } from '@stitches/react'

import { createKeyframes } from './keyframes'

export const { styled, css, globalCss, getCssText, keyframes, theme, config } =
  createStitches({
    theme: {
      colors: {
        'text-title': '#c7c7c7',
        'text-base': 'rgba(255, 255, 255, 0.87)',
        'text-support': '#909090',
        'accent-primary': '#00d4a4',
        'accent-secondary': '#b764ff',

        'text-gradient':
          '-webkit-linear-gradient(0deg, $accent-primary 0%, $accent-secondary 100%)',
      },

      fonts: {
        default: `Montserrat`,
      },
    },

    media: {
      bp1: `(min-width: 375px)`,
      bp2: `(min-width: 640px)`,
      bp3: `(min-width: 768px)`,
      bp4: `(min-width: 1024px)`,
      bp5: `(min-width: 1440px)`,
    },

    utils: {
      paddingVertical: (value: ScaleValue<'space'> | string) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      paddingHorizontal: (value: ScaleValue<'space'> | string) => ({
        paddingLeft: value,
        paddingRight: value,
      }),

      marginVertical: (value: ScaleValue<'space'> | string) => ({
        marginTop: value,
        marginBottom: value,
      }),

      marginHorizontal: (value: ScaleValue<'space'> | string) => ({
        marginLeft: value,
        marginRight: value,
      }),
    },
  })

export const animations = createKeyframes(keyframes)

export type Mixin = CSS<typeof config>
