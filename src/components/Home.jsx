import React from 'react'
import profilePic from '../assets/Agnibha Dutta/Profile Photo/aduttaediting-0178.jpg'
import logo from '../assets/Agnibha Dutta/Logo/Black_And_White_Simple_Photography_Logo-removebg-preview.png'

const Home = () => {
    return (
        <div id='HOME' className='w-full min-h-screen flex justify-center items-center flex-col gap-y-10 pt-10'>
            {/* <div className='w-[65%] lg:hidden relative flex justify-center items-center'>
                <div className='absolute w-[150%] h-[70%] bg-black' />
                <img className='w-[100%] z-10 aspect-square object-cover border-[5px] border-white shadow-xl' src={profilePic} alt="" />
            </div> */}
            <div className='w-[100%] lg:hidden relative flex justify-center items-center'>
                <img className='w-[100%] z-10 aspect-video object-cover' src={logo} alt="" />
            </div>

            <div className='flex flex-col items-center'>
                <h2 className='text-xl sm:text-2xl'>👋Hi, I'm Agnibha Dutta</h2>
                <h1 className='text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[7rem] font-bold'>I'm a DESIGNER &</h1>
                <div>
                    <h1 className='text-[4rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] font-bold leading-[3rem] sm:leading-[7rem] font-Saira fancy-text'>Photographer</h1>
                    <div>
                        <h1 className='lg:pt-5 sm:-mt-3 md:mt-0 pl-2 font-semibold text-black/[0.3]'>Based in Malda</h1>
                    </div>
                </div>
            </div>
            <div className='flex gap-x-10 gap-y-5 flex-wrap items-center justify-center '>
                <button className='border-2 border-black px-10 py-3 w-[80%] sm:w-auto'>You need Designer</button>
                <button className='px-10 py-3 bg-black text-white w-[80%] sm:w-auto'>You need Photographer</button>
            </div>
        </div>
    )
}

export default Home