import {useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { FlickeringGrid } from "../components/FlickeringGrid";

const Contact = () => {
  const [formData,setFormData] = useState({name:"",email:"",message:""});
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const [isLoading,setIsLoading] = useState(false);
  const [showAlert,setShowAlert] = useState(false);
  const [alertType,setAlertType] = useState("success");
  const [alertMessage,setAlertMessage] = useState("");

  const showAlertMessage = (type,message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    try{
      await emailjs.send('service_q6pcl0q', 'template_xcj5ilc', {from_name: formData.name, to_name: "David", from_email: formData.email, to_email: "a83202159@gmail.com", message: formData.message}, "FLA3qYlTfbRAfVOv7")
      showAlertMessage("success","You message has been sent successfully");
      setFormData({name:"",email:"",message:""});
  } catch (error) {
      console.log(error);
      showAlertMessage("danger","You message failed to send");
  } finally {
      setIsLoading(false);
  }
  }
  return (
    <section id="contact" className="relative flex items-center c-space section-spacing min-h-screen">
        <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#6e43f0"
        maxOpacity={1}
        flickerChance={0.5}
      />
        {showAlert && < Alert type={alertType} text={alertMessage}/>}
        <div className="relative z-10 flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-black/90 backdrop-blur-sm">
         <div className="flex flex-col items-start w-full gap-5 mb-10">
            <h2 className="text-heading">Contact Me</h2>
            <p className="font-normal text-neutral-400">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is open for all.
            </p>
         </div>
         <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-5">
                <label htmlFor="name" className="field-label">Your Name</label>
                <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your name" 
                className="field-input field-input-focus" 
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required/>
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="field-label">Your Email</label>
                <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email" 
                className="field-input field-input-focus" 
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required/>
            </div>

            <div className="mb-5">
                <label htmlFor="message" className="field-label">Your Message</label>
                <textarea 
                id="message" 
                name="message" 
                type="text"
                rows={4}
                placeholder="Your message" 
                className="field-input field-input-focus" 
                autoComplete="off"
                value={formData.message}
                onChange={handleChange}
                required/>
            </div>
            <button 
            type="submit" 
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender/80 to-royal/80 hover-animation"
            >
                {!isLoading ? "Send Message" : "Sending..."}
            
            
            
        
            </button>



         </form>
        </div>
    </section>
  )
}

export default Contact