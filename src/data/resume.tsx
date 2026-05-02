import { Icons } from "@/components/icons";
import {
  HomeIcon,
  NotebookIcon,
  FolderIcon,
  TrophyIcon,
  UserIcon,
} from "lucide-react";

export const DATA = {
  name: "Muhammad Iqbal Asqalani",
  initials: "MIA",
  url: "https://iqbal-portofolio.vercel.app", // Adjust if needed
  subtitle: "GoodBoy",
  sosmed: {
    instagram: {
      name: "Instagram",
      username: "@_nglbal",
      url: "https://instagram.com/_nglbal",
    },
    github: {
      name: "GitHub",
      username: "1qbalajah",
      url: "https://github.com/1qbalajah",
    },
    linkedin: {
      name: "LinkedIn",
      username: "muhammad-iqbal",
      url: "https://www.linkedin.com/in/iqbal-asqalani-3b689b312/",
    },
  },
  description: "Student developers",
  desc: " focused on building practical digital solutions, with active contributions to school organizations, collaborative projects, and real-world product development.",
  about:
    "As a vocational high school student in Information Technology, I focus on ",
  about1: "UI/UX design and front-end development",
  about2: "to create digital interfaces that are engaging, functional, and user-friendly. Through school projects, organizational involvement, and independent exploration, I continue to improve my skills in interface design, modern web development, and practical digital solutions. I am committed to continuous growth and contributing my best to every team, organization, and project I take part in.",
  avatarUrl: "/me.JPG", // Ensure this image exists in public folder
  skills: [
    { name: "Javascript", icon: "https://cdn.simpleicons.org/javascript" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/61DAFB" },
    {
      name: "Typescript",
      icon: "https://cdn.simpleicons.org/typescript/3178C6",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4169E1" },
    {
      name: "Vercel",
      icon: {
        light: "https://cdn.simpleicons.org/vercel/000000",
        dark: "https://cdn.simpleicons.org/vercel/FFFFFF",
      },
    },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "Canva", icon: "https://img.icons8.com/fluency/48/canva.png" },
  ],
  navbar: [
    { href: "#hero", icon: HomeIcon, label: "Home" },
    { href: "#about", icon: UserIcon, label: "About" },
    { href: "#projects", icon: FolderIcon, label: "Projects" },
  ],
  contact: {
    email: "iqbalasqalani656@gmail.com",
    tel: "+62 812-1975-8747",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/1qbalajah",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/muhammad-iqbal",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:iqbalasqalani656@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  experience: [
    {
      experience: "OSIS",
      href: "#",
      badges: [],
      location: "School",
      role: "entrepreneurship",
      logoUrl: "/osis.png",
      start: "August 2024",
      end: "October 2025",
      description:
        "Contributed as a member of the Entrepreneurship Division by supporting school business initiatives, assisting in planning and executing student entrepreneurship programs, and helping manage activities that encouraged creativity, teamwork, and practical business skills.",
    },
    {
      experience: "Development Team",
      href: "#",
      badges: [],
      location: "School",
      role: "Member",
      logoUrl: "/best.png",
      start: "May 2025",
      end: "Present",
      description:
        "Developed and maintained the school’s main website to provide accessible information, improve digital communication, and support the school’s online presence. Contributed to building responsive pages, organizing content, and ensuring a user-friendly experience for students, teachers, and visitors.",
    },
  ],
  education: [
    {
      school: "SMK TI BAZMA",
      degree: "Vocational High School (Software Engineering)",
      logoUrl: "/BAZMA.png",
      start: "2023",
      end: "2027",
      description:
        "Focus on software engineering and user interface design development.",
    },
  ],
  projects: [
    {
      title: "BEST",
      href: "https://best.smktibazma.com/",
      dates: "July 2025",
      active: true,
      description:
        "BEST is a digital platform that makes it easy for alumni and students of SMK TI BAZMA to display their portfolios online.",
      technologies: [
        "Figma",
        "Canva",
        "Typescript",
        "Next.js",
        "TailwindCSS",
        "Figma",
        "Express.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://best.smktibazma.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/P-BEST.png",
      video: "",
    },
    {
      title: "SMK TI BAZMA",
      href: "https://smktibazma.sch.id/",
      dates: "Aug 2025",
      active: true,
      description:
        "A school website developed to provide clear information, improve digital communication, and support the school’s online presence for students, teachers, and visitors.",
      technologies: ["Figma", "Canva", "Next.js", "Typescript", "Tailwind"],
      links: [
        {
          type: "Dribbble",
          href: "https://smktibazma.sch.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/P-SMKTIBAZMA.png",
      video: "",
    },

    {
      title: "HIMPANA",
      href: "https://himpana.com/",
      dates: "Oct 2025",
      active: true,
      description:
        "HIMPANA is a digital platform for the Pertamina retirees community, designed to connect registered members through an integrated digital ID card system and support easier access to community information and activities.",
      technologies: ["Figma", "Canva", "Next.js", "Typescript"],
      links: [
        {
          type: "Dribbble",
          href: "https://himpana.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/P-HIMPANA.png",
      video: "",
    },

    {
      title: "Sinergi",
      href: "https://www.figma.com/proto/FDCr2m2p9O0L9V8aMOf99o/Jajanin?node-id=52-44&p=f&t=m8qPHTeANfCTEWyG-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1106%3A5765&show-proto-sidebar=1",
      dates: "Dec 2025",
      active: true,
      description:
        "SINERGI is a Pertamina community platform that brings internal groups into one centralized hub, making it easier for members to discover communities, communicate, and stay engaged.",
      technologies: ["Figma", "Canva"],
      links: [
        {
          type: "Dribbble",
          href: "https://www.figma.com/proto/FDCr2m2p9O0L9V8aMOf99o/Jajanin?node-id=52-44&p=f&t=m8qPHTeANfCTEWyG-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1106%3A5765&show-proto-sidebar=1",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/P-SINERGI.png",
      video: "",
    },

        {
      title: "JAJANIN",
      href: "https://www.figma.com/proto/FDCr2m2p9O0L9V8aMOf99o/Jajanin?node-id=52-44&p=f&t=m8qPHTeANfCTEWyG-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1106%3A5765&show-proto-sidebar=1",
      dates: "Feb 2026",
      active: true,
      description:
        "An online e-commerce app that helps students learn how to sell products, manage transactions, and earn profit while providing a platform to promote Indonesian student-made culinary products.",
      technologies: ["Figma", "Canva"],
      links: [
        {
          type: "Dribbble",
          href: "https://www.figma.com/proto/FDCr2m2p9O0L9V8aMOf99o/Jajanin?node-id=52-44&p=f&t=m8qPHTeANfCTEWyG-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1106%3A5765&show-proto-sidebar=1",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/P-JAJANIN.png",
      video: "",
    },

    {
      title: "KajianQU",
      href: "https://www.figma.com/proto/FDCr2m2p9O0L9V8aMOf99o/Jajanin?node-id=52-44&p=f&t=m8qPHTeANfCTEWyG-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1106%3A5765&show-proto-sidebar=1",
      dates: "Mar 2026",
      active: true,
      description:
        "Developed a Qur’an learning mobile app (KajianQu) with AI-powered features for recitation correction and memorization (hafalan) submission, helping users improve accuracy and consistency in learning.",
      technologies: ["Figma", "Canva"],
      links: [
        {
          type: "Dribbble",
          href: "https://www.figma.com/proto/FDCr2m2p9O0L9V8aMOf99o/Jajanin?node-id=52-44&p=f&t=m8qPHTeANfCTEWyG-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1106%3A5765&show-proto-sidebar=1",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/P-KAJIANQU.png",
      video: "",
    },
  ],
  certificates: [
    {
      title: "ASEAN Data Science Explorers",
      issuer: "SAP Analytics Cloud",
      dates: "Nov 2025",
      description:
        "Data Science certification focuses on processing data—from cleaning and analyzing to visualizing—to turn raw data into meaningful insights for decision-making.",
      image: "/JHIC.png",
      links: [
        {
          title: "View Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "#",
        },
      ],
    },

    {
      title: "Semi Finalist",
      issuer: "Jagoan Hosting Infra Competition",
      dates: "Nov 2025",
      description:
        "Web Development Semi-Finalist certification recognizes achievement in building and presenting web projects, demonstrating strong skills in coding, problem-solving, and UI/UX design.",
      image: "/JHIC.png",
      links: [
        {
          title: "View Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "#",
        },
      ],
    },
  ],
  gallery: [
      { image: "/gambar1.jpeg" },
      { image: "/gambar2.jpeg" },
      { image: "/gambar3.png" },
      { image: "/gambar4.png" },
      { image: "/gambar5.png" },
      { image: "/gambar6.png" },
  ],
} as const;
