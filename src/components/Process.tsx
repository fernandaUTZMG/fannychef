import { FadeIn } from './FadeIn'
import { processSteps } from '../data/content'

export function Process() {
  return (
    <section id="proceso" className="bg-sky/35 py-16 sm:py-28">
      <div className="section-pad section-max">
        <FadeIn>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-navy/70">
            Cómo funciona
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[1.85rem] font-bold tracking-tight text-navy text-balance sm:text-4xl md:text-5xl">
            Simple, claro y sin rodeos.
          </h2>
        </FadeIn>
      </div>

      <div className="mt-8 touch-scroll no-scrollbar flex gap-3 overflow-x-auto px-4 pb-2 sm:mt-12 sm:hidden">
        {processSteps.map((item) => (
          <article
            key={item.step}
            className="min-w-[78%] shrink-0 rounded-[1.5rem] bg-cream/80 p-5 shadow-[0_8px_30px_rgba(43,27,107,0.06)]"
          >
            <p className="font-display text-3xl font-bold text-violet/40">{item.step}</p>
            <h3 className="mt-2 font-display text-xl font-bold text-navy">{item.title}</h3>
            <p className="mt-2 font-display text-sm leading-relaxed text-navy/70">{item.copy}</p>
          </article>
        ))}
      </div>

      <div className="section-pad section-max mt-12 hidden gap-6 sm:grid md:grid-cols-5">
        {processSteps.map((item, index) => (
          <FadeIn key={item.step} delay={index * 0.07}>
            <article className="h-full">
              <p className="font-display text-4xl font-bold text-violet/40">{item.step}</p>
              <h3 className="mt-3 font-display text-xl font-bold text-navy">{item.title}</h3>
              <p className="mt-2 font-display text-sm leading-relaxed text-navy/70">{item.copy}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
