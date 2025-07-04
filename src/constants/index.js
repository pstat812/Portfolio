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
import FPS1 from '/assets/projects/FPS_Game/FPS1.png'
import FPS2 from '/assets/projects/FPS_Game/FPS2.png'
import FPS3 from '/assets/projects/FPS_Game/FPS3.png'
import FPS4 from '/assets/projects/FPS_Game/FPS4.png'
import FPS5 from '/assets/projects/FPS_Game/FPS5.png'
import Tetris1 from '/assets/projects/Tetris/Tetris1.png'
import Tetris2 from '/assets/projects/Tetris/Tetris2.png'
import Tetris3 from '/assets/projects/Tetris/Tetris3.png'
import Tetris4 from '/assets/projects/Tetris/Tetris4.png'
import Tetris5 from '/assets/projects/Tetris/Tetris5.png'
import LES1 from '/assets/projects/Lesion/LES1.png'
import LES2 from '/assets/projects/Lesion/LES2.png'
import LES3 from '/assets/projects/Lesion/LES3.png'
import LES4 from '/assets/projects/Lesion/LES4.png'
import LES5 from '/assets/projects/Lesion/LES5.png'


// Social icons
import whatsappIcon from '/assets/socials/whatsApp.svg'
import linkedinIcon from '/assets/socials/linkedIn.svg'
import instagramIcon from '/assets/socials/instagram.svg'
import githubIcon from '/assets/socials/github-white.svg'


export const myProjects = [
  {
    id: 1,
    title: "AI-Powered English Education Application",
    description:
      "React native application designed to boost students' English proficiency through AI-powered learning tools and interactive features using advanced LLM technologies.",
    subDescription: [
      "The AI-Powered English Education Application is a comprehensive React Native application designed for English language learners. All features and functions are ALL integrated with LLM (Large Language Models) to provide intelligent, personalized learning experiences. The app leverages advanced AI technologies including OpenAI GPT-4, Microsoft Cognitive Services, and other LLM providers to deliver real-time language assistance, adaptive learning content, and interactive practice sessions tailored to each user's CEFR proficiency level.",
    ],
    href: "https://github.com/pstat812/AI-Powered-English-Education-Application",
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
      },
      {
        id: 2,
        name: "OpenAI",
      },
      {
        id: 3,
        name: "Azure AI",
      },
      {
        id: 4,
        name: "LLM",
      },
    ],
  },
  {
    id: 2,
    title: "Skin Lesion Analysis Tool",
    description:
      "The Skin Lesion Analysis Tool is a React Native application powered by machine learning for automated mole classification and skin lesion analysis.",
    subDescription: [
      "The app uses self-trained machine learning models to provide users with immediate feedback on potential skin concerns. It features binary classification and OpenAI GPT-4 for detailed evaluation of ABCD criteria, all wrapped in a modern, user-friendly interface with comprehensive history tracking."
  
    ],
    href: "https://github.com/pstat812/Skin-Lesion-Analysis-Tool",
    logo: "",
    images: [
      LES1,
      LES2,
      LES3,
      LES4,
      LES5,
    ],
    tags: [
      {
        id: 1,
        name: "React Native",
      },
      {
        id: 2,
        name: "LLM",
      },
      {
        id: 3,
        name: "Machine Learning",
      },
 
    ],
  },
  {
    id: 3,
    title: "Tetris Game",
    description:
      "A Tetris game made under .NET and C#.",
    subDescription: [
      "The Project is a Tetris game made with .NET WPF using C# as the main language. ",
      "The game is a exact copy of the original Tetris game, with an local two player battle mode. It is made using OOP Design Patterns and Behavioral Patterns. ",
    ],
    href: "https://github.com/pstat812/2Player_Tetris",
    logo: "",
    images: [
      Tetris1,
      Tetris2,
      Tetris3,
      Tetris4,
      Tetris5,
    ],
    tags: [
      {
        id: 1,
        name: ".NET",
      },
      {
        id: 2,
        name: "WPF",
      },
      {
        id: 3,
        name: "C#",
      },
      {
        id: 4,
        name: "Object Oriented Programming",
      },
    ],
  },
  {
    id: 4,
    title: "First Person Shooter Game",
    description:
      "An FPS game made with Unity Engine and assets from Unity Asset Store.",
    subDescription: [
      "The Project is an FPS game made with Unity Engine using C# script. ",
      "In the game, you would become an agent and try to rescue a hostage who trapped in an enemy factory, you need to tackle the enemy who block your road and find the hostage.",
    ],
    href: "https://github.com/pstat812/FPS-Game-in-Unity",
    logo: "",
    images: [
      FPS1,
      FPS2,
      FPS3,
      FPS4,
      FPS5,
    ],
    tags: [
      {
        id: 1,
        name: "Unity",
      },
      {
        id: 2,
        name: "C#",
      },
      {
        id: 3,
        name: "Game Development",
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
    title: "Looking for a job",
    job: "🫡 ",
    date: "Present",
    contents: [
      "I am currently looking for a job as a software developer. However,I am open to all opportunities and willing to relocate to anywhere.",
      "I am a quick learner, always able to learn new things to immediately apply them to my work.",
    
    ],
  },
];
