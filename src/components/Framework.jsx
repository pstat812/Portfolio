import { OrbitingCircles } from "./OrbitingCircles";

// Image imports
import azureLogo from '/assets/logos/azure.svg'
import cplusplusLogo from '/assets/logos/cplusplus.svg'
import csharpLogo from '/assets/logos/csharp.svg'
import css3Logo from '/assets/logos/css3.svg'
import javascriptLogo from '/assets/logos/javascript.svg'
import reactLogo from '/assets/logos/react.svg'
import tailwindcssLogo from '/assets/logos/tailwindcss.svg'
import wordpressLogo from '/assets/logos/wordpress.svg'
import dotnetLogo from '/assets/logos/dotnet.svg'
import html5Logo from '/assets/logos/html5.svg'
import gitLogo from '/assets/logos/git.svg'
import githubLogo from '/assets/logos/github.svg'
import vitejsLogo from '/assets/logos/vitejs.svg'
import visualstudiocodeLogo from '/assets/logos/visualstudiocode.svg'
import threejsLogo from '/assets/logos/threejs.svg'
import microsoftLogo from '/assets/logos/microsoft.svg'

export function Framework() {
  const skills = [
    { name: "azure", url: azureLogo },
    { name: "cplusplus", url: cplusplusLogo },
    { name: "csharp", url: csharpLogo },
    { name: "css3", url: css3Logo },
    { name: "javascript", url: javascriptLogo },
    { name: "react", url: reactLogo },
    { name: "html5", url: html5Logo },
    { name: "tailwindcss", url: tailwindcssLogo },
    { name: "wordpress", url: wordpressLogo },
    { name: "dotnet", url: dotnetLogo },
    { name: "git", url: gitLogo },
    { name: "github", url: githubLogo },
    { name: "vitejs", url: vitejsLogo },
    { name: "vscode", url: visualstudiocodeLogo },
    { name: "threejs", url: threejsLogo },
    { name: "microsoft", url: microsoftLogo },
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      {/* Outer ring - larger radius and icons */}
      <div className="hidden md:block">
        <OrbitingCircles iconSize={40} radius={160} speed={0.75}>
          {skills.map((skill, index) => (
            <Icon 
              key={index} 
              src={skill.url}
              alt={skill.name}
            />
          ))}
        </OrbitingCircles>
      </div>
      <div className="block md:hidden">
        <OrbitingCircles iconSize={25} radius={100} speed={0.75}>
          {skills.map((skill, index) => (
            <Icon 
              key={index} 
              src={skill.url}
              alt={skill.name}
            />
          ))}
        </OrbitingCircles>
      </div>
      
      {/* Inner ring - smaller radius and icons */}
      <div className="hidden md:block">
        <OrbitingCircles iconSize={25} radius={100} reverse speed={0.75}>
          {skills.slice().reverse().map((skill, index) => (
            <Icon 
              key={index} 
              src={skill.url}
              alt={skill.name}
            />
          ))}
        </OrbitingCircles>
      </div>
      <div className="block md:hidden">
        <OrbitingCircles iconSize={18} radius={60} reverse speed={0.75}>
          {skills.slice().reverse().map((skill, index) => (
            <Icon 
              key={index} 
              src={skill.url}
              alt={skill.name}
            />
          ))}
        </OrbitingCircles>
      </div>
    </div>
  );
}

const Icon = ({ src, alt }) => (
  <img 
    src={src} 
    alt={`${alt} logo`}
    className="duration-200 rounded-sm hover:scale-110 w-full h-full object-contain" 
    onError={(e) => {
      console.warn(`Failed to load icon: ${src}`);
      e.target.style.display = 'none';
    }}
    loading="lazy"
  />
);
