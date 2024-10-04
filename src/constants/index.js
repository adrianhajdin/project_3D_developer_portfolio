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
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    title: "Backend Developer",
    company_name: "EFUNDZZ",
    icon: "https://www.efundzz.com/EF_Assets/logo.svg",
    iconBg: "#383E56",
    date: "June 2023 - present",
    points: [
      "Developing and maintaining RESTful web applications using Spring Boot, PostgreSQL, and Docker.",
    "Integrating third-party services, APIs, and databases to enhance product capabilities.",
    "Collaborating with cross-functional teams including designers, product managers, and developers to ensure seamless user experiences.",
    "Ensuring code quality through regular code reviews, automated testing, and adhering to best practices.",
    "Working on cloud deployment and CI/CD pipelines to automate testing and deployment using AWS services.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },

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
      "I've never met a developer who truly cares about their clients' success like narasimhulu does.",
    name: "Eswar Manjunath",
    designation: "CEO",
    company: "Efundzz",
    image: "https://media.licdn.com/dms/image/v2/C5603AQHQM_5LctLMPg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1639997205055?e=1732752000&v=beta&t=I1i5CxvxmjcbMEdXIpugWxwkLRqgT_XZ2sjJl10ZgVw",
  },
  // https://media.licdn.com/dms/image/v2/D4E03AQGbfO2DFzOevw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722206902645?e=1732752000&v=beta&t=nnJijjfgSifs8TveKYbyTJENjxdzeNnxDfA8H4YVacg
  
  {
    testimonial:
      "I thought it was impossible to make a integrations with third parties as fast as our product, but narasimhulu proved me wrong.",
    name: "Harinadh Reddy",
    designation: "Product Owner",
    company: "Efundzz",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGbfO2DFzOevw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722206902645?e=1732752000&v=beta&t=nnJijjfgSifs8TveKYbyTJENjxdzeNnxDfA8H4YVacg",
  },
  {
    testimonial:
      "After narasimhulu optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Bhavani Kommu",
    designation: "Tech Lead",
    company: "Efundzz",
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
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
