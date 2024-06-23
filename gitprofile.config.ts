// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'somethingdevs', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['AbdulMalikDev/MjcetWiki', 'somethingdevs/secure-mini-mono', 'somethingdevs/cs678-jeebench', 'somethingdevs/almost-final-countdown', 'gokulprathin8/transcribify'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
            title: 'Transcribify',
            description:
              'Developed for Patriot Hack 2024 (Won Runner-up!). Transcribify makes video transcription accessible and efficient using AWS Transcribe and Comprehend. We built a scalable solution with React.js, Next.js, and AWS services, focusing on real-time updates, user experience, and cost optimization.',
            imageUrl:
              '/loyaltyfirst_inc.webp',
            link: 'https://github.com/gokulprathin8/transcribify',
          },
        {
          title: 'LLMS vs JEE Advanced: Indian Teenagers Worst Nightmare!',
          description:
             'This project investigates the performance of GPT-4 and other LLMs on JEEBench, a benchmark consisting of 515 difficult pre-engineering problems from the IIT JEE-Advanced exam. It aims to assess the ability of the model to solve complex reasoning problems in math, physics, and chemistry.',
          imageUrl:
            '/llms_vs_jee_advanced.webp',
          link: 'https://github.com/somethingdevs/cs678-jeebench',
        },
      ],
    },
  },
  seo: {
    title: 'Ali Hasan Mohiuddin',
    description: 'Software Developer',
    imageURL: '',
  },
  social: {
    linkedin: 'somethingdevs',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://somethingdevs.github.io',
    phone: '',
    email: 'amohiud@gmu.edu',
  },
  resume: {
    fileUrl:
      '/resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'Tailwind',
    'Python',
    'Transformers',
    'BERT',
    'FastAPI',
    'Java',
    'Android Studio',
    'Dart',
    'Flutter',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'Firebase',
    'Git',
    'Docker',
    'AWS',
    'Figma'
],
  experiences: [
    {
      company: 'The Ingentas',
      position: 'Software Developer Intern',
      from: 'May 2022',
      to: 'July 2022',
      companyLink: 'https://www.linkedin.com/company/the-ingentas-corp/',
    },
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'July 2019',
    //   to: 'August 2021',
    //   companyLink: 'https://example.com',
    // },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'George Mason University',
      degree: 'Master of Science - CS',
      from: '2022',
      to: '2024',
    },
    {
      institution: 'Osmania Univeristy',
      degree: 'Bachelor of Engineering - CSE',
      from: '2018',
      to: '2022',
    },
  ],
  publications: [
    {
      title: 'An Initial Framework for Mobile Healthcare Systems using Deep Neural Networks',
      conferenceName: 'IEEE 9th International Conference on Advanced Computing (IACC)',
      journalName: '',
      authors: 'M. Misbhauddin, M. A. Malik, A. H. Mohiuddin',
      link: 'https://ieeexplore.ieee.org/document/8971543',
      description:
        'This paper reviews advancements in mobile healthcare applications using deep learning over the past 2-3 years, classifying them into cloud-computing, edge-computing, and offline systems. It also proposes an initial framework for mobile healthcare applications using deep neural networks for disease identification, management, and prevention.',
    }
  ],
  
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-JF7S91Q46D', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dum',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
