import React, { useState } from 'react'
import {motion} from 'motion/react'

// Image imports
import closeIcon from '/assets/close.svg'
import menuIcon from '/assets/menu.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Custom smooth scroll function with 1-second duration
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // Custom 1-second scroll using CSS scroll-behavior and JS
      const startPosition = window.pageYOffset;
      const targetPosition = targetElement.offsetTop - 80; // Offset for fixed navbar
      const distance = targetPosition - startPosition;
      const duration = 1000; // 1 second
      
      let start = null;
      
      function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }
      
      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
      
      requestAnimationFrame(animation);
    }
    
    // Close mobile menu after clicking
    setIsOpen(false);
  }

  return <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
             <div className="mx-auto c-space max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:py-0">
                    <a href="/"
                       className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"                      
                    >Tat</a>
                        <button onClick={() => setIsOpen(!isOpen)}
                            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden">

                        <img src={isOpen ? closeIcon : menuIcon} className="w-6 h-6" alt="toggle" />
                        
                        </button>

                    <nav className="hidden sm:flex">
                        <Navigation handleSmoothScroll={handleSmoothScroll}/>
                    </nav>
                </div>
            </div> 


            {isOpen && (
                <motion.div className="block overflow-hidden text-center sm:hidden" 
                initial={{opacity:0, x:-100}} 
                animate={{opacity:1, x:0}} 
                style={{maxHeight: "100vh"}}
                transition={{duration:1.5}}>

                    <nav className = "pb-5">
                        <Navigation handleSmoothScroll={handleSmoothScroll}/>
                    </nav>

                </motion.div>
            )}


        </div>
}

function Navigation({ handleSmoothScroll }){
     return (
<ul className='nav-ul'>
    <li className='nav-li'>
        <a className='nav-link' href="#hero" onClick={(e) => handleSmoothScroll(e, 'hero')}>Home</a>
    </li>
    <li className='nav-li'>
        <a className='nav-link' href="#about-title" onClick={(e) => handleSmoothScroll(e, 'about-title')}>About</a>
    </li>
    <li className='nav-li'>
        <a className='nav-link' href="#work-title" onClick={(e) => handleSmoothScroll(e, 'work-title')}>Work</a>
    </li>
    <li className='nav-li'>
        <a className='nav-link' href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a>
    </li>


</ul>
     )
}

export default Navbar