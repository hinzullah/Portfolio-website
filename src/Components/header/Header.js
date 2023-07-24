import React from 'react'
import './Header.css'
import Cta from '../Cta'
import tech from '../../Images/techie.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
      <header>
        <div className='container header__container'>
          <h5>Hello I'm</h5>
          <h1>Hajj Hinzullah</h1>
          <h5 className='text-light'>Frontend Developer</h5>
          <Cta />
          <HeaderSocials />
        </div>
        <div className='me'>
            <img className='myimg' src={tech} alt="my-pic" />
        </div>
        

        <a href='#container' className='scroll__down'>scroll down</a>
      </header>
      
  )
}

export default Header