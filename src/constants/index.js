// Image imports
import engEduE1 from '/assets/projects/Eng_edu/E1.png'
import engEduE2 from '/assets/projects/Eng_edu/E2.png'
import engEduE3 from '/assets/projects/Eng_edu/E3.png'
import engEduE4 from '/assets/projects/Eng_edu/E4.png'
import engEduE5 from '/assets/projects/Eng_edu/E5.png'
import engEduE6 from '/assets/projects/Eng_edu/E6.png'
import engEduE7 from '/assets/projects/Eng_edu/E7.png'
import engEduE8 from '/assets/projects/Eng_edu/E8.png'
import engEduE9 from '/assets/projects/Eng_edu/E9.png'
import engEduE10 from '/assets/projects/Eng_edu/E10.png'
import engEduE11 from '/assets/projects/Eng_edu/E11.png'
import engEduE12 from '/assets/projects/Eng_edu/E12.png'

// Technology logos
import reactLogo from '/assets/logos/react.svg'
import openaiLogo from '/assets/logos/openai3.svg'
import azureLogo from '/assets/logos/azure.svg'
import expoLogo from '/assets/logos/expo.svg'
import nodejsLogo from '/assets/logos/react.svg' // Placeholder - add actual nodejs logo
import mongodbLogo from '/assets/logos/react.svg' // Placeholder - add actual mongodb logo
import tailwindcssLogo from '/assets/logos/tailwindcss.svg'
import vueLogo from '/assets/logos/react.svg' // Placeholder - add actual vue logo
import firebaseLogo from '/assets/logos/react.svg' // Placeholder - add actual firebase logo
import javascriptLogo from '/assets/logos/javascript.svg'
import css3Logo from '/assets/logos/css3.svg'

// Social icons
import whatsappIcon from '/assets/socials/whatsApp.svg'
import linkedinIcon from '/assets/socials/linkedIn.svg'
import instagramIcon from '/assets/socials/instagram.svg'
import githubIcon from '/assets/socials/github-white.svg'

// Placeholder project image
import accessoriesImg from '/assets/logos/react.svg' // Temporary placeholder

export const myProjects = [
  {
    id: 1,
    title: "AI-Powered English Education Application",
    description:
      "React web application designed to boost students' English proficiency through AI-powered learning tools and interactive features using advanced LLM technologies.",
    subDescription: [
      "Built an AI-powered English learning platform with React Native and Expo, integrating multiple LLMs including GPT-4, DeepSeek for providing personalized education.",
      "Developed comprehensive exercises (pronouns, tenses, prepositions, etc), reading comprehension, and interactive storytelling exercise features.",
      "Created AI chatbot with contextual conversation practice, grammar correction with visual highlighting, and intelligent dialogue completion exercises for speaking practice.",
      "Built handwriting recognition system using computer vision APIs to analyze and transcribe handwritten text with AI-powered content analysis and feedback.",
      "Implemented bidirectional translation engine (English-Chinese) with voice input/output, synonyms/antonyms finder, and vocabulary expansion tools for comprehensive language learning.",
      "Integrated advanced speech technologies with Microsoft Azure Speech Services for real-time pronunciation feedback, speech-to-text conversion, and natural text-to-speech capabilities.",
    ],
    href: "",
    logo: "",
    images: [
      engEduE1,
      engEduE2,
      engEduE3,
      engEduE4,
      engEduE5,
      engEduE6,
      engEduE7,
      engEduE8,
      engEduE9,
      engEduE10,
      engEduE11,
      engEduE12,
    ],
    tags: [
      {
        id: 1,
        name: "React Native",
        path: reactLogo,
      },
      {
        id: 2,
        name: "OpenAI",
        path: openaiLogo,
      },
      {
        id: 3,
        name: "Azure AI",
        path: azureLogo,
      },
      {
        id: 4,
        name: "TypeScript",
        path: expoLogo,
      },
    ],
  },
  {
    id: 2,
    title: "First Person Shooter Game",
    description:
      "A full-stack e-commerce platform with modern design and comprehensive features for online retail.",
    subDescription: [
      "Developed a responsive e-commerce platform using React and Node.js for optimal performance.",
      "Implemented secure payment processing with Stripe integration and user authentication.",
      "Created an admin dashboard for inventory management and order tracking.",
      "Optimized for mobile devices with progressive web app capabilities.",
    ],
    href: "",
    logo: "",
    images: [
      accessoriesImg,
      accessoriesImg,
      accessoriesImg
    ],
    tags: [
      {
        id: 1,
        name: "React",
        path: reactLogo,
      },
      {
        id: 2,
        name: "Node.js",
        path: nodejsLogo,
      },
      {
        id: 3,
        name: "MongoDB",
        path: mongodbLogo,
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: tailwindcssLogo,
      },
    ],
  },
  {
    id: 3,
    title: "Tetris Game",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    subDescription: [
      "Built with Vue.js and Firebase for real-time synchronization across devices.",
      "Implemented drag-and-drop functionality for intuitive task organization.",
      "Added team collaboration features with role-based permissions.",
      "Integrated push notifications and email reminders for task deadlines.",
    ],
    href: "",
    logo: "",
    images: [
      accessoriesImg,
      accessoriesImg
    ],
    tags: [
      {
        id: 1,
        name: "Vue.js",
        path: vueLogo,
      },
      {
        id: 2,
        name: "Firebase",
        path: firebaseLogo,
      },
      {
        id: 3,
        name: "JavaScript",
        path: javascriptLogo,
      },
      {
        id: 4,
        name: "CSS3",
        path: css3Logo,
      },
    ],
  },
  {
    id: 4,
    title: "First Person Shooter Game",
    description:
      "A full-stack e-commerce platform with modern design and comprehensive features for online retail.",
    subDescription: [
      "Developed a responsive e-commerce platform using React and Node.js for optimal performance.",
      "Implemented secure payment processing with Stripe integration and user authentication.",
      "Created an admin dashboard for inventory management and order tracking.",
      "Optimized for mobile devices with progressive web app capabilities.",
    ],
    href: "",
    logo: "",
    images: [
      accessoriesImg,
      accessoriesImg,
      accessoriesImg
    ],
    tags: [
      {
        id: 1,
        name: "React",
        path: reactLogo,
      },
      {
        id: 2,
        name: "Node.js",
        path: nodejsLogo,
      },
      {
        id: 3,
        name: "MongoDB",
        path: mongodbLogo,
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: tailwindcssLogo,
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/85255437031",
    icon: whatsappIcon,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/sing-tat-poon-b90b32205/",
    icon: linkedinIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ptat0528/",
    icon: instagramIcon,
  },
  {
    name: "Github",
    href: "https://github.com/pstat812",
    icon: githubIcon,
  },
];

export const experiences = [
  {
    title: "Software Engineer Intern",
    job: "Fortune Information Technology Ltd, Hong Kong",
    date: "2024 June - August",
    contents: [
      "Engineered responsive web dashboards using Vue.js for enhanced user experience and interface design.",
      "Optimized IoT device performance through Python programming, improving system efficiency and reliability.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions within project timelines.",
      "Gained hands-on experience in modern web development frameworks and IoT technologies.",
    ],
  },
  {
    title: "STEM Educational Technology Developer",
    job: "Enjoyneer Education Limited, Hong Kong", 
    date: "2023 Mar - Present",
    contents: [
      "Created STEM learning materials and educational software to enhance student engagement and learning outcomes.",
      "Developed interactive educational tools and applications for various STEM subjects.",
      "Collaborated with educators to design curriculum-aligned digital learning resources.",
      "Implemented innovative technology solutions to improve educational delivery and accessibility.",
    ],
  },
  {
    title: "Freelance Software Developer",
    job: "Self-Employed",
    date: "Present",
    contents: [
      "Currently working as a freelance software developer, providing custom software solutions to clients.",
      "Specializing in web development, mobile applications, and software engineering projects.",
      "Utilizing modern technologies including React, Vue.js, Python, and various frameworks to deliver high-quality solutions.",
      "Building and maintaining client relationships while continuously expanding technical expertise.",
    ],
  },
];
