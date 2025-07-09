import React from 'react'
import {projects} from '@/data'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'

function RecentProjects() {
  return (
    <div className='py-20' id='projects'>
        <div className="heading text-xl font-bold flex justify-center text-center lg:text-6xl">
            A small selection of {' '} <span className='text-[#CBACF9]'> recent projects</span>
        </div>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24
        mt-10 gap-y-8">
            {projects.map(({ id, title, des, img, iconLists, link }) => (
                <div className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center 
                justify-center sm:w-[570px] w-[80vw]" key={id}>
                    <PinContainer title={title} href={link}>
                        <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden
                        sm:h-[40vh] h-[30vh] mb-10">
                            <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                <img src="/bg.png" alt="" />
                            </div>
                            <img 
                            src={img} 
                            alt={img}
                            className='z-10 absolute bottom-0' />
                        </div>
                        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                            {title}
                        </h1>
                        <p className="lg:text-xl lg:font-normal
                        font-light text-sm line-clamp-2 ">
                            {des}
                        </p>
                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className="flex items-center">
                                {iconLists.map((icon, index) => (
                                    <div className="border border-white/[0.2] rounded-full bg-black
                                    lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" 
                                    key={icon}
                                    style={{transform: `translateX(-${5 * index * 2}px)`}}>
                                        <img src={icon} alt={icon} className='p-2'/>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center items-center">
                                <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Site</p>
                                <FaLocationArrow className='ms-3' color='#CBACF9'></FaLocationArrow>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects