import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import MicrosoftClarity from "./metrics/MSClarity";
import Clarity from "@microsoft/clarity";
import { HomeNav } from "@/components/navbar/Nabar";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Vishnu Prasad K | Full Stack Developer",
  description: "Next.js, typescript",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"], display: "swap" });
const projectId: any = process.env.NEXT_PUBLIC_MICROSOFT_CLARITY;
Clarity.init(projectId);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <title>Vishnu Prasad K | Full Stack Developer</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body>
        {/* <NavigationMenu /> */}

        <div className="z-10000 mt-2 flex justify-end lg:-mb-10 lg:w-[80%] lg:justify-center">
          <HomeNav />
        </div>
        {/* </div> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={typeof window !== "undefined"}
        >
          {children}
          <Script id="copy-handler" strategy="lazyOnload">
            {`
            document.addEventListener('click', function(e) {
              const button = e.target.closest('[data-copy-button]');
              if (!button) return;

              const card = button.closest('.card');
              if (!card) return;

              const codeLines = card.querySelectorAll('.code .text');
              const code = Array.from(codeLines).map(el => el.textContent.trim()).join('\\n');

              navigator.clipboard.writeText(code).then(() => {
                const originalText = button.innerHTML;
                button.innerHTML = 'Copied!';
                setTimeout(() => {
                  button.innerHTML = originalText;
                }, 2000);
              });
            });
          `}
          </Script>
          <GoogleAnalytics gaId="G-0ENBD8K0JC" />
        </ThemeProvider>
      </body>
      <Analytics />
      <SpeedInsights />
      <MicrosoftClarity />
    </html>
  );
}
