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
  initials: "K",
  location: [
    {
      location: "Kuntar, Kasaragod, Kerala,  India  ",
      locationLink: "https://maps.app.goo.gl/2y8jugZ1W8oFsBqp8",
    },
  ],
  about:
    "Full stack developer who loves exploring technologies and thrives to solve challenges.",
  summary:
    "Developing Full Stack application since 2018 with various tech stack has taught me one thing, Learning and Adaptability is crucial part for a developer or any individual. I love to explore new things and bring best out of it.",
  // avatarUrl: "https://avatars.githubusercontent.com/u/19173030?v=4",
  avatarUrl: "image.png",
  // avatarUrl:
  //   "https://media.licdn.com/dms/image/v2/D5603AQH1aLqMahIXtA/profile-displayphoto-shrink_800_800/B56ZWoKlioGoBk-/0/1742283102924?e=1753920000&v=beta&t=wIbzxPFZ2Luw8DNyYanHw2PDyeoeVlzSDNLvnmdSo5k",
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
      { name: "X", url: "https://x.com/kuvi41", icon: XIcon },
    ],
  },
  education: [
    {
      school: "Jain University",
      degree: "Master Of Computer Applications (MCA)",
      start: "2022",
      end: "2024",
    },
    {
      school: "Bangalore University",
      degree: "Bachelor Of Computer Applications (BCA)",
      start: "2018",
      end: "2021",
    },
    {
      school: "DTE",
      degree: "Diploma in Computer Science and Engineering  ",
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
        "Jira",
        "Agile",
        "Scrum",
        "React native",
        "Next.js",
        "Web Dev",
        "Android dev",
        "ios Development",
      ],

      title: "Project Manager cum Senior Software Developer",
      logo: ConsultlyLogo,
      start: "2025",
      end: null,
      description:
        "Leading the front-end development and app development using technologies such as ",
    },
    {
      company: "SSC Pvt Ltd.",
      link: "https://sscinitiatives.com",
      badges: [
        "Remote",

        "React native",
        "Next.js",
        "ts",
        "js",
        "NodeJs",
        "PostgreSQL",
        "iOS app development",
        "Android development",
        "Kotlin",
        "Jenkins",
        "Nginx",
      ],

      title: "Senior Software Developer",
      logo: ConsultlyLogo,
      start: "2024",
      end: 2025,
      description:
        "Leading the front-end development and app development using technologies such as ",
    },
    {
      company: "Safa Globaltech",
      link: "#",
      badges: [
        "Hybrid",
        "React JS",
        "NodeJs",
        "MongoDB",
        "React native",
        "Typescript",
        "Cloudflare",
        "CDN",
        "Kotlin",
        "Jenkins",
        "Nginx",
      ],
      title: "Senior Developer",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description:
        "Implemented HRMS system and developed a bid and award system, techstack were ",
    },
    {
      company: "Sevenchats Pvt Ltd.",
      link: "#",
      badges: [
        "On Site",
        "Native Android Development",
        "Kotlin",
        "Android studio",
        "git",
      ],
      title: " Android Developer ",
      logo: ClevertechLogo,
      start: "2021",
      end: "2023",
      description:
        "Created and maintained Android app for Social Media platform Sevenchats.  ",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",

    "Nginx",
    "jenkins",
    "Native Android Development",
    "WebRTC",
  ],
  projects: [
    {
      title: "Kuntarschool.in | Website for AUPS KUNTAR",
      techStack: ["Nextjs", "React", "PostgreSQL", "GraphQL"],
      description: "Custom Website with SSR using Next.js",
      logo: EvercastLogo,
      link: { label: "kuntarschool.in", href: "https://kuntarschool.in/" },
    },
    {
      title: "Proco & Leader",
      techStack: ["Nexjs", "Headless wordpress", "GraphQL", "React"],
      description:
        "News portal for Proco & Leader with headless wordpress and Next.js",
      logo: EvercastLogo,
      link: {
        label: "Proco & Leader",
        href: "https://proco-leader.sscinitiatives.com/",
      },
    },
    {
      title: "Buyology",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "PostgreSQL",
        "Nginx",
        "Jenkins",
      ],
      description: "Refurbished E-commerce for greener world",
      logo: ParabolLogo,
      link: { label: "Buyology", href: "https://buyology.online/" },
    },
    {
      title: "Safa Globaltech Pvt Ltd.",
      techStack: ["Lead Frontend Developer", "TypeScript", "React", "Node.js"],
      description: "Website for the company with CMS",
      logo: EvercastLogo,
      link: {
        label: "Safa",
        href: "https://web.archive.org/web/20240425041954/https://safaglobaltech.com/",
      },
    },
    {
      title: "Nayaks.Biz.",
      techStack: ["Lead Frontend Developer", "Wordpress", "Elementor", "Php"],
      description:
        "Website for the company with CMS, With custom themes and plugins",
      logo: EvercastLogo,
      link: { label: "Nayaks.biz", href: "https://nayaks.biz/" },
    },
    {
      title: "Nayaks.Biz | Dealers Custom web app",
      techStack: ["Developer", "Php", "CodeIgniter", "mySQL"],
      description:
        "Custom Web app to manage the clients and the slabs on the amount of purchases - B2B ",
      logo: EvercastLogo,
      link: { label: "Dealers Nayaks.biz", href: "https://dealer.nayaks.biz/" },
    },
  ],
} as const;
