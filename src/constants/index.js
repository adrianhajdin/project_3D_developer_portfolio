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
  aiesec,
  altotech,
  agnos,
  bluebik,
  youtube,
  mix,
  ani,
  peak
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
    title: "Frontend Developer",
    icon: web,
  },

  {
    title: "Backend Developer",
    icon: backend,
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Tech Team Lead",
    company_name: "AIESEC THAILAND",
    icon: aiesec,
    iconBg: "#383E56",
    date: "Feb 2022 - Sep 2022",
    points: [
      "Led a 10-member team, which consists of UI-UX, Front end and Back-end developers",
      "Directed the team to build 4 different pages, Home, Artwork, Voting and Merchandise page",
      "Understood and interpret other team’s requests for each page and suggested the best solution available and took responsibility for implementing the solution.",
      "Oversaw the team with designing and creating a Google Authenticated website for users to submit and vote for artworks which then attained 105 submissions and 257 votes",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Altotech",
    icon: altotech,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Dec 2022",
    points: [
      "Worked with a team consisting of a full stack developer, data scientists, IOT engineers and UI-UX designers",
      "Built responsive pages using Next JS, Typescript and Tailwind CSS on a large-scale project",
      "Learned to create connections for HTTP requests using WebSocket to display data dynamically on the front end",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Bluebik",
    icon: bluebik,
    iconBg: "#383E56",
    date: "Jun 2023 - Jul 2023",
    points: [
      "Created UI by working with creative designers for best user experience with Next JS and Boostrap",
      "Participated in Agile ceremonies, including daily stand-ups, sprint planning, and retrospectives",
      "Integrated all version control work into Gitlab and learned importance of using grpC for building API's      ",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Agnos Health ",
    icon: agnos,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Present",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "",
    name: "Chanawee Janyakhantikul",
    designation: "Software Development Manager",
    company: "AltoTech ",
    image: mix,
  },
  {
    testimonial:
      "",
    name: "Anirudh Makhana",
    designation: "Software Engineer",
    company: "Ex-Line",
    image: ani,
  },
  {
    testimonial:
      "",
    name: "Tanabodee Wanitnunttada",
    designation: "Associate Consultant",
    company: "Bluebik",
    image: peak,
  },
];

const projects = [
  {
    name: "Car Showcase",
    description:
      " Web Application featuring custom filters, combo boxes, and modals for improved user interaction. Integrated advanced search and fetched car details with images from two  APIs",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Faheemlm10/char_showcase",
  },
  {
    name: "Youtube Clone",
    description:
      "Web Application including video sections, custom categories, channel pages, and in-app video playback. Managed data through reusable components, sourcing from API's",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/Faheemlm10/youtube-clone",
  },
  // {
  //   name: "Trip Guide",

  //   description:
  //     "developed a responsive React.js application using Material-UI (version 5), featuring video sections, personalized categories, channel pages, and the ability to play videos directly within the app, all while efficiently managing data with reusable functional components and retrieving information from third-party APIs.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
