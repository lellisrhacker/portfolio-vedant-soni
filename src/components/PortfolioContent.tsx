"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CinematicSection } from "@/components/cinematic-section";
import TextType from '@/components/react-bits/typetext';
import { PortableText } from "@portabletext/react";
import { portableTextToPlainText } from "@/lib/utils"; // Yahan import kar liya
import Link from "next/link";
import { motion } from "framer-motion";

const BLUR_FADE_DELAY = 0.04;

export default function PortfolioContent({ 
  author, 
  work, 
  education, 
  projects 
}: any) {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-24 mt-32 pb-20 px-6 lg:px-20 max-w-[1400px] mx-auto relative z-10">
      
      {/* Hero Section */}
      <section id="hero" className="w-full">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 flex-1 text-center md:text-left"
          >
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-6xl font-extrabold tracking-tighter sm:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500"
              text={`Hi, I'm ${author.name?.split(" ")[0] ?? ""}`}
            />

            <div className="space-y-4">
              <TextType
                text={[
                  "> DevOps Engineer & Cloud Architect",
                  "> Passionate about Blockchain and data science",
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-2xl md:text-4xl font-mono text-blue-400"
              />

              <BlurFadeText
                className="max-w-[800px] text-muted-foreground text-xl md:text-2xl leading-relaxed"
                delay={BLUR_FADE_DELAY * 2}
                text={portableTextToPlainText(author.description!)}
              />
            </div>
          </motion.div>

          <BlurFade delay={BLUR_FADE_DELAY}>
            <motion.div whileHover={{ scale: 1.05, rotate: 2 }} className="relative group">
              <div className="absolute -inset-1 bg-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <Avatar className="size-48 md:size-64 border-2 border-white/10 relative shadow-2xl">
                <AvatarImage
                  alt={author.name ?? ""}
                  src={author.avatar?.asset?.url ?? ""}
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl">{author.initials}</AvatarFallback>
              </Avatar>
            </motion.div>
          </BlurFade>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-3xl font-bold mb-6 border-b w-fit pr-10 pb-2 italic text-blue-400">About</h2>
          <div className="prose max-w-5xl text-xl md:text-2xl text-muted-foreground dark:prose-invert leading-relaxed">
            <PortableText value={author.summary ?? []} />
          </div>
        </BlurFade>
      </section>

      {/* Work & Education */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
        <div id="work" className="flex flex-col gap-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-3xl font-bold border-b w-fit pr-10 pb-2 italic text-blue-400">Work Experience</h2>
          </BlurFade>
          <div className="flex flex-col gap-y-6">
            {work.map((item: any, id: number) => (
              <BlurFade key={item._id} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                <motion.div whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                    <ResumeCard
                        logoUrl={item.logo?.asset?.url ?? ""}
                        altText={item.company ?? ""}
                        title={item.company ?? ""}
                        subtitle={item.title ?? ""}
                        href={item.url ?? ""}
                        period={`${item.startDate} - ${item.endDate ?? "Present"}`}
                        description={portableTextToPlainText(item.description!)}
                    />
                </motion.div>
              </BlurFade>
            ))}
          </div>
        </div>

        <div id="education" className="flex flex-col gap-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-3xl font-bold border-b w-fit pr-10 pb-2 italic text-blue-400">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-y-6">
            {education.map((item: any, id: number) => (
              <BlurFade key={item._id} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                <motion.div whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                    <ResumeCard
                        href={item.url ?? ""}
                        logoUrl={item.logo?.asset?.url ?? ""}
                        altText={item.school ?? ""}
                        title={item.school ?? ""}
                        subtitle={item.degree ?? ""}
                        period={`${item.startDate} - ${item.endDate}`}
                    />
                </motion.div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="w-full">
        <div className="flex min-h-0 flex-col gap-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-4xl font-bold italic tracking-tight">Skills & Domains</h2>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(author.skills || {}).map(([category, skillList]: any, idx) => (
              <BlurFade key={category} delay={BLUR_FADE_DELAY * 10 + idx * 0.05}>
                <motion.div whileHover={{ y: -10 }} className="p-8 rounded-2xl border bg-white/5 backdrop-blur-md border-white/10 hover:border-blue-500/50 transition-all">
                  <h3 className="text-xl font-bold mb-6 text-blue-400 uppercase tracking-widest">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill: string) => (
                      <Badge key={skill} variant="secondary" className="px-4 py-1.5 text-sm hover:bg-blue-500 hover:text-white transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <CinematicSection />

      {/* Projects */}
      <section id="projects" className="w-full py-12">
        <div className="space-y-16 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-7xl italic">Check out my latest work</h2>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: any, id: number) => (
              <BlurFade key={project._id} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <motion.div whileHover={{ y: -10 }}>
                    <ProjectCard
                        title={project.title ?? ""}
                        description={project.description ?? []}
                        tags={project.technologies ?? []}
                        image={project.image?.asset?.url ?? ""}
                        video={project.video ?? ""}
                        links={project.links ?? []}
                        href={project.links?.[0]?.url ?? ""}
                        className="h-full border border-white/10"
                    />
                </motion.div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="w-full">
        <div className="flex flex-col gap-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-3xl font-bold border-b w-fit pr-10 pb-2 italic text-blue-400">Certifications</h2>
          </BlurFade>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <motion.div whileHover={{ scale: 1.05 }} className="group p-6 rounded-2xl border bg-white/5 backdrop-blur-md border-white/10 hover:border-orange-500/50 transition-all shadow-lg hover:shadow-orange-500/10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-orange-400"> AWS Cloud Practitioner Essentials Certification</h3>
                  <Badge variant="outline" className="text-xs">2026</Badge>
                </div>
                <p className="text-muted-foreground mb-6">Amazon Web Services (AWS) at Coursera</p>
                <Link href="YOUR_DRIVE_LINK" target="_blank" className="text-sm font-medium text-orange-500 hover:underline">Verify Credential ↗</Link>
              </motion.div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <motion.div whileHover={{ scale: 1.05 }} className="group p-6 rounded-2xl border bg-white/5 backdrop-blur-md border-white/10 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-blue-400">Google Data Analytics Professional Certification</h3>
                  <Badge variant="outline" className="text-xs">2026</Badge>
                </div>
                <p className="text-muted-foreground mb-6">Google Data Analytics at Coursera</p>
                <Link href="YOUR_DRIVE_LINK" target="_blank" className="text-sm font-medium text-blue-500 hover:underline">Verify Credential ↗</Link>
                </motion.div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <motion.div whileHover={{ scale: 1.05 }} className="group p-6 rounded-2xl border bg-white/5 backdrop-blur-md border-white/10 hover:border-orange-500/50 transition-all shadow-lg hover:shadow-orange-500/10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-orange-400"> All Certifications in One Google Drive</h3>
                  <Badge variant="outline" className="text-xs">2026</Badge>
                </div>
                <p className="text-muted-foreground mb-6">Here You can see almost Every Certification of mine</p>
                <Link href="https://drive.google.com/drive/folders/1e6qlBg6reyOL3SMC-Rsg9AePv5DgjQh0?usp=drive_link" target="_blank" className="text-sm font-medium text-orange-500 hover:underline">Drive link ↗</Link>
              </motion.div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Hackathons Section - With Pulsing Dots */}
      <section id="hackathons" className="w-full">
        <div className="flex flex-col gap-y-10">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <h2 className="text-3xl font-bold border-b w-fit pr-10 pb-2 italic text-blue-400">Hackathons & Achievements</h2>
          </BlurFade>
          
          <div className="grid grid-cols-1 gap-4">
            {/* SIH */}
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <motion.div whileHover={{ x: 5 }} className="relative pl-10 border-l-2 border-blue-500/20 py-8 group hover:bg-white/[0.02] transition-all rounded-r-2xl">
                <div className="absolute -left-[9px] top-10 size-4 rounded-full bg-blue-500">
                    <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75"></div>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold italic">Smart India Hackathon (SIH)</h3>
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">College Level</Badge>
                    </div>
                    <p className="text-lg text-blue-400 font-mono">Role: Leader</p>
                  </div>
                  <span className="text-muted-foreground font-mono bg-white/5 px-3 py-1 rounded-md text-sm">September 2025</span>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mt-4 max-w-5xl">Built a scalable disaster management system for Coastal Areas. We named it Samudra X Ocean Sentinel</p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link href="YOUR_DRIVE_LINK_1" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-blue-500/20 transition-all">View Certificate 📜</Link>
                  <Link href="https://github.com/lellisrhacker/samudra-sentinel-hub-25" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-green-500/20 transition-all">GitHub Repo 💻</Link>
                </div>
              </motion.div>
            </BlurFade>

            {/* UNSTOP 1 */}
            <BlurFade delay={BLUR_FADE_DELAY * 14.5}>
              <motion.div whileHover={{ x: 5 }} className="relative pl-10 border-l-2 border-blue-500/20 py-8 group hover:bg-white/[0.02] transition-all rounded-r-2xl">
                <div className="absolute -left-[9px] top-10 size-4 rounded-full bg-blue-500">
                    <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75"></div>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold italic">Pixel Palettes at UNSTOP</h3>
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Top 50 / Participant</Badge>
                    </div>
                    <p className="text-lg text-blue-400 font-mono">Role: Backend & Blockchain Dev</p>
                  </div>
                  <span className="text-muted-foreground font-mono bg-white/5 px-3 py-1 rounded-md text-sm">July 2023</span>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mt-4 max-w-5xl">Participated in Pixel Palettes at Manipal University, Jaipur, advancing through multiple rounds.</p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link href="https://drive.google.com/drive/folders/10VKG3TzvlhfSlkWMSwRag1-5_AibqChe?usp=drive_link" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-blue-500/20 transition-all">View Certificate 📜</Link>
                </div>
              </motion.div>
            </BlurFade>

            {/* UNSTOP 2 */}
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <motion.div whileHover={{ x: 5 }} className="relative pl-10 border-l-2 border-blue-500/20 py-8 group hover:bg-white/[0.02] transition-all rounded-r-2xl">
                <div className="absolute -left-[9px] top-10 size-4 rounded-full bg-blue-500">
                    <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75"></div>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold italic">Code Clash by Let's Code at UNSTOP</h3>
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Honorable Mention</Badge>
                    </div>
                    <p className="text-lg text-blue-400 font-mono">Role: Participant</p>
                  </div>
                  <span className="text-muted-foreground font-mono bg-white/5 px-3 py-1 rounded-md text-sm">July 2025</span>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mt-4 max-w-5xl">Securing 124th rank in DSA MasterMind – CodeClash, showcasing strong coding skills.</p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link href="https://drive.google.com/file/d/1mZCNC_0EBFhjC93p71g12G1Apb4DsQDC/view?usp=drive_link" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-blue-500/20 transition-all">View Certificate 📜</Link>
                </div>
              </motion.div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Contact Section - OG BACK */}
      <section id="contact" className="w-full py-20">
        <div className="grid items-center justify-center gap-6 px-4 text-center w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-7xl">Get in Touch</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-xl md:text-2xl">
                Feel free to {" "}
                <Link href={`mailto:${author.social?.email ?? "vedantsoni819@gmail.com"}`} className="text-blue-500 hover:underline">email me</Link>{" "}
                or reach out on{" "}
                <Link href={author.social?.github ?? "https://github.com/lellisrhacker"} className="text-blue-500 hover:underline" target="_blank">GitHub</Link>.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      <footer className="pb-12 text-center text-sm text-muted-foreground border-t pt-8">
        <p>© {new Date().getFullYear()} Vedant Soni. Built with Next.js 15 & Tailwind CSS.</p>
      </footer>
    </main>
  )
}