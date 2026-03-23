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
import { ExperienceCard } from "@/components/aceternity/experience";
// import { HomeNav } from "@/components/navbar/Nabar";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto px-4 py-6 sm:px-6 md:px-12 md:py-14 print:p-6">
      <div className="mx-auto flex w-full max-w-3xl items-start justify-between gap-6 rounded-2xl px-6 py-6 md:px-8 md:py-7 print:space-y-2">
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            {RESUME_DATA.name}
          </h1>
          <p className="max-w-xl text-pretty text-base leading-7 text-muted-foreground print:text-[12px]">
            {RESUME_DATA.about}
          </p>
          <div className="flex max-w-xl flex-wrap gap-x-4 gap-y-2 text-sm leading-6 text-muted-foreground">
            {RESUME_DATA.location.map((loc, idx) => {
              return (
                <a
                  className="inline-flex items-center gap-x-1.5 hover:text-foreground hover:underline"
                  href={loc.locationLink}
                  target="_blank"
                  rel="noreferrer"
                  key={idx}
                >
                  <GlobeIcon className="size-3" />
                  {loc.location}
                </a>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-2 pt-1 text-sm text-muted-foreground print:hidden">
            {RESUME_DATA.contact.email ? (
              <Button className="size-9" variant="outline" size="icon" asChild>
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <MailIcon className="size-4" />
                </a>
              </Button>
            ) : null}
            {RESUME_DATA.contact.tel ? (
              <Button className="size-9" variant="outline" size="icon" asChild>
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <PhoneIcon className="size-4" />
                </a>
              </Button>
            ) : null}
            {RESUME_DATA.contact.social.map((social) => (
              <Button
                key={social.name}
                className="size-9"
                variant="outline"
                size="icon"
                asChild
              >
                <a href={social.url} rel="noreferrer" target="_blank">
                  <social.icon className="size-4" />
                </a>
              </Button>
            ))}
          </div>
          <div className="hidden flex-col gap-y-1 text-sm text-muted-foreground print:flex print:text-[12px]">
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
      <section className="mx-auto w-full max-w-3xl space-y-10 rounded-2xl bg-[#001534] px-6 py-6 md:px-8 md:py-8 print:space-y-2">
        {/* <HomeNav /> */}

        <Section className="gap-y-4">
          <h2 className="text-xl font-bold tracking-tight">About</h2>
          <p className="max-w-none text-pretty text-sm leading-7 text-muted-foreground md:text-[15px] print:text-[12px]">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section className="gap-y-5">
          <h2 className="text-xl font-bold tracking-tight">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            const [jobType, ...techStack] = work.badges;

            return (
              <ExperienceCard work={work} key={work.company + work.title}>
                <Card className="border border-white/5 bg-[#011028] px-5 py-5 print:gap-0 print:p-0">
                  <CardHeader className="space-y-4">
                    <div className="flex flex-col gap-3 text-base sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-2">
                        <h3 className="font-semibold leading-snug text-white print:gap-0">
                          {work.title}
                        </h3>
                        <a
                          className="block text-sm font-medium text-sky-300 transition-colors hover:text-sky-200 hover:underline"
                          href={work.link}
                        >
                          {work.company}
                        </a>
                      </div>
                      <div className="shrink-0 text-sm tabular-nums text-gray-500">
                        {work.start} - {work.end ?? "Present"}
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge
                        variant="secondary"
                        className="rounded-md bg-sky-500/10 px-2.5 py-1 text-[11px] font-semibold text-sky-200 ring-1 ring-inset ring-sky-400/20 print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                      >
                        {jobType}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm leading-7 text-muted-foreground print:text-[10px]">
                    {work.description}
                  </CardContent>
                  <div className="mt-4 space-y-2">
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2 print:gap-0">
                      {techStack.map((badge) => (
                        <Badge
                          variant="outline"
                          className="rounded-sm border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] font-medium text-slate-200 shadow-sm print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                          key={badge}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  </Card>
              </ExperienceCard>
            );
          })}
        </Section>
        <Section className="gap-y-5">
          <h2 className="text-xl font-bold tracking-tight">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card
                key={education.school}
                className="border border-white/5 bg-[#011028] p-5 print:p-0"
              >
                <CardHeader className="space-y-3">
                  <div className="flex flex-col gap-3 text-base sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="font-semibold leading-snug">
                      {education.degree}
                    </h3>
                    <div className="shrink-0 text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-sm leading-7 print:text-[12px]">
                  {education.school}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section className="gap-y-4">
          <h2 className="text-xl font-bold tracking-tight">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {RESUME_DATA.skills.map((skill) => {
              return (
                <Badge className="px-2.5 py-1 text-[11px] print:text-[10px]" key={skill}>
                  {skill}
                </Badge>
              );
            })}
          </div>
        </Section>
        <Section className="scroll-mb-16 gap-y-5 print-force-new-page">
          <h2 className="text-xl font-bold tracking-tight">Projects</h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
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
