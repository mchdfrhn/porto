"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Cloud, Container, Settings, GitBranch, Server, Database } from "lucide-react";
import { AnimatedText } from "@/components/animated-text";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Motion } from "@/components/motion";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  const [imageError, setImageError] = useState(false);

  return (
    <TooltipProvider>
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-900/20" />
        <div className="container px-4 md:px-6 py-10 md:py-24 mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-4"
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Mochamad Farhan Ali
                </h1>
                <h2 className="text-xl font-medium text-muted-foreground sm:text-2xl">
                  DevOps | WebDev
                </h2>
                <p className="text-xl text-primary sm:text-2xl">
                  <AnimatedText
                    words={[
                      "AWS Solutions Architect",
                      "Full-Stack Web Developer",
                      "Infrastructure as Code",
                      "CI/CD Pipeline Designer",
                      "Cloud Automation Engineer",
                    ]}
                  />
                </p>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Developing and deploying scalable, reliable, and secure web applications through expertise in cloud architecture, containerization, and continuous delivery.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/projects">
                    Explore My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <div className="flex items-center gap-4">
                  <Button asChild size="icon" variant="outline">
                    <Link href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button asChild size="icon" variant="outline">
                    <Link href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </Motion>
            <Motion
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center relative"
            >
              <div className="relative">
                {/* Profile Photo */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-br from-blue-400 to-blue-600 shadow-2xl">
                  {!imageError ? (
                    <img
                      src="/images/profile.jpg"
                      alt="Mochammad Farhan Ali - DevOps Engineer"
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                      onLoad={() => setImageError(false)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-6xl font-bold">
                      FA
                    </div>
                  )}
                </div>

                {/* Tech Stack Floating Icons */}
                <div className="absolute inset-0">
                  {/* AWS Cloud */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Motion
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          y: [0, -8, 0], 
                          scale: 1
                        }}
                        transition={{ 
                          opacity: { duration: 0.6, delay: 0.8 },
                          scale: { duration: 0.5, delay: 0.8 },
                          y: { 
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: 1
                          }
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          y: -5,
                          transition: { duration: 0.3 }
                        }}
                        className="absolute -top-8 -left-8 bg-gradient-to-br from-blue-400/90 to-blue-600/90 text-white p-3 rounded-2xl shadow-xl hover:shadow-blue-500/30 backdrop-blur-md border border-blue-300/30 cursor-pointer group"
                      >
                        <Cloud className="w-6 h-6 group-hover:drop-shadow-lg transition-all duration-300" />
                      </Motion>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Amazon Web Services</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* Docker Container */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Motion
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          y: [0, 6, 0], 
                          scale: 1
                        }}
                        transition={{ 
                          opacity: { duration: 0.6, delay: 1.0 },
                          scale: { duration: 0.5, delay: 1.0 },
                          y: { 
                            duration: 3.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: 1.2
                          }
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          y: 3,
                          transition: { duration: 0.3 }
                        }}
                        className="absolute top-10 -right-10 bg-gradient-to-br from-cyan-400/90 to-cyan-600/90 text-white p-3 rounded-2xl shadow-xl hover:shadow-cyan-500/30 backdrop-blur-md border border-cyan-300/30 cursor-pointer group"
                      >
                        <Container className="w-6 h-6 group-hover:drop-shadow-lg transition-all duration-300" />
                      </Motion>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Docker Containers</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* Kubernetes */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Motion
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          y: [0, -5, 0], 
                          scale: 1
                        }}
                        transition={{ 
                          opacity: { duration: 0.6, delay: 1.2 },
                          scale: { duration: 0.5, delay: 1.2 },
                          y: { 
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: 1.4
                          }
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          y: -8,
                          transition: { duration: 0.3 }
                        }}
                        className="absolute -bottom-12 -left-12 bg-gradient-to-br from-indigo-500/90 to-indigo-700/90 text-white p-3 rounded-2xl shadow-xl hover:shadow-indigo-600/30 backdrop-blur-md border border-indigo-400/30 cursor-pointer group"
                      >
                        <Server className="w-6 h-6 group-hover:drop-shadow-lg transition-all duration-300" />
                      </Motion>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Kubernetes Orchestration</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* Infrastructure */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Motion
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          y: [0, 7, 0], 
                          scale: 1
                        }}
                        transition={{ 
                          opacity: { duration: 0.6, delay: 1.4 },
                          scale: { duration: 0.5, delay: 1.4 },
                          y: { 
                            duration: 3.2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: 1.6
                          }
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          y: 5,
                          transition: { duration: 0.3 }
                        }}
                        className="absolute -bottom-2 -right-8 bg-gradient-to-br from-violet-500/90 to-violet-700/90 text-white p-3 rounded-2xl shadow-xl hover:shadow-violet-500/30 backdrop-blur-md border border-violet-400/30 cursor-pointer group"
                      >
                        <Settings className="w-6 h-6 group-hover:drop-shadow-lg transition-all duration-300" />
                      </Motion>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Infrastructure as Code</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* Git CI/CD */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Motion
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          y: [0, -6, 0], 
                          scale: 1
                        }}
                        transition={{ 
                          opacity: { duration: 0.6, delay: 1.6 },
                          scale: { duration: 0.5, delay: 1.6 },
                          y: { 
                            duration: 3.8,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: 1.8
                          }
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          y: -4,
                          transition: { duration: 0.3 }
                        }}
                        className="absolute top-1/2 -translate-y-1/2 -left-16 bg-gradient-to-br from-slate-600/90 to-slate-800/90 text-white p-3 rounded-2xl shadow-xl hover:shadow-slate-700/30 backdrop-blur-md border border-slate-500/30 cursor-pointer group"
                      >
                        <GitBranch className="w-6 h-6 group-hover:drop-shadow-lg transition-all duration-300" />
                      </Motion>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Git & CI/CD Pipelines</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* Database */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Motion
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          y: [0, 4, 0], 
                          scale: 1
                        }}
                        transition={{ 
                          opacity: { duration: 0.6, delay: 1.8 },
                          scale: { duration: 0.5, delay: 1.8 },
                          y: { 
                            duration: 3.6,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: 2.0
                          }
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          y: 2,
                          transition: { duration: 0.3 }
                        }}
                        className="absolute top-1/2 -translate-y-1/2 -right-16 bg-gradient-to-br from-emerald-500/90 to-emerald-700/90 text-white p-3 rounded-2xl shadow-xl hover:shadow-emerald-500/30 backdrop-blur-md border border-emerald-400/30 cursor-pointer group"
                      >
                        <Database className="w-6 h-6 group-hover:drop-shadow-lg transition-all duration-300" />
                      </Motion>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Database & Monitoring</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </Motion>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Cloud Infrastructure</h3>
              <p className="text-muted-foreground">
                Designing and implementing secure, scalable, and cost-effective cloud solutions on AWS, Azure, and GCP, optimizing them for modern web applications and services.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Full-Stack Web Development</h3>
              <p className="text-muted-foreground">
                Developing and implementing interactive web applications using modern frontend and backend technologies to deliver seamless user experiences and powerful functionalities.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">CI/CD Pipelines</h3>
              <p className="text-muted-foreground">
                Building automated delivery pipelines using GitLab CI, Jenkins, and GitHub Actions to ensure rapid and reliable deployment of web features and updates.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Containerization</h3>
              <p className="text-muted-foreground">
                Implementing containerized applications and orchestration solutions with Docker and Kubernetes, enhancing the scalability and portability of web services and microfrontends.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Infrastructure as Code</h3>
              <p className="text-muted-foreground">
                Automating infrastructure provisioning and management using Terraform, CloudFormation, and Ansible to create consistent, repeatable environments for web development, testing, and production.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Monitoring & Observability</h3>
              <p className="text-muted-foreground">
                Setting up comprehensive monitoring solutions with Prometheus, Grafana, and ELK stack to ensure the reliability, performance, and user experience of deployed web applications.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </TooltipProvider>
  );
}