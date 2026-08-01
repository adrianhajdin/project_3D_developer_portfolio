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
  college,
  sevar,
  almalakia,
} from "../assets";
import bootstrap from "../assets/tech/bootstrap.png"
import depi from "../assets/company/depi.png"
import ieee from "../assets/company/ieee.png"
import msp from "../assets/company/msp.png"
import nti from "../assets/company/nti.png"
import fitblended from "../assets/fitblended.png"
import Admin from "../assets/Admin.png"
import Temp from "../assets/Temp.png"
import plants from "../assets/plants.jfif"
import flower from "../assets/flower.png"
import calcReact from "../assets/calcReact.png"
import todo from "../assets/todo.jfif"
import grocery from "../assets/grocery.png"
import ntiCer from "../assets/ntiCer.jpg"
import ieeCer from "../assets/ieeCer.jpg"
import depiTech from "../assets/depiTech.jpg"
import depiE from "../assets/depiE.jpg"
import mlsa from "../assets/mlsa.jpg"
import mspCer from "../assets/mspCer.jpg"


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];



const services = [
  {
    title: "Front-End Development",
    icon: web,
  },
  {
    title: "AI Engineering",
    icon: mobile, 
  },
  {
    title: "Intelligent UI/UX",
    icon: backend, 
  },
  {
    title: "Responsive & Accessible Design",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  
  {
    name: "Node JS",
    icon: nodejs,
  },
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React Frontend Web Developer",
    company_name: "Digital Egypt Pioneers Initiative (DEPI)",
    icon: depi, 
    iconBg: "#FFFFFF",
    date: "June 2025 - Present",
    points: [
      "Deepening expertise in modern web development, emphasizing React while reinforcing core skills in HTML, CSS, JavaScript, and tools like Git/GitHub, NodeJS, and container technologies.",
      "Engaging in a real-world capstone project that showcases the power of full-stack collaboration between React and NodeJS.",
    ],
  },
  {
    title: "Internship Trainee",
    company_name: "National Telecommunication Institute (NTI)",
    icon: nti, 
    iconBg: "#FFFFFF",
    date: "May 2025 - Present",
    points: [
      "Participating in intensive practical training in software development and network fundamentals.",
      "Building hands-on projects with modern web technologies and improving debugging skills.",
    ],
  },
  
  {
    title: "Volunteer",
    company_name: "IEEE Kafrelshiekh Student Branch",
    icon: ieee, 
    iconBg: "#FFFFFF",
    date: "Nov 2024 - Feb 2025",
    points: [
      "Organized and participated in tech workshops and coding events.",
      "Assisted in mentoring junior students in web development basics.",
      "Helped manage event logistics and contributed to community engagement initiatives.",
    ],
  },
  {
    title: "Internship Trainee",
    company_name: "Digital Egypt Pioneers Initiative (DEPI)",
    icon: depi, 
    iconBg: "#FFFFFF",
    date: "June 2024 - Nov 2024",
    points: [
      "Completed a 6-month comprehensive training covering front-end and back-end development.",
      "Built responsive websites and dashboards using modern frameworks.",
      "Developed team projects simulating real-world tech company scenarios.",
    ],
  },
  {
    title: "Volunteer",
    company_name: "Microsoft Student Club - KFS",
    icon: msp, 
    iconBg: "#FFFFFF",
    date: "Feb 2024 - Apr 2024",
    points: [
      "Participated in community events promoting Microsoft technologies.",
      "Assisted peers in using GitHub, Visual Studio Code, and deploying basic apps to Azure.",
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
  name: "Smart Integrated University Portal System",
  description:
    "A modern AI-powered university portal featuring student dashboards, AI chatbot integration, multilingual support (Arabic & English), authentication, academic services, payment management, and a fully responsive user interface built with a scalable component architecture.",
  tags: [
    {
      name: "React",
      color: "blue-text-gradient",
    },
    {
      name: "TypeScript",
      color: "green-text-gradient",
    },
    {
      name: "Vite",
      color: "pink-text-gradient",
    },
    {
      name: "Tailwind CSS",
      color: "blue-text-gradient",
    },
    {
      name: "shadcn/ui",
      color: "green-text-gradient",
    },
    {
      name: "Radix UI",
      color: "pink-text-gradient",
    },
    {
      name: "TanStack Query",
      color: "blue-text-gradient",
    },
    {
      name: "React Router",
      color: "green-text-gradient",
    },
    {
      name: "React Hook Form",
      color: "pink-text-gradient",
    },
    {
      name: "Zod",
      color: "blue-text-gradient",
    },
    {
      name: "Axios",
      color: "green-text-gradient",
    },
    {
      name: "Framer Motion",
      color: "pink-text-gradient",
    },
    {
      name: "i18next",
      color: "blue-text-gradient",
    },
    {
      name: "Recharts",
      color: "green-text-gradient",
    },
  ],
  image: college,
  source_code_link: "https://github.com/Amiirahesham/collegeWebsite",
  live_demo_link:
    "https://college-website-byqqtr2o7-amiiraheshams-projects.vercel.app/",
},
  {
  name: "SÉVAR Luxury Perfume Store",
  description:
    "A premium bilingual perfume e-commerce website designed for SÉVAR, featuring a luxury UI, responsive design, product catalog, dark/light mode, multilingual support (Arabic & English), and a seamless shopping experience with a modern frontend architecture.",
  tags: [
    {
      name: "React",
      color: "blue-text-gradient",
    },
    {
      name: "TypeScript",
      color: "green-text-gradient",
    },
    {
      name: "Vite",
      color: "pink-text-gradient",
    },
    {
      name: "Tailwind CSS",
      color: "blue-text-gradient",
    },
    {
      name: "shadcn/ui",
      color: "green-text-gradient",
    },
    {
      name: "TanStack Query",
      color: "pink-text-gradient",
    },
    {
      name: "React Router",
      color: "blue-text-gradient",
    },
    {
      name: "Framer Motion",
      color: "green-text-gradient",
    },
    {
      name: "i18next",
      color: "pink-text-gradient",
    },
  ],
  image: sevar,
  source_code_link: "https://github.com/Amiirahesham/sevar",
  live_demo_link: "YOUR_DEPLOYMENT_LINK",
},
  {
  name: "Almalakia Pure Life",
  description:
    "A modern and responsive corporate website for Almalakia Pure Life, showcasing the company's premium bottled water products with a clean user interface, intuitive navigation, and an optimized browsing experience across all devices.",
   tags: [
    {
      name: "React",
      color: "blue-text-gradient",
    },
    {
      name: "TypeScript",
      color: "green-text-gradient",
    },
    {
      name: "Vite",
      color: "pink-text-gradient",
    },
    {
      name: "Tailwind CSS",
      color: "blue-text-gradient",
    },
    {
      name: "shadcn/ui",
      color: "green-text-gradient",
    },
    {
      name: "TanStack Query",
      color: "pink-text-gradient",
    },
    {
      name: "React Router",
      color: "blue-text-gradient",
    },
    {
      name: "Framer Motion",
      color: "green-text-gradient",
    },
    {
      name: "i18next",
      color: "pink-text-gradient",
    },
  ],
  image: almalakia,
  source_code_link: "https://github.com/Amiirahesham/almalakia-pure-uae",
  live_demo_link: "https://almalakia.co/home",
},
  {
    name: "Fit U",
    description:
      "Developed a customizable physical therapy website with a smooth, responsive design and a unique color theme switcher for user personalization.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image:fitblended ,
    source_code_link: "https://github.com/Amiirahesham/FitU-withAddedFeatures",
     live_demo_link:"https://amiirahesham.github.io/FitU-withAddedFeatures/"
  },
  {
    name: "Admin Dashboard",
    description:
"A data-driven, clean, fully responsive dashboard with light/dark modes, an intuitive modern UI, and sections for insightful analytics and real-time user activity" ,
   tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: Admin,
    source_code_link: "https://github.com/Amiirahesham/adminDashboard",
         live_demo_link:"https://amiirahesham.github.io/adminDashboard/"

  },
  {
    name: "Plants Store",
    description:
"A fully responsive website for plant shopping, built with HTML, JavaScript, and Tailwind CSS. Includes smooth animations and mobile-first design for enhanced user experience.   "  ,
tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: plants,
    source_code_link: "https://github.com/Amiirahesham/plants_tailwind",
    live_demo_link:"https://amiirahesham.github.io/plants_tailwind/"
  },
  {
    name: "Flowers Store",
    description:
"A responsive e-commerce front-end template for a floral boutique , The design is mobile-first and features a clean product grid, intuitive navigation, and a visually engaging user interface.",
tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: flower,
    source_code_link: "https://github.com/Amiirahesham/Flower-store",
    live_demo_link:"https://amiirahesham.github.io/Flower-store/"
  },
  {
    name: "Calculator React App",
    description:
"A clean and responsive calculator built with React. This app handles all basic arithmetic operations, demonstrating a solid understanding of state management with the useState hook and event handling in a component-based architecture   "  ,
tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: calcReact,
    source_code_link: "https://github.com/Amiirahesham/SimpleCalcUsingReact.JS",
  },
  {
    name: "IOT Dashboard",
    description:
    "A dynamic IoT dashboard that brings real-world sensor data to the web. It provides a live, at-a-glance view of temperature and humidity readings, complete with interactive charts for historical trend analysis. This project showcases the seamless integration of a front-end application with a physical IoT device.",
tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image:Temp,
    source_code_link: "https://github.com/Amiirahesham/temp-humidityDashboard",
    live_demo_link:"https://amiirahesham.github.io/temp-humidityDashboard/"
  },
  
];



const certifications = [
  {
    name: "Machine Learning & AI",
    issuing_organization: "Digital Egypt Pioneers Initiative",
    image:depiTech, // Use the imported image variable
    tags: [
      {
        name: "ML & AI",
        color: "blue-text-gradient",
      },
      
    ],
  },
  {
    name: "Business English ",
    issuing_organization: "Digital Egypt Pioneers Initiative",
    image: depiE, // Use the imported image variable
    tags: [
      {
        name: "English",
        color: "blue-text-gradient",
      },
      
    ],
  },
  {
    name: "Front-End Development",
    issuing_organization: "IEEE-KSB",
    image: ieeCer, // Use the imported image variable
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "git & GitHub",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "Artificial Intelligence",
    issuing_organization: "National Telecommunication Institute (NTI)",
    image: ntiCer, // Use the imported image variable
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "DL",
        color: "green-text-gradient",
      },
      {
        name: "NLP",
        color: "pink-text-gradient",
      },
      {
        name: "CV",
        color: "yellow-text-gradient",
      },
    ],
  },
  {
    name: "computer vesion",
    issuing_organization: "MIcrosoft Learn Student Ambassadors (MLSA)",
    image: mlsa, // Use the imported image variable
    tags: [
      {
        name: "CV",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "MediaPipe",
        color: "pink-text-gradient",
      },
    ],
  },
  
  {
    name: "computer vesion",
    issuing_organization: "MSP - KFS",
    image: mspCer, // Use the imported image variable
    tags: [
      {
        name: "CV",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "MediaPipe",
        color: "pink-text-gradient",
      },
    ],
  },
  
];

export { services, technologies, experiences, testimonials, projects , certifications };
