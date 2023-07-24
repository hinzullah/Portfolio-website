import React from 'react'
import {BsDribbble, BsGithub, BsLinkedin} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='Header__socials'>
        <a href='www.linkedin.com' target='_blank'><BsLinkedin/></a>
        <a href='www.github.com' target='_blank'><BsGithub/></a>
        <a href='www.dribble.com' target='_blank'><BsDribbble/>  </a>
    </div>
  )
}

export default HeaderSocials