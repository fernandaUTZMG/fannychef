import { useState, type FormEvent, type ReactNode } from 'react'
import { FadeIn } from './FadeIn'
import { brand } from '../i18n/translations'
import { useLanguage } from '../i18n/LanguageContext'
import {
  InstagramIcon,
  LocationIcon,
  MailIcon,
  TikTokIcon,
  WhatsAppIcon,
} from './SocialIcons'

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: ReactNode
  label: string
  children: ReactNode
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy/15 bg-white text-navy">
        {icon}
      </span>
      <div className="min-w-0 pt-0.5">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-navy/50">
          {label}
        </p>
        <div className="mt-0.5 font-display text-sm text-navy/85 sm:text-base">{children}</div>
      </div>
    </div>
  )
}

export function Contact() {
  const { t, lang, whatsapp } = useLanguage()
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '')
    const message = String(form.get('message') || '')
    const preface =
      lang === 'en'
        ? `Hi Stephy, I'm ${name}. I'd like to book a valuation.\n\n${message}`
        : `Hola Stephy, soy ${name}. Quiero agendar una valoración.\n\n${message}`
    window.open(
      `https://wa.me/52${brand.phone}?text=${encodeURIComponent(preface)}`,
      '_blank',
      'noopener,noreferrer',
    )
    setSent(true)
  }

  return (
    <section id="contacto" className="bg-cream py-16 sm:py-28">
      <div className="section-pad section-max">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <FadeIn>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-magenta">
              {t.contact.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[1.85rem] font-bold tracking-tight text-navy text-balance sm:text-4xl md:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mt-4 font-display text-base text-navy/70 sm:text-lg">
              {t.contact.intro} {t.contact.city}.
            </p>

            <div className="mt-8 space-y-4">
              <ContactRow icon={<WhatsAppIcon className="h-5 w-5" />} label={t.contact.whatsappLabel}>
                <a
                  className="font-semibold text-violet underline-offset-2 hover:underline"
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  {brand.phoneDisplay}
                </a>
              </ContactRow>

              <ContactRow icon={<MailIcon className="h-5 w-5" />} label={t.contact.emailLabel}>
                <a
                  className="font-semibold text-violet underline-offset-2 break-all hover:underline"
                  href={`mailto:${brand.email}`}
                >
                  {brand.email}
                </a>
              </ContactRow>

              <ContactRow icon={<LocationIcon className="h-5 w-5" />} label={t.contact.zonesLabel}>
                <p>{t.contact.zones}</p>
              </ContactRow>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-navy/15 bg-white/70 px-4 py-2 font-display text-sm font-semibold text-navy transition hover:border-violet hover:text-violet"
              >
                <InstagramIcon className="h-4 w-4" />
                {brand.instagramHandle}
              </a>
              <a
                href={brand.tiktok}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-navy/15 bg-white/70 px-4 py-2 font-display text-sm font-semibold text-navy transition hover:border-violet hover:text-violet"
              >
                <TikTokIcon className="h-4 w-4" />
                {brand.tiktokHandle}
              </a>
            </div>

            <div className="mt-10 space-y-4">
              {t.contact.faqs.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-navy/10 bg-white/50 px-4 py-3 open:bg-sky/20"
                >
                  <summary className="cursor-pointer list-none font-display text-sm font-semibold text-navy marker:content-none sm:text-base">
                    <span className="flex items-center justify-between gap-3">
                      {item.q}
                      <span className="text-violet transition group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-2 font-display text-sm leading-relaxed text-navy/70">{item.a}</p>
                </details>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="order-first lg:order-none">
            <form
              onSubmit={onSubmit}
              className="rounded-[1.5rem] border border-navy/10 bg-white/60 p-5 shadow-[0_20px_60px_rgba(43,27,107,0.06)] sm:rounded-[2rem] sm:p-8"
            >
              <h3 className="font-display text-2xl font-bold text-navy">{t.contact.formTitle}</h3>
              <p className="mt-2 font-display text-sm text-navy/65">{t.contact.formIntro}</p>

              <label className="mt-6 block font-display text-sm font-medium text-navy">
                {t.contact.name}
                <input
                  required
                  name="name"
                  type="text"
                  className="mt-2 w-full rounded-xl border border-navy/15 bg-cream px-4 py-3.5 text-base outline-none ring-violet/30 focus:ring-2"
                  placeholder={t.contact.namePh}
                  autoComplete="name"
                />
              </label>

              <label className="mt-4 block font-display text-sm font-medium text-navy">
                {t.contact.zone}
                <input
                  required
                  name="zone"
                  type="text"
                  className="mt-2 w-full rounded-xl border border-navy/15 bg-cream px-4 py-3.5 text-base outline-none ring-violet/30 focus:ring-2"
                  placeholder={t.contact.zonePh}
                />
              </label>

              <label className="mt-4 block font-display text-sm font-medium text-navy">
                {t.contact.message}
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="mt-2 w-full resize-none rounded-xl border border-navy/15 bg-cream px-4 py-3.5 text-base outline-none ring-violet/30 focus:ring-2"
                  placeholder={t.contact.messagePh}
                />
              </label>

              <label className="mt-4 flex items-start gap-3 font-display text-xs text-navy/70">
                <input required type="checkbox" className="mt-0.5" />
                <span>{t.contact.consent}</span>
              </label>

              <button
                type="submit"
                className="mt-6 min-h-12 w-full rounded-full bg-navy px-5 py-3.5 font-display text-sm font-semibold text-cream transition hover:bg-violet"
              >
                {t.contact.submit}
              </button>

              {sent && (
                <p className="mt-3 text-center font-display text-sm text-magenta">
                  {t.contact.sent}
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
