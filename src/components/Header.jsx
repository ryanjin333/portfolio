import React from 'react';
import githubLogo from '../assets/githubLogo.png'

const Header = () => {
  return (
    <header className="w-screen h-16 fixed top-0 left-0 px-32 backdrop-blur-lg flex justify-between items-center">
        <div className='flex flex-row'>
            <div className='text-white font-bold text-xl'>Ryan Jin</div>
        </div>
        <div className='flex flex-row items-center text-white font-bold text-lg'>
            <div className='mx-4 font-normal text-sm hover:opacity-70 duration-300'>home</div>
            <div className='mx-4 font-normal text-sm hover:opacity-70 duration-300'>projects</div>
            <div className='mx-4 font-normal text-sm hover:opacity-70 duration-300'>contact</div>
            <a style={{display: "table-cell"}} href="https://github.com/ryanjin333" target="_blank">
                <img className='h-6 w-6 mx-4 hover:opacity-70 duration-300' src={githubLogo}/>
            </a>
        </div>
    </header>
  )
}

export default Header;