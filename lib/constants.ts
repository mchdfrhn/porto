export const SITE_NAME = "Mochamad Farhan Ali";
export const SITE_URL = "https://www.mochamadfarhanali.my.id/";
export const SITE_DESCRIPTION = "DevOps Engineer specializing in cloud infrastructure, CI/CD pipelines, and automation solutions.";
export const SOCIAL_LINKS = {
  github: "https://github.com/mchdfrhn",
  linkedin: "https://www.linkedin.com/in/mchdfrhn/",
};

export const NAVIGATION_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const SKILLS = {
  devOps: [
    { name: "Docker", level: 75 },
    { name: "Kubernetes", level: 70 },
    { name: "Jenkins", level: 75 },
    { name: "GitLab CI", level: 65 },
    { name: "GitHub Actions", level: 70 },
    { name: "Terraform", level: 75 },
    { name: "Ansible", level: 80 },
  ],
  cloud: [
    { name: "AWS", level: 80 },
    { name: "Google Cloud", level: 75 },
    { name: "Azure", level: 65 },
    { name: "DigitalOcean", level: 65 },
  ],
  programming: [
    { name: "Python", level: 75 },
    { name: "JavaScript", level: 80 },
    { name: "Bash", level: 70 },
    { name: "Go", level: 80 },
  ],
  other: [
    { name: "Linux", level: 80 },
    { name: "Networking", level: 70 },
    { name: "Security", level: 65 },
    { name: "Monitoring", level: 75 },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: "Cloud Infrastructure Automation",
    description: "A comprehensive solution for automating AWS infrastructure deployment using Terraform and Ansible.",
    tags: ["AWS", "Terraform", "Ansible", "CI/CD"],
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    category: "Infrastructure",
  },
  {
    id: 2,
    title: "Kubernetes Cluster Management Tool",
    description: "A tool for simplifying Kubernetes cluster management and deployment monitoring across multiple cloud providers.",
    tags: ["Kubernetes", "Go", "Docker", "Prometheus"],
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    category: "Kubernetes",
  },
  {
    id: 3,
    title: "CI/CD Pipeline Orchestrator",
    description: "An orchestration system for managing complex CI/CD pipelines across multiple repositories and environments.",
    tags: ["GitLab CI", "Jenkins", "Python", "Docker"],
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    category: "CI/CD",
  },
  {
    id: 4,
    title: "Infrastructure Monitoring Dashboard",
    description: "A centralized dashboard for monitoring infrastructure health, performance metrics, and alert management.",
    tags: ["Grafana", "Prometheus", "ELK Stack", "AWS"],
    image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    category: "Monitoring",
  },
  {
    id: 5,
    title: "Security Compliance Tool",
    description: "An automated tool for checking security compliance across cloud infrastructure and containerized applications.",
    tags: ["Python", "AWS", "Docker", "Security"],
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    category: "Security",
  },
  {
    id: 6,
    title: "Automated Database Backup System",
    description: "A system for automating database backups, testing, and restoration across multiple environments.",
    tags: ["Python", "PostgreSQL", "AWS S3", "Bash"],
    image: "https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    category: "Database",
  }
];