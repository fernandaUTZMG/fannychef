import { FadeIn } from './FadeIn'
import { brand, timeline } from '../data/content'

export function About() {
  return (
    <section id="sobre-mi" className="relative overflow-hidden bg-navy py-16 text-cream sm:py-28">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-coral/20 blur-3xl" />

      <div className="section-pad section-max relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <FadeIn delay={0.05} className="order-1 lg:order-2">
            <div className="mx-auto max-w-md overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] lg:max-w-none">
              <img
                src="/img/ella.jpeg"
                alt="Stephany Calderón Gómez, The Fanny Chef"
                className="aspect-[4/5] w-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </FadeIn>

          <FadeIn className="order-2 lg:order-1">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Sobre mí
            </p>
            <h2 className="mt-3 font-display text-[1.85rem] font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
              Soy Stephy. Acapulqueña de corazón y fundadora de{' '}
              <span className="text-sky">the</span>{' '}
              <span className="text-violet">fanny</span>{' '}
              <span className="text-coral">chef</span>.
            </h2>
            <p className="mt-5 max-w-xl font-display text-base leading-relaxed text-cream/85 sm:mt-6 sm:text-lg">
              Pasé por Guadalajara, Alicante, cocinas Michelin y hoteles cuatro diamantes.
              Hoy sé que alimentar a alguien no es solo un platillo: es escuchar, organizar
              y hacerte la vida más fácil.
            </p>
            <p className="mt-4 max-w-xl font-display text-base leading-relaxed text-cream/85 sm:text-lg">
              Mi fe es el corazón de esta marca. Sirvo con cariño, excelencia y propósito,
              siempre respetando lo que tú quieres.
            </p>
            <p className="mt-6 font-script text-2xl text-gold">
              — {brand.founder}
            </p>
          </FadeIn>
        </div>

        <div className="mt-12 -mx-4 flex gap-3 overflow-x-auto px-4 pb-2 touch-scroll no-scrollbar sm:mx-0 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-5">
          {timeline.map((item, index) => (
            <FadeIn key={item.year} delay={index * 0.06} className="min-w-[70%] shrink-0 sm:min-w-0">
              <div className="h-full rounded-2xl border border-cream/15 bg-cream/5 p-4 sm:rounded-none sm:border-0 sm:border-t sm:border-cream/25 sm:bg-transparent sm:p-0 sm:pt-4">
                <p className="font-display text-sm font-semibold text-gold">{item.year}</p>
                <p className="mt-2 font-display text-sm leading-relaxed text-cream/80">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
