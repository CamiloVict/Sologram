import { useState, useRef, useEffect } from 'react'

export const useNearScreen = () => {
  const [show, setShow] = useState<boolean>(false)
  const ref = useRef<any>(null)

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : require('intersection-observer' )
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting} = entries[0]
        console.log('15 isIntersecting >>> ', isIntersecting);
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(ref.current)
    })
  }, [ref])

  return [show, ref]
}
