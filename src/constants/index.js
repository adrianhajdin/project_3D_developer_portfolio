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
  meta,
  starbucks,
  tesla,
  tourism,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  expressjs,
  sql,
  bootstrap,
  react_js,
  node_js,
  mongo_db,
  sql_,
  justfit,
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
    title: "React JS Developer",
    icon: react_js,
  },
  {
    title: "Node JS Developer",
    icon: node_js,
  },
  {
    title: "Mongo DB",
    icon: mongo_db,
  },
  {
    title: "SQL",
    icon: sql_,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Co-Founder",
    company_name: "Chiang Klang Tourism Community Enterprise",
    // icon:tourism,
    iconBg: "#383E56",
    date: "Dec 2021 - present",
    points: [
      "Developed and executed a comprehensive marketing strategy that significantly increased tourism to the Chiang Klang Community-based Tourism enterprise during the high season This resulted in daily revenues of over 100,000 baht and a 10-15% increase in sales for partners.",
      "Managed the financial recording and accounting of the company's revenue, expenses, and transactions.",
      "Monitored to ensure that business partners comply with legal regulations, which allows the business to operate in good governance and ethical way.",
    ],
  },
  {
    title: "Barista",
    company_name: "Khum Setthi coffee shop",
    // icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Jan 2023",
    points: [
      "Managed inventory levels effectively, reducing waste by 50% and increasing profitability by ฿40,000 per month.",
      "Developed and executed a new training program for incoming employees, resulting in a 90% increase in customer satisfaction scores.",
    ],
  },
  {
    title: "Accountant (Part-time) ",
    company_name: "BSK Power Engineering Ltd., Part.",
    // icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2022 - Jul 2022",
    points: [
      "Streamlined data entry processes by implementing automation tools, resulting in a 50% reduction in errors and saving 10 hours of manual work per week.",
      "Improved attendance tracking system by introducing biometric scanning technology, reducing the margin of error to less than 1% and on payroll discrepancies.",
      "Analyzed weekly expense reports to identify cost-saving opportunities, leading to a 15% reduction in operational expenses.",
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
    name: "JustFit",
    description:
      "An activity-tracking web application targeting working women seeking improved health that integrates features of activity tracking, goal setting, exercise videos, and healthy menus for an optimal user experience.",
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
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: justfit,
    source_code_link_github: "https://github.com/",
    source_code_link_demo: "https://justfit-d2-sbg9.vercel.app/",
  },
  // {
  //   name: "",
  //   description:
  //     "",
  //   tags: [
  //     {
  //       name: "",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: ,
  //   source_code_link_github: "",
  //   source_code_link_demo: "",
  // },
];

export { services, technologies, experiences, testimonials, projects };
