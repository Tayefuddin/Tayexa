import { useRef } from 'react'
import type { MouseEvent } from 'react'

/**
 * Tracks the cursor position within an element as CSS custom properties
 * (--spot-x / --spot-y) for a radial "spotlight" hover effect. Pairs with
 * the .card-spotlight class in index.css, which only renders on
 * hover-capable pointers — this hook itself is inert on touch devices since
 * onMouseMove never fires there.
 */
export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  const onMouseMove = (event: MouseEvent<T>) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    node.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    node.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }

  return { ref, onMouseMove }
}
