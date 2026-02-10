/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import {
  ArrowUpRight,
  UserIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  CodeIcon,
  RocketIcon,
  TrophyIcon,
  MailIcon
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero" className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20 relative overflow-hidden">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="size-20 md:size-24 bg-primary/10 rounded-3xl flex items-center justify-center mb-8 mx-auto ring-1 ring-primary/20 backdrop-blur-sm">
            <span className="text-3xl font-bold bg-primary text-primary-foreground size-12 flex items-center justify-center rounded-2xl shadow-lg ring-2 ring-background">
              {DATA.initials}
            </span>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h1 className="edge-title">
            2025 Year <br className="hidden md:block" /> in Review
          </h1>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <p className="edge-subtitle mb-10">
            Let's celebrate what made your developer journey special with {DATA.name}.
          </p>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="#about" className="btn-edge-primary group">
              Get Started
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link href="#projects" className="btn-edge-secondary">
              View Projects
            </Link>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground to-transparent"></div>
          </div>
        </BlurFade>
      </section>

      <section id="about" className="scroll-mt-20">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="flex items-center gap-2 mb-2">
              <UserIcon className="size-5 text-primary" />
              <h2 className="text-xl font-bold tracking-tight">About</h2>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work" className="scroll-mt-20">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="size-5 text-primary" />
              <h2 className="text-xl font-bold tracking-tight">Work Experience</h2>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education" className="scroll-mt-20">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex items-center gap-2">
              <GraduationCapIcon className="size-5 text-primary" />
              <h2 className="text-xl font-bold tracking-tight">Education</h2>
            </div>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills" className="scroll-mt-20">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="flex items-center gap-2">
              <CodeIcon className="size-5 text-primary" />
              <h2 className="text-xl font-bold tracking-tight">Skills</h2>
            </div>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2 transition-all hover:ring-primary/30 hover:border-primary/30">
                  {skill.icon && <skill.icon className="size-4 rounded overflow-hidden object-contain" />}
                  <span className="text-foreground text-sm font-medium">{skill.name}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className="scroll-mt-20">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex items-center gap-2 mb-6">
            <RocketIcon className="size-5 text-primary" />
            <h2 className="text-xl font-bold tracking-tight">Featured Projects</h2>
          </div>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="hackathons" className="scroll-mt-20">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex items-center gap-2 mb-6">
            <TrophyIcon className="size-5 text-primary" />
            <h2 className="text-xl font-bold tracking-tight">Hackathons</h2>
          </div>
          <HackathonsSection />
        </BlurFade>
      </section>
      <section id="contact" className="scroll-mt-20 pb-20">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="flex items-center gap-2 mb-6">
            <MailIcon className="size-5 text-primary" />
            <h2 className="text-xl font-bold tracking-tight">Get in Touch</h2>
          </div>
          <ContactSection />
        </BlurFade>
      </section>

    </main>
  );
}
