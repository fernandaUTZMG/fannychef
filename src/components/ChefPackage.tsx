import { FadeIn } from './FadeIn'
import { FloatingStickers } from './FloatingStickers'
import { useLanguage } from '../i18n/LanguageContext'

export function ChefPackage() {
  const { t, whatsapp } = useLanguage()
  const p = t.package

  return (
    <section id="chef-domicilio" className="relative overflow-hidden bg-sky/25 py-16 sm:py-28">
      <FloatingStickers
        items={[
          {
            src: '/img/stickers/healthy-food.png',
            className: 'right-1 top-8 w-16 sm:right-4 sm:top-10 sm:w-24 lg:right-6 lg:w-28',
            rotate: 6,
            delay: 0.2,
          },
          {
            src: '/img/stickers/heart.png',
            className: 'left-2 top-[40%] hidden w-10 md:block lg:left-4 lg:w-12',
            rotate: -12,
            delay: 0.35,
            duration: 4.5,
          },
          {
            src: '/img/stickers/sparkles.png',
            className: 'left-3 bottom-8 w-8 sm:left-6 sm:w-10',
            rotate: 10,
            delay: 0.45,
            duration: 3.5,
          },
        ]}
      />

      <div className="section-pad section-max relative z-10">
        <FadeIn>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-violet">
            {p.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[1.85rem] font-bold tracking-tight text-navy text-balance sm:text-4xl md:text-5xl">
            {p.title}
          </h2>
          <p className="mt-4 max-w-2xl font-display text-base text-navy/70 sm:text-lg">{p.intro}</p>
        </FadeIn>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
          {[
            { label: p.modalityLabel, value: p.modality },
            { label: p.planLabel, value: p.plan },
            { label: p.durationLabel, value: p.duration },
          ].map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.05}>
              <div className="rounded-2xl border border-navy/10 bg-cream/80 px-4 py-4">
                <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy/50">
                  {item.label}
                </p>
                <p className="mt-1 font-display text-lg font-bold text-navy">{item.value}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Orden de servicio */}
        <div className="mt-12 sm:mt-16">
          <FadeIn>
            <p className="inline-flex rounded-full border border-violet/30 bg-cream/70 px-4 py-1.5 font-display text-sm font-semibold text-navy">
              {p.orderEyebrow}
            </p>
            <h3 className="mt-3 font-display text-xl font-bold text-navy sm:text-2xl">{p.orderTitle}</h3>
          </FadeIn>

          <div className="mt-6 overflow-hidden rounded-[1.25rem] border border-navy/15">
            <div className="grid grid-cols-[1.1fr_0.9fr] bg-navy px-4 py-3 font-display text-xs font-semibold uppercase tracking-[0.14em] text-cream sm:text-sm">
              <span>{p.orderColService}</span>
              <span>{p.orderColIncluded}</span>
            </div>
            <ul>
              {p.order.map((row, index) => (
                <li
                  key={row.label}
                  className={`grid grid-cols-[1.1fr_0.9fr] gap-2 border-t border-navy/10 px-4 py-3 font-display text-sm sm:text-base ${
                    index % 2 === 0 ? 'bg-sky/30' : 'bg-[#fff8e8]'
                  }`}
                >
                  <span className="font-semibold text-navy">{row.label}</span>
                  <span className="text-navy/80">{row.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 max-w-3xl font-display text-sm leading-relaxed text-navy/65">
            <span className="font-semibold text-violet">{p.importantLabel}</span> {p.important}
          </p>
        </div>

        {/* Inversión y esquema de pago */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start sm:mt-16">
          <FadeIn>
            <p className="inline-flex rounded-full border border-coral/35 bg-cream/70 px-4 py-1.5 font-display text-sm font-semibold text-navy">
              {p.investmentEyebrow}
            </p>
            <h3 className="mt-3 font-display text-xl font-bold text-navy sm:text-2xl">
              {p.investmentTitle}
            </h3>
            <div className="mt-6 rounded-[1.5rem] bg-navy px-5 py-7 text-cream sm:px-7">
              <p className="font-display text-sm uppercase tracking-[0.18em] text-gold">
                {p.monthlyLabel}
              </p>
              <p className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                {p.monthlyAmount}
              </p>
              <p className="mt-3 font-display text-sm leading-relaxed text-cream/70">{p.monthlyNote}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-magenta">
              {p.paymentEyebrow}
            </p>
            <h3 className="mt-2 font-display text-xl font-bold text-navy sm:text-2xl">
              {p.paymentTitle}
            </h3>
            <ul className="mt-5 space-y-3">
              {p.payments.map((pay) => (
                <li
                  key={pay.label}
                  className="flex flex-wrap items-baseline justify-between gap-2 rounded-2xl border border-navy/10 bg-cream/80 px-4 py-3"
                >
                  <span className="font-display text-sm font-bold text-navy">{pay.label}</span>
                  <span className="font-display text-base font-bold text-violet">{pay.amount}</span>
                  <span className="w-full font-display text-xs text-navy/55 sm:text-sm">{pay.note}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-display text-sm text-navy/70">
              <span className="font-semibold text-coral">{p.conceptLabel}</span> {p.concept}
            </p>
          </FadeIn>
        </div>

        {/* Confirmación — sin datos bancarios públicos */}
        <FadeIn delay={0.05}>
          <div className="mt-12 overflow-hidden rounded-[1.5rem] border border-violet/20 bg-cream px-5 py-7 sm:mt-16 sm:px-8 sm:py-9">
            <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="inline-flex rounded-full border border-violet/25 px-4 py-1.5 font-display text-sm font-semibold text-navy">
                  {p.confirmEyebrow}
                </p>
                <p className="mt-4 max-w-2xl font-display text-base leading-relaxed text-navy/75">
                  {p.confirmBody}
                </p>
                <p className="mt-3 max-w-2xl font-display text-sm leading-relaxed text-navy/60">
                  {p.confirmPaymentNote}
                </p>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-6 py-3 font-display text-sm font-semibold text-cream transition hover:bg-violet"
                >
                  {p.confirmCta}
                </a>
              </div>

              <div className="mx-auto w-full max-w-md">
                <img
                  src="/img/stickers/servicio-listo.png"
                  alt={p.confirmTitle}
                  className="w-full rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
