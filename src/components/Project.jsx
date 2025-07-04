import React from 'react'
import ProjectDetails from './ProjectDetails'
import { useState } from 'react'
const Project = ({title, description, subDescription, href, images, tags, setPreview}) => {

  const [isHidden, setIsHidden] = useState(false)
  return (
     <section>
     <div className='flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0' 
       onMouseEnter={() => setPreview(images?.[0])} 
       onMouseLeave={() => setPreview(null)}
      >
        <div>
            <p className='text-2xl'>{title}</p>
            <div className='flex gap-5 mt-2 text-sand'>
            {tags.map((tag) => (
                <span key={tag.id}>{tag.name}</span>
             ))}
        </div>
      </div>

      
       <button onClick={() => setIsHidden(true)} className='flex items-center gap-1 cursor-pointer hover-animation'>
        Read More
        <img scr="assets/arrow-right.svg" className='w-5'></img>

       </button>
     </div>

     <div className='separator-line'/>
     {isHidden && (<ProjectDetails title={title} description={description} subDescription={subDescription} images={images} href={href} closeModal={() => setIsHidden(false)} />)}

    </section>
  )
}

export default Project