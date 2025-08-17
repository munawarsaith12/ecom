import React from 'react'
import { CartArrObj } from './CartArrObj'
import Image from 'next/image'
const Product = () => {
    return (
        <section className='max-w-[1100px] mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                {

                    CartArrObj.map((curproduct) => {
                        return (
                            <div className='w-[240px] h-[379px]  shadow-2xl rounded flex justify-center items-center border'>
                                <div className='w-[177px] h-[177px] px-2 flex justify-center items-center border bg-red-500'>
                                    <Image src={curproduct.image} alt={curproduct.title} width={177} height={177} />
                                </div>
                                <div className='w-[220px] h-[200px] flex flex-col mx-auto font-Inter gap-2  '>
                                    <h5 className='w-full h-[50px] text-[14px] text-[#030712] font-bold '>{curproduct.title}</h5>
                                    <div className='w-[90px] h-[30px] font-Barlow  flex items-center gap-1   '>
                                        <p className=' text-[#DC2626] text-[26px]  font-bold pt-2'>{curproduct.price}</p>
                                        <p className=' w-[41px] h-[19px] text-base text-[#111827] font-medium line-through flex justify-center items-center '>  {curproduct.sellPrice}
                                        </p>
                                    </div>
                                    <button className='w-[197px] h-[34px]  text-[#634C9F] border border-solid border-[#634C9F] text-start px-2 rounded-full'>Add to card</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Product