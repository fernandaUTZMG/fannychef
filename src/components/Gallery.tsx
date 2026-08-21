import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { FadeIn } from './FadeIn'
import { FloatingStickers } from './FloatingStickers'
import { SmartVideo } from './SmartVideo'
import { useLanguage } from '../i18n/LanguageContext'
import type { Translations } from '../i18n/translations'

type GalleryItem = Translations['gallery']['items'][number]

const mobileAspects = [
  'aspect-[3/4]',
  'aspect-[4/5]',
  'aspect-square',
  'aspect-[5/6]',
  'aspect-[3/4]',
  'aspect-[4/3]',
]

function carouselSizeClasses(size: GalleryItem['size']) {
  switch (size) {
    case 'tall':
      return 'w-[300px] aspect-[3/4]'
    case 'wide':
      return 'w-[460px] aspect-[16/10]'
    default:
      return 'w-[300px] aspect-square'
  }
}

function GalleryMedia({ item }: { item: GalleryItem }) {
  const mediaClass =
    'absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]'

  if (item.type === 'video') {
    return (
      <SmartVideo
        src={item.src}
        poster={item.poster}
        alt={item.alt}
        className={mediaClass}
      />
    )
  }

  return <img src={item.src} alt={item.alt} className={mediaClass} loading="lazy" />
}

function PlayBadge() {
  return (
    <span
      aria-hidden="true"
      className="absolute right-2.5 top-2.5 z-10 inline-flex h-7 w-7 items-center justify-center rounded-full border border-cream/25 bg-ink/35 backdrop-blur-sm sm:right-4 sm:top-4 sm:h-9 sm:w-9"
    >
      <span className="ml-0.5 h-0 w-0 border-y-[4px] border-l-[7px] border-y-transparent border-l-cream sm:border-y-[6px] sm:border-l-[10px]" />
    </span>
  )
}

function CollageCard({
  item,
  aspect,
  index,
  fromRight,
}: {
  item: GalleryItem
  aspect: string
  index: number
  fromRight?: boolean
}) {
  const reduceMotion = useReducedMotion()
  /** Row-based stagger so left/right don't pop at the same instant. */
  const revealDelay = Math.floor(index / 2) * 0.08 + (fromRight ? 0.14 : 0)

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 56, scale: 0.9, x: fromRight ? 28 : -28 }
      }
      whileInView={{ opacity: 1, y: 0, scale: 1, x: 0 }}
      viewport={{ once: true, amount: 0.35, margin: '0px 0px -12% 0px' }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: reduceMotion ? 0 : revealDelay,
      }}
      className="group relative"
    >
      <div
        className={`relative overflow-hidden rounded-2xl bg-navy/25 shadow-[0_14px_36px_rgba(0,0,0,0.3)] ${aspect}`}
      >
        <GalleryMedia item={item} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
        <p className="absolute bottom-2 left-2.5 right-2.5 truncate font-display text-[11px] font-medium text-cream/90">
          {item.label}
        </p>
        {item.type === 'video' && <PlayBadge />}
      </div>
    </motion.article>
  )
}

function ParallaxColumn({
  items,
  y,
  startIndex,
  className = '',
}: {
  items: GalleryItem[]
  y: MotionValue<number>
  startIndex: number
  className?: string
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      style={reduceMotion ? undefined : { y }}
      className={`flex min-w-0 flex-1 flex-col gap-3 ${className}`}
    >
      {items.map((item, index) => {
        const globalIndex = startIndex + index * 2
        return (
          <CollageCard
            key={`${item.src}-${item.label}`}
            item={item}
            aspect={mobileAspects[(startIndex + index) % mobileAspects.length]}
            index={globalIndex}
            fromRight={startIndex === 1}
          />
        )
      })}
    </motion.div>
  )
}

/** Mobile Savee-style collage: two columns drifting at different scroll speeds. */
function MobileSaveeCollage({ items }: { items: GalleryItem[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const yLeft = useTransform(scrollYProgress, [0, 1], [48, -72])
  const yRight = useTransform(scrollYProgress, [0, 1], [-36, 64])

  const left = items.filter((_, i) => i % 2 === 0)
  const right = items.filter((_, i) => i % 2 === 1)

  return (
    <div ref={ref} className="relative z-10 mt-8 overflow-hidden px-3 pb-8 sm:hidden">
      <div className="flex items-start gap-3 pb-10">
        <ParallaxColumn
          items={left}
          y={yLeft}
          startIndex={0}
          className="pt-0"
        />
        <ParallaxColumn
          items={right}
          y={yRight}
          startIndex={1}
          className="pt-14"
        />
      </div>
      {!reduceMotion && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink to-transparent"
        />
      )}
    </div>
  )
}

function CarouselCard({
  item,
  index,
  mediaLabel,
}: {
  item: GalleryItem
  index: number
  mediaLabel: string
}) {
  return (
    <article
      className={`group relative shrink-0 snap-center overflow-hidden rounded-[1.75rem] bg-navy/40 ${carouselSizeClasses(item.size)} ${
        index % 2 === 1 ? 'mt-10' : 'mt-0'
      }`}
    >
      <GalleryMedia item={item} />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-10 p-5">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/55">
          {mediaLabel}
        </p>
        <h3 className="mt-1 font-display text-xl font-semibold text-cream">{item.label}</h3>
        <p className="mt-1 font-display text-sm leading-relaxed text-cream/70">{item.caption}</p>
      </div>
      {item.type === 'video' && <PlayBadge />}
    </article>
  )
}

export function Gallery() {
  const { t, lang } = useLanguage()
  const gallery = t.gallery.items
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateArrows = () => {
    const el = scrollerRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft < max - 8)
  }

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    updateArrows()
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [])

  const scrollByCard = (direction: -1 | 1) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: direction * Math.min(el.clientWidth * 0.8, 360), behavior: 'smooth' })
  }

  return (
    <section id="galeria" className="relative overflow-hidden bg-ink py-16 text-cream sm:py-28">
      <FloatingStickers
        items={[
          {
            src: '/img/stickers/shooting-star.png',
            className: 'right-1 top-8 w-9 sm:right-6 sm:top-10 sm:w-16 lg:right-8 lg:w-20',
            rotate: 10,
            delay: 0.15,
            duration: 5,
          },
          {
            src: '/img/stickers/heart.png',
            className: 'left-1 top-24 w-8 sm:left-4 sm:top-28 sm:w-10 md:w-12 lg:left-4 lg:w-12',
            rotate: -10,
            delay: 0.3,
            duration: 4.5,
          },
          {
            src: '/img/stickers/sparkles.png',
            className: 'left-2 bottom-10 w-7 sm:left-6 sm:bottom-24 sm:w-12',
            rotate: -8,
            delay: 0.4,
            duration: 3.8,
          },
        ]}
      />

      <div className="section-pad section-max relative z-10">
        <FadeIn>
          <div className="flex flex-col gap-5 sm:gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                {t.gallery.eyebrow}
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-[1.85rem] font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
                {t.gallery.title}
              </h2>
              <p className="mt-3 max-w-lg font-display text-sm leading-relaxed text-cream/65 sm:mt-4 sm:text-base">
                {t.gallery.intro}
              </p>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                aria-label="Previous"
                disabled={!canPrev}
                onClick={() => scrollByCard(-1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 transition hover:bg-cream/10 disabled:cursor-not-allowed disabled:opacity-35"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next"
                disabled={!canNext}
                onClick={() => scrollByCard(1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 transition hover:bg-cream/10 disabled:cursor-not-allowed disabled:opacity-35"
              >
                →
              </button>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Mobile only: Savee-style living collage (not a carousel) */}
      <MobileSaveeCollage items={gallery} />

      {/* Desktop: horizontal carousel */}
      <FadeIn delay={0.08} className="relative z-10 hidden sm:block">
        <div
          ref={scrollerRef}
          className="touch-scroll no-scrollbar mt-10 flex items-start gap-5 overflow-x-auto px-8 pb-3 pt-1 snap-x snap-mandatory lg:px-[max(2rem,calc((100vw-72rem)/2+3rem))]"
        >
          {gallery.map((item, index) => (
            <CarouselCard
              key={`${lang}-${item.src}-${item.label}`}
              item={item}
              index={index}
              mediaLabel={item.type === 'video' ? 'Video' : lang === 'es' ? 'Foto' : 'Photo'}
            />
          ))}
          <div className="w-6 shrink-0" aria-hidden="true" />
        </div>
      </FadeIn>
    </section>
  )
}
