import { useEffect, useState } from 'react'

export default function useCountUp(target, isInView, duration = 1400) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = null
    let frame

    const step = (timestamp) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * target))
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [isInView, target, duration])

  return value
}
