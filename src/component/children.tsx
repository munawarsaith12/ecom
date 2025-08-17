'use client'
import React, { useState } from 'react'
import { CartArrObj } from './CartArrObj';
import Image from 'next/image';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Link from 'next/link';
import Product from './Product';
import { useCart } from '@/app/context/cart';
function Children() {
    // const newFeature=CartArrObj.filter((curproduct)=>{
    //     return curproduct.isFeature==true;
    // })
      const [data, setdata] = useState(CartArrObj)
    //   const { addToCart } = useCart()
      const filterItems = (curCategory: string) => {
  return CartArrObj.filter(product => product.catagory === curCategory);
};

const children = filterItems('children');

    //   const  children=filterItems('children');
    const {addToCart}=useCart();
  return (
 <section className='max-w-[1100px] w-full mx-auto bg-[#FEF2F2] my-5 py-6 px-4 rounded'>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center'>
    {children.map((curproduct) => (
      <Link key={curproduct.id} href={`/feature/${curproduct.id}`}>
        <div className='w-[240px] h-[379px] shadow-2xl rounded bg-white'>
          <div className='w-[177px] h-[177px] px-2 flex justify-center items-center'>
            <Image src={curproduct.image} alt={curproduct.title} width={177} height={177} />
          </div>
          <div className='w-[220px] h-[200px] flex flex-col mx-auto font-Inter gap-4'>
            <h5 className='text-base text-[#030712] font-bold'>{curproduct.title}</h5>
            <div className='flex items-center gap-1'>
              <p className='text-[#DC2626] text-[26px] font-bold'>{curproduct.price}</p>
              <p className='text-base text-[#111827] font-medium line-through'>{curproduct.sellPrice}</p>
            </div>
            <button className='w-[197px] h-[34px] text-[#634C9F] border border-[#634C9F] text-start px-2 rounded-full' onClick={() =>addToCart(curproduct.id)}>
                Add to cart
            </button>
          </div>
        </div>
      </Link>
    ))}
        <div className='flex justify-center mr-2 mb-4 '>
    <button className='w-[97px] h-[34px] bg-white border rounded-full flex justify-center items-center gap-1'>
      <Link href='/product'>
        <p className='text-sm text-[#212529] font-Inter font-bold'>view list</p>
      </Link>
      <IoIosArrowRoundForward className='text-base text-[#212529] font-bold' />
    </button>
  </div>
    
  </div>
</section>

    
  )
}


export default Children