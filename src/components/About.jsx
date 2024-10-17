import React from 'react'
import profilePic from '../assets/Agnibha Dutta/Profile Photo/aduttaediting-0178.jpg'

const About = () => {
    return (
        <div id='ABOUT' className=' w-full grid grid-cols-1 md:grid-cols-2  z-10 py-10 gap-y-10'>
            <div className='flex justify-start items-center'>
                <div className='w-[55%] self-center py-10 bg-black flex justify-center items-center '>
                    <h1 className='-rotate-90 absolute text-[7rem] -left-[5rem] font-bold text-white/[0.15]'>Dutta.</h1>
                    <img className='w-[100%] border-[10px] border-white shadow-2xl translate-x-[50%]' src={profilePic} alt="" />
                </div>
            </div>
            <div className='flex justify-center flex-col px-7 md:px-10 gap-y-5'>
                <div className='flex *:text-[2rem] *:md:text-[3rem]'>
                    <h1 className=' font-bold uppercase'>About</h1>
                    <h1 className='fancy-heading font-bold uppercase'>Myself</h1>
                </div>
                <h1 className='text-xl text-justify'>I’m a passionate designer and photographer with a keen eye for aesthetics and detail. My design work focuses on creating visually engaging and user-centered experiences, blending creativity with functionality. As a photographer, I specialize in capturing authentic moments, showcasing the beauty of people, nature, and everyday life through my lens. My goal is to evoke emotion and tell stories through both design and photography, bringing unique perspectives to every project I undertake.</h1>
            </div>
        </div>
    )
}

export default About