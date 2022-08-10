import React from 'react'
import "./Navbar.css"
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { GiSpellBook } from "react-icons/gi"
import { RiServiceLine } from "react-icons/ri"
import { BiMessageDetail } from "react-icons/bi"
import { useState } from 'react'

const Navbar = () => {
   const [activeNav, setActiveNav] = useState('#')
   return (
      <nav>
         <a onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""} href="#"><AiOutlineHome /></a>
         <a onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""} href="#about"><AiOutlineUser /></a>
         <a onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""} href="#experience"><GiSpellBook /></a>
         {/* <a onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""} href="#services"><RiServiceLine /></a> */}
         <a onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""} href="#contact"><BiMessageDetail /></a>
      </nav>
   )
}

export default Navbar