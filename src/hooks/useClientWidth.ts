import { useEffect, useState } from 'react'

export function useClientWidth () {
  const [clientWidth, setClientWidth] = useState(() => window.innerWidth)
  const resize = () => setClientWidth(window.innerWidth)
  useEffect(() => {
    addEventListener('resize', resize)

    return () => removeEventListener('resize', resize)
  }, [])

  return clientWidth
}
