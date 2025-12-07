import React from 'react'
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='h-44 w-full bg-black text-white flex items-center justify-between px-20'>
      <div className="tagline font-bold text-[2vw]">
        Shop Smart, Live Better!
      </div>
      <div className="links flex flex-col gap-2">
        <Link to='/About' className='hover:underline'>About</Link>
        <Link to='/TanC' className='hover:underline'>Terms and Conditions</Link>
      </div>
      <div className="tc text-gray-400">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
