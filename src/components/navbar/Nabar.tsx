"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  NavigationItem,
  NavigationSection,
  navigationData,
  standaloneLinks,
} from "@/lib/navigation-data";
import Image from "next/image";

export function HomeNav() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [fact, setFact] = React.useState<string>("Loading...");

  React.useEffect(() => {
    const fetchFact = async () => {
      try {
        const res = await fetch(
          "https://pokeapi.co/api/v2/pokemon-species/pikachu/",
        );
        const data = await res.json();
        const englishEntries = data.flavor_text_entries.filter(
          (entry: any) => entry.language.name === "en",
        );

        if (englishEntries.length > 0) {
          const randomEntry =
            englishEntries[Math.floor(Math.random() * englishEntries.length)];
          const cleanFact = randomEntry.flavor_text.replace(/\f/g, " ");
          setFact(cleanFact);
        } else {
          setFact("No facts found for Pikachu.");
        }
      } catch (error) {
        setFact("Failed to load fact.");
        console.error(error);
      }
    };

    fetchFact();
  }, []);

  return (
    <>
      {isDesktop ? (
        <NavigationMenu>
          <NavigationMenuList>
            {/* Render sections from navigation data */}
            {navigationData.map((section) => (
              <NavigationMenuItem key={section.title}>
                <NavigationMenuTrigger>{section.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {section.title === "Hello World!" ? (
                    <ul className="grid gap-3 p-4 md:w-[500px] lg:w-[800px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col items-center justify-end text-pretty rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <Image
                              src={
                                "https://avatars.githubusercontent.com/u/19173030?v=4"
                              }
                              width={100}
                              height={100}
                              alt="pikachu"
                              className="rounded-full"
                            />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Pikachu Facts <br /> [&nbsp;Click to Home&nbsp;]
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              {fact}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {section.items.map((item) => (
                        <ListItem
                          key={item.href}
                          href={item.href}
                          title={item.title}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  ) : (
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {section.items.map((item) => (
                        <ListItem
                          key={item.href}
                          href={item.href}
                          title={item.title}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  )}
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}

            {/* Render standalone links */}
            <div className="flex gap-9 pl-2">
              {standaloneLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href}>{link.title}</Link>
                </NavigationMenuItem>
              ))}
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      ) : (
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[350px]">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 font-semibold"
                onClick={() => setOpen(false)}
              >
                <span className="text-lg">Home</span>
              </Link>

              {/* Render mobile navigation from the same data */}
              {navigationData.map((section) => (
                <div key={section.title} className="flex flex-col space-y-3">
                  <div className="font-medium">{section.title}</div>
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="pl-2 text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              ))}

              {/* Render standalone links */}
              {standaloneLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
            <br />
            <p className="text-sm">
              Did you know this about Pikachu? <br /> {fact}
            </p>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
