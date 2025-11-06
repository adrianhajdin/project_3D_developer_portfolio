import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  python,
  golang,
  rust,
  postgresql,
  archlinux,
  meta,
  starbucks,
  tesla,
  shopify,
  plpsoft,
  carrent,
  jobit,
  tripguide,
  threejs,
  realtimechat,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  { name: "Python", icon: python },
  { name: "Golang", icon: golang },
  { name: "Rust", icon: rust },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Arch Linux", icon: archlinux },
  { name: "git", icon: git },
];

const experiences = [
  {
    title: "IT Intern",
    company_name: "Phuc Lam Phuong Software Technology Co., Ltd",
    icon: plpsoft,
    iconBg: "#383E56",
    date: "03/2025 - 04/2025",
    points: [
      "Contributed to building a platform that helps users analyze documents and manage information.",
      "Collaborated with the team to optimize UI, data processing workflows, and improve user experience.",
      "Practiced teamwork, time management, logical thinking, and problem solving in a real-world environment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Real-time Chat",
    description:
      "Real-time platform supporting video calls, group creation and group chats, file sharing, and a code playground to write and run code directly on my platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
    ],
    image: realtimechat,
    source_code_link: "https://github.com/thienty1207/realtimechat-v3",
  },
];

export { services, technologies, experiences, testimonials, projects };
