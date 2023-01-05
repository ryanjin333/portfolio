import React from 'react';
import githubLogo from '../assets/githubLogo.png'

const Header = () => {
  return (
    <header className="w-screen h-16 fixed top-0 left-0 sm:px-12 md:px-24 lg:px-32 backdrop-blur-lg flex justify-between items-center">
        <a href="#home" className='flex flex-row hover:opacity-70 duration-500'>
          <div className='text-white font-normal text-xl'>Ryan&nbsp;</div>
            <div className='text-white font-bold text-xl'>Jin</div>
        </a>
        <div className='flex flex-row items-center text-white font-bold text-lg'>
            <a href='#home' className='mx-4 font-normal text-sm hover:text-purple-500 duration-500'>home</a>
            <a href='#projectIntro' className='mx-4 font-normal text-sm hover:text-purple-500 duration-500'>projects</a>
            <a href='mailto:ryanjin333@gmail.com' className='mx-4 font-normal text-sm hover:text-purple-500 duration-500'>contact</a>
            <a href="https://github.com/ryanjin333" target="_blank">
                <img className='h-6 w-6 mx-4 hover:opacity-70 duration-500' src={githubLogo}/>
            </a>
        </div>
    </header>
  )
}

export default Header;