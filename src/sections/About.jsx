import React from 'react'
import Card from '@/components/Card';   
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Camera, Gamepad2, Music, BookOpen, Plane, Code, Coffee, Mountain } from 'lucide-react';
import {Framework} from '@/components/Framework';

// Image imports
import codingPovImage from '/assets/coding-pov.png'

const About = () => {
  const grid2container = useRef();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const getRandomStyle = () => {
    // Check if it's mobile screen (approximate)
    const isMobile = window.innerWidth < 640; // sm breakpoint in Tailwind
    const isTablet = window.innerWidth < 1024; // lg breakpoint in Tailwind
    
    return {
      rotate: `${Math.random() * 20 - 10}deg`, // Random rotation between -10 and 10 degrees
      top: `${Math.random() * (isMobile ? 60 : 75)}%`, // Smaller range for mobile
      left: `${Math.random() * (isMobile ? 35 : isTablet ? 45 : 55) + (isMobile ? 15 : 10)}%` // Adjusted for different screen sizes
    }
  }

  const hobbies = [
    
    { icon: Music, name: "Music", color: "#4ECDC4", description: "Cantonese Pop" },
    { icon: Gamepad2, name: "Gaming", color: "#45B7D1", description: "Strategy Games" },
    { icon: Code, name: "Coding", color: "#45B7D1", description: "Latest Tech" },
    { icon: Plane, name: "Travel", color: "#87CEEB", description: "Everywhere" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const bubbleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
    hover: {
      y: -5,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 300
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className='c-space section-spacing'>
        <h2 id="about-title" className="text-heading">About Me</h2>
       
        <motion.div ref={sectionRef}
         id="about" 
         className='grid grid-cols-1 md:grid-cols-6 gap-4 md:auto-rows-[22rem] mt-12'
         initial={{ opacity: 0 }}
         animate={{ opacity: isInView ? 1 : 0 }}
         transition={{ duration: 2.5 }}>
              {/* Grid 1 */}
              <div className="flex items-end grid-default-color grid-1">
          <img
            src={codingPovImage}
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Tat</p>
            <p className="subtext">
              Over the past two years, I've developed my full-stack development skills. I'm passionate about creating
              innovative software and web applications using cutting-edge technologies.
            </p>
            
           
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 " />
        </div>

            {/* grid 2 - Interactive Font Demo */}

            <div className='grid-default-color grid-2 relative'>
                <div ref={grid2container} className='flex items-center justify-center w-full h-full'>
               <Card text="Web dev" style={getRandomStyle()} containerRef={grid2container} />
               <Card text="Game dev" style={getRandomStyle()} containerRef={grid2container}/>
               <Card text="Mobile dev" style={getRandomStyle()} containerRef={grid2container}/>
               <Card text="IoT" style={getRandomStyle()} containerRef={grid2container}/>
               <Card text="Machine Learning" style={getRandomStyle()} containerRef={grid2container}/>
               <Card text="LLM" style={getRandomStyle()} containerRef={grid2container}/>
               <Card text="STEM Edu" style={getRandomStyle()} containerRef={grid2container}/>
               <Card text="Drag me" style={{ color: 'orange' }} containerRef={grid2container}/>
               </div>
            </div>

  

            {/* grid 4 - Interactive Hobbies Section */}
            <div className='grid-default-color grid-4 relative overflow-hidden'>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20 rounded-xl"></div>
              <motion.div 
                className="relative z-10 p-3 pt-2 sm:p-4 sm:pt-2 h-full flex flex-col"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 flex-1 min-h-0">
                  {hobbies.map((hobby, index) => {
                    const IconComponent = hobby.icon;
                    return (
                      <motion.div
                        key={hobby.name}
                        className="relative group cursor-pointer h-full"
                        variants={bubbleVariants}
                        whileHover="hover"
                        initial="hidden"
                        animate="visible"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {/* Static background bubble */}
                        <div
                          className="absolute inset-0 rounded-lg sm:rounded-xl opacity-20"
                          style={{ backgroundColor: hobby.color }}
                        />
                        
                        {/* Main hobby card */}
                        <motion.div
                          className="relative z-10 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 h-full flex flex-col items-center justify-center border border-white/20 hover:border-white/40 transition-colors min-h-[85px] sm:min-h-[95px] lg:min-h-[105px]"
                          style={{
                            boxShadow: `0 0 10px ${hobby.color}20`
                          }}
                        >
                          <motion.div
                            variants={iconVariants}
                            className="mb-1 sm:mb-2 flex-shrink-0"
                          >
                            <IconComponent 
                              size={20}
                              className="sm:w-6 sm:h-6 lg:w-7 lg:h-7"
                              style={{ color: hobby.color }}
                            />
                          </motion.div>
                          
                          <motion.h4 
                            className="text-white text-xs sm:text-sm font-semibold text-center mb-1 flex-shrink-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                          >
                            {hobby.name}
                          </motion.h4>
                          
                          <motion.p 
                            className="text-gray-300 text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block"
                          >
                            {hobby.description}
                          </motion.p>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* grid 5 */}
            <div className='grid-default-color grid-5'>
                <div className='z-10 w-[50%] sm:w-[45%] md:w-[50%]'>
                    <p className='headtext'> Tech Stack</p>
                    <p className='subtext'>Here's my core technology stack that I've mastered through hands-on experience and continuous learning</p>
                </div>
                <div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[45%] sm:start-[50%] md:scale-125 scale-90 sm:scale-100'>

                    <Framework />

                </div>

            </div>
          
        </motion.div>
 
    </section>
    
  )
}

export default About