import React from 'react'
import "./Testimonials.css"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
   return (
      <section id="testimonials">
         <h5>Review from Clients</h5>
         <h2>Testimonials</h2>
         <Swiper className="container testimonials__container" modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
            <SwiperSlide className='testimonial'>
               <div className="client__avatar">
                  <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />

               </div>
               <h5 className='clients__name'>Ernest Achiever</h5>
               <small className='clients__review'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsam eveniet nulla atque quo officiis, fugit sed facere soluta temporibus.</small>
            </SwiperSlide>
            <SwiperSlide className='testimonial'>
               <div className="client__avatar">
                  <img src="https://bit.ly/dan-abramov" alt="" />

               </div>
               <h5 className='clients__name'>Ernest Achiever</h5>
               <small className='clients__review'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsam eveniet nulla atque quo officiis, fugit sed facere soluta temporibus.</small>
            </SwiperSlide>
            <SwiperSlide className='testimonial'>
               <div className="client__avatar">
                  <img src="https://media-s3-us-east-1.ceros.com/forbes/images/2021/12/06/bbff530cddcb7ed1b79ecee931f9f854/artboard-2-copy-6.jpg" alt="" />

               </div>
               <h5 className='clients__name'>Ernest Achiever</h5>
               <small className='clients__review'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsam eveniet nulla atque quo officiis, fugit sed facere soluta temporibus.</small>
            </SwiperSlide>
            <SwiperSlide className='testimonial'>
               <div className="client__avatar">
                  <img src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" alt="" />

               </div>
               <h5 className='clients__name'>Ernest Achiever</h5>
               <small className='clients__review'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsam eveniet nulla atque quo officiis, fugit sed facere soluta temporibus.</small>
            </SwiperSlide>
         </Swiper>
      </section>
   )
}

export default Testimonials