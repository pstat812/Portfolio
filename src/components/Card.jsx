import React from 'react'
import {motion} from 'motion/react'


const Card = ({text, style, containerRef}) => {
  return (
      <motion.div 
       className='absolute px-1 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-lg lg:text-xl text-center rounded-full ring
       ring-gray-700 font-extralight bg-storm w-[6rem] sm:w-[8rem] md:w-[10rem] lg:w-[12rem] cursor-grab' 
       style={style}
       whileHover = {{scale: 1.1}}
       drag
       dragConstraints={containerRef}
       dragElastic={1.5}
       > 
       
       {text}

      </motion.div>

  )
}

export default Card