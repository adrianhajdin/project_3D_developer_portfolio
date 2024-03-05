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
  warhammer,
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
    title: "Video Game Developer",
    icon: mobile,
  },
  {
    title: "Java/python/C#",
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
    title: "Gameplay Designer",
    company_name: "Gamification Project",
    icon: starbucks,
    iconBg: "#FCE44D",
    date: "December 2023 - Current",
    points: [
      "Developing a gamification project under the Comp Sci. Department head using TypeScript, Remix JS framework, and Unity with WebGL. ",
      "Aimed at enhancing the learning experience of Data Structures and Algorithms (DSA) for new students by gamifying the experience. Responsible for the Unity and game development side of the project.",
      "Responsible for developing the videogame side of the project using unity and integratign it with remix using WebGL",
    ],
  },
  {
    title: "Collegia Assitant",
    company_name: "UBC",
    icon: starbucks,
    iconBg: "#FCE44D",
    date: "Nov 2023 - Current",
    points: [
      "Responsible for managing a space for commuter students to relax.",
      "Resposible for organizing events for student in the space",
      "Made the space more known and inclusive for everyone.",
    ],
  },
  {
    title: "CSL Leader",
    company_name: "UBC",
    icon: starbucks,
    iconBg: "#FCE44D",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Wow, this is pretty cool.",
    name: "Mrunal",
    designation: "A friend",
    company: " sarab",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Dayum bro, nice job",
    name: "Arhaan",
    designation: "A friend",
    company: "sarab",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "This website looks amazing, but wait this is not my photo",
    name: "Puneet",
    designation: "Elder sister",
    company: "sarab",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Gamification project",
    description:
      "A remix based web application that is aimed at gamifying the experience of learning data structures. Makes use of remix, unity, prima, tailwind etc",
    tags: [
      {
        name: "remix/react",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Battlebee12",
  },
  {
    name: "Eventify",
    description:
      "An event ticketing management platform similar to tiketmaster that makes use of react, css and django. In Progress.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fruit Smasher",
    description:
      "A simple functional unity game, where you collect fruits as and increase your score",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      
    ],
    image: carrent,
    source_code_link: "https://battlebee12.itch.io/fruit-catcher",
  },
  {
    name: "WarHammer",
    description:
      "Developed a Bot using Python and Reddit API to fetch any media from Reddit based on input.Working to turn memes from Reddit into videos using MoviePy and uploading to YouTube using Python ",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "RedditAPI",
        color: "green-text-gradient",
      },
      {
        name: "MoviePy",
        color: "pink-text-gradient",
      },
      
    ],
    image: warhammer,
    source_code_link: "https://github.com/",
  },
  
  
];

export { services, technologies, experiences, testimonials, projects };
