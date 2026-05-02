import { Icons } from '@/components/icons'
import { url } from 'inspector'
import {
  HomeIcon,
  NotebookIcon,
  FolderIcon,
  TrophyIcon,
  UserIcon
} from 'lucide-react'

export const DATA = {
  name: 'Muhammad Iqbal Asqalani',
  initials: 'MIA',
  url: 'https://iqbal-portofolio.vercel.app', // Adjust if needed
  subtitle: 'GoodBoy',
  sosmed: {
    instagram: {
      name: 'Instagram',
      username: '@_nglbal',
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
  about:
    'As a vocational high school student in Information Technology, I focus on ',
  about1: 'UI/UX design and front-end development',
  about2:
    'to create digital interfaces that are engaging, functional, and user-friendly. Through school projects, organizational involvement, and independent exploration, I continue to improve my skills in interface design, modern web development, and practical digital solutions. I am committed to continuous growth and contributing my best to every team, organization, and project I take part in.',
  avatarUrl: '/me.JPG', // Ensure this image exists in public folder
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
        url: 'https://linkedin.com/in/muhammad-iqbal',
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
      experience: 'OSIS',
      href: '#',
      badges: [],
      location: 'School',
      role: 'entrepreneurship',
      logoUrl: '/osis.png',
      start: 'August 2024',
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
        'Manage the finances of a small-scale coffee business, including recording income and expenses, calculating capital and team member salaries. Develop copywriting skills for promotions and develop KPIs to improve team performance and business operational effectiveness.'
    },
    {
      experience: 'Developmet Team',
      href: '#',
      badges: [],
      location: 'School',
      role: 'UI/UX Designer & Frontend Developer',
      logoUrl: '/best.png',
      start: 'May 2025',
      end: 'Present',
      description:
        'Contributed to the development of BEST (Bazma Excellent Showcase of Talent) and the SMK TI BAZMA Official Website, focusing on UI/UX design, accessibility, and information structure. For BEST, designed an intuitive learning flow and user-friendly interface to support consistent learning engagement. For the SMK TI BAZMA website, improved interface design and accessibility, resulting in better usability and a smoother experience for users.'
    },
        {
      experience: 'HIMPANA',
      href: '#',
      badges: [],
      location: 'School',
      role: 'UI/UX Designer',
      logoUrl: '/logo-himpana.png',
      start: 'May 2025',
      end: 'Present',
      description:
        'Contributed to the redesign and maintenance of the official HIMPANA website by enhancing UI/UX, optimizing user flow, and improving information architecture. These improvements led to a more intuitive navigation system, better accessibility, and a more efficient user experience for members and visitors.'
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
      title: 'BEST',
      href: 'https://best.smktibazma.com/',
      dates: 'July 2025',
      active: true,
      description:
        'BEST is a digital platform that makes it easy for alumni and students of SMK TI BAZMA to display their portfolios online.',
      technologies: [
        'Figma',
        'Canva',
        'Typescript',
        'Next.js',
        'TailwindCSS',
        'Figma',
        'Express.js'
      ],
      links: [
        {
          type: 'Website',
          href: 'https://best.smktibazma.com/',
          icon: <Icons.globe className='size-3' />
        }
      ],
      image: '/P-BEST.png',
      video: ''
    },
    {
      title: 'SMK TI BAZMA',
      href: 'https://smktibazma.sch.id/',
      dates: 'Aug 2025',
      active: true,
      description:
        'A school website developed to provide clear information, improve digital communication, and support the school’s online presence for students, teachers, and visitors.',
      technologies: ['Figma', 'Canva', 'Next.js', 'Typescript', 'Tailwind'],
      links: [
        {
          type: 'Dribbble',
          href: 'https://smktibazma.sch.id/',
          icon: <Icons.globe className='size-3' />
        }
      ],
      image: '/P-SMKTIBAZMA.png',
      video: ''
    },

    {
      title: 'HIMPANA',
      href: 'https://himpana.com/',
      dates: 'Oct 2025',
      active: true,
      description:
        'HIMPANA is a digital platform for the Pertamina retirees community, designed to connect registered members through an integrated digital ID card system and support easier access to community information and activities.',
      technologies: ['Figma', 'Canva', 'Next.js', 'Typescript'],
      links: [
        {
          type: 'Dribbble',
          href: 'https://himpana.com/',
          icon: <Icons.globe className='size-3' />
        }
      ],
      image: '/P-HIMPANA.png',
      video: ''
    },

    {
      title: 'Sinergi',
      href: 'https://www.figma.com/proto/dnVSPyd2FpipnCzA77ORV5/SINERGI?node-id=366-828&p=f&t=P4WpOTDAaIxa6mut-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
      dates: 'Dec 2025',
      active: true,
      description:
        'SINERGI is a Pertamina community platform that brings internal groups into one centralized hub, making it easier for members to discover communities, communicate, and stay engaged.',
      technologies: ['Figma', 'Canva'],
      links: [
        {
          type: 'Dribbble',
          href: 'https://www.figma.com/proto/dnVSPyd2FpipnCzA77ORV5/SINERGI?node-id=366-828&p=f&t=P4WpOTDAaIxa6mut-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
          icon: <Icons.globe className='size-3' />
        }
      ],
      image: '/P-SINERGI.png',
      video: ''
    },

    {
      title: 'JAJANIN',
      href: 'https://www.figma.com/proto/FDCr2m2p9O0L9V8aMOf99o/Jajanin?node-id=52-44&p=f&t=m8qPHTeANfCTEWyG-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1106%3A5765&show-proto-sidebar=1',
      dates: 'Feb 2026',
      active: true,
      description:
        'An online e-commerce app that helps students learn how to sell products, manage transactions, and earn profit while providing a platform to promote Indonesian student-made culinary products.',
      technologies: ['Figma', 'Canva'],
      links: [
        {
          type: 'Dribbble',
          href: 'https://www.figma.com/proto/FDCr2m2p9O0L9V8aMOf99o/Jajanin?node-id=52-44&p=f&t=m8qPHTeANfCTEWyG-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1106%3A5765&show-proto-sidebar=1',
          icon: <Icons.globe className='size-3' />
        }
      ],
      image: '/P-JAJANIN.png',
      video: ''
    },

    {
      title: 'KajianQU',
      href: 'https://www.figma.com/proto/cQEHbUb5EeWBz1SX7C0wJX/KajianKu?node-id=683-18987&p=f&t=YzM0mXSwJ9csTAd1-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=683%3A18987&show-proto-sidebar=1',
      dates: 'Mar 2026',
      active: true,
      description:
        'Developed a Qur’an learning mobile app (KajianQu) with AI-powered features for recitation correction and memorization (hafalan) submission, helping users improve accuracy and consistency in learning.',
      technologies: ['Figma', 'Canva'],
      links: [
        {
          type: 'Dribbble',
          href: 'https://www.figma.com/proto/cQEHbUb5EeWBz1SX7C0wJX/KajianKu?node-id=683-18987&p=f&t=YzM0mXSwJ9csTAd1-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=683%3A18987&show-proto-sidebar=1',
          icon: <Icons.globe className='size-3' />
        }
      ],
      image: '/P-KAJIANQU.png',
      video: ''
    }
  ],
  certificates: [
    {
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
      title: 'semi-finalist in school web digitalization',
      issuer: 'Jagoan Hosting Infra Competition',
      dates: 'Nov 2025',
      description:
        'Web Development Semi-Finalist certification recognizes achievement in building and presenting web projects, demonstrating strong skills in coding, problem-solving, and UI/UX design.',
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
      title: 'Top 10 - UI/UX Competition',
      issuer: 'Widyatama University',
      dates: 'Feb 2026',
      description:
        'Achieved Top 10 placement in a UI/UX design competition by developing a solution-focused product design, emphasizing user-centered thinking, usability, and interface clarity to address real user problems effectively.',
      image: '/Logo-Widyatama.png',
      links: [
        {
          title: 'View Certificate',
          icon: <Icons.globe className='h-4 w-4' />,
          href: 'https://drive.google.com/file/d/18KZFAuVenLYTuT-ceQpae9oe7K9LMJj8/view?usp=sharing'
        }
      ]
    },
        {
      title: 'National UI/UX Design Seminar',
      issuer: 'Widyatama University',
      dates: 'Feb 2026',
      description:
        'Participated in a national UI/UX seminar focused on modern design principles, user-centered design, and industry best practices to improve understanding of effective digital product and user experience.',
      image: '/Logo-Universitas-Widyatama.png',
      links: [
        {
          title: 'View Certificate',
          icon: <Icons.globe className='h-4 w-4' />,
          href: 'https://drive.google.com/file/d/1aO5PEScwSP4tPP6bYwc6FX1KLsLCeufq/view'
        }
      ]
    },

    {
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
    { image: '/gambar1.jpeg' },
    { image: '/gambar2.jpeg' },
    { image: '/gambar3.png' },
    { image: '/gambar4.png' },
    { image: '/gambar5.png' },
    { image: '/gambar6.JPG' }
  ]
} as const
