import React from 'react'
import { motion,useScroll , useSpring, useTransform} from 'motion/react'

// Image imports
import skyImage from '/assets/sky.jpg'
import mountain1Image from '/assets/mountain-1.png'
import mountain2Image from '/assets/mountain-2.png'
import mountain3Image from '/assets/mountain-3.png'
import planetsImage from '/assets/planets.png'

const ParallaxBackground = () => {

  const {scrollYProgress} = useScroll();
  const x = useSpring(scrollYProgress, {damping: 50})
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "90%"])
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "60%"])
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "30%"])
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"])
  const planetsY = useTransform(x, [0, 0.5], ["0%", "20%"])

  return (
    <section className='absolute inset-0 bg-black/40'>
     <div className='relative h-screen overflow-y-hidden'>
        {/* sky background*/}
        <div className='absolute inset-0 w-full h-screen -z-50'
         style={{
            backgroundImage: `url(${skyImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom'
         }}
        />


        {/* mountain-3*/}
        <motion.div className='absolute inset-0 w-full -z-40'
         style={{
            backgroundImage: `url(${mountain3Image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            y: mountain3Y
         }}
        />

        {/* planets*/}
        <motion.div className='absolute inset-0 w-full h-screen -z-30'
         style={{
            backgroundImage: `url(${planetsImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            x: planetsX,
            y: planetsY
         }}
        />       
        
         {/* mountain-2*/}
        <motion.div className='absolute inset-0 w-full h-screen -z-20'
         style={{
            backgroundImage: `url(${mountain2Image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            y: mountain2Y
         }}

        /> {/*mountain-1*/}
        <motion.div className='absolute inset-0 w-full h-screen -z-10'
         style={{
            backgroundImage: `url(${mountain1Image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            y: mountain1Y
         }}
        />



     </div>
    </section>
  )
}

export default ParallaxBackground