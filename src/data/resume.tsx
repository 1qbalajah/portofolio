import { Icons } from '@/components/icons'
import {
  HomeIcon,
  FolderIcon,
  UserIcon
} from 'lucide-react'

export const DATA = {
  name: 'Muhammad Iqbal Asqalani',
  call: 'Hello my name is Muhammad Iqbal Asqalani',
  initials: 'MIA',
  url: 'https://iqbal-portofolio.vercel.app', // Adjust if needed
  subtitle: 'GoodBoy',
  sosmed: {
    instagram: {
      name: 'Instagram',
      username: '_nglbal',
      url: 'https://instagram.com/_nglbal'
    },
    github: {
      name: 'GitHub',
      username: '1qbalajah',
      url: 'https://github.com/1qbalajah'
    },
    linkedin: {
      name: 'LinkedIn',
      username: 'muhammad-iqbal',
      url: 'https://www.linkedin.com/in/iqbal-asqalani-3b689b312/'
    }
  },
  description: 'Student developers',
  desc: ' focused on building practical digital solutions, with active contributions to school organizations, collaborative projects, and real-world product development.',
  about0: 'My name is Muhammad Iqbal Asqalani, ',
  about:
    'a vocational high school student with a strong passion for continuous growth and adaptability in technology, focusing on',
  about1: 'UI/UX Design and Frontend Development',
  about2:
    'while actively building digital experiences through projects, collaboration, and problem-solving.',
  avatarUrl: '/me.webp', // Ensure this image exists in public folder
  skills: [
    { name: 'Javascript', icon: 'https://cdn.simpleicons.org/javascript' },
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/5FA04E' },
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/61DAFB' },
    {
      name: 'Typescript',
      icon: 'https://cdn.simpleicons.org/typescript/3178C6'
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4'
    },
    { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4169E1' },
    {
      name: 'Vercel',
      icon: {
        light: 'https://cdn.simpleicons.org/vercel/000000',
        dark: 'https://cdn.simpleicons.org/vercel/FFFFFF'
      }
    },
    { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
    { name: 'Canva', icon: 'https://img.icons8.com/fluency/48/canva.png' }
  ],
  navbar: [
    { href: '#hero', icon: HomeIcon, label: 'Home' },
    { href: '#about', icon: UserIcon, label: 'About' },
    { href: '#projects', icon: FolderIcon, label: 'Projects' }
  ],
  contact: {
    email: 'iqbalasqalani656@gmail.com',
    tel: '+62 812-1975-8747',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/1qbalajah',
        icon: Icons.github,
        navbar: true
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/iqbal-asqalani-3b689b312/',
        icon: Icons.linkedin,
        navbar: true
      },
      email: {
        name: 'Send Email',
        url: 'mailto:iqbalasqalani656@gmail.com',
        icon: Icons.email,
        navbar: true
      },
      Instagram: {
        name: 'Instagram',
        url: 'https://instagram.com/_nglbal',
        icon: Icons.instagram,
        navbar: true
      }
    }
  },

  experience: [
    {
      experience: 'Student Council SMK TI BAZMA',
      href: '#',
      badges: [],
      location: 'School',
      role: 'Entrepreneurship',
      logoUrl: '/osis.png',
      start: 'October 2024',
      end: 'October 2025',
      description:
        'Collaborated with team members to coordinate tasks, ensuring clear communication and smooth execution of projects and events.'
    },
    {
      experience: 'Ruang Tunggu',
      href: '#',
      badges: [],
      location: 'School',
      role: 'Finance & Operations',
      logoUrl: '/Logo Ruang Tunggu.png',
      start: 'August 2024',
      end: 'October 2025',
      description:
        'Managing spending efficiency and profit optimization strategies through financial planning and operational cost evaluation, thus successfully increasing business profits by 300 thousand in less than one month.'
    },
  ],
  education: [
    {
      school: 'SMK TI BAZMA',
      degree:
        'Vocational High School (Information Systems, Networks & Applications)',
      logoUrl: '/BAZMA.png',
      start: '2023',
      end: '2027',
      description:
        'An IT-based boarding school with a 4-year program, focusing on programming, web development, IoT, networking, and computer systems, while building discipline and teamwork through a structured environment.'
    }
  ],
  projects: [
    {
      id: 'project-best-showcase',
      category: 'Aplikasi Web',
      title: 'BEST',
      href: 'https://best.smktibazma.com/',
      dates: 'July 2025',
      active: true,
      desc: 'Created a portfolio platform interface design ',
      textbold: 'featuring 40+ student projects',
      description:
        'to support connections with industry and collaborators, while improving project discoverability through a structured and user-friendly showcase experience.',
      technologies: [
        'Figma',
        'Canva',
        'Typescript',
        'Next.js',
        'TailwindCSS'
      ],
      links: [
        {
          type: 'Website',
          href: 'https://best.smktibazma.com/',
          icon: <Icons.globe className='size-3' />
        }
      ],
      image: '/P-BEST.webp',
      video: ''
    },
    {
      id: 'project-smkti-bazma-redesign',
      category: 'Aplikasi Web',
      title: 'SMK TI BAZMA',
      href: 'https://smktibazma.sch.id/',
      dates: 'Aug 2025',
      active: true,
      desc: 'Redesigning the official website of SMK TI Bazma with a more modern and structured interface through the integration of AI chatbots and a showcase feature for student work to showcase various projects that have been developed, until successfully achieving the ',
      textbold: 'Top 30 position out of 300 school teams',
      description:
        'in the Infra Competition.',
      technologies: ['Figma', 'Canva', 'Typescript', 'Next.js', 'TailwindCSS'],
      links: [
        {
          type: 'Dribbble',
          href: 'https://smktibazma.sch.id/',
          icon: <Icons.globe className='size-3' />
        }
      ],
      image: '/P-SMKTIBAZMA.webp',
      video: ''
    },

    {
      id: 'project-himpana-community',
      category: 'Aplikasi Web',
      title: 'HIMPANA',
      href: 'https://himpana.com/',
      dates: 'Oct 2025',
      active: true,
      desc: 'Revived an old community website through UI/UX redesign by creating scalable user flows and interfaces, enabling a more efficient and ',
      textbold: 'structured experience for 1,000+ users',
      description:
        'while improving accessibility and overall user engagement.',
      technologies: ['Figma', 'Canva', 'Typescript', 'Next.js'],
      links: [
        {
          type: 'Dribbble',
          href: 'https://himpana.com/',
          icon: <Icons.globe className='size-3' />
        }
      ],
      image: '/P-HIMPANA.webp',
      video: ''
    },

    {
      id: 'project-sinergi-uiux',
      category: 'UI/UX Design',
      title: 'Sinergi',
      href: 'https://www.figma.com/proto/dnVSPyd2FpipnCzA77ORV5/SINERGI?node-id=366-828&p=f&t=P4WpOTDAaIxa6mut-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
      dates: 'Dec 2025',
      active: true,
      desc: 'Designed the UI/UX for SINERGI, a centralized community platform that ',
      textbold: 'unifies multiple disconnected internal groups',
      description:
        'into one accessible ecosystem, simplifying community discovery, communication, and member engagement across Pertamina communities.',
      technologies: ['Figma', 'Canva'],
      links: [
        {
          type: 'Dribbble',
          href: 'https://www.figma.com/proto/dnVSPyd2FpipnCzA77ORV5/SINERGI?node-id=366-828&p=f&t=P4WpOTDAaIxa6mut-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
          icon: <Icons.globe className='size-3' />
        }
      ],
      image: '/P-SINERGI.webp',
      video: ''
    },

    {
      id: 'project-jajanin-uiux',
      category: 'UI/UX Design',
      title: 'JAJANIN',
      href: 'https://www.figma.com/proto/FDCr2m2p9O0L9V8aMOf99o/Jajanin?node-id=52-44&p=f&t=m8qPHTeANfCTEWyG-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1106%3A5765&show-proto-sidebar=1',
      dates: 'Feb 2026',
      active: true,
      desc: 'Leading end-to-end UI/UX design through user flow creation and interactive prototypes to achieve ',
      textbold: "Top 10 Semifinalist",
      description:
        'out of 50 teams in the WISE INNOVERA Competition, by delivering a scalable and user-centered platform that simplifies entrepreneurial learning and real-world sales experiences for students.',
      technologies: ['Figma', 'Canva'],
      links: [
        {
          type: 'Dribbble',
          href: 'https://www.figma.com/proto/FDCr2m2p9O0L9V8aMOf99o/Jajanin?node-id=52-44&p=f&t=m8qPHTeANfCTEWyG-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1106%3A5765&show-proto-sidebar=1',
          icon: <Icons.globe className='size-3' />
        }
      ],
      image: '/P-JAJANIN.webp',
      video: ''
    },

    {
      id: 'project-kajianqu-personal',
      category: 'Aplikasi Pribadi',
      title: 'KajianQU',
      href: 'https://www.figma.com/proto/cQEHbUb5EeWBz1SX7C0wJX/KajianKu?node-id=683-18987&p=f&t=YzM0mXSwJ9csTAd1-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=683%3A18987&show-proto-sidebar=1',
      dates: 'Mar 2026',
      active: true,
      desc: '',
      description:
        'by creating user flows and interactive prototypes to simplify the murojaah and memorization experience.',
      textbold: "Led end-to-end UI/UX design",
      technologies: ['Figma', 'Canva'],
      links: [
        {
          type: 'Dribbble',
          href: 'https://www.figma.com/proto/cQEHbUb5EeWBz1SX7C0wJX/KajianKu?node-id=683-18987&p=f&t=YzM0mXSwJ9csTAd1-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=683%3A18987&show-proto-sidebar=1',
          icon: <Icons.globe className='size-3' />
        }
      ],
      image: '/P-KAJIANQU.webp',
      video: ''
    }
  ],
  certificates: [
    {
      id: 'cert-asean-data-science-explorers',
      title: 'ASEAN Data Science Explorers',
      issuer: 'SAP Analytics Cloud',
      dates: 'Nov 2025',
      description:
        'Data Science certification focuses on processing data—from cleaning and analyzing to visualizing—to turn raw data into meaningful insights for decision-making.',
      image: '/sap.png',
      links: [
        {
          title: 'View Certificate',
          icon: <Icons.globe className='h-4 w-4' />,
          href: 'https://drive.google.com/file/d/1LtWVGx1aw6iNFNxZ1VLBLp44loKkZGZt/view?usp=sharing'
        }
      ]
    },

    {
      id: 'cert-national-school-website-competition',
      title: 'National School Website Competition',
      issuer: 'Jagoan Hosting Infra Competition',
      dates: 'Nov 2025',
      description:
        'Achieved Semi-Finalist Certification for Website Redesign after competing against 300+ school teams across Indonesia, advancing to the top 30. and won 2nd Place – Best Video Impression category in the Infrastructure Competition.',
      image: '/JHIC.png',
      links: [
        {
          title: 'View Certificate',
          icon: <Icons.globe className='h-4 w-4' />,
          href: 'https://drive.google.com/file/d/1e9FdO6ltCreGI_r6WIxfLHiOTxLDGlpw/view?usp=sharing'
        }
      ]
    },

    {
      id: 'cert-wise-innovera-uiux',
      title: 'National UI/UX Competition WISE INNOVERA',
      issuer: 'Widyatama University',
      dates: 'Feb 2026',
      description:
        'Achieved top 10 position out of 50 school teams across Indonesia in UI/UX design competition by developing solution-focused product designs and emphasizing user-centered thinking, ease of use, and interface clarity to effectively solve real user problems.',
      image: '/Logo-Widyatama.webp',
      links: [
        {
          title: 'View Certificate',
          icon: <Icons.globe className='h-4 w-4' />,
          href: 'https://drive.google.com/file/d/18KZFAuVenLYTuT-ceQpae9oe7K9LMJj8/view?usp=sharing'
        }
      ]
    },
        {
      id: 'cert-national-uiux-design-seminar',
      title: 'National UI/UX Design Seminar',
      issuer: 'Widyatama University',
      dates: 'Feb 2026',
      description:
        'Participated in a national UI/UX seminar focused on modern design principles, user-centered design, and industry best practices to deepen understanding of effective digital products and user experiences, presented by speaker recognized for achievements in AWS UI/UX competitions.',
      image: '/Logo-Universitas-Widyatama.webp',
      links: [
        {
          title: 'View Certificate',
          icon: <Icons.globe className='h-4 w-4' />,
          href: 'https://drive.google.com/file/d/1aO5PEScwSP4tPP6bYwc6FX1KLsLCeufq/view'
        }
      ]
    },

    {
      id: 'cert-basic-javascript-hackerrank',
      title: 'Basic Javascript',
      issuer: 'HackerRank',
      dates: 'May 2026',
      description:
        'Awarded for participation and completion in a Basic JavaScript competition, demonstrating foundational understanding of JavaScript programming concepts and problem-solving skills in web development.',
      image: '/hackerrank.png',
      links: [
        {
          title: 'View Certificate',
          icon: <Icons.globe className='h-4 w-4' />,
          href: 'https://drive.google.com/file/d/1l1Uv30_ib5W-OMb2fuq5Ld3672uJtREV/view'
        }
      ]
    },
  ],
  gallery: [
    { image: '/gambar2.webp' },
    { image: '/gambar3.webp' },
    { image: '/gambar4.webp' },
    { image: '/gambar5.webp' },
    { image: '/gambar6.webp' }
  ]
} as const
