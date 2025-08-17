'use client'
import React from 'react'
import Image from 'next/image'
import posterimages1 from '../../../public/image/poster-images1.png'
import { StoreInfoArray } from '@/component/StoreInfo'
import { ownerArray, serviceArra } from '@/component/owner_Company'
import Service from '@/component/Service'
function page() {
  return (
    <section className='max-w-[1100px] mx-auto'>
      <div className='w-full h-[600] block md:flex justify-center items-center'>
        <div className='max-w-[550px] '>
          <h4 className='w-[277px] h-[64px] text-xl md:text-[34px] font-inter font-semibold'>
            Our Story
          </h4>
          <p className='w-[525px] h-[130px] text-xs md:text-base text-[#000000] font-poppins font-regular'>
            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
          </p>
          <p className='w-[525px] h-[130px]  text-xs md:text-base text-[#000000] font-poppins font-regular'>
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
          </p>
        </div>
        <div className='w-[500px] h-[500px]'>
          <Image src={posterimages1} alt='poster'/>
        </div>
      </div>
      <div className='w-full h-auto  md:h-[230px] bg-[#FFFFFF] flex justify-center items-center mx-auto'>
        {
          StoreInfoArray.map((curstore)=>{
            return <div className={`w-[250px] md:h-full flex justify-center items-center shadow mx-auto rounded ${curstore.setColor}`} 
            key={curstore.id}>
              <div className='w-[169px] h-[169px]  flex justify-center items-center flex-col gap-4'>
                <div className='text-[#FFFFFF] bg-[#000000] w-[70px] h-[70px] rounded-full  flex justify-center items-center'>
                  <Image src={curstore.image} alt='icon' width={40}  height={40}/>
                </div>
                <div className='w-[169px] h-[66px] flex justify-center items-center  flex-col'>
                  <h2 className='w-[64px] h-[30px] text-[32] font-inter font-bold pl-2 tracking-wider'>{curstore.salarRating}</h2>
                  <p className=' w-[200px] h-[24px] text-base font-poppins font-regular'>{curstore.salarDescription}</p>
                </div>
              </div>
            </div>
          })
        }
      </div>
      <div className='w-full h-[500px] flex justify-center items-center mt-25  gap-4 '>
          {
            ownerArray.map((curOwner)=>{
              return <div key={curOwner.id} className='w-[350px]  h-full  flex  flex-col shadow rounded'>
                <div className='w-[350px] h-[390px]  bg-[#F5F5F5] flex justify-center  '>
                  <Image src={curOwner.image} alt={curOwner.title} width={236} height={391}/>
                </div>
                <div  className='w-[231px] h-[102px]'>
                  <div className=' w-full h-[62px] flex   flex-col'>
                  <h2 className='text-[32px] font-inter font-medium'>{curOwner.title}</h2>
                  <p className='font-poppins font-regular'>{curOwner.description}</p>
                  </div>
                  <div className='w-[104px] h-[35px] text-[#000000] flex justify-start items-end mt-2'>
                    {curOwner.icons}
                  </div>
                </div>
              </div>
            })
          }
      </div>
      <div>
        <Service/>
      </div>
    </section>
  )
}

export default page