'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { CartArrObj } from '@/component/CartArrObj'
import { useCart } from '../context/cart'
import Link from 'next/link'

const Page = () => {
  const [data, setdata] = useState(CartArrObj)
  const { addToCart } = useCart()
  const filterItems = (curCategory: string) => {
    const filtered = CartArrObj.filter(product => product.catagory === curCategory)
    setdata(filtered)
  }

  return (
    <section className='max-w-[1100px] mx-auto my-6 flex flex-col'>
      <div className='w-full flex gap-5 justify-center md:justify-start'>
        <Link href={'/'}><button>home</button></Link>
        <button onClick={() => setdata(CartArrObj)}>All</button>
        <button onClick={() => filterItems('children')}>Children</button>
        <button onClick={() => filterItems('vegitable')}>Vegitable</button>
      </div>
      <h2 className='text-[42px] text-[#39245F] font-inter font-bold text-center capitalize'>Product</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center'>
        {data.map((curproduct) => (
          <div key={curproduct.id} className='w-[240px] h-[379px] shadow-2xl rounded bg-white'>
            <Link href={`/feature/${curproduct.id}`}>
              <div className='w-[177px] h-[177px] px-2 flex justify-center items-center cursor-pointer'>
                <Image src={curproduct.image} alt={curproduct.title} width={177} height={177} />
              </div>
            </Link>

            <div className='w-[220px] h-[200px] flex flex-col mx-auto font-Inter gap-4'>
              <h5 className='text-base text-[#030712] font-bold'>{curproduct.title}</h5>
              <div className='flex items-center gap-1'>
                <p className='text-[#DC2626] text-[26px] font-bold'>{curproduct.price}</p>
                <p className='text-base text-[#111827] font-medium line-through'>{curproduct.sellPrice}</p>
              </div>
              <button
                className='w-[197px] h-[34px] text-[#634C9F] border border-[#634C9F] text-start px-2 rounded-full'
                onClick={() =>addToCart(curproduct.id) }
              >
                Add to cart
              </button>
             
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Page
