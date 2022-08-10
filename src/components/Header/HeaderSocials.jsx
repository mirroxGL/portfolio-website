import React from 'react'
import "./Header.css"
import { BsLinkedin } from "react-icons/bs"
import { GoMarkGithub } from "react-icons/go"
import { ImDribbble } from "react-icons/im"

const HeaderSocials = () => {
   return (
      <div className='header__socials'>
         <a target="_blank" href="https://www.linkedin.com/in/volodya-zomko-477815230/"><BsLinkedin /></a>
         <a target="_blank" href="https://github.com/mirroxGL"><GoMarkGithub /></a>
         <a target="_blank" href="https://dribbble.com"><ImDribbble /></a>
      </div>
   )
}

export default HeaderSocials