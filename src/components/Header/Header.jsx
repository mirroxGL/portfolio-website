import React from 'react'
import CTA from './CTA'
import "./Header.css"
import ME from "./../../assets/images/me.jpg"
import HeaderSocials from './HeaderSocials'


const Header = () => {
   return (
      <header>
         <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Volodymyr Zomko</h1>
            <h5 className="text-light">Front-end Web Developer</h5>
            <CTA />
            <HeaderSocials />
            <dev className="me">
               <img src={ME} alt="me" />
            </dev>

            <a href="#contact" className='scroll__down'>Scroll Down</a>
         </div>
      </header>
   )
}

export default Header