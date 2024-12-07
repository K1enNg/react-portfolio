import React from 'react'
import logo from "../assets/elite_logo.png"
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10' src={logo} alt='logo'/>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/kien-nguyen-46bab22a1/"><FaLinkedinIn/></a>
            <a href="https://github.com/K1enNg"><FaGithub/></a>
            <a href="https://www.instagram.com/ngkien.272/"><FaInstagram/></a>
            <a href="/"><FaDiscord/></a>
        </div>
    </nav>
  )
}

export default Navbar