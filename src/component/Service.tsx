import React from 'react'
import { serviceArra } from './owner_Company'
import Image from 'next/image'

function Service() {
  return (
          <div className='w-[943px] h-[161px] flex justify-between items-center mx-auto my-[150px] '>
            {
              serviceArra.map((curserv)=>{
                return <div key={curserv.id}  className='w-[249px] h-[161px] flex  justify-center flex-col items-center shadow'>
                  <div className='w-20 h-20 border bg-[#7D8184]  rounded-full flex justify-center items-center mb-6'>
                    {
                      <Image src={curserv.image} alt={curserv.title} width={40} height={40}  className='bg-[#000000] rounded-full' />
                    }
                  </div>
                  <div className='w-full h-[57px] text-[#000000] flex justify-center items-center flex-col'>
                    <h2 className='w-full h-[28px] text-[16px] font-semibold font-poppins  flex justify-center my-2 ' >{curserv.title}</h2>
                    <p className=' w-[249px] h-[21px] text-[14px] font-regular font-poppins flex justify-center '>{curserv.description}</p>
                  </div>
                </div>
              })
            }
          </div>
  )
}

export default Service