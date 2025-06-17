import React from 'react'
import { motion } from 'motion/react'
import { FlipWords } from './Flipword'


const HeroText = () => { 
  const words = ['Web', 'Mobile']
  const variants = {
     hidden: {opacity:0, x:-100},
     visible: {opacity:1, x:0},
  }
  return (
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
            {/* desktop view*/}
          <div className="flex-col hidden md:flex c-space"> 

            <motion.h1 className="text-4xl font-medium"   
               variants={variants}
               initial="hidden"
               animate="visible"
               transition={{delay:0.5, duration:1}}>
                Hello, I am Tat</motion.h1>

            <div className='flex flex-col items-start'>
                <motion.p className='text-5xl font-medium text-neutral-300'
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:1.3, duration:1.5}}>
                               Developer  <br/> Dedicated to create</motion.p>
                <motion.div 
                 variants={variants}
                 initial="hidden"
                 animate="visible"
                 transition={{delay:1.6, duration:1}}>

                    <FlipWords words={words} className='font-black text-white text-8xl'/>
                </motion.div>

                <motion.p className="text-4xl font-medium text-neutral-300"
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  transition={{delay:1.9, duration:1.5}}> Web and Mobile Apps </motion.p>   
          

            </div>
          </div>


             {/* mobile view*/}

          <div className='flex flex-col space-y-6 md:hidden'>
            <motion.p className='text-4xl font-medium'
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:0.5, duration:1}}>Hello, I am Tat</motion.p>
            <div>
                <motion.p className='text-5xl font-black text-neutral-300'
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:1.3, duration:1.5}}>Building</motion.p>
                
                <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:1.6, duration:1}}>
                <FlipWords words={words} className='font-bold  text-white text-7xl'/> </motion.div>

                
                <motion.p className='text-4xl font-black text-neutral-300'               variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:1.9, duration:1.5}}>Web application</motion.p> 
            </div>


          </div>
        



        </div>
    
    
  )
}

export default HeroText