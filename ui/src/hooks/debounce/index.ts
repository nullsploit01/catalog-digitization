import { useCallback, useEffect } from 'react'

export const useDebounce = (effect: any, dependencies: any[], delay = 500) => {
  const callback = useCallback(effect, dependencies)

  useEffect(() => {
    const timeout = setTimeout(callback, delay)
    return () => clearTimeout(timeout)
  }, [callback, delay])
}
