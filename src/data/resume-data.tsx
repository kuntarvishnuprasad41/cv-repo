import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Vishnu Prasad K",
  initials: "VK",
  location: [
    {
      location: "Kuntar, Kasaragod, Kerala, India",
      locationLink: "https://maps.app.goo.gl/2y8jugZ1W8oFsBqp8",
    },
  ],
  about:
    "Engineering Project Manager and Full Stack Developer specializing in MERN, Next.js and PostgreSQL.",
  summary:
    "Full Stack Developer since 2018 with expertise in React, Next.js, Android (Kotlin), WebRTC, i18n (RTL/LTR), CMS platforms and real-time systems. Experienced in leading teams, integrating AML & payment gateways (UAE), and building scalable EPC and enterprise web platforms.",
  avatarUrl: "image.png",
  personalWebsiteUrl: "https://vishnuprasadkuntar.me",

  contact: {
    email: "kuntarvishnuprasad41@gmail.com",
    tel: "+91 8547580204",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/kuntarvishnuprasad41",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vishnu-prasad-kuntar/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/kuvi41",
        icon: XIcon,
      },
    ],
  },

  education: [
    {
      school: "Jain University, Bengaluru",
      degree:
        "MCA in Artificial Intelligence | 9.3 GPA (First Class with Distinction)",
      start: "2022",
      end: "2024",
    },
    {
      school: "Acharya Institutes, Bengaluru",
      degree: "BCA | 7.99 GPA (First Class with Distinction)",
      start: "2018",
      end: "2021",
    },
    {
      school: "JSS Polytechnic, Mysuru",
      degree: "Diploma in Computer Science & Engineering | 68%",
      start: "2013",
      end: "2016",
    },
  ],

  work: [
    {
      company: "SSC Pvt Ltd.",
      link: "https://sscinitiatives.com",
      badges: [
        "Remote",
        "Agile",
        "Scrum",
        "Next.js",
        "PostgreSQL",
        "MERN",
        "i18n",
        "RTL/LTR",
        "AML Integration",
        "Payment Gateway",
      ],
      title: "Engineering Project Manager & Full Stack Developer",
      logo: ConsultlyLogo,
      start: "June 2024",
      end: "Feb 2026",
      description:
        "Led 15+ production websites with Arabic/English i18n (RTL/LTR), built CMS platforms for Dubai clients, integrated AML & payment gateways, and developed React-based EPC hotspot builder.",
    },
    {
      company: "Sevenchats Pvt Ltd. (Safa Globaltech Pvt Ltd.)",
      link: "#",
      badges: [
        "Hybrid",
        "MERN",
        "WebRTC",
        "Socket.io",
        "React",
        "MongoDB",
      ],
      title: "Full Stack Developer",
      logo: ParabolLogo,
      start: "June 2023",
      end: "June 2024",
      description:
        "Developed MERN applications, improved mobile responsiveness, implemented WebRTC and real-time systems using WebSockets and Socket.io.",
    },
    {
      company: "Sevenchats Pvt Ltd.",
      link: "#",
      badges: [
        "Onsite",
        "Android",
        "Kotlin",
        "WebRTC",
        "OkHttp3",
        "Socket.io",
      ],
      title: "Android Application Developer",
      logo: ClevertechLogo,
      start: "Dec 2021",
      end: "June 2023",
      description:
        "Built and maintained Android social platform with WebRTC, encrypted 181 API requests using Caesar cipher (OkHttp3), integrated ChatGPT chatbot and real-time messaging.",
    },
  ],

  skills: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "React Native (Expo)",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Firebase",
    "Kotlin",
    "WebRTC",
    "Socket.io",
    "Docker",
    "NGINX",
    "Jenkins",
    "Cloudflare",
    "AWS",
    "GCP",
    "Vercel",
    "Selenium",
    "Appium",
  ],

  projects: [
    {
      title: "Riyash Furnitures (Abu Dhabi)",
      techStack: ["Next.js", "React", "i18n", "RTL/LTR"],
      description:
        "Bilingual Arabic & English website with full RTL/LTR internationalization support.",
      logo: EvercastLogo,
      link: { label: "rayash.vercel.app", href: "https://rayash.vercel.app/" },
    },
    {
      title: "EcoHomes (Abu Dhabi)",
      techStack: ["Next.js", "React", "i18n", "RTL/LTR"],
      description:
        "i18n-enabled corporate website with Arabic/English support and SEO optimization.",
      logo: EvercastLogo,
      link: { label: "ecohomes.sa", href: "https://ecohomes.sa" },
    },
    {
      title: "Sthaapana Constructions",
      techStack: ["Next.js", "CMS", "React"],
      description:
        "CMS-powered dynamic corporate website with structured content management.",
      logo: EvercastLogo,
      link: {
        label: "sthaapanaconstructions.com",
        href: "https://www.sthaapanaconstructions.com/",
      },
    },
    {
      title: "Proco & Leader",
      techStack: ["Next.js", "Headless WordPress", "GraphQL"],
      description:
        "Dubai-based news portal built using headless WordPress with Next.js frontend.",
      logo: EvercastLogo,
      link: {
        label: "Proco & Leader",
        href: "https://proco-leader.sscinitiatives.com/",
      },
    },
    {
      title: "Kuntarschool.in | AUPS Kuntar",
      techStack: ["Next.js", "PostgreSQL", "GraphQL"],
      description:
        "Custom SSR school website with optimized deployment and structured backend.",
      logo: EvercastLogo,
      link: { label: "kuntarschool.in", href: "https://kuntarschool.in/" },
    },
    {
      title: "Buyology",
      techStack: ["React", "Node.js", "PostgreSQL", "CI/CD"],
      description:
        "Refurbished e-commerce platform with production-grade CI/CD pipeline.",
      logo: ParabolLogo,
      link: { label: "Buyology", href: "https://buyology.online/" },
    },
    {
      title: "Nayaks.biz Dealer Portal",
      techStack: ["PHP", "CodeIgniter", "MySQL"],
      description:
        "Custom B2B dealer management system with purchase-based slab automation.",
      logo: EvercastLogo,
      link: { label: "Dealer Portal", href: "https://dealer.nayaks.biz/" },
    },
  ],
} as const;
