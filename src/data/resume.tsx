import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FolderIcon, TrophyIcon, UserIcon } from "lucide-react";

export const DATA = {
  name: "Muhammad Iqbal Asqalani",
  initials: "MIA",
  url: "https://iqbal-portofolio.vercel.app", // Adjust if needed
  subtitle: "GoodBoy",
  sosmed: "@_nglbal",
  description:
    "Student developers",
  desc: " who are able to build digital solutions. Actively contribute to school organizations and projects",
  about:
    "Halo! Saya Muhammad Iqbal Asqalani, seorang UI/UX Designer dan Front-end Developer yang selalu bersemangat menciptakan pengalaman digital yang menarik dan fungsional. Berkat dedikasi dan kerja keras, saya terus mengasah keterampilan saya dalam desain antarmuka dan pengembangan web modern.",
  avatarUrl: "/me.JPG", // Ensure this image exists in public folder
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Tailwind CSS",
    "Figma",
    "Framer Motion",
    "Node.js",
    "Postgres",
    "Magic UI",
    "UI/UX Design",
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

  organization: [
    {
      organization: "OSIS",
      href: "#",
      badges: [],
      location: "School",
      role: "Ketua Seksi Kewirausahaan",
      logoUrl: "/osis.png", // Ensure logo exists
      start: "2020",
      end: "2021",
      description:
        "Memimpin divisi kewirausahaan di organisasi sekolah, merencanakan dan mengeksekusi program-program wirausaha untuk siswa.",
    },
    {
      organization: "Programming Club",
      href: "#",
      badges: [],
      location: "School",
      role: "Member",
      logoUrl: "/club.png", // Ensure logo exists
      start: "2023",
      end: "Present",
      description:
        "Aktif dalam pengembangan perangkat lunak dan desain UI/UX bersama anggota klub lainnya.",
    },
  ],
  education: [
    {
      school: "SMK TI BAZMA",
      href: "https://smktibazma.sch.id",
      degree: "Vocational High School (Software Engineering)",
      logoUrl: "/BAZMA.png",
      start: "2023",
      end: "2027",
      description: "Fokus pada rekayasa perangkat lunak dan pengembangan desain antarmuka pengguna.",
    },
  ],
  projects: [
    {
      title: "BEST",
      href: "https://best.smktibazma.com/",
      dates: "May 2024 - Present",
      active: true,
      description:
        "BEST adalah platform digital yang memudahkan alumni dan siswa SMK TI BAZMA untuk menampilkan portofolio mereka secara online.",
      technologies: [
        "Typescript",
        "MYSQL",
        "React.js",
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
      image: "/BEST.png",
      video: "",
    },
    {
      title: "UI/UX Design Portfolio",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Berbagai eksplorasi desain UI/UX untuk mobile app dan website menggunakan Figma.",
      technologies: ["Figma", "UI/UX", "Prototyping"],
      links: [
        {
          type: "Dribbble",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Design.png",
      video: "",
    },
  ],
  certificates: [
    {
      title: "Dicoding: Front-End Web Developer",
      issuer: "Dicoding Indonesia",
      dates: "2024",
      description:
        "Sertifikasi kompetensi dalam pengembangan front-end menggunakan standar web modern.",
      image: "/cert-dicoding.png",
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
    "/BEST.png",
    "/Design.png",
    "/4BYTE.jpg",
  ],
} as const;
