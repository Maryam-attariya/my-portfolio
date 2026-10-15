export const CFG = {
  name: 'Maryam Attaria',
  email: 'maryamattariya2008@gmail.com',
  github: 'https://github.com/Maryam-attariya/Maryam-Haider',
  linkedin: 'https://www.linkedin.com/in/maryam-attaria-737893347/?isSelfProfile=true',
  whatsapp: '+923222416325',
  cv: '/cv.pdf',
  place: 'Karachi, Pakistan',
}

export const EJS = {
  service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

export const LINKS = [
  ['home', 'Home'],
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['certificates', 'Certificates'],
  ['experience', 'Journey'],
  ['contact', 'Contact'],
]

export const STACK = [
  'HTML5',
  'CSS3',
  'JavaScript (ES6+)',
  'React',
  'Tailwind CSS',
  'Bootstrap',
  'Vite',
  'Responsive Design',
]

export const SKILLS = [
  {
    t: 'Frontend Development',
    icon: 'Code2',
    s: [
      {
        name: 'HTML5',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      },
      {
        name: 'CSS3',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      },
      {
        name: 'JavaScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'React',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
    ],
  },
  {
    t: 'Styling & Design',
    icon: 'Palette',
    s: [
      {
        name: 'Tailwind CSS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      },
      {
        name: 'Bootstrap',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      },
      {
        name: 'Responsive Design',
        icon: 'MonitorSmartphone',
      },
    ],
  },
  {
    t: 'Tools & Environment',
    icon: 'Wrench',
    s: [
      {
        name: 'GitHub',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      },
      {
        name: 'Vite',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
      },
      {
        name: 'VS Code',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      },
      {
        name: 'Vercel',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
      },
    ],
  },
]

export const PROJECTS = [
  {
    n: 'Talha Wood Work',
    d: 'A premium, responsive furniture website featuring elegant layouts and smooth scroll animations.',
    cat: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    image: '/projects/woodwork.webp',
    g: ['#1A3028', '#A8D600'],
    live: 'https://wood-work-three.vercel.app/',
    code: 'https://github.com/Maryam-attariya/Wood-work',
  },
  {
    n: 'Multi-Step Form',
    d: 'An interactive multi-step form with personal details, address fields and a visual progress indicator.',
    cat: ['JavaScript', 'HTML', 'CSS'],
    image: '/projects/multistep.webp',
    g: ['#4338CA', '#A5B4FC'],
    live: 'https://multi-step-form-sooty-tau.vercel.app/',
    code: 'https://github.com/Maryam-attariya/Multi-step-form',
  },
  {
    n: 'React Currency Converter',
    d: 'A currency conversion app built with reusable React components and interactive controls.',
    cat: ['React', 'Tailwind'],
    image: '/projects/currency.webp',
    g: ['#075985', '#38BDF8'],
    live: 'https://react-currency-converter-liard.vercel.app/',
    code: 'YOUR_CURRENCY_CONVERTER_GITHUB_REPOSITORY_URL', // <- asli GitHub link yahan lagayein
  },
  {
    n: 'Weather App',
    d: 'A weather application featuring city search and weather information.',
    cat: ['JavaScript', 'API'],
    image: '/projects/weather.webp',
    g: ['#854D0E', '#FACC15'],
    live: 'https://wheather-app-sigma-gray.vercel.app/',
    code: 'https://github.com/Maryam-attariya/Wheather-App',
  },
]

export const CERTIFICATES = [
  {
    n: 'Introduction to Modern AI',
    issuer: 'Cisco Networking Academy · Saylani Welfare International Trust',
    date: '08 Mar 2026',
    image: '/certificates/ai.PNG',
    link: '/certificates/ai.PNG',
  },
  {
    n: 'CSS Essentials',
    issuer: 'Cisco Networking Academy · Saylani Welfare International Trust',
    date: '31 Dec 2025',
    image: '/certificates/certificate css.PNG',
    link: '/certificates/certificate css.PNG',
  },
  {
    n: 'HTML Essentials',
    issuer: 'Cisco Networking Academy · Saylani Welfare International Trust',
    date: '31 Dec 2025',
    image: '/certificates/certificate html.PNG',
    link: '/certificates/certificate html.PNG',
  },
  {
    n: 'Frontend Development Internship',
    issuer: 'CodeAlpha',
    date: 'Jul 2026',
    image: '/certificates/c.PNG',
    link: '/certificates/c.PNG',
  },
]

export const TIMELINE = [

  [
    '2026 – Present',
    'Web Development Course',
    'Learning JavaScript, React and modern CSS through practical projects.',
  ],
  [
    '2024 – 2026',
    'ICS',
    'Studied computer science and foundational programming concepts.',
  ],
]
