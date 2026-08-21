import { motion, useReducedMotion } from 'framer-motion'
import type { CSSProperties } from 'react'

export type StickerItem = {
  src: string
  className: string
  rotate?: number
  delay?: number
  duration?: number
}

type FloatingStickersProps = {
  items: StickerItem[]
  className?: string
}

/**
 * Stickers live in empty margins only (never under copy).
 * Parent content must use relative z-10; stickers use z-[1].
 */
export function FloatingStickers({ items, className = '' }: FloatingStickersProps) {
  const reduceMotion = useReducedMotion()

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-[1] overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {items.map((item, index) => (
        <motion.img
          key={`${item.src}-${index}`}
          src={item.src}
          alt=""
          loading="lazy"
          decoding="async"
          draggable={false}
          className={`sticker absolute select-none ${reduceMotion ? '' : 'sticker-float'} ${item.className}`}
          style={
            {
              '--sticker-rotate': `${item.rotate ?? 0}deg`,
              '--sticker-duration': `${item.duration ?? 5.5 + (index % 2)}s`,
              animationDelay: `${(item.delay ?? 0) + index * 0.2}s`,
            } as CSSProperties
          }
          initial={reduceMotion ? false : { opacity: 0, scale: 0.75, y: 12 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{
            type: 'spring',
            stiffness: 160,
            damping: 16,
            delay: item.delay ?? 0.08,
          }}
        />
      ))}
    </div>
  )
}
