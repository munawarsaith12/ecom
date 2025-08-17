'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaCartShopping } from 'react-icons/fa6';
import { IoIosSearch,  } from "react-icons/io";
import { TiThMenu } from 'react-icons/ti';
import { IoMdClose } from "react-icons/io";
import { useCart } from '@/app/context/cart';
import { CiHeart } from 'react-icons/ci';
function Navbar() {
    const [ismobile, setmobile] = useState(false);
    const {items}=useCart();
    interface Navlinks {
        url: string,
        label: string,
    }

    const navlink: Navlinks[] = [
        { url: '/home', label: 'home' },
        { url: '/about', label: 'about' },
        { url: '/product', label: 'product' },
        { url: '/login', label: 'sing up ' }
    ];

    const toggle = () => setmobile(!ismobile); 

    return (
        <section className='max-w-[1170px] w-full h-14 mx-auto  shadow-2xl  rounded sticky top-0  z-50 '>
            <div className='flex justify-between items-center px-4 '>
                <div className=' w-[118px]  h-10 text-sm md:text-xl font-bold flex items-center'>
                    <p>shop</p>
                </div>

                {/* Mobile Menu Button */}
                <button className='md:hidden' onClick={toggle}>
                    {ismobile ? <IoMdClose className="w-6 h-6" /> : <TiThMenu className="w-6 h-6" />}
                </button>

                {/* Desktop Navigation */}
                <div className='hidden w-[367px]  h-full md:flex items-center gap-5 py-4'>
                    {navlink.map((curlink) => (
                        <Link href={curlink.url} key={curlink.label} className=' text-lg font-bold capitalize hover:border-b-2 border-black' >
                            {curlink.label}
                        </Link>
                    ))}
                </div>
                {/* search and addtocard */}
                <div className=' hidden md:flex w-[347px] h-full bg-white  justify-between items-center'>
                    <div className=' relative w-[243px] h-9 '>
                        <input type="text"  placeholder='search' className='  w-[243px] h-full flex items-center '/>
                        <IoIosSearch className=' text-lg font-bold absolute right-2 top-2'/>
                    </div>
                    <div className='w-12 relative '>
                        <Link href={'/addToCard'} ><FaCartShopping /></Link>
                        <div className='w-3 absolute -top-3 right-5 bg-white rounded-full'>
                        <p>{items.length}</p>
                    </div>
                    </div>
                    <div>
                        <Link href={'/singup'} className=' w-8 h-8 text-[#000000]  bg-[#FFFFFF]  flex items-center justify-center text-lg font-bold capitalize  border-black'><CiHeart /></Link>
                    </div>
                    
                </div>
            </div>

            {/* Mobile Navigation */}
            {ismobile && (
                <div className='absolute top-14 left-0 w-full flex flex-col bg-white text-black px-4 py-4 gap-4 shadow-lg z-50 md:hidden'>
                    {navlink.map((curlink) => (
                        <Link href={curlink.url} key={curlink.label} onClick={toggle} className='font-bold capitalize active:border-b-2 border-black'>
                            {curlink.label}
                        </Link>
                    ))}
                     <div className='flex  md:hidden w-full h-full bg-white  justify-between items-center'>
                    <div className=' relative w-[243px] h-9 bg-[#F5F5F5] rounded-xl '>
                        <input type="text"  placeholder='search' className='  w-[243px] h-full flex items-center '/>
                        <IoIosSearch className=' text-lg font-bold absolute right-2 top-2'/>
                    </div>
                   <div className='w-12  relative '>
                  <Link href={'/addToCard'}> <FaCartShopping /> </Link>
              
                    <div className='w-3  absolute -top-2 right-5  rounded  bg-white'>
                        <p>{items.length}</p>
                    </div>
                    </div>
                </div>
                </div>
            )}
        </section>
    );
}

export default Navbar;
