import {
  useEffect,
  useState,
  PropsWithChildren,
  ImgHTMLAttributes,
} from 'react'

import { Spinner } from 'components/Icons'
import { createDebounce } from 'shared/utils'

import { FallbackContainer } from './styles'
import { animations } from 'styles'

export function Image({
  src,
  ...restOfProps
}: PropsWithChildren<ImgHTMLAttributes<HTMLImageElement>>) {
  const [isImageLoading, setIsImageLoading] = useState(true)

  const { width, height } = restOfProps

  const animationStyle = {
    ...(isImageLoading
      ? { opacity: 0 }
      : { animation: `${animations.fadeIn} 0.5s ease` }),
  }

  useEffect(() => {
    const image = new window.Image()

    const debounce = createDebounce(() => {
      setIsImageLoading(false)
    }, 1000)

    image.src = String(src)
    image.onload = () => debounce.execute()

    return () => {
      debounce.abort()
      image.onload = null
      setIsImageLoading(true)
    }
  }, [src])

  return isImageLoading ? (
    <FallbackContainer style={{ width, height }}>
      <Spinner />
    </FallbackContainer>
  ) : (
    <img
      src={src}
      onError={() => {
        setIsImageLoading(false)
      }}
      style={animationStyle}
      alt=""
      {...restOfProps}
    />
  )
}
