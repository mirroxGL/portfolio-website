import React from 'react'
import "./About.css"
import ME from "./../../assets/images/AboutMe.jpg"
import { BsAward } from "react-icons/bs"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
   return (
      <section id="about">
         <h5>Get To Know</h5>
         <h2>About Me</h2>

         <div className="container about__container">
            <div className="about__me">
               <div className="about__me-image">
                  <img src={ME} alt="About Image" />
               </div>
            </div>
            <div className="about__content">
               <div className="about__cards">
                  <article className='about__card'>
                     <BsAward className='about__icon' />
                     <h5>Experience</h5>
                     <small>5 Months of Freelancing</small>
                  </article>
                  <article className='about__card'>
                     <FiUsers className='about__icon' />
                     <h5>Clients</h5>
                     <small>20+ Worldwide</small>
                  </article>
                  <article className='about__card'>
                     <VscFolderLibrary className='about__icon' />
                     <h5>Projects</h5>
                     <small>15+ Completed</small>
                  </article>
               </div>
               <p>1+ years experienced Front-end Web Developer with hands-on experience in identifying web-based user interactions along with designing & implementing highly responsive user interface components by deploying React concepts. Proficient in translating designs & wireframes into high-quality code, and writing application interface code via Javascript and ReactJS workflows. Adept at monitoring & maintaining frontend performance and troubleshooting & debugging the same to bolster overall performance.</p>
               <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>

         </div>
      </section>
   )
}

export default About