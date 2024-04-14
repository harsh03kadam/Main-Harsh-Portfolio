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
import Next from '../assets/tech/next.png'
import strapi from '../assets/tech/strapi.png'
import Flipr from '../assets/company/flipr.jpeg'
import Rudraksha from '../assets/company/Rudraksha.jpeg'
import Project1 from '../assets/Projact/Projact 1.png'
import Project2 from '../assets/Projact/Projact 2.png'
import Project3 from '../assets/Projact/Projact 3.png'
import Project4 from '../assets/Projact/Projact 4.png'


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
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI-UX Developer",
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
    name: "Next JS",
    icon: Next,
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
    name: "Strapi",
    icon: strapi,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    title: "Full stack Developer Intern ",
    company_name: "Flipr",
    icon: Flipr ,
    iconBg: "#383E56",
    date: "August 2023 -  September 2023",
    points: [
      "Built an Ai Sass imaginify full stack web app used Clerk and deployed on Vercel. I was the top performer in the program..",
      "ReactJS",
      "Redux",
      "NodeJs",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
      "Clerk",
      "React,Hooks",
      "MongoDB",
    ],
  },
  {
    title: "Fronte Developer Intern",
    company_name: "Rudraksha Welffare Foundation",
    icon: Rudraksha,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Oct 2023",
    points: [
      "Built Admin Dhasbord - Soical-media App, with MVVM Architecture using React.js and  integrating Firebase SDK. Created One to One video call integration with Socket.IO and Firebase cloud functions and integrated with Retrofit. Created Low Level Design and converted Figma design to  code",
      "JavaScript",
      "React.js",
      "Bootstrap",
      "Material UI",
      "Node Js",
      "Firebase",
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
    name: "Zoom to Doom",
    description:
      " New Meeting: Quickly start a new meeting, configuring camera and microphone settings before joining",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Clerk",
        color: "green-text-gradient",
      },
      {
        name: "getstream",
        color: "pink-text-gradient",
      },
      {
        name: "Shadcn",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind.css",
        color: "pink-text-gradient",
      },
     
     
    ],
    image: Project1,
    source_code_link: "https://github.com/harsh03kadam/zoom-clone",
    link_code_link: "https://zoom-clone-seven-rho.vercel.app/",
  },
  {
    name: "Ai-Sass-Imaginify",
    description:
      "  Authentication and Authorization: Secure user access with registration, login, and route protection.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Clerk",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "Shadcn",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind.css",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "blue-text-gradient",
      },
     
     
    ],
    image: Project2,
    source_code_link: "https://github.com/harsh03kadam/Ai-Sass-Imaginify",
    link_code_link: "https://imaginify-new.vercel.app/",
  },
  {
    name: "Snapgram",
    description:
      "Detailed Post Page: A detailed post page displaying content and related posts for an immersive user experience",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "React Query",
        color: "blue-text-gradient",
      },
      {
        name: "Appwrite",
        color: "green-text-gradient",
      },
      {
        name: "Shadcn",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind.css",
        color: "pink-text-gradient",
      },
     
     
    ],
    image: Project3,
    source_code_link: "https://github.com/harsh03kadam/Snapgram-Social-Media-web-app",
    link_code_link: "https://snapgram-sand.vercel.app/",
  },
  {
    name: "Hotel-management web App",
    description:
      " - Hotel Room Management CRUD with Sanity.IO - Hotel Room Review - Room Booking - Checkout with Stripe - Stripe webhook - Light / Dark Mode with React Context",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Sanity.IO ",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe ",
        color: "green-text-gradient",
      },
      {
        name: "Axios",
        color: "pink-text-gradient",
      },
  
      {
        name: "Tailwind.css",
        color: "pink-text-gradient",
      },
     
     
    ],
    image: Project4,
    source_code_link: "https://github.com/harsh03kadam/zoom-clone",
    link_code_link: "https://zoom-clone-seven-rho.vercel.app/",
  },
 

  
];

export { services, technologies, experiences, testimonials, projects };
