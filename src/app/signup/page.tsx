
import React from 'react'

function Page() {
  return (
    <section className='max-w-[1100px] h-[500px] mx-auto flex justify-center items-center  '>
      <div className='w-[371px] h-[324px]   shadow-2xl'>
        <div className='w-[370px] h-[230px]'>
          <div className='w-[345px] h-[78px]'>
            <h2 className='text-[36px] font-medium font-inter'>Log in to Exclusive</h2>
            <p className='text-base font-regular mt-4 '>Enter your details below</p>
          </div>
          <div className='w-[370px] h-[104px] mt-12'>
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
            </form>
          </div>
          <div className='w-[371px] h-[56px] flex justify-between items-center mt-8 '>
            <button className='w-[143px] h-[56px]  bg-[#DB4444] px-12 py-4 rounded'>
                Log In  
            </button>
            <button className='w-[148px] h-2'>
              forget password
            </button>
          </div>
        </div>
        <div>

        </div>
      </div>
    </section>
  )
}

export default Page