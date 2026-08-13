export const brand = {
  name: 'the fanny chef',
  founder: 'Stephany Calderón Gómez',
  phone: '3337029801',
  phoneDisplay: '33 3702 9801',
  email: 'thefanny.chef@gmail.com',
  instagram: 'https://www.instagram.com/thefanny.mood?igsh=MW8wenNzdGozbTg4ZQ==',
  instagramHandle: '@thefanny.mood',
  tiktok: 'https://www.tiktok.com/@thefanny.chef?_r=1&_t=ZS-98qox19Bvt3',
  tiktokHandle: '@thefanny.chef',
  whatsapp:
    'https://wa.me/523337029801?text=Hola%20Stephy%2C%20quiero%20agendar%20una%20valoraci%C3%B3n%20con%20The%20Fanny%20Chef.',
  city: 'Guadalajara y zona metropolitana',
  zones: 'Puerta de Hierro, Providencia, Midtown, Ladrón de Guevara y zonas cercanas',
}

export const navLinks = [
  { href: '#destacados', label: 'Explorar' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#membresia', label: 'Membership' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#contacto', label: 'Contacto' },
]

export const highlights = [
  {
    title: 'Chef en tu casa',
    copy: 'Llego, cocino, dejo todo listo… y tu cocina queda como si nada hubiera pasado.',
    media: '/img/5.jpeg',
  },
  {
    title: 'Orden que se siente',
    copy: 'Refri, alacena y espacios listos para que no tengas que pensar en “qué hay” cada día.',
    media: '/img/3.jpeg',
  },
  {
    title: 'Tu semana resuelta',
    copy: 'Meal prep rico, práctico y a tu ritmo. Tú vives; yo me encargo del resto.',
    media: '/img/platillo.jpeg',
  },
  {
    title: 'Membership con cariño',
    copy: 'Un acompañamiento continuo: comida, orden y ese cuidado que se nota.',
    media: '/img/7.jpeg',
  },
]

export const services = [
  {
    title: 'Chef a domicilio',
    copy: 'Cocino en tu casa, porciono, etiqueto y dejo todo guardado. Tú solo abres el refri y sonríes.',
  },
  {
    title: 'Meal prep semanal',
    copy: 'Preparo tu plan de comidas y te lo dejo listo para la semana, sin drama y con mucho sabor.',
  },
  {
    title: 'Compra de insumos',
    copy: 'Elijo ingredientes con ojo de chef: frescos, ricos y justos para lo que vamos a cocinar.',
  },
  {
    title: 'Organización de cocina',
    copy: 'Acomodo tu cocina para que funcione de verdad. Menos caos, más calma.',
  },
  {
    title: 'Limpieza y mantenimiento',
    copy: 'Dejamos el espacio limpio, fresco y listo para el siguiente round.',
  },
  {
    title: 'Membership',
    copy: 'La experiencia completa: visitas, seguimiento y cuidados extras, todo en un solo plan.',
  },
]

export const membershipIncludes = [
  '3 visitas de chef a la semana',
  'Menú y checklist semanal',
  'Compra de insumos (según tu plan)',
  'Preparación, porcionado y etiquetado',
  'Cocina limpia al terminar',
  'Set de 24 contenedores de vidrio (bienvenida)',
  'Notitas positivas en el refrigerador',
  '1 consulta mensual con nutrióloga clínica',
  '1 consulta médica general al mes',
  '1 organización profunda de cocina al mes',
  '1 evento o catering privado al mes',
  'Acompañamiento espiritual, solo si lo deseas',
]

export const processSteps = [
  {
    step: '01',
    title: 'Cuéntame de ti',
    copy: 'Un formulito corto: dónde estás, qué necesitas y cómo se ve tu día a día.',
  },
  {
    step: '02',
    title: 'Hablamos',
    copy: 'Por WhatsApp afinamos objetivos, gustos, ritmos y cualquier restricción.',
  },
  {
    step: '03',
    title: 'Valoración',
    copy: 'Revisamos tu cocina y diseñamos un plan que sí se pueda vivir.',
  },
  {
    step: '04',
    title: 'Propuesta a tu medida',
    copy: 'Te mando claro qué incluye, cómo trabajamos y la inversión final.',
  },
  {
    step: '05',
    title: '¡Arrancamos!',
    copy: 'Empiezan las visitas, el menú y ese orden que se siente desde el día uno.',
  },
]

export const timeline = [
  { year: '2014', text: 'Empecé Gastronomía Internacional en Guadalajara.' },
  { year: '2016', text: 'Prácticas en Royal Hideaway Playacar (hotel cuatro diamantes).' },
  { year: '2018', text: 'Alicante: Monastrell (estrella Michelin) y La Taberna del Gourmet.' },
  { year: '2022–23', text: 'Asesoría fine dining en L´TOsteria y La Vaca Argentina.' },
  { year: '2025', text: 'Nace The Fanny Chef: chef privada con propósito.' },
]

export type GalleryItem = {
  type: 'video' | 'image'
  src: string
  poster?: string
  alt: string
  label: string
  caption: string
  size: 'tall' | 'wide' | 'square'
}

export const gallery: GalleryItem[] = [
  {
    type: 'image',
    src: '/img/platillo.jpeg',
    alt: 'Platillo emplatado',
    label: 'Con detalle',
    caption: 'Porque el cariño también se emplata.',
    size: 'tall',
  },
  {
    type: 'video',
    src: '/img/5V.mp4',
    poster: '/img/5.jpeg',
    alt: 'Detalle del servicio',
    label: 'En acción',
    caption: 'Cocina activa, con técnica y cercanía.',
    size: 'wide',
  },
  {
    type: 'image',
    src: '/img/4.jpeg',
    alt: 'Selección de insumos frescos',
    label: 'Insumos',
    caption: 'Lo fresco, elegido con ojo de chef.',
    size: 'square',
  },
  {
    type: 'video',
    src: '/img/2V.mp4',
    poster: '/img/3.jpeg',
    alt: 'Organización de cocina',
    label: 'Organización',
    caption: 'Tu cocina, clara y fácil de vivir.',
    size: 'tall',
  },
  {
    type: 'image',
    src: '/img/6.jpeg',
    alt: 'Preparación en cocina',
    label: 'Preparación',
    caption: 'Fuego, color y mucho sabor.',
    size: 'square',
  },
  {
    type: 'video',
    src: '/img/4V.mp4',
    poster: '/img/7.jpeg',
    alt: 'Rutina de chef privada',
    label: 'Rutina',
    caption: 'Una semana que fluye solita.',
    size: 'square',
  },
  {
    type: 'image',
    src: '/img/8.jpeg',
    alt: 'Vegetales frescos',
    label: 'Frescura',
    caption: 'Ingredientes que se sienten vivos.',
    size: 'tall',
  },
  {
    type: 'image',
    src: '/img/9.jpeg',
    alt: 'Comidas preparadas y etiquetadas',
    label: 'Listo para ti',
    caption: 'Todo etiquetado, ordenado y a tu alcance.',
    size: 'wide',
  },
  {
    type: 'image',
    src: '/img/7.jpeg',
    alt: 'Servicio en cocina',
    label: 'En casa',
    caption: 'Como una visita que deja todo más ligero.',
    size: 'square',
  },
]

export const faqs = [
  {
    q: '¿Los insumos van incluidos?',
    a: 'Depende de tu plan. Lo dejamos clarito en la valoración, sin sorpresas.',
  },
  {
    q: '¿Puedo tener dieta o alergias?',
    a: 'Claro. Trabajamos con tus gustos, restricciones y, si aplica, con tu equipo de salud.',
  },
  {
    q: '¿En qué zonas das servicio?',
    a: 'En Guadalajara y zona metropolitana: Puerta de Hierro, Providencia, Midtown, Ladrón de Guevara y alrededores.',
  },
  {
    q: '¿El acompañamiento espiritual es obligatorio?',
    a: 'Para nada. Solo si tú lo quieres, siempre con respeto.',
  },
]
