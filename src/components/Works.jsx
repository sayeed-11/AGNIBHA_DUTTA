import React, { useState } from 'react'
import CULTURE from '../data/culture'
import STREET from '../data/street'
import BIRDS from '../data/birds'
import POSTER from '../data/poster'
import PORTRAIT from '../data/portrait'
import NATURE from '../data/nature'


const categories = [
    {
        name: "Culture",
        data: CULTURE
    },
    {
        name: "Bird",
        data: BIRDS
    },
    {
        name: "Nature",
        data: NATURE
    },
    {
        name: "Portrait",
        data: PORTRAIT
    },
    {
        name: "Poster",
        data: POSTER
    },
    {
        name: "street",
        data: STREET
    }
]

const Works = () => {
    const [data, setData] = useState(CULTURE)
    return (
        <div id="WORK" className='w-full flex flex-col  items-center py-10 gap-y-10 bg-white'>
            <div>
                <div className='flex *:text-[3rem] *:sm:text-[5rem]'>
                    <h1 className='fancy-heading font-bold uppercase'>MY</h1>
                    <h1 className=' font-bold uppercase'>WORKS</h1>
                </div>
                <h1 className='text-end -mt-5 font-semibold text-sm sm:text-balance text-black/[0.5]'>Some Awesome Photos</h1>
            </div>
            <Category setData={setData} />
            <Images DATA={data} />
        </div>
    )
}

export default Works


const Category = ({ setData }) => {
    const [active, setActive] = useState(0)
    return (
        <div className={` flex md:grid grid-cols-6 w-full md:w-[90%] lg:w-[70%] space-x-5 gap-y-5 overflow-scroll px-5 category pb-5`}>
            {
                categories.map((item, index) => {
                    return (
                        <button onClick={() => {
                            setActive(index)
                            setData(item.data)
                        }} className={`${active === index ? "bg-black text-white border-t-[1.5px] border-slate-700" : "text-black bg-white shadow-md border-t-[1.5px] border-black"} py-1.5 min-w-[100px] md:w-auto`} key={index}>{item.name}</button>
                    )
                })
            }
        </div>
    )
}

const Images = ({ DATA }) => {
    return (
        <div className='w-full flex flex-col items-center gap-y-10'>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-5 w-[90%] md:w-[80%]'>
                {
                    DATA.slice(0, 9).map((item, index) => (
                        <div key={index}>
                            <img className='aspect-square object-cover border-[5px] border-white shadow-md' src={item} alt="" />
                        </div>
                    ))
                }
            </div>
            <button className='bg-black text-white px-10 py-3'>LOAD MORE</button>
        </div>
    )
}