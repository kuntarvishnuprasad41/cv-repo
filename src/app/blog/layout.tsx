import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Agdasima } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../globals.css";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Vishnu Prasad K | Full Stack Developer",
  description: "Next.js, typescript",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Agdasima({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Blog | Vishnu Prasad</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          enableSystem
          disableTransitionOnChange
          defaultTheme="dark"
        >
          {children}
          <GoogleAnalytics gaId="G-0ENBD8K0JC" />
        </ThemeProvider>
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
