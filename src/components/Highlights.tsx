import { FadeIn } from './FadeIn'
import { useLanguage } from '../i18n/LanguageContext'

export function Highlights() {
  const { t } = useLanguage()
  const services = t.services.items

  return (
    <section id="servicios" className="bg-cream py-16 sm:py-28">
      <div className="section-pad section-max">
        <FadeIn>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-magenta">
            {t.services.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[1.85rem] font-bold tracking-tight text-navy text-balance sm:text-4xl md:text-5xl">
            {t.services.title}
          </h2>
          <p className="mt-4 max-w-2xl font-display text-base text-navy/70 sm:text-lg">
            {t.services.intro}
          </p>
        </FadeIn>
      </div>

      <div className="mt-8 flex gap-4 overflow-x-auto px-4 pb-2 touch-scroll no-scrollbar sm:hidden">
        {services.map((item) => (
          <article key={item.title} className="w-[68%] max-w-[240px] shrink-0">
            <div className="overflow-hidden rounded-2xl bg-ink">
              <img
                src={item.media}
                alt={item.title}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="mt-3 font-display text-base font-bold text-navy">{item.title}</h3>
            <p className="mt-1 font-display text-sm leading-relaxed text-navy/70">{item.copy}</p>
          </article>
        ))}
      </div>

      <div className="section-pad section-max mt-10 hidden sm:block">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <article className="group h-full">
                <div className="overflow-hidden rounded-2xl bg-ink">
                  <img
                    src={item.media}
                    alt={item.title}
                    className="aspect-[5/4] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 font-display text-sm leading-relaxed text-navy/70">
                  {item.copy}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
