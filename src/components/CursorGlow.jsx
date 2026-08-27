import { useEffect, useRef } from 'react'

// A soft radial glow that follows the pointer. Desktop only, hidden on touch devices.
export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const el = ref.current
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let targetX = x
    let targetY = y

    const onMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY
    }
    window.addEventListener('mousemove', onMove)

    let frame
    const animate = () => {
      x += (targetX - x) * 0.12
      y += (targetY - y) * 0.12
      if (el) el.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full mix-blend-screen z-[1] hidden md:block"
      style={{
        background:
          'radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(34,211,238,0.10) 45%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  )
}
