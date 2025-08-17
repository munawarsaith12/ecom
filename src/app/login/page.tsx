import Link from "next/link";
import React from 'react'
import { FaGoogle } from 'react-icons/fa6'

function page() {
  return (
    <section className='max-w-[1100px] h-[600px] mx-auto bg-[#FFFFFF]   flex justify-center items-center flex-col' >
        <div className='w-[371px] h-[530px] '>
            <div className=' w-[339px] h-[78px] flex justify-center items-start flex-col text-[#000000]  font-poppins '>
                <h2 className=' text-[36px] font-medium font-inter '>Create an account</h2>
                <p className='text-base font-regular mt-4 '>Enter your details below</p>
            </div>
            <div className='w-full h-[404px] mt-8 bg-[#FFFFFF]'>
                <div className='w-full h-[176px]'>
                <form action="">
                    <label htmlFor="" className='text-[#000000] opacity-50'>name</label>
                    <input type="text" required className='outline-none text-[#000000] opacity-50'/>
                    <br />
                    <hr />
                    <br />
                    <label htmlFor="" className='border-none outline-none text-[#000000] opacity-50'>email</label>
                    <input type="email" required  className='outline-none text-[#000000] opacity-50'/>
                    <hr />
                    <br />
                    <label htmlFor="" className='text-[#000000] opacity-50'>password</label>
                    <input type="password" required className='outline-none text-[#000000] opacity-50'/>
                    <hr />
                    <br />
                </form>
                </div>
                <div className='w-full h-[188px]'>
                   <button className='w-full h-[56px] text-base  font-medium font-poppins  bg-[#DB4444]  rounded mt-2 mb-4'>
                    create account 
                    </button> 
                    <div className='flex justify-center items-center flex-col'>
                        <button className='w-full h-[56px] flex items-center justify-center gap-4  shadow border rounded'>
                            <FaGoogle className='w-6 h-6 flex justify-center items-center' />
                            <p className='flex  justify-center items-center text-base  font-regular font-poppins'>Sign up with Google</p> 
                        </button>
                        <div className='w-[248px] h-[28px] flex justify-center items-end mt-4'>
                            <button className='w-[185px] h-6 '>
                                already have an account?
                            </button>
                            <p className='w-[47px] h-full flex justify-center items-center text-base text-[#000000] font-poppins font-regular border-b-1'><Link href="/signup">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default page