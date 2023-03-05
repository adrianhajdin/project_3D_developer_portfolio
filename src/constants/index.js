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

export const navLinks = [{
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

const services = [{
        title: "Python Developer",
        icon: backend,
    },
    {
        title: "Angular Developer",
        icon: web,
    },
    {
        title: "Java Developer",
        icon: backend,
    },
    {
        title: "Kubernetes Enthusiast",
        icon: creator,
    },
];

const technologies = [{
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

const experiences = [{
        title: "Associate Technical Consultant",
        company_name: "Quality and Food Safety Consultants",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2015 - Feb 2016",
        points: [
            "Ownership of all technical requirements of the organization",
            "Collaborating with the team including designers, product manager, and food safety experts to create a high-quality document management system.",
            "Implementing responsive design and ensuring cross-browser compatibility using HTML, CSS, Javascript, jQuery, Bootstrap and PHP.",
            "Developing, testing, deploying and maintaining of features",
        ],
    },
    {
        title: "Senior Software Engineer",
        company_name: "Siemens",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Feb 2016 - Jan 2020",
        points: [
            "Developing and maintaining web applications using Angular, Python, Java and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, architects and other developers to create high-quality products.",
            "Implementing APIs for the front-end to consume.",
            "Write business logic for the products involved.",
            "Mentor new members in the team.",
            "Scrum master",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "21 North Europ Assistance",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2020 - Sep 2020",
        points: [
            "Developing and maintaining web applications using Angular, Python and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Scrum Master",
            "Migrate legacy code written in PHP and Perl to equivalent Python implementations."
        ],
    },
    {
        title: "Senior Software Engineer",
        company_name: "Cisco",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Sep 2020 - Present",
        points: [
            "Developing and maintaining web applications using Angular, Java and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Subject matter expert on a few topics.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [{
        testimonial: "Mayank is an extremely creative and innovative software developer with expertise in Python, Java development , who’s also best in guiding his junior employees",
        name: "Pradeep G N",
        designation: "SDET 3",
        company: "GE",
        image: "https://media.licdn.com/dms/image/C5603AQGLHdsKVcBxdg/profile-displayphoto-shrink_800_800/0/1622108930822?e=1683158400&v=beta&t=obxternSkbCDvm2l9nt_UsAKJDOmsMcOyBCoBrSnd4I",
    },
    {
        testimonial: "Mayank is great at his logical skills, which makes him naturally good at coding. I have known him doing well with Java and Python, and he loves playing around with Data Structures and Algorithms.",
        name: "Aiman Jalil",
        designation: "Specialist",
        company: "Bosch Global Software Technologies",
        image: "https://media.licdn.com/dms/image/D5603AQGg30krYb22Kw/profile-displayphoto-shrink_800_800/0/1669899187329?e=1683158400&v=beta&t=1Y_NQE9ZmMURtP1dcpGLUj8wcaX1BNEuZ6PVZ7wk7Jc",
    },
    {
        testimonial: "Professionally, Mayank's skills in Java and Python have been forged to be his strongest skillsets. He is a good problem solver with equal expertise in both the languages and some of their well-known frameworks.",
        name: "Kunal Karmakar",
        designation: "Software Engineer 2",
        company: "Microsoft",
        image: "https://media.licdn.com/dms/image/C5603AQE802-_RuYSDw/profile-displayphoto-shrink_800_800/0/1598882242496?e=1683158400&v=beta&t=yO_o3sh_4a5XGoynE7PZi5VBT3KkDnuV-5WUiEcOHwU",
    },
];

const projects = [{
        name: "Food Pro Docs",
        description: "Web-based platform that allows users to manage food safety licensing related documents. Has basic version control, user management and authorization implemented.",
        tags: [{
                name: "PHP",
                color: "blue-text-gradient",
            },
            {
                name: "MySQL",
                color: "green-text-gradient",
            },
            {
                name: "Laravel",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Asana to Excel",
        description: "Web-based in-house tool that helps users fetch project progress from Asana in spreadsheets ",
        tags: [{
                name: "PHP",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "OAuth 2.0",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Hardware Management Tool",
        description: "A web-based in-house solution that lets team members block harware for themselves such that other team members are denied access to the booked hardwares ensuring uninterrupted execution of GUI test automation scripts",
        tags: [{
                name: "Flask",
                color: "blue-text-gradient",
            },
            {
                name: "Python",
                color: "green-text-gradient",
            },
            {
                name: "Angular",
                color: "red-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
    {
        name: "Real Time Locating System",
        description: "A web-based in-house solution that lets team members block harware for themselves such that other team members are denied access to the booked hardwares ensuring uninterrupted execution of GUI test automation scripts",
        tags: [{
                name: "Java",
                color: "blue-text-gradient",
            },
            {
                name: "Springboot",
                color: "green-text-gradient",
            },
            {
                name: "Angular",
                color: "red-text-gradient",
            },
            {
                name: "PostgreSQL",
                color: "blue-text-gradient"
            },
            {
                name: "Docker",
                color: "blue-text-gradient"
            },
            {
                name: "Kubernetes",
                color: "green-text-gradient"
            }
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
    {
        name: "21North Ambassador",
        description: "A platform enabling vehicle service centres to facilitate vehicle pick-up and drop. It consists of a web-application which is accessed by service centre employees and a mobile app that is used by people (called ambassadors) who pickup from and drop vehicles to customer locations.",
        tags: [{
                name: "Flask",
                color: "blue-text-gradient",
            },
            {
                name: "Python",
                color: "green-text-gradient",
            },
            {
                name: "Angular",
                color: "red-text-gradient",
            },
            {
                name: "Amazon Web Services",
                color: "yellow-text-gradient"
            }
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
    {
        name: "Crosswork",
        description: "A web-based platform that helps in network management and administration. It consists of modules installing which enable various functionalities. I have contributed to the development of multiple modules.",
        tags: [{
                name: "Java",
                color: "blue-text-gradient",
            },
            {
                name: "Springboot",
                color: "green-text-gradient",
            },
            {
                name: "Angular",
                color: "red-text-gradient",
            },
            {
                name: "Jenkins",
                color: "blue-text-gradient"
            },
            {
                name: "Kubernetes",
                color: "green-text-gradient"
            },
            {
                name: "AG Grid",
                color: "red-text-gradient"
            },
            {
                name: "Kafka",
                color: "blue-text-gradient"
            }
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export {
    services,
    technologies,
    experiences,
    testimonials,
    projects
};