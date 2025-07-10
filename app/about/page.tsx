import Image from "next/image";
import Link from "next/link";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SkillCard } from "@/components/skill-card";
import { SKILLS } from "@/lib/constants";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Metadata } from "next";
import { Motion } from "@/components/motion";

export const metadata: Metadata = {
  title: "About",
  description: "Discover Mochammad Farhan Ali: a DevOps Engineer focused on cloud infrastructure and automation, who's also a skilled web developer building applications.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Explore my experience, skills, and expertise in DevOps, cloud technologies, and web development.
            </p>
          </Motion>

          <div className="mt-16 grid gap-12 lg:grid-cols-[400px_1fr] xl:grid-cols-[500px_1fr]">
            <Motion
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-8">
                <div className="relative mx-auto md:mx-0 aspect-square overflow-hidden rounded-2xl bg-muted max-w-md shadow-xl">
                  <Image
                    src="/images/profile.jpg"
                    alt="Mochammad Farhan Ali - DevOps Engineer"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    unoptimized
                    sizes="(max-width: 768px) 400px, 500px"
                  />
                </div>
                <div className="flex justify-center md:justify-start">
                  <Button asChild variant="outline" className="gap-2">
                    <Link href="#" download="farhan-ali-resume.pdf">
                      <FileDown className="h-4 w-4" />
                      Download Resume
                    </Link>
                  </Button>
                </div>
              </div>
            </Motion>

            <Motion
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Personal Introduction</h2>
              <p className="text-muted-foreground">
                Passionate about the full software lifecycle, I'm a DevOps Engineer with over 2 years of experience in cloud infrastructure, CI/CD, automation, containerization, and infrastructure as code. I drive operational efficiency and seamless software delivery. As a seasoned web developer, I bridge the gap between infrastructure and engaging user experiences, ensuring robust, end-to-end solutions.
              </p>
              <p className="text-muted-foreground">
                Proficient across AWS, GCP, and Azure, I focus on building scalable, secure, and highly available cloud systems. My commitment to best practices and staying current in the DevOps landscape directly supports my work as a web developer, enabling me to deliver high-performance and resilient web applications.
              </p>
              <p className="text-muted-foreground">
                Outside of automating infrastructure and optimizing CI/CD pipelines, I channel my energy into web development projects. I'm also committed to giving back, regularly contributing to open-source, sharing knowledge through community engagement, and mentoring the next generation of DevOps and web development talent.
              </p>
            </Motion>
          </div>

          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="mt-20 text-2xl font-bold">Technical Expertise</h2>
            <p className="mt-4 text-muted-foreground">
              Here's an overview of my technical skills and competencies across various domains.
            </p>
          </Motion>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <SkillCard title="DevOps Tools" skills={SKILLS.devOps} />
            <SkillCard title="Cloud Platforms" skills={SKILLS.cloud} />
            <SkillCard title="Programming Languages" skills={SKILLS.programming} />
            <SkillCard title="Additional Skills" skills={SKILLS.other} />
          </div>

          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-20 bg-muted/50 p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold">Professional Philosophy</h2>
            <p className="mt-4 text-muted-foreground">
                I believe in automation, infrastructure as code, and continuous improvement, bringing a full-stack perspective to my work. My approach combines:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground ml-4">
              <li>Collaborative problem-solving with development and operations teams</li>
              <li>Building scalable and resilient infrastructure solutions</li>
              <li>Implementing robust security practices across the technology stack</li>
              <li>Crafting efficient and engaging web applications that leverage optimized infrastructure</li>
              <li>Continuous learning and adaptation to emerging technologies</li>
              <li>Knowledge sharing and documentation to empower team members</li>
            </ul>
          </Motion>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}