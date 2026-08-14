import { useEffect, useRef, useState } from 'react'
import { FadeIn } from './FadeIn'
import { SmartVideo } from './SmartVideo'
import { useLanguage } from '../i18n/LanguageContext'
import type { Translations } from '../i18n/translations'

type GalleryItem = Translations['gallery']['items'][number]

function sizeClasses(size: GalleryItem['size']) {
  switch (size) {
    case 'tall':
      return 'w-[78vw] max-w-[260px] sm:w-[300px] sm:max-w-none aspect-[3/4]'
    case 'wide':
      return 'w-[86vw] max-w-[340px] sm:w-[460px] sm:max-w-none aspect-[16/10]'
    default:
      return 'w-[74vw] max-w-[250px] sm:w-[300px] sm:max-w-none aspect-square'
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
      className={`group relative shrink-0 snap-center overflow-hidden rounded-[1.5rem] bg-navy/40 sm:rounded-[1.75rem] ${sizeClasses(item.size)} ${
        index % 2 === 1 ? 'sm:mt-10' : 'sm:mt-0'
      }`}
    >
      <GalleryMedia item={item} />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/55">
          {mediaLabel}
        </p>
        <h3 className="mt-1 font-display text-base font-semibold text-cream sm:text-xl">
          {item.label}
        </h3>
        <p className="mt-1 font-display text-sm leading-relaxed text-cream/70">
          {item.caption}
        </p>
      </div>
      {item.type === 'video' && (
        <span
          aria-hidden="true"
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-cream/25 bg-ink/30 backdrop-blur-sm sm:right-4 sm:top-4 sm:h-9 sm:w-9"
        >
          <span className="ml-0.5 h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-cream sm:border-y-[6px] sm:border-l-[10px]" />
        </span>
      )}
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

      <FadeIn delay={0.08}>
        <div
          ref={scrollerRef}
          className="touch-scroll no-scrollbar mt-8 flex items-start gap-3 overflow-x-auto px-4 pb-3 pt-1 snap-x snap-mandatory sm:mt-10 sm:gap-5 sm:px-8 lg:px-[max(2rem,calc((100vw-72rem)/2+3rem))]"
        >
          {gallery.map((item, index) => (
            <CarouselCard
              key={`${lang}-${item.src}-${item.label}`}
              item={item}
              index={index}
              mediaLabel={
                item.type === 'video' ? 'Video' : lang === 'es' ? 'Foto' : 'Photo'
              }
            />
          ))}
          <div className="w-2 shrink-0 sm:w-6" aria-hidden="true" />
        </div>
      </FadeIn>

      <div className="section-pad section-max mt-3 flex items-center justify-between gap-3 sm:mt-4">
        <p className="font-display text-xs text-cream/45 sm:hidden">{t.gallery.swipe}</p>
        <div className="flex items-center gap-2 sm:hidden">
          <button
            type="button"
            aria-label="Previous"
            disabled={!canPrev}
            onClick={() => scrollByCard(-1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 disabled:opacity-35"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next"
            disabled={!canNext}
            onClick={() => scrollByCard(1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 disabled:opacity-35"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
