import React from 'react'
import "./Experience.css"
import { BsFillPatchCheckFill } from "react-icons/bs"

const Experience = () => {
   return (
      <section id="experience">
         <h5>What Skills I Have</h5>
         <h2>My Experience</h2>
         <div className="container experience__container">
            <div className="experience__frontend">
               <h3>Front-end Development</h3>
               <div className="experience__content">
                  <article className='experience__details'>
                     <BsFillPatchCheckFill className='experience__details-icon' />
                     <div>
                        <h4>HTML</h4>
                        <small className='text-light'>Experienced</small>
                     </div>

                  </article>
                  <article className='experience__details'>
                     <BsFillPatchCheckFill className='experience__details-icon' />
                     <div>                     <h4>CSS</h4>
                        <small className='text-light'>Experienced</small></div>

                  </article>
                  <article className='experience__details'>
                     <BsFillPatchCheckFill className='experience__details-icon' />
                     <div>                     <h4>JavaScript</h4>
                        <small className='text-light'>Intermediate</small></div>

                  </article>
                  <article className='experience__details'>
                     <BsFillPatchCheckFill className='experience__details-icon' />
                     <div>                     <h4>React JS</h4>
                        <small className='text-light'>Intermediate</small></div>

                  </article>
               </div>
            </div>

            {/* END OF FRONTEND */}


            <div className="experience__backend">
               <h3>Back-end Development</h3>
               <div className="experience__content">
                  <article className='experience__details'>
                     <BsFillPatchCheckFill className='experience__details-icon' />
                     <div>                     <h4>MySQL</h4>
                        <small className='text-light'>Basic</small></div>

                  </article>
                  <article className='experience__details'>
                     <BsFillPatchCheckFill className='experience__details-icon' />
                     <div>                     <h4>Python/Django</h4>
                        <small className='text-light'>Basic</small></div>

                  </article>
                  <article className='experience__details'>
                     <BsFillPatchCheckFill className='experience__details-icon' />
                     <div>                  <h4>Node</h4>
                        <small className='text-light'>Basic</small></div>

                  </article>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Experience