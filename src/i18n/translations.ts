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
  }
  about: {
    eyebrow: string
    titleBefore: string
    titleAfter: string
    p1: string
    p2: string
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
      { href: '#membresia', label: 'Membership' },
      { href: '#proceso', label: 'Proceso' },
      { href: '#contacto', label: 'Contacto' },
    ],
    cta: 'Agenda tu valoración',
    hero: {
      tagline: 'membership',
      subtitle: 'Yo resuelvo por ti: comida rica, orden y calma en tu cocina.',
      primary: 'Agenda tu valoración',
      secondary: 'Conoce la membresía',
    },
    services: {
      eyebrow: 'Lo que vas a sentir',
      title: 'No solo cocino. Te hago la vida más ligera.',
      intro: 'Elige cómo quieres que te ayude. Servicio serio, trato cercano, a tu ritmo.',
      items: [
        {
          title: 'Chef a domicilio',
          copy: 'Cocino en tu casa, porciono, etiqueto y dejo todo guardado. Tú solo abres el refri y sonríes.',
          media: '/img/5.jpeg',
        },
        {
          title: 'Meal prep semanal',
          copy: 'Preparo tu plan de comidas y te lo dejo listo para la semana, sin drama y con mucho sabor.',
          media: '/img/platillo.jpeg',
        },
        {
          title: 'Compra de insumos',
          copy: 'Elijo ingredientes con ojo de chef: frescos, ricos y justos para lo que vamos a cocinar.',
          media: '/img/4.jpeg',
        },
        {
          title: 'Organización de cocina',
          copy: 'Acomodo tu cocina para que funcione de verdad. Menos caos, más calma.',
          media: '/img/3.jpeg',
        },
        {
          title: 'Limpieza y mantenimiento',
          copy: 'Dejamos el espacio limpio, fresco y listo para el siguiente round.',
          media: '/img/8.jpeg',
        },
        {
          title: 'Membership',
          copy: 'La experiencia completa: visitas, seguimiento y cuidados extras, todo en un solo plan.',
          media: '/img/7.jpeg',
        },
      ],
    },
    about: {
      eyebrow: 'Sobre mí',
      titleBefore: 'Soy Stephy. Acapulqueña de corazón y fundadora de',
      titleAfter: '.',
      p1: 'Pasé por Guadalajara, Alicante, cocinas Michelin y hoteles cuatro diamantes. Hoy sé que alimentar a alguien no es solo un platillo: es escuchar, organizar y hacerte la vida más fácil.',
      p2: 'Mi fe es el corazón de esta marca. Sirvo con cariño, excelencia y propósito, siempre respetando lo que tú quieres.',
      pathEyebrow: 'Trayectoria',
      pathTitle: 'El camino hasta The Fanny Chef',
      timeline: [
        { year: '2014', text: 'Empecé Gastronomía Internacional en Guadalajara.' },
        { year: '2016', text: 'Prácticas en Royal Hideaway Playacar (hotel cuatro diamantes).' },
        { year: '2018', text: 'Alicante: Monastrell (estrella Michelin) y La Taberna del Gourmet.' },
        { year: '2022–23', text: 'Asesoría fine dining en L´TOsteria y La Vaca Argentina.' },
        { year: '2025', text: 'Nace The Fanny Chef: chef privada con propósito.' },
      ],
    },
    membership: {
      eyebrow: 'Para quienes quieren delegar con confianza',
      title: 'The Fanny Chef',
      body: 'No es solo comida lista. Es tener a alguien que piensa tu semana, cocina con cariño y te deja la cocina en orden — como una anfitriona que sí sabe de técnica.',
      from: 'Desde',
      priceNote:
        'Como referencia: unos $10,500 por semana. Lo afinamos juntas según tu volumen, frecuencia y lo que realmente necesitas.',
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
    },
    process: {
      eyebrow: 'Cómo funciona',
      title: 'Simple, claro y sin rodeos.',
      steps: [
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
      ],
    },
    gallery: {
      eyebrow: 'Detrás de escena',
      title: 'Así se ve cuidarte desde la cocina.',
      intro: 'Desliza y mira el proceso: insumos, fuego, orden y ese detalle que hace todo más fácil.',
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
      { href: '#membresia', label: 'Membership' },
      { href: '#proceso', label: 'Process' },
      { href: '#contacto', label: 'Contact' },
    ],
    cta: 'Book your valuation',
    hero: {
      tagline: 'membership',
      subtitle: 'I take care of it for you: great food, order, and calm in your kitchen.',
      primary: 'Book your valuation',
      secondary: 'Discover membership',
    },
    services: {
      eyebrow: 'What you’ll feel',
      title: 'I don’t just cook. I make life lighter.',
      intro: 'Choose how you want me to help. Serious service, warm care, at your pace.',
      items: [
        {
          title: 'Private chef at home',
          copy: 'I cook in your home, portion, label, and store everything. You just open the fridge and smile.',
          media: '/img/5.jpeg',
        },
        {
          title: 'Weekly meal prep',
          copy: 'I prep your meal plan and leave it ready for the week—easy, delicious, no stress.',
          media: '/img/platillo.jpeg',
        },
        {
          title: 'Grocery sourcing',
          copy: 'I choose ingredients with a chef’s eye: fresh, flavorful, and right for what we’ll cook.',
          media: '/img/4.jpeg',
        },
        {
          title: 'Kitchen organization',
          copy: 'I set up your kitchen so it truly works. Less chaos, more calm.',
          media: '/img/3.jpeg',
        },
        {
          title: 'Cleaning & upkeep',
          copy: 'We leave the space clean, fresh, and ready for the next round.',
          media: '/img/8.jpeg',
        },
        {
          title: 'Membership',
          copy: 'The full experience: visits, follow-up, and extra care—all in one plan.',
          media: '/img/7.jpeg',
        },
      ],
    },
    about: {
      eyebrow: 'About me',
      titleBefore: 'I’m Stephy. Acapulco at heart and founder of',
      titleAfter: '.',
      p1: 'I’ve worked through Guadalajara, Alicante, Michelin kitchens, and four-diamond hotels. Today I know feeding someone isn’t just a plate—it’s listening, organizing, and making life easier.',
      p2: 'My faith is the heart of this brand. I serve with care, excellence, and purpose—always respecting what you want.',
      pathEyebrow: 'Journey',
      pathTitle: 'The path to The Fanny Chef',
      timeline: [
        { year: '2014', text: 'Started International Gastronomy studies in Guadalajara.' },
        { year: '2016', text: 'Internship at Royal Hideaway Playacar (four-diamond hotel).' },
        { year: '2018', text: 'Alicante: Monastrell (Michelin star) and La Taberna del Gourmet.' },
        { year: '2022–23', text: 'Fine-dining consulting at L´TOsteria and La Vaca Argentina.' },
        { year: '2025', text: 'The Fanny Chef begins: private chef with purpose.' },
      ],
    },
    membership: {
      eyebrow: 'For those who want to delegate with trust',
      title: 'The Fanny Chef',
      body: 'It’s not just ready meals. It’s someone who plans your week, cooks with care, and leaves your kitchen in order—like a host who truly knows technique.',
      from: 'From',
      priceNote:
        'As a reference: about $10,500 MXN per week. We refine it together based on volume, frequency, and what you actually need.',
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
    },
    process: {
      eyebrow: 'How it works',
      title: 'Simple, clear, and straightforward.',
      steps: [
        {
          step: '01',
          title: 'Tell me about you',
          copy: 'A short form: where you are, what you need, and how your days look.',
        },
        {
          step: '02',
          title: 'We talk',
          copy: 'On WhatsApp we refine goals, tastes, rhythms, and any restrictions.',
        },
        {
          step: '03',
          title: 'Valuation',
          copy: 'We review your kitchen and design a plan you can actually live with.',
        },
        {
          step: '04',
          title: 'Custom proposal',
          copy: 'I send clear inclusions, how we work, and the final investment.',
        },
        {
          step: '05',
          title: 'We start!',
          copy: 'Visits begin, the menu kicks in, and that calm order shows from day one.',
        },
      ],
    },
    gallery: {
      eyebrow: 'Behind the scenes',
      title: 'This is what care from the kitchen looks like.',
      intro: 'Swipe through the process: groceries, heat, order, and the details that make it easy.',
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
