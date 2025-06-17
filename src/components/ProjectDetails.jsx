import { motion } from "framer-motion"
import ImageGallery from "./ImageGallery"

// Image imports
import closeIcon from '/assets/close.svg'
import arrowUpIcon from '/assets/arrow-up.svg'

const ProjectDetails = ({title, description, subDescription, images, tags, href, closeModal}) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm'>
        <motion.div 
        className='relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10'
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        >
            <button className='absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 z-10'>
                <img onClick={closeModal} src={closeIcon} className='w-6 h-6'></img>
            </button>

            <ImageGallery images={images} title={title} />

            <div className='p-5'>
                <h5 className='mb-2 text-2xl font-bold text-white'>{title}</h5>
                <p className='mb-3  text-white'>{description}</p>
                {subDescription.map((subDesc, index) => (
                  <p key={index} className='mb-3 font-normal text-neutral-400'>{subDesc}</p>
                ))}

                <div className='flex items-center justify-between mt-4 '>
                  <div className='flex  gap-3'>
                    {tags.map((tag) => (
                      <img key={tag.id} src={tag.path} alt={tag.name} className='rounded-lg size-10 hover-animation'></img>
                    ))}
                  </div>
                  <a className='inline-flex items-center gap-1 font-medium cursor-pointer hover-animation'>
                    View Project
                    <img src={arrowUpIcon} className='size-4' href={href}></img>
                  </a>




                </div>



            </div>
        </motion.div>
    </div>
  )
}

export default ProjectDetails