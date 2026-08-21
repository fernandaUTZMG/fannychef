export type Lang = 'es' | 'en'

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
  whatsappEs:
    'https://wa.me/523337029801?text=Hola%20Stephy%2C%20quiero%20agendar%20una%20valoraci%C3%B3n%20con%20The%20Fanny%20Chef.',
  whatsappEn:
    'https://wa.me/523337029801?text=Hi%20Stephy%2C%20I%20would%20like%20to%20book%20a%20valuation%20with%20The%20Fanny%20Chef.',
}

export type Translations = {
  nav: { href: string; label: string }[]
  cta: string
  hero: {
    tagline: string
    subtitle: string
    primary: string
    secondary: string
  }
  services: {
    eyebrow: string
    title: string
    intro: string
    items: { title: string; copy: string; media: string }[]
    benefitsEyebrow: string
    benefitsTitle: string
    benefits: { title: string; copy: string }[]
  }
  package: {
    eyebrow: string
    title: string
    intro: string
    modalityLabel: string
    modality: string
    planLabel: string
    plan: string
    durationLabel: string
    duration: string
    orderEyebrow: string
    orderTitle: string
    orderColService: string
    orderColIncluded: string
    order: { label: string; value: string }[]
    importantLabel: string
    important: string
    investmentEyebrow: string
    investmentTitle: string
    monthlyLabel: string
    monthlyAmount: string
    monthlyNote: string
    paymentEyebrow: string
    paymentTitle: string
    payments: { label: string; amount: string; note: string }[]
    conceptLabel: string
    concept: string
    confirmEyebrow: string
    confirmTitle: string
    confirmBody: string
    confirmPaymentNote: string
    confirmCta: string
  }
  about: {
    eyebrow: string
    titleBefore: string
    titleAfter: string
    p1: string
    p2: string
    valuesEyebrow: string
    valuesTitle: string
    values: { title: string; copy: string }[]
    pathEyebrow: string
    pathTitle: string
    timeline: { year: string; text: string }[]
  }
  membership: {
    eyebrow: string
    title: string
    body: string
    from: string
    priceNote: string
    join: string
    includes: string[]
    cardBrand: string
    cardTitle: string
    cardSubtitle: string
    cardMeta: string
    cardFooter: string
    cardWelcome: string
  }
  process: {
    eyebrow: string
    title: string
    steps: { step: string; title: string; copy: string }[]
  }
  gallery: {
    eyebrow: string
    title: string
    intro: string
    swipe: string
    items: {
      type: 'video' | 'image'
      src: string
      poster?: string
      alt: string
      label: string
      caption: string
      size: 'tall' | 'wide' | 'square'
    }[]
  }
  contact: {
    eyebrow: string
    title: string
    intro: string
    city: string
    zonesLabel: string
    zones: string
    whatsappLabel: string
    emailLabel: string
    formTitle: string
    formIntro: string
    name: string
    namePh: string
    zone: string
    zonePh: string
    message: string
    messagePh: string
    consent: string
    submit: string
    sent: string
    faqs: { q: string; a: string }[]
  }
  footer: {
    role: string
    city: string
    rights: string
  }
}

export const translations: Record<Lang, Translations> = {
  es: {
    nav: [
      { href: '#servicios', label: 'Servicios' },
      { href: '#sobre-mi', label: 'Sobre mí' },
      { href: '#chef-domicilio', label: 'Paquete' },
      { href: '#membresia', label: 'Membership' },
      { href: '#method', label: 'Method' },
      { href: '#contacto', label: 'Contacto' },
    ],
    cta: 'Agenda tu valoración',
    hero: {
      tagline: 'membership',
      subtitle: 'Tu semana, organizada desde la cocina: alimentación, orden y cuidado en un solo servicio.',
      primary: 'Agenda tu valoración',
      secondary: 'Conoce la membresía',
    },
    services: {
      eyebrow: 'Servicios',
      title: 'No solo cocino. Armo un sistema que te cuida.',
      intro:
        'Chef privada, planeación y cuidado profesional de tu cocina. Tú eliges la modalidad; yo adapto el plan a tu rutina, gustos y objetivos.',
      items: [
        {
          title: 'Chef a domicilio',
          copy: 'Paquete mensual con 3 visitas, 24 comidas y orden completa. Mira el detalle de inversión y pagos más abajo.',
          media: '/img/5.jpeg',
        },
        {
          title: 'Meal prep semanal',
          copy: 'Preparo y entrego tus comidas bajo un plan acordado: sabor, porciones claras y cero improvisación.',
          media: '/img/platillo.jpeg',
        },
        {
          title: 'Compra de insumos',
          copy: 'Selecciono ingredientes con control de calidad: frescos, adecuados y justos para tu menú.',
          media: '/img/4.jpeg',
        },
        {
          title: 'Organización de cocina',
          copy: 'Ordeno refrigerador, alacena y zonas de trabajo para que tu cocina sea funcional y fácil de vivir.',
          media: '/img/3.jpeg',
        },
        {
          title: 'Limpieza y mantenimiento',
          copy: 'Servicio programado para conservar higiene, orden y un espacio listo para el siguiente servicio.',
          media: '/img/8.jpeg',
        },
        {
          title: 'Membership',
          copy: 'La experiencia continua: visitas, seguimiento, organización y beneficios mensuales en un solo plan.',
          media: '/img/7.jpeg',
        },
      ],
      benefitsEyebrow: 'Lo que ganas',
      benefitsTitle: 'Menos carga diaria. Más tranquilidad.',
      benefits: [
        {
          title: 'Tiempo de vuelta',
          copy: 'Dejas de planear, comprar, cocinar y limpiar cada día. Recuperas horas para lo que importa.',
        },
        {
          title: 'Semana bajo control',
          copy: 'Menú, checklist y etiquetas: menos improvisación y menos pedidos de último minuto.',
        },
        {
          title: 'Cocina que funciona',
          copy: 'Un espacio limpio, ordenado y fácil de mantener, listo para tu ritmo real.',
        },
        {
          title: 'Cuidado personal',
          copy: 'Atención a tu medida — no un menú genérico — con seguimiento cercano y discreto.',
        },
      ],
    },
    package: {
      eyebrow: 'Paquete de servicio',
      title: 'Chef a domicilio',
      intro:
        'Este es el paquete base que maneja The Fanny Chef: orden de servicio, inversión y esquema de pagos. Lo afinamos a tu hogar en la valoración.',
      modalityLabel: 'Modalidad',
      modality: 'Chef a domicilio',
      planLabel: 'Plan',
      plan: 'Mensual',
      durationLabel: 'Vigencia',
      duration: '4 semanas',
      orderEyebrow: 'Orden de servicio',
      orderTitle: 'Menú de servicios incluidos',
      orderColService: 'Incluye',
      orderColIncluded: 'Detalle',
      order: [
        { label: 'Número de personas', value: '1–2' },
        { label: 'Visitas semanales', value: '3 · Lunes · Miércoles · Viernes' },
        {
          label: 'Comidas preparadas',
          value: '24 · Lun–Sáb · Desayuno, comida, cena y snack',
        },
        { label: 'Planeación de menú', value: 'Analizamos tu plan de alimentación' },
        { label: 'Insumos', value: 'Crédito de $2,500 mensuales' },
        { label: 'Porcionado y etiquetado', value: 'Incluido' },
        { label: 'Mantenimiento de cocina', value: 'Incluido' },
        { label: 'Limpieza del área utilizada', value: 'Incluido' },
      ],
      importantLabel: 'Importante:',
      important:
        'Cualquier servicio, alimento, visita, evento, entrega o requerimiento adicional que no aparezca en esta orden se cotiza por separado antes de realizarse.',
      investmentEyebrow: 'Inversión y esquema de pago',
      investmentTitle: 'Así se estructura el paquete',
      monthlyLabel: 'Inversión mensual',
      monthlyAmount: '$30,000 MXN',
      monthlyNote: 'Referencia del paquete chef a domicilio. El alcance final se confirma en tu orden.',
      paymentEyebrow: 'Esquema de pagos',
      paymentTitle: 'Cuatro pagos durante el mes',
      payments: [
        { label: 'Pago #1', amount: '$7,000', note: 'Transferencia o depósito · fecha acordada' },
        { label: 'Pago #2', amount: '$7,000', note: 'Efectivo · fecha acordada' },
        { label: 'Pago #3', amount: '$7,000', note: 'Transferencia o depósito · fecha acordada' },
        { label: 'Pago #4', amount: '$7,000', note: 'Efectivo · fecha acordada' },
      ],
      conceptLabel: 'Concepto de transferencia:',
      concept: 'TFC + tu nombre (ejemplo: TFC MARIA G).',
      confirmEyebrow: 'Confirmación del servicio',
      confirmTitle: '¡Tu servicio está listo!',
      confirmBody:
        'Al realizar el pago correspondiente se confirma la aceptación de la orden de servicio y se reserva la programación acordada. Nosotros nos encargamos de tu alimentación para que tú recuperes tiempo y salud.',
      confirmPaymentNote:
        'Los datos de pago (cuenta o tarjeta) se comparten de forma privada al confirmar tu servicio. No se publican en esta página.',
      confirmCta: 'Solicitar mi orden de servicio',
    },
    about: {
      eyebrow: 'Sobre mí',
      titleBefore: 'Soy Stephy. Acapulqueña de corazón y fundadora de',
      titleAfter: '.',
      p1: 'En 2014 dejé Acapulco para estudiar Gastronomía Internacional en Guadalajara. Mi camino me llevó a Alicante —Monastrell, una estrella Michelin— y a hoteles cuatro diamantes como Royal Hideaway Playacar. Ahí aprendí precisión, disciplina y hospitalidad de verdad.',
      p2: 'Hoy sé que alimentar a alguien va más allá de un platillo: es escuchar, organizar y hacer más ligera su vida. Mi fe cristiana es el corazón de esta marca; sirvo con excelencia, amor y propósito, siempre respetando lo que tú quieres.',
      valuesEyebrow: 'Valores',
      valuesTitle: 'Así trabajo contigo.',
      values: [
        {
          title: 'Excelencia',
          copy: 'Cada detalle —del ingrediente al cierre de cocina— con disciplina y alto estándar.',
        },
        {
          title: 'Servicio con propósito',
          copy: 'Cuidarte es el centro. Fe y humildad inspiran el cómo, sin imponer creencias.',
        },
        {
          title: 'Personalización',
          copy: 'No hay dos hogares iguales: el plan sigue tu rutina, gustos y objetivos.',
        },
        {
          title: 'Orden y bienestar',
          copy: 'Planeación, higiene y seguimiento para que comer bien se sienta ligero y sostenible.',
        },
      ],
      pathEyebrow: 'Trayectoria',
      pathTitle: 'El camino hasta The Fanny Chef',
      timeline: [
        { year: '2014', text: 'Ingreso a Gastronomía Internacional en la UVM Guadalajara Sur.' },
        { year: '2016', text: 'Seis meses en Royal Hideaway Playacar: cocina mexicana, italiana, repostería y de autor.' },
        { year: '2018', text: 'Alicante: Monastrell (estrella Michelin) y La Taberna del Gourmet.' },
        { year: '2022–23', text: 'Asesoría fine dining en L’Osteria y La Vaca Argentina.' },
        { year: '2025', text: 'Nace The Fanny Chef: chef privada con propósito en Guadalajara.' },
      ],
    },
    membership: {
      eyebrow: 'Membership of the Sky',
      title: 'The Fanny Chef',
      body: 'Membership of the Sky es la experiencia continua: alimentación, orden y cuidado bajo un mismo plan. Chef a domicilio es una modalidad; aquí ves el plan integral con seguimiento.',
      from: 'Desde',
      priceNote:
        'Referencia del plan integral. Modalidades como chef a domicilio se cotizan aparte según personas, visitas y alcance.',
      join: 'Únete a la membresía',
      includes: [
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
      ],
      cardWelcome: 'welcome to',
      cardBrand: 'THE FANNY CHEF',
      cardTitle: 'membership of the sky',
      cardSubtitle: 'Virtual member card',
      cardMeta: 'Guadalajara · Zona metropolitana',
      cardFooter: 'Orden · bienestar · propósito',
    },
    process: {
      eyebrow: 'Así trabajamos cada semana',
      title: 'THE FANNY CHEF METHOD',
      steps: [
        {
          step: '01',
          title: 'Planear',
          copy: 'Planeación semanal y revisión de tu menú o plan de alimentación.',
        },
        {
          step: '02',
          title: 'Comprar',
          copy: 'Lista de compras y selección de insumos, cuando aplique a tu plan.',
        },
        {
          step: '03',
          title: 'Preparar',
          copy: 'Preparación profesional, porcionado a tu medida y etiquetado con fecha.',
        },
        {
          step: '04',
          title: 'Organizar',
          copy: 'Alimentos en orden en refrigerador, congelador y alacena; cocina limpia.',
        },
        {
          step: '05',
          title: 'Seguir',
          copy: 'Seguimiento semanal, retroalimentación y ajustes antes del próximo servicio.',
        },
      ],
    },
    gallery: {
      eyebrow: 'Detrás de escena',
      title: 'Así se ve cuidarte desde la cocina.',
      intro: 'Mira el proceso: insumos, fuego, orden y ese detalle que hace todo más fácil.',
      swipe: 'Desliza con el dedo →',
      items: [
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
        {
          type: 'video',
          src: '/img/7V.mp4',
          poster: '/img/7V-poster.jpg',
          alt: 'Momento en la cocina',
          label: 'Momento',
          caption: 'El detalle que cierra la experiencia.',
          size: 'tall',
        },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Cuéntame tu rutina y armamos tu plan.',
      intro: 'Agenda tu valoración. Estoy en',
      city: 'Guadalajara y zona metropolitana',
      zonesLabel: 'Zonas prioritarias',
      zones: 'Puerta de Hierro, Providencia, Midtown, Ladrón de Guevara y zonas cercanas',
      whatsappLabel: 'WhatsApp',
      emailLabel: 'Correo',
      formTitle: 'Agenda tu valoración',
      formIntro: 'Déjame tus datos y te escribo por WhatsApp.',
      name: 'Nombre',
      namePh: 'Tu nombre',
      zone: 'Zona o colonia',
      zonePh: 'Ej. Providencia',
      message: 'Cuéntame un poquito',
      messagePh: 'Tu rutina, qué te gustaría comer, si hay alergias o metas...',
      consent:
        'Acepto que me contacten sobre el servicio. Evita compartir información médica sensible aquí, por favor.',
      submit: 'Enviar por WhatsApp',
      sent: 'Se abrió WhatsApp con tu mensaje. ¡Gracias!',
      faqs: [
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
      ],
    },
    footer: {
      role: 'Chef privada',
      city: 'Guadalajara y zona metropolitana',
      rights: 'Orden · bienestar · servicio con propósito.',
    },
  },
  en: {
    nav: [
      { href: '#servicios', label: 'Services' },
      { href: '#sobre-mi', label: 'About' },
      { href: '#chef-domicilio', label: 'Package' },
      { href: '#membresia', label: 'Membership' },
      { href: '#method', label: 'Method' },
      { href: '#contacto', label: 'Contact' },
    ],
    cta: 'Book your valuation',
    hero: {
      tagline: 'membership',
      subtitle: 'Your week, organized from the kitchen: food, order, and care in one service.',
      primary: 'Book your valuation',
      secondary: 'Discover membership',
    },
    services: {
      eyebrow: 'Services',
      title: 'I don’t just cook. I build a system that takes care of you.',
      intro:
        'Private chef, meal planning, and professional care of your kitchen. You choose the format; I adapt the plan to your routine, tastes, and goals.',
      items: [
        {
          title: 'Private chef at home',
          copy: 'Monthly package with 3 visits, 24 meals, and a full service order. See investment and payments below.',
          media: '/img/5.jpeg',
        },
        {
          title: 'Weekly meal prep',
          copy: 'I prepare and deliver meals under an agreed plan: flavor, clear portions, zero improvisation.',
          media: '/img/platillo.jpeg',
        },
        {
          title: 'Grocery sourcing',
          copy: 'I select ingredients with quality control: fresh, right for your menu, and thoughtfully chosen.',
          media: '/img/4.jpeg',
        },
        {
          title: 'Kitchen organization',
          copy: 'I organize fridge, pantry, and work zones so your kitchen is functional and easy to live in.',
          media: '/img/3.jpeg',
        },
        {
          title: 'Cleaning & upkeep',
          copy: 'Scheduled service to keep hygiene, order, and a space ready for the next visit.',
          media: '/img/8.jpeg',
        },
        {
          title: 'Membership',
          copy: 'The continuous experience: visits, follow-up, organization, and monthly benefits in one plan.',
          media: '/img/7.jpeg',
        },
      ],
      benefitsEyebrow: 'What you gain',
      benefitsTitle: 'Less daily load. More peace of mind.',
      benefits: [
        {
          title: 'Time back',
          copy: 'Stop planning, shopping, cooking, and cleaning every day. Reclaim hours for what matters.',
        },
        {
          title: 'A week under control',
          copy: 'Menu, checklist, and labels: less improvisation and fewer last-minute orders.',
        },
        {
          title: 'A kitchen that works',
          copy: 'A clean, ordered space that’s easy to maintain—ready for your real rhythm.',
        },
        {
          title: 'Personal care',
          copy: 'Service tailored to you—not a generic menu—with close, discreet follow-up.',
        },
      ],
    },
    package: {
      eyebrow: 'Service package',
      title: 'Private chef at home',
      intro:
        'This is the base package The Fanny Chef offers: service order, investment, and payment plan. We tailor it to your home during the valuation.',
      modalityLabel: 'Modality',
      modality: 'Private chef at home',
      planLabel: 'Plan',
      plan: 'Monthly',
      durationLabel: 'Term',
      duration: '4 weeks',
      orderEyebrow: 'Service order',
      orderTitle: 'Included services menu',
      orderColService: 'Includes',
      orderColIncluded: 'Detail',
      order: [
        { label: 'Number of people', value: '1–2' },
        { label: 'Weekly visits', value: '3 · Monday · Wednesday · Friday' },
        {
          label: 'Prepared meals',
          value: '24 · Mon–Sat · Breakfast, lunch, dinner, and snack',
        },
        { label: 'Menu planning', value: 'We review your nutrition plan' },
        { label: 'Groceries', value: '$2,500 monthly credit' },
        { label: 'Portioning & labeling', value: 'Included' },
        { label: 'Kitchen upkeep', value: 'Included' },
        { label: 'Cleaning of used area', value: 'Included' },
      ],
      importantLabel: 'Important:',
      important:
        'Any service, food, visit, event, delivery, or extra request not listed in this order is quoted separately before it is done.',
      investmentEyebrow: 'Investment & payment plan',
      investmentTitle: 'How the package is structured',
      monthlyLabel: 'Monthly investment',
      monthlyAmount: '$30,000 MXN',
      monthlyNote: 'Reference for the private-chef-at-home package. Final scope is confirmed in your order.',
      paymentEyebrow: 'Payment schedule',
      paymentTitle: 'Four payments during the month',
      payments: [
        { label: 'Payment #1', amount: '$7,000', note: 'Transfer or deposit · agreed date' },
        { label: 'Payment #2', amount: '$7,000', note: 'Cash · agreed date' },
        { label: 'Payment #3', amount: '$7,000', note: 'Transfer or deposit · agreed date' },
        { label: 'Payment #4', amount: '$7,000', note: 'Cash · agreed date' },
      ],
      conceptLabel: 'Transfer concept:',
      concept: 'TFC + your name (example: TFC MARIA G).',
      confirmEyebrow: 'Service confirmation',
      confirmTitle: 'Your service is ready!',
      confirmBody:
        'When the corresponding payment is made, the service order is accepted and the agreed schedule is reserved. We take care of your meals so you recover time and health.',
      confirmPaymentNote:
        'Payment details (account or card) are shared privately when your service is confirmed. They are not published on this page.',
      confirmCta: 'Request my service order',
    },
    about: {
      eyebrow: 'About me',
      titleBefore: 'I’m Stephy. Acapulco at heart and founder of',
      titleAfter: '.',
      p1: 'In 2014 I left Acapulco to study International Gastronomy in Guadalajara. The path took me to Alicante—Monastrell, a Michelin-starred kitchen—and four-diamond hotels like Royal Hideaway Playacar. There I learned precision, discipline, and real hospitality.',
      p2: 'Today I know feeding someone goes beyond a plate: it’s listening, organizing, and making life lighter. My Christian faith is the heart of this brand; I serve with excellence, love, and purpose—always respecting what you want.',
      valuesEyebrow: 'Values',
      valuesTitle: 'How I work with you.',
      values: [
        {
          title: 'Excellence',
          copy: 'Every detail—from ingredient to kitchen close-out—with discipline and a high standard.',
        },
        {
          title: 'Purpose-led service',
          copy: 'Caring for you is the center. Faith and humility shape the how, without imposing beliefs.',
        },
        {
          title: 'Personalization',
          copy: 'No two homes are alike: the plan follows your routine, tastes, and goals.',
        },
        {
          title: 'Order & wellbeing',
          copy: 'Planning, hygiene, and follow-up so eating well feels light and sustainable.',
        },
      ],
      pathEyebrow: 'Journey',
      pathTitle: 'The path to The Fanny Chef',
      timeline: [
        { year: '2014', text: 'Started International Gastronomy at UVM Guadalajara Sur.' },
        { year: '2016', text: 'Six months at Royal Hideaway Playacar: Mexican, Italian, pastry, and signature kitchens.' },
        { year: '2018', text: 'Alicante: Monastrell (Michelin star) and La Taberna del Gourmet.' },
        { year: '2022–23', text: 'Fine-dining consulting at L’Osteria and La Vaca Argentina.' },
        { year: '2025', text: 'The Fanny Chef begins: private chef with purpose in Guadalajara.' },
      ],
    },
    membership: {
      eyebrow: 'Membership of the Sky',
      title: 'The Fanny Chef',
      body: 'Membership of the Sky is the continuous experience: food, order, and care under one plan. Private chef at home is one modality; here you see the full plan with follow-up.',
      from: 'From',
      priceNote:
        'Reference for the full plan. Modalities like private chef at home are quoted separately by people, visits, and scope.',
      join: 'Join the membership',
      includes: [
        '3 chef visits per week',
        'Weekly menu and checklist',
        'Grocery sourcing (per your plan)',
        'Prep, portioning, and labeling',
        'Kitchen cleaned after each visit',
        'Set of 24 glass containers (welcome)',
        'Positive notes on the fridge',
        '1 monthly clinical nutrition consult',
        '1 monthly general medical consult',
        '1 deep kitchen organization per month',
        '1 private event or catering per month',
        'Spiritual support, only if you want it',
      ],
      cardWelcome: 'welcome to',
      cardBrand: 'THE FANNY CHEF',
      cardTitle: 'membership of the sky',
      cardSubtitle: 'Virtual member card',
      cardMeta: 'Guadalajara · Metro area',
      cardFooter: 'Order · wellbeing · purpose',
    },
    process: {
      eyebrow: 'How we work each week',
      title: 'THE FANNY CHEF METHOD',
      steps: [
        {
          step: '01',
          title: 'Plan',
          copy: 'Weekly planning and review of your menu or nutrition plan.',
        },
        {
          step: '02',
          title: 'Shop',
          copy: 'Shopping list and ingredient selection, when included in your plan.',
        },
        {
          step: '03',
          title: 'Prep',
          copy: 'Professional cooking, portioning to your needs, and dating labels.',
        },
        {
          step: '04',
          title: 'Organize',
          copy: 'Food ordered in fridge, freezer, and pantry; kitchen left clean.',
        },
        {
          step: '05',
          title: 'Follow up',
          copy: 'Weekly follow-up, feedback, and adjustments before the next service.',
        },
      ],
    },
    gallery: {
      eyebrow: 'Behind the scenes',
      title: 'This is what care from the kitchen looks like.',
      intro: 'See the process: groceries, heat, order, and the details that make it easy.',
      swipe: 'Swipe to see more →',
      items: [
        {
          type: 'image',
          src: '/img/platillo.jpeg',
          alt: 'Plated dish',
          label: 'With detail',
          caption: 'Because care shows on the plate too.',
          size: 'tall',
        },
        {
          type: 'video',
          src: '/img/5V.mp4',
          poster: '/img/5.jpeg',
          alt: 'Service in action',
          label: 'In action',
          caption: 'Active cooking, with technique and warmth.',
          size: 'wide',
        },
        {
          type: 'image',
          src: '/img/4.jpeg',
          alt: 'Fresh grocery selection',
          label: 'Ingredients',
          caption: 'Fresh picks, chosen with a chef’s eye.',
          size: 'square',
        },
        {
          type: 'video',
          src: '/img/2V.mp4',
          poster: '/img/3.jpeg',
          alt: 'Kitchen organization',
          label: 'Organization',
          caption: 'Your kitchen, clear and easy to live in.',
          size: 'tall',
        },
        {
          type: 'image',
          src: '/img/6.jpeg',
          alt: 'Kitchen prep',
          label: 'Prep',
          caption: 'Heat, color, and lots of flavor.',
          size: 'square',
        },
        {
          type: 'video',
          src: '/img/4V.mp4',
          poster: '/img/7.jpeg',
          alt: 'Private chef routine',
          label: 'Routine',
          caption: 'A week that flows on its own.',
          size: 'square',
        },
        {
          type: 'image',
          src: '/img/8.jpeg',
          alt: 'Fresh vegetables',
          label: 'Freshness',
          caption: 'Ingredients that feel alive.',
          size: 'tall',
        },
        {
          type: 'image',
          src: '/img/9.jpeg',
          alt: 'Prepared and labeled meals',
          label: 'Ready for you',
          caption: 'Labeled, organized, and within reach.',
          size: 'wide',
        },
        {
          type: 'image',
          src: '/img/7.jpeg',
          alt: 'Home service',
          label: 'At home',
          caption: 'Like a visit that leaves everything lighter.',
          size: 'square',
        },
        {
          type: 'video',
          src: '/img/7V.mp4',
          poster: '/img/7V-poster.jpg',
          alt: 'A kitchen moment',
          label: 'Moment',
          caption: 'The detail that completes the experience.',
          size: 'tall',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Tell me your routine and we’ll build your plan.',
      intro: 'Book your valuation. I’m in',
      city: 'Guadalajara and metro area',
      zonesLabel: 'Priority areas',
      zones: 'Puerta de Hierro, Providencia, Midtown, Ladrón de Guevara and nearby areas',
      whatsappLabel: 'WhatsApp',
      emailLabel: 'Email',
      formTitle: 'Book your valuation',
      formIntro: 'Leave your details and I’ll write you on WhatsApp.',
      name: 'Name',
      namePh: 'Your name',
      zone: 'Area or neighborhood',
      zonePh: 'e.g. Providencia',
      message: 'Tell me a little',
      messagePh: 'Your routine, what you’d like to eat, allergies or goals...',
      consent:
        'I agree to be contacted about the service. Please avoid sharing sensitive medical information here.',
      submit: 'Send on WhatsApp',
      sent: 'WhatsApp opened with your message. Thank you!',
      faqs: [
        {
          q: 'Are groceries included?',
          a: 'It depends on your plan. We make it clear during the valuation—no surprises.',
        },
        {
          q: 'Can I have a diet or allergies?',
          a: 'Absolutely. We work with your tastes, restrictions, and, when needed, your health team.',
        },
        {
          q: 'Which areas do you serve?',
          a: 'Guadalajara and metro area: Puerta de Hierro, Providencia, Midtown, Ladrón de Guevara and nearby.',
        },
        {
          q: 'Is spiritual support required?',
          a: 'Not at all. Only if you want it, always with respect.',
        },
      ],
    },
    footer: {
      role: 'Private chef',
      city: 'Guadalajara and metro area',
      rights: 'Order · wellbeing · service with purpose.',
    },
  },
}
