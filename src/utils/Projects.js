import compiler from "../assest/projects/compiler.png";
import garden from "../assest/projects/Garden.png";
import jsmini from "../assest/projects/jsmini.webp";
import random from "../assest/projects/Random.png";
import weather from "../assest/projects/weather.png";
import backend from "../assest/projects/backedn.webp";
import github from "../assest/projects/Github.png";
import ecom from '../assest/projects/Ecommerce.png'
import blosg from "../assest/projects/Blogs.png"
export const projects = [
  {
    title: "Mini 10 JS Projects",
    description:
      "A collection of 10 mini JavaScript projects designed to enhance your coding skills. Each project focuses on different aspects of JavaScript, providing hands-on experience and practical knowledge.",
    year: 2024,
    tech: ["JavaScript"],
    image: jsmini,
    github: "https://github.com/AnkitPandey001/Mini-JS-Project-Top-10",
  },

  {
    title: "CodeStream",
    description:
      "Welcome to CodeStream, a powerful and versatile online code editor that supports multiple programming languages. CodeStream allows you to write, test, and run code directly in your browser with a modern and user-friendly interface.",
    year: 2024,
    tech: ["React", "Tailwind CSS", "OpenWeatherAPI"],
    image: compiler,
    liveDemo: "https://online-code-compiler-nine.vercel.app/",
    github: "https://github.com/AnkitPandey001/Online-Code-Compiler",
  },
  {
    title: "Garden Guru",
    description:
      "Garden Guru is a Plant Care App built to assist users in managing and caring for their plants efficiently. The app provides detailed plant information, personalized care suggestions, and a community platform for plant enthusiasts.",
    year: 2024,
    tech: ["React", "Tailwind CSS", "Express.js", "Mongoose", "MongoDB"],
    image: garden,
    liveDemo: "https://garden-guru-fszc.vercel.app/",
    github: "https://github.com/AnkitPandey001/garden-Guru",
  },
  {
    title: "Backend API",
    description:
      "A robust backend API built with Express.js and MongoDB, providing functionalities for blog management, todo tasks, and user authentication with authorization. This API serves as a foundation for full-stack applications requiring secure and scalable backend services.",
    year: 2024,
    tech: ["Express.js", "MongoDB", "Node.js"],
    image: backend,
    github: "https://github.com/AnkitPandey001/backendapi",
  },
  {
    title: "Weather App",
    description:
      "This project is a weather application built using React.js and Tailwind CSS. It allows users to check current weather conditions and forecasts for different locations using data fetched from the OpenWeatherAPI.",
    year: 2023,
    tech: ["React.js", "Tailwind CSS", "OpenWeatherAPI"],
    image: weather,
    liveDemo: "https://weather-api-three-vert.vercel.app/",
    github: "https://github.com/AnkitPandey001/Weather_API",
  },
  {
    title: "Random Password Generator",
    description:
      "A simple and secure random password generator built with React. Users can generate strong passwords with customizable options such as length, inclusion of numbers, symbols, and uppercase letters.",
    year: 2023,
    tech: ["React"],
    image: random,
    liveDemo: "https://ankitpandey001.github.io/Random-Password-Generator/",
    github: "https://github.com/AnkitPandey001/Random-Password-Generator",
  },
  {
    title: "GitHub Profile Viewer",
    description:
      "An application built with React and Tailwind CSS that allows users to view GitHub profiles. It fetches data from the GitHub API to display user information, repositories, and other relevant details in a clean and responsive interface.",
    year: 2023,
    tech: ["React", "Tailwind CSS", "GitHub API"],
    image: github,
    liveDemo:
      "https://66eb2890b95641882d38915f--willowy-rabanadas-b864b4.netlify.app/",
    github: "https://github.com/AnkitPandey001/GitHub-Profile-Explorer-",
  },
  // New Blog App project
  {
    title: "Blog App",
    description:
      "This is a Blog App where users can create, edit, and delete posts. They can follow other users, view their profiles, and explore posts from the community. The app includes features like user authentication, profile customization, and a feed showcasing posts with likes and comments.",
    year: 2024,
    tech: ["React", "Express.js", "MongoDB", "Node.js", "Tailwind CSS"],
    image: blosg, // Replace with actual image when available
    github: "https://github.com/AnkitPandey001/blogs-app-frontend",
    features: [
      "User Authentication: Secure login and signup.",
      "Profile Customization: Users can update their profile pictures, bios, and other details.",
      "Post Management: Create, edit, and delete posts with rich text support.",
      "Community Engagement: Follow and unfollow users to build your network.",
      "Like and comment on posts to interact with the community.",
      "Explore Feed: Browse through posts created by the community.",
      "Responsive Design: Accessible on both mobile and desktop devices.",
    ],
  },
  // New E-commerce App project (ongoing)
  {
    title: "E-commerce App",
    description:
      "An E-commerce platform built with React, Express, and MongoDB, providing a full shopping experience. Users can browse products, add them to their cart, make orders, and manage their accounts. The backend includes features like product management, user authentication, and order handling.",
    year: "2024 [Working / ongoing]",
    tech: ["React", "Express.js", "MongoDB", "Node.js"],
    image: ecom,
    github: "https://github.com/AnkitPandey001/E-commerce-App",
    liveDemo: "working", 
  },
];
