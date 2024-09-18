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
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  projet,
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
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend/Frontend Developer",
    icon: backend,
  },
  {
    title: "SEO Google",
    icon: creator,
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
    {
    name: "MongoDB",
    icon: mongodb,
  },

   {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "TypeScript",
    icon: typescript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
 

  
   {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Mobile Developer",
    company_name: "GM-SOFT",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2024 - June 2024",
    points: [
      "Developing and maintaining mobile applications using  Laravel REST APIs and Flutter other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "ELECTROSALAM",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2023 - June 2023",
    points: [
      "Developing and maintaining web applications using laravel and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "PHP Developer",
    company_name: "N'CIRI RENTAL CAR ",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2022 - June 2022",
    points: [
      "Developing and maintaining web applications using PHP, HTML,CSS,JQUERY,BOOSTRAP and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "boostrap",
        color: "pink-text-gradient",
      },
    ],
    image: projet,
    source_code_link: "https://github.com/AnassxD",
  },
  {
    name: "Tour Agency",
    description:
      "Development of a complete mobile application for an e-commerce and delivery platform, utilizing Laravel REST APIs and Flutter with Firebase.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Flutter",
        color: "pink-text-gradient",
      },
    ],
    image: projet,
    source_code_link: "https://github.com/AnassxD",
  },
  {
    name: "E-commerce",
    description:
      "Development of a complete e-commerce website featuring a user-friendly interface, secure payment , product management, shopping cart functionality, and customer order tracking.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: projet,
    source_code_link: "https://github.com/AnassxD",
  },
];

export { services, technologies, experiences, testimonials, projects };
