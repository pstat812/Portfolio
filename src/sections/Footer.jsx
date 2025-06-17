import { mySocials } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 pb-3 text-sm
    text-neutral-400 c-space">

        <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full"/>

          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-3">
              {mySocials.map((social,index) => (
                <a href={social.href} key={index}>
                  <img src={social.icon} className="w-5 h-5" alt={social.name}/>
                </a>
              ))}
            </div>
            
            <p>Last Updated: 2025-06-11</p>
            
            <p>2025 David Poon All Rights Reserved</p>
          </div>
    </section>
  )
}

export default Footer