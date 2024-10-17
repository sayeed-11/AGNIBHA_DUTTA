import React from 'react'

const Contact = () => {
    return (
        <div id='CONTACT' className='py-10 px-5 sm:px-10 flex flex-col w-full gap-y-10 bg-black text-white'>
            <div>
                <div className='flex *:text-[2.5rem] *:sm:text-[3.5rem]'>
                    <h1 className=' font-bold uppercase'>CONTACT</h1>
                    <h1 className='fancy-heading-white font-bold uppercase'>ME</h1>
                </div>
                <h1 className='-mt-4 ml-1 font-semibold text-white/[0.3]'>Get in Touch</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10'>
                <div className='space-y-5 sm:space-y-10'>
                    <div className='flex gap-x-5 items-center'>
                        <i className="fa-solid fa-envelope text-xl border-[1.5px] border-white px-4 py-2 rounded-md" />
                        <h1 className='text:sm sm:text-xl'>agnibhadutta@gmail.com</h1>
                    </div>
                    <div className='flex gap-x-5 items-center'>
                        <i className="fa-solid fa-phone text-xl border-[1.5px] border-white px-4 py-2 rounded-md" />
                        <h1 className='text:sm sm:text-xl'>agnibhadutta@gmail.com</h1>
                    </div>
                    <div className='flex gap-x-5 items-center'>
                        <i className="fa-solid fa-location-dot text-xl border-[1.5px] border-white px-5 py-2 rounded-md" />
                        <h1 className='text:sm sm:text-xl'>agnibhadutta@gmail.com</h1>
                    </div>
                </div>
                <div className='space-y-5'>
                    <h1 className='text-2xl font-semibold font-Saira uppercase'>Also check</h1>
                    <div className='space-y-3'>
                        <button className='flex items-center justify-between bg-white w-full sm:w-[50%] md:w-[70%] lg:w-[50%] p-1 gap-x-5'>
                            <i className="fa-brands fa-facebook-f text-xl bg-black w-10 aspect-square flex justify-center items-center " />
                            <h1 className='text-black text-xl font-semibold'>FACEBOOK</h1>
                            <i className="fa-solid fa-arrow-right text-xl text-black pr-5"/>
                        </button>
                        <button className='flex items-center justify-between bg-white w-full sm:w-[50%] md:w-[70%] lg:w-[50%] p-1 gap-x-5'>
                            <i className="fa-brands fa-instagram text-xl bg-black w-10 aspect-square flex justify-center items-center " />
                            <h1 className='text-black text-xl font-semibold'>INSTAGRAM</h1>
                            <i className="fa-solid fa-arrow-right text-xl text-black pr-5"/>
                        </button>
                        <button className='flex items-center justify-between bg-white w-full sm:w-[50%] md:w-[70%] lg:w-[50%] p-1 gap-x-5'>
                            <i className="fa-brands fa-linkedin text-xl bg-black w-10 aspect-square flex justify-center items-center " />
                            <h1 className='text-black text-xl font-semibold'>LINKEDIN</h1>
                            <i className="fa-solid fa-arrow-right text-xl text-black pr-5"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact