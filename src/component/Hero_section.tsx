import React from 'react'

function Hero_section() {
    return (
        <section className='h-full  bg-[url("/image/elements01.png")]  bg-contain md:bg-cover bg-no-repeat bg-top md:bg-center '>
            <div className='flex  md:items-center max-w-[1100px] w-full h-full md:h-[560px] m-auto px-2'>
                <div className={` w-full h-full md:w-[617px] md:h-[357px] flex flex-col justify-start md:justify-center `}>
                    
                   <div> 
                    <h2 className='text-[20px] md:text-[45px] text-[#39245F] font-Inter font-bold '>
                        Get the best quality
                        products at the lowest
                        prices
                    </h2>
                    <p className=' text-sm md:text-base text-[#030712] font-Inter font-regular'>We have prepared special discounts for you on organic breakfast products.</p>
                    </div>
                    <div className='text-base text-[#FFFFFF] font-Inter font-bold flex gap-4  md:py-22.5'>
                        <button className='w-[120px] md:w-[134px] h-[30px] md:h-[42px] text-base text-[#FFFFFF] font-Inter font-bold  bg-[#634C9F] rounded-lg'>
                            shope now
                        </button>
                        <div className='flex  flex-col'>
                            <div className='font-Barlow flex items-center gap-2 '>
                                <p className=' text-[28px] text-[#DC2626] font-bold'>$21.67</p>
                                <p  className=' text-lg text-[#111827] font-medium  line-through'>$59.99</p>
                            </div>
                           <p className='text-[11px] text-[#030712] font-regular font-Inter '> Don't miss this limited time offer.</p>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </section>
    )
}

export default Hero_section