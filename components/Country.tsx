import React from 'react'
import Spain3d from './ui/Spain3d'
import { GlareCard } from './ui/glare-card'
//rfce
function Country() {
  return (
    <div className="py-10 sm:py-16 lg:py-20">

        <div className="heading text-3xl -mb-[100px] font-bold flex justify-center text-center tracking-wide lg:text-6xl">
        Territory where my works are {" "}<span className='text-[#CBACF9]'> born</span>
        </div>

        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-10 gap-x-6 px-4 lg:px-8 items-center lg:mt-[300px] lg:ml-[100px]">
            
            {/* Modelo 3D */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <Spain3d />
            </div>

            {/* Card con imagen */}
            <div className="relative space-y-6">
                {/* Primera tarjeta */}
                <GlareCard className="flex flex-col items-center justify-center">
                    <img
                    className="h-full w-full absolute inset-0 object-cover opacity-30"
                    src="https://thecountryjumper.com/wp-content/uploads/2024/02/Best-Towns-to-Visit-in-Southern-Spain-granada-scaled-e1707591362750.jpg"
                    alt="background"
                    />
                    <div className="relative z-10 text-white font-bold text-5xl font-sans">
                      Spain
                    </div>


                </GlareCard>

                
                </div>


            

        </div>
    </div>



  )
}

export default Country