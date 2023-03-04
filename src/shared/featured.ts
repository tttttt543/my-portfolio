import { Manage, TipCalculator, EvoGym, darFi, hookbank, huddle, advice, blogr } from '@static/images';

export const featured: {
  id: string;
  name: string;
  info?: string;
  stack: string[];
  code?: string;
  live?: string;
  image?: string;
}[] = [
  {
    id: 'darfi',
    name: 'Dar-fi Blog',
    info: "Personal web page and blog site for Darwin Castro. Built with Astro, it's fast, responsive, a11y friendly and even supports dark mode.",
    stack: ['Astro', 'TailwindCSS', 'TypeScript', 'PostCSS'],
    code: 'https://github.com/darwincastro/dar-fi.com',
    live: 'https://dar-fi.com/',
    image: darFi,
  },
  {
    id: 'evogym',
    name: 'Evolutionary Fitness',
    info: "A prototype landing page for a prototype bussiness called EvoGym. It's fully responsive, dynamic and very lightweight.",
    stack: ['ReactJS', 'TailwindCSS', 'TypeScript', 'Vite'],
    code: 'https://github.com/rwxdan/evo-fit-landing-page',
    live: 'https://evo-fit-landing-page.vercel.app/',
    image: EvoGym,
  },
  {
    id: 'manage',
    name: 'Manage Landing Page',
    info: "Manage's prototype landing page. Completly responsive as well, it has a carefully-designed layout with some catchy details to stand out.",
    stack: ['PostCSS', 'ReactJS', 'Framer Motion', 'Vite'],
    code: 'https://github.com/rwxdan/manage-landing-page',
    live: 'https://manage-landing-page-rwxdan.vercel.app/',
    image: Manage,
  },
  {
    id: 'tip',
    name: 'Tip Calculator App',
    info: 'A very handy app for whenever you need to get your tips right. Whether in company or alone, the app is going to get you the right amounts.',
    stack: ['HTML', 'JavaScript', 'SCSS'],
    code: 'https://github.com/rwxdan/tip-calculator-app',
    live: 'https://rwxdan.github.io/tip-calculator-app',
    image: TipCalculator,
  },
  {
    id: 'hoobank',
    name: 'Hoobank',
    info: 'Prototype landing page for HooBank, a GPT-3 futuristic platform. Mobile-friendly, has beautiful colors and a very well-constructed layout 🦾',
    stack: ['PostCSS', 'ReactJS', 'TailwindCSS'],
    code: 'https://github.com/rwxdan/hoobank',
    live: 'https://hoobank-rwxdan.vercel.app/',
    image: hookbank,
  },
  {
    id: 'huddleExtended',
    name: 'Huddle Landing Page Extended',
    info: 'Concept landing page for Huddle, a fictional platform, which has CSS grid action (and flexbox) throughout. Definitely a fun challenge to code 👨‍💻',
    stack: ['HTML', 'SCSS'],
    code: 'https://github.com/rwxdan/huddle-landing-page-extended',
    live: 'https://rwxdan.github.io/huddle-landing-page-extended/',
    image: huddle,
  },
  {
    id: 'adviceGenerator',
    name: 'Advice Generator App',
    info: 'The sole purpose of this app is to shake it! Oh, and to provide you with a random advice everytime you click the dice button. Check it out! 🔮',
    stack: ['HTML', 'SCSS', 'JavaScript', 'API'],
    code: 'https://github.com/rwxdan/advice-generator-app',
    live: 'https://rwxdan.github.io/advice-generator-app',
    image: advice,
  },
  {
    id: 'blogr',
    name: 'Blogr Landing Page',
    info: "Concept landing page for Blogr, a prototype platform. It's fully responsive, dynamic, well-designed and very 'flexy'. 📜  ",
    stack: ['ReactJS', 'TailwindCSS', 'Vite'],
    code: 'https://github.com/rwxdan/blogr-landing-page',
    live: 'https://rwxdan-blogr-lp.netlify.app/',
    image: blogr,
  },
];
