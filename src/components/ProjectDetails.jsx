import { motion } from "framer-motion"
import ImageGallery from "./ImageGallery"

// Image imports
import closeIcon from '/assets/close.svg'
import arrowUpIcon from '/assets/arrow-up.svg'

const ProjectDetails = ({title, description, subDescription, images, href, closeModal}) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 sm:p-6 md:p-8 overflow-auto bg-black/50 backdrop-blur-sm'>
        <motion.div 
        className='relative w-full max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-2xl max-h-[85vh] border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 overflow-hidden'
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        >
            <button className='absolute p-2 rounded-sm top-3 right-3 sm:top-5 sm:right-5 bg-midnight hover:bg-gray-500 z-20 border border-white/20'>
                <img onClick={closeModal} src={closeIcon} className='w-4 h-4 sm:w-6 sm:h-6'></img>
            </button>

            <div className='overflow-y-auto max-h-[85vh]'>
                <ImageGallery images={images} title={title} />

                <div className='p-4 sm:p-5'>
                    <h5 className='mb-2 text-lg sm:text-xl md:text-2xl font-bold text-white pr-8'>{title}</h5>
                    <p className='mb-3 text-sm sm:text-base text-white'>{description}</p>
                    {subDescription.map((subDesc, index) => (
                      <p key={index} className='mb-3 text-xs sm:text-sm font-normal text-neutral-400'>{subDesc}</p>
                    ))}

                    <div className='flex items-center justify-end mt-4'>
                      <a href={href} target="_blank" rel="noopener noreferrer" className='inline-flex items-center gap-1 text-sm sm:text-base font-medium cursor-pointer hover-animation'>
                        View Project
                        <img src={arrowUpIcon} className='w-3 h-3 sm:size-4'></img>
                      </a>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default ProjectDetails