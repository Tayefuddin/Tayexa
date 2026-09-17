import { useEffect, useRef, useState } from 'react'

/**
 * Tracks whether an element has scrolled into view, using IntersectionObserver.
 * Triggers once and stays revealed — re-hiding on scroll-away would be distracting.
 */
export function useReveal<T extends HTMLElement>(rootMargin = '0px 0px -60px 0px') {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const node = ref.current
    if (!node || isVisible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [isVisible, rootMargin])

  return { ref, isVisible }
}
