import compiler from "../assest/projects/compiler.png";
import garden from "../assest/projects/Garden.png";
import jsmini from "../assest/projects/jsmini.webp";
import random from "../assest/projects/Random.png";
import weather from "../assest/projects/weather.png";
import backend from "../assest/projects/backedn.webp";
import github from "../assest/projects/Github.png";
import chat from "../assest/projects/chat.webp";

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
    title: "TempChat-App",
    description:
      "A real-time chat application developed using React and Socket.io. Users can join chat rooms by entering a room ID and username, providing a seamless and interactive chatting experience.",
    year: "2024",
    tech: ["React", "Socket.io", "Node.js", "CSS"],
    image: chat,

    github: "https://github.com/AnkitPandey001/Chat-App",
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
];
