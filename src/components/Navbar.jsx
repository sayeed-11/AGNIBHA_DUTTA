import React, { useState } from 'react'
import logo from '../assets/Agnibha Dutta/Logo/Black_And_White_Simple_Photography_Logo-removebg-preview.png'

const Navbar = () => {
    const [isBar, setBar] = useState(false);
    return (
        <nav className='w-full bg-white flex  items-center justify-between fixed top-0 px-3 md:px-5 z-50'>
            <div className=' flex justify-center '>
                {/* <h1 className='font-semibold text-2xl'>DUTTA</h1> */}
                <div>
                    <img className='w-16 aspect-[1/0.9] object-fill bg-white' src={logo} alt="" />
                </div>
            </div>
            <div className='h-full flex items-center justify-center gap-x-5'>
                <ul className={` flex flex-col md:flex-row md:items-center gap-x-5 *:md:text-sm *:text-2xl *:font-semibold md:static absolute w-full h-screen md:h-auto bg-white left-0 top-[56px] p-10 md:p-0 gap-y-5 ${isBar ? "translate-x-0" : "translate-x-[100%] md:translate-x-0"} transition-all duration-[0.3s] `}>
                    <li><button onClick={() => {setBar(false)}}><a href="/#">HOME</a></button></li>
                    <li><button onClick={() => {setBar(false)}}><a href="/#ABOUT">ABOUT</a></button></li>
                    <li><button onClick={() => {setBar(false)}}><a href="/#WORK">WORK</a></button></li>
                    <li><button onClick={() => {setBar(false)}}><a href="/#CONTACT">CONTACT</a></button></li>
                </ul>
                <button className='font-semibold text-white bg-black px-5 py-2'>RESUME</button>
                <button onClick={() => {
                    setBar(!isBar);
                }} className='border-[1.5px] border-black px-3 py-1.5 md:hidden'>
                    <i className='fa-solid fa-bars' />
                </button>
            </div>
        </nav>
    )
}

export default Navbar