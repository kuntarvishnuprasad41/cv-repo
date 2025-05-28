export type NavigationItem = {
  title: string;
  href: string;
  description?: string;
  children?: NavigationItem[];
};

export type NavigationSection = { title: string; items: NavigationItem[] };

export const navigationData: NavigationSection[] = [
  {
    title: "Thinkology",
    items: [
      {
        title: "Homelab",
        href: "/homelab",
        description:
          "Discussion on pi-hole, Homeserver with NAS and home automation server set-up.",
      },
      {
        title: "Blogs",
        href: "/posts",
        description: "How to install dependencies and structure your app.",
      },
      {
        title: "Components",
        href: "/posts/components",
        description: "Ready to use JSX/TSX components for your app.",
      },
    ],
  },
  {
    title: "Codes",
    items: [
      {
        title: "Hooks",
        href: "/posts/hooks",
        description: "My favorite hooks",
      },
      {
        title: "Configs",
        href: "/docs/primitives/hover-card",
        description:
          "Configuration files for various tools and libraries used in the project.",
      },
      {
        title: "Icons",
        href: "/docs/primitives/progress",
        description:
          "A collection of icons used throughout the project, including SVGs and other formats.",
      },
      {
        title: "Loaders",
        href: "/docs/primitives/scroll-area",
        description:
          "A set of loading indicators and animations used to enhance user experience during data fetching or processing.",
      },
      {
        title: "Templates",
        href: "/docs/primitives/tabs",
        description:
          "Predefined layouts and structures for common UI components, providing a consistent look and feel across the application.",
      },
      {
        title: "Packages",
        href: "/docs/primitives/tooltip",
        description:
          "A collection of reusable packages that can be integrated into various parts of the project, enhancing functionality and reducing development time.",
      },
      {
        title: "Figma Designs",
        href: "/docs/primitives/tooltip",
        description:
          "Figma designs and prototypes for the project, showcasing the visual and interactive elements of the user interface.",
      },
    ],
  },
];

export const standaloneLinks: NavigationItem[] = [
  { title: "Resume", href: "/resume" },
];
