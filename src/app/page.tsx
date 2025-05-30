import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { MySection } from "@/components/aceternity/moving-border";
import { ExperienceCard } from "@/components/aceternity/experience";
import { HomeNav } from "@/components/navbar/Nabar";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-6">
      <div className="mx-auto mt-1 flex w-full max-w-3xl justify-between space-y-2 rounded-md px-8 py-4 print:space-y-2">
        <div className="flex-1 space-y-3.5">
          <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
          <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            {RESUME_DATA.about}
          </p>
          <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
            {RESUME_DATA.location.map((loc, idx) => {
              return (
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={loc.locationLink}
                  target="_blank"
                  key={idx}
                >
                  <GlobeIcon className="size-3" />
                  {loc.location}
                  <br />
                </a>
              );
            })}
          </p>
          <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
            {RESUME_DATA.contact.email ? (
              <Button className="size-8" variant="outline" size="icon" asChild>
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <MailIcon className="size-4" />
                </a>
              </Button>
            ) : null}
            {RESUME_DATA.contact.tel ? (
              <Button className="size-8" variant="outline" size="icon" asChild>
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <PhoneIcon className="size-4" />
                </a>
              </Button>
            ) : null}
            {RESUME_DATA.contact.social.map((social) => (
              <Button
                key={social.name}
                className="size-8"
                variant="outline"
                size="icon"
                asChild
              >
                <a href={social.url}>
                  <social.icon className="size-4" />
                </a>
              </Button>
            ))}
          </div>
          <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
            {RESUME_DATA.contact.email ? (
              <a href={`mailto:${RESUME_DATA.contact.email}`}>
                <span className="underline">{RESUME_DATA.contact.email}</span>
              </a>
            ) : null}
            {RESUME_DATA.contact.tel ? (
              <a href={`tel:${RESUME_DATA.contact.tel}`}>
                <span className="underline">{RESUME_DATA.contact.tel}</span>
              </a>
            ) : null}
          </div>
        </div>

        <Avatar className="size-28">
          <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
          <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
        </Avatar>
      </div>
      <section className="mx-auto -mt-1 w-full max-w-3xl space-y-8 rounded-md bg-[#001534] px-8 py-4 print:space-y-2">
        {/* <HomeNav /> */}

        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section className="">
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <ExperienceCard work={work} key={work.company + work.title}>
                <Card className="bg-[#011028] px-4 py-4 print:gap-0 print:p-0">
                  <CardHeader>
                    <div className="flex items-center justify-between text-base">
                      <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none print:gap-0">
                        <a className="hover:underline" href={work.link}>
                          {work.title} @ {work.company}
                        </a>

                        <div className="ml-2 print:ml-0">
                          <span className="flex flex-row flex-wrap gap-2 print:gap-0">
                            <Badge
                              variant="secondary"
                              className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                              key={work.badges[0]}
                            >
                              {work.badges[0]}
                            </Badge>

                            <br />
                          </span>
                        </div>
                      </h3>
                      <div className="text-sm tabular-nums text-gray-500">
                        {work.start} - {work.end ?? "Present"}
                      </div>
                    </div>
                    <span className="flex flex-row flex-wrap gap-2 print:gap-0"></span>

                    {/* <h4 className="font-mono text-sm leading-none print:text-[12px]">
                      {work.title}
                    </h4> */}
                  </CardHeader>
                  <CardContent className="mt-2 text-xs print:text-[10px]">
                    {work.description}
                  </CardContent>

                  <br />
                  <span className="flex flex-row flex-wrap gap-2 print:gap-0">
                    {work.badges.map(
                      (badge, index) =>
                        index !== 0 && (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ),
                    )}
                  </span>
                </Card>
              </ExperienceCard>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card
                key={education.school}
                className="bg-[#011028] p-4 print:p-0"
              >
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.degree}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-1 print:text-[12px]">
                  {education.school}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1 px-4">
            {RESUME_DATA.skills.map((skill) => {
              return (
                <Badge className="print:text-[10px]" key={skill}>
                  {skill}
                </Badge>
              );
            })}
          </div>
        </Section>
        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
        {/* <img
          src="https://ghchart.rshah.org/kuntarvishnuprasad41"
          alt="GitHub Activity Chart"
        /> */}
      </section>
      <CommandMenu
        links={[
          { url: RESUME_DATA.personalWebsiteUrl, title: "Personal Website" },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
