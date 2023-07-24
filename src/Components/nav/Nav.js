import React from 'react'
import './Nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div className='nav'>
      <a href="#home" onClick={() => setActiveNav === '#'} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav === '#about'} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav === '#experience'} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#services" onClick={() => setActiveNav === '#services'} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="contact" onClick={() => setActiveNav === '#contact'} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </div>
  )
}

export default Nav