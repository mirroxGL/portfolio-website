import "./Contact.css"
import { MdOutlineMail } from "react-icons/md"
import { SiMessenger } from "react-icons/si"
import { FaTelegram } from "react-icons/fa"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

const SERVICE_ID = "service_n3eeb6y"
const TEMPLATE_ID = "template_bcf65np"
const PUBLIC_KEY = "rfjosD3pisb5NcoGn"

const Contact = () => {

   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
         .then((result) => {
            console.log(result.text);
         }, (error) => {
            console.log(error.text);
         });
      e.target.reset()
   };
   return (
      <section id="contact">
         <h5>Get In Touch</h5>
         <h2>Contact Me</h2>
         <div className="container contact__container">
            <div className="contact__options">
               <article className="contact__option">
                  <MdOutlineMail className='contact__option-icon' />
                  <h4>Email</h4>
                  <h5>zomkovolodymyr@gmail.com</h5>
                  <a target="_blank" href="mailto:zomkovolodymyr@gmail.com">Send a message</a>
               </article>
               <article className="contact__option">
                  <SiMessenger className='contact__option-icon' />
                  <h4>Messenger</h4>
                  <h5>volodymyrzomko</h5>
                  <a target="_blank" href="https://m.me/volodymyrzomko">Send a message</a>
               </article>
               <article className="contact__option">
                  <FaTelegram className='contact__option-icon' />
                  <h4>Telegram</h4>
                  <h5>+48884702273</h5>
                  <a target="_blank" href="https://t.me/zomko_v">Send a message</a>
               </article>
            </div>
            {/* END OF CONTACT OPTIONS */}
            <form ref={form} onSubmit={sendEmail} action="">
               <input name='name' type="text" placeholder='Your Full Name' required />
               <input name='email' type="text" placeholder='Your Email' required />
               <textarea name="message" placeholder="Your Message" rows="7" required ></textarea>
               <button type='submit' className='btn btn-primary' >Send Message</button>
            </form>
         </div>
      </section>
   )
}

export default Contact