import { brand } from '../data/content'
import { InstagramIcon, MailIcon, TikTokIcon, WhatsAppIcon } from './SocialIcons'

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-cream pb-[4.5rem] sm:pb-0">
      <div className="section-pad section-max flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight">
            <span className="text-sky">the</span>{' '}
            <span className="text-violet">fanny</span>{' '}
            <span className="text-coral">chef</span>
          </p>
          <p className="mt-2 max-w-md font-display text-sm text-cream/70">
            Chef privada · {brand.city}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={brand.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-4 py-2 font-display text-sm font-semibold text-cream transition hover:border-gold hover:text-gold"
          >
            <InstagramIcon className="h-4 w-4" />
            {brand.instagramHandle}
          </a>
          <a
            href={brand.tiktok}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-4 py-2 font-display text-sm font-semibold text-cream transition hover:border-gold hover:text-gold"
          >
            <TikTokIcon className="h-4 w-4" />
            {brand.tiktokHandle}
          </a>
          <a
            href={`mailto:${brand.email}`}
            aria-label="Email"
            title="Email"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 bg-cream/10 text-cream transition hover:border-gold hover:text-gold"
          >
            <MailIcon className="h-4 w-4" />
          </a>
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 bg-cream/10 text-cream transition hover:border-gold hover:text-gold"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="section-pad section-max border-t border-cream/10 py-4">
        <p className="font-display text-xs text-cream/50">
          © {new Date().getFullYear()} The Fanny Chef™. Orden · bienestar · servicio con propósito.
        </p>
      </div>
    </footer>
  )
}
