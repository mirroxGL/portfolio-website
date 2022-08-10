import React from 'react'
import "./Footer.css"
import { BsFacebook } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa"
import { AiFillTwitterCircle } from "react-icons/ai"

const Footer = () => {
   return (
      <footer>
         {/* <a href="" className="footer__logo">ZOMKO</a> */}
         <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
         </ul>

         <div className="footer__socials">
            <a href="https://www.facebook.com/volodymyrzomko"><BsFacebook className='footer__socials-icon' /></a>
            <a href="https://www.instagram.com/zomko.v/"><FaInstagram className='footer__socials-icon' /></a>
            <a href="https://twitter.com/zomko_v"><AiFillTwitterCircle className='footer__socials-icon' /></a>
         </div>
         <div className="footer__copyright">
            <small>&copy; Volodymyr Zomko. All rights reserved.</small>
         </div>
      </footer>
   )
}

export default Footer