import Children from '@/component/children'
import Feature from '@/component/Feature'
import Hero_section from '@/component/Hero_section'
import Service from '@/component/Service'
import Vegitable from '@/component/Vegitable'
import React from 'react'
import { GiDrinking } from 'react-icons/gi'

function page() {
  return (
    <>
    <Hero_section/>
    <Feature/>
    {/* <GiDrinking/> */}
    <Children/>
    <Vegitable/>
    <Service/>

    </>
  )
}

export default page