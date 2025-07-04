import React from 'react';

const ExperienceCard = ({ experience, index }) => {
  return (
    <div className="relative mb-8 last:mb-0">
      {/* Timeline dot for larger screens */}
      <div className="hidden md:block absolute left-0 top-6">
        <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg"></div>
      </div>
      
      {/* Experience card */}
      <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 md:ml-8 hover:border-purple-500/50 transition-colors duration-300">
        {/* Date badge */}
        <div className="inline-block mb-3">
          <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
            {experience.date}
          </span>
        </div>
        
        {/* Title and company */}
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
            {experience.title}
          </h3>
          <p className="text-neutral-400 text-lg">
            {experience.job}
          </p>
        </div>
        
        {/* Content */}
        <div className="space-y-3">
          {experience.contents.map((content, contentIndex) => (
            <p key={contentIndex} className="text-neutral-300 leading-relaxed">
              • {content}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceList = ({ data }) => {
  return (
    <div className="c-space section-spacing">
      <h2 id="work-title" className="text-heading mb-12">My Work Experience</h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Main timeline line for larger screens */}
          <div className="hidden md:block absolute left-2 top-0 bottom-0 w-0.5 bg-neutral-600"></div>
          
          {/* Experience cards */}
          {data.map((experience, index) => (
            <ExperienceCard 
              key={index} 
              experience={experience} 
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceList; 