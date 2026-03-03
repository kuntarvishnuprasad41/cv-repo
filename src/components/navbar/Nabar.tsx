"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"

import { useMediaQuery } from "@/hooks/use-media-query"
import {
  navigationData,
  standaloneLinks,
} from "@/lib/navigation-data"

export function HomeNav() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [fact, setFact] = React.useState("Loading Pikachu fact...")

  React.useEffect(() => {
    const fetchFact = async () => {
      try {
        const res = await fetch(
          "https://pokeapi.co/api/v2/pokemon-species/pikachu/"
        )
        const data = await res.json()

        const englishEntries = data.flavor_text_entries.filter(
          (entry: any) => entry.language.name === "en"
        )

        const randomEntry =
          englishEntries[Math.floor(Math.random() * englishEntries.length)]

        const cleanFact = randomEntry.flavor_text
          .replace(/\f/g, " ")
          .replace(/\n/g, " ")

        setTimeout(() => {
          setFact(cleanFact)
        }, 300)
      } catch {
        setFact("Even Pikachu couldn’t load today ⚡")
      }
    }

    fetchFact()
  }, [])

  if (!isDesktop) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-[320px]">
          <nav className="flex flex-col gap-6">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            {navigationData.map((section) => (
              <div key={section.title}>
                <div className="font-semibold mb-2">
                  {section.title}
                </div>
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block text-muted-foreground py-1"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}

            {standaloneLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.title}
              </Link>
            ))}

            <div className="text-sm text-muted-foreground mt-6">
              ⚡ {fact}
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <NavigationMenu>
      <NavigationMenuList className="max-w-6xl mx-auto px-4">
        {navigationData.map((section) => (
          <NavigationMenuItem key={section.title}>
            <NavigationMenuTrigger>
              {section.title}
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              {section.title === "Hello World!" ? (
                <div className="grid gap-8 p-8 md:grid-cols-2">

                  {/* Pikachu Feature Card */}
                  <Link
                    href="/"
                    className="group rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-6 transition-all hover:scale-[1.02]"
                  >
                    <Image
                      src="https://avatars.githubusercontent.com/u/19173030?v=4"
                      width={80}
                      height={80}
                      alt="pikachu"
                      className="rounded-full"
                    />
                    <h3 className="mt-4 text-lg font-semibold">
                      Pikachu Facts
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed transition-opacity duration-500">
                      {fact}
                    </p>
                  </Link>

                  {/* Links */}
                  <div className="grid gap-4">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-lg p-4 transition-all hover:bg-white/5"
                      >
                        <div className="font-medium">
                          {item.title}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid gap-4 p-8 md:grid-cols-2">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-lg p-4 transition-all hover:bg-white/5"
                    >
                      <div className="font-medium">
                        {item.title}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}

        {standaloneLinks.map((link) => (
          <NavigationMenuItem key={link.href}>
            <Link
              href={link.href}
              className="mt-5 px-4 py-2 text-sm font-medium hover:text-primary"
            >
              {link.title}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}