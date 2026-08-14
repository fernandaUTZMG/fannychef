import { useEffect, useRef, useState } from 'react'
import { FadeIn } from './FadeIn'
import { SmartVideo } from './SmartVideo'
import { useLanguage } from '../i18n/LanguageContext'
import type { Translations } from '../i18n/translations'

type GalleryItem = Translations['gallery']['items'][number]

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

function masonryAspect(size: GalleryItem['size']) {
  switch (size) {
    case 'tall':
      return 'aspect-[3/4]'
    case 'wide':
      return 'aspect-[4/3]'
    default:
      return 'aspect-square'
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

function MasonryTile({ item, delay }: { item: GalleryItem; delay: number }) {
  return (
    <FadeIn delay={delay} className="mb-3 break-inside-avoid" y={20}>
      <article
        className={`group relative overflow-hidden rounded-[1.25rem] bg-navy/40 ${masonryAspect(item.size)}`}
      >
        <GalleryMedia item={item} />
        {item.type === 'video' && <PlayBadge />}
      </article>
    </FadeIn>
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
    <section id="galeria" className="overflow-hidden bg-ink py-16 text-cream sm:py-28">
      <div className="section-pad section-max">
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

      {/* Mobile: masonry collage */}
      <div className="mt-8 columns-2 gap-3 px-4 sm:hidden">
        {gallery.map((item, index) => (
          <MasonryTile
            key={`${lang}-m-${item.src}-${item.label}`}
            item={item}
            delay={Math.min(index * 0.04, 0.28)}
          />
        ))}
      </div>

      {/* Desktop: horizontal carousel */}
      <FadeIn delay={0.08} className="hidden sm:block">
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
