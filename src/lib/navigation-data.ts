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
        href: "/posts/homelab",
        description:
          "Discussion on pi-hole, Homeserver with NAS and home automation server set-up.",
      },
      {
        title: "Blogs",
        href: "/posts",
        description: "How to install dependencies and structure your app.",
      },
      {
        title: "App ideas",
        href: "/posts/app-ideas",
        description: "Ready to use JSX/TSX components for your app.",
      },
    ],
  },
  {
    title: "Code Snippets",
    items: [
      {
        title: "Hooks",
        href: "/posts/hooks",
        description:
          "Custom React hooks for managing state and side effects in your application.",
      },
      {
        title: "Components",
        href: "/posts/components",
        description: "Reusable JSX, TSX components for your projects",
      },
      {
        title: "Configs",
        href: "/posts/configs",
        description:
          "Configuration files for various tools and libraries used in the project.",
      },
      {
        title: "Icons",
        href: "/posts/icons",
        description:
          "A collection of icons used throughout the project, including SVGs and other formats.",
      },
      {
        title: "Loaders",
        href: "/posts/loaders",
        description:
          "A set of loading indicators and animations used to enhance user experience during data fetching or processing.",
      },
      {
        title: "Templates",
        href: "/posts/templates",
        description:
          "Predefined layouts and structures for common UI components, providing a consistent look and feel across the application.",
      },
      {
        title: "Packages",
        href: "/posts/packages",
        description:
          "A collection of reusable packages that can be integrated into various parts of the project, enhancing functionality and reducing development time.",
      },
    ],
  },
];

export const standaloneLinks: NavigationItem[] = [
  { title: "Blog", href: "/posts" },
  { title: "Resume", href: "/resume" },
];
