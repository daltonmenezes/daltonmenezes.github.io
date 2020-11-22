import { useEffect, useState } from 'react'

export default function useMatchMedia(contidtion: string): boolean {
  const [isMatched, setIsMatched] = useState(false)

  useEffect(() => {
    function listener({ matches }: MediaQueryListEvent) {
      setIsMatched(matches)
    }

    const matchMedia = window.matchMedia(`(${contidtion})`)

    setIsMatched(matchMedia.matches)
    matchMedia.addEventListener('change', listener)

    return () => matchMedia.removeEventListener('change', listener)
  }, [])

  return isMatched
}
