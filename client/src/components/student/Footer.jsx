import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
       <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
          <div><img src={assets.logo_dark} alt="logo" /></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore recusandae voluptas harum aliquid, nesciunt distinctio accusamus ratione odit commodi voluptate!
          </p>
          <div></div>
          <div></div>
       </div>
        <p>Copyright 2025 © Hamro-Learning. All Right Reserved.</p>
    </footer>
  )
}

export default Footer