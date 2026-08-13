import { FadeIn } from './FadeIn'
import { services } from '../data/content'

export function Services() {
  return (
    <section id="servicios" className="bg-cream py-16 sm:py-28">
      <div className="section-pad section-max">
        <FadeIn>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-magenta">
            Servicios
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[1.85rem] font-bold tracking-tight text-navy text-balance sm:text-4xl md:text-5xl">
            Elige cómo quieres que te ayude.
          </h2>
          <p className="mt-4 max-w-2xl font-display text-base text-navy/70 sm:text-lg">
            Servicio serio, trato cercano. Armamos el plan a tu ritmo, tu cocina y tu vida real.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-3 sm:mt-12 sm:gap-px sm:overflow-hidden sm:rounded-[1.75rem] sm:bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.05} className="rounded-2xl border border-navy/10 bg-white/50 sm:rounded-none sm:border-0 sm:bg-cream">
              <article className="h-full p-5 transition hover:bg-sky/20 sm:p-8">
                <p className="font-display text-xs font-semibold tracking-[0.18em] text-violet">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold text-navy sm:text-xl">{service.title}</h3>
                <p className="mt-2 font-display text-sm leading-relaxed text-navy/70 sm:mt-3 sm:text-base">
                  {service.copy}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
