import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/in/rachmat-ramadhan/" target="_blank"><BsLinkedin/></a>
    <a href="https://github.com/rachmatramadhanh/" target="_blank"> <FaGithub/></a>
    <a href="https://www.facebook.com/rachmatramadhanh" target="_blank"> <BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials