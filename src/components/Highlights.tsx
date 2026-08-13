import { FadeIn } from './FadeIn'
import { highlights } from '../data/content'

export function Highlights() {
  return (
    <section id="destacados" className="bg-cream py-16 sm:py-28">
      <div className="section-pad section-max">
        <FadeIn>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-magenta">
            Lo que vas a sentir
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[1.85rem] font-bold tracking-tight text-navy text-balance sm:text-4xl md:text-5xl">
            No solo cocino. Te hago la vida más ligera.
          </h2>
        </FadeIn>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2">
          {highlights.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <article className="group relative overflow-hidden rounded-[1.5rem] bg-ink sm:rounded-[1.75rem]">
                <img
                  src={item.media}
                  alt=""
                  className="h-56 w-full object-cover transition duration-700 group-hover:scale-[1.04] sm:h-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                  <h3 className="font-display text-xl font-bold text-cream sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 max-w-md font-display text-sm text-cream/85 sm:text-base">
                    {item.copy}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
