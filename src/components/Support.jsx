import React from 'react'
import {
  ShieldCheckIcon,ArrowSmRightIcon,CubeTransparentIcon
} from "@heroicons/react/outline"
import { SupportIcon} from "@heroicons/react/solid"
import supportImg from "../assets/annie-spratt-QckxruozjRg-unsplash.jpg"

const Support = () => {
  return (
    <div name="support" className=' w-full  mt-24 mb-24'>
      <div className=' w-full h-[700px] bg-gray-900/90 absolute'>
        <img className=' object-cover w-full h-full mix-blend-overlay' src={supportImg} alt="" />
      </div>
      <div className=' max-w-[1240px] mx-auto text-white relative'>
        <div className=' px-4 py-12'>
          <h2 className=' text-3xl uppercase text-slate-300 text-center pt-8'>Support</h2>
          <h3 className=' text-5xl font-bold py-6 text-center '>Finding The Right Team</h3>
          <p className='  text-3xl text-slate-300 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae officiis atque labore molestiae distinctio deserunt quibusdam dignissimos explicabo recusandae sequi vel alias dolore voluptas libero, iure, reiciendis velit amet placeat.</p>
        </div>
        <div className=' grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          {/* 1 */}
          <div className=' bg-white rounded-xl shadow-2xl'>
            <div className=' p-8'>
              <ShieldCheckIcon className=' w-16 p-4 bg-yellow-400 text-white rounded-lg mt-[-4rem]'/>
              <h3 className=' font-bold text-2xl my-6'>Network Security</h3>
              <p className=' text-gray-600  text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium iste accusamus ma gnam ad, qui officiis ipsa minus cum at quas.</p>
            </div>
            <div className=' bg-slate-100 pl-8 py-4 '>
              <p className='flex text-yellow-400'>Contact Us <ArrowSmRightIcon className=' w-5 ml-2'/></p>
            </div>
          </div>
          {/* 2 */}
          <div className=' bg-white rounded-xl shadow-2xl'>
            <div className=' p-8'>
              <SupportIcon className=' w-16 p-4 bg-yellow-400 text-white rounded-lg mt-[-4rem]'/>
              <h3 className=' font-bold text-2xl my-6'>Technical Support</h3>
              <p className=' text-gray-600  text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium iste accusamus magnam ad, qui officiis ipsa minus cum at quas.</p>
            </div>
            <div className=' bg-slate-100 pl-8 py-4 '>
              <p className='flex text-yellow-400'>Contact Us <ArrowSmRightIcon className=' w-5 ml-2'/></p>
            </div>
          </div>
          {/* 3 */}
          <div className=' bg-white rounded-xl shadow-2xl'>
            <div className=' p-8'>
              <CubeTransparentIcon className=' w-16 p-4 bg-yellow-400 text-white rounded-lg mt-[-4rem]'/>
              <h3 className=' font-bold text-2xl my-6'>Network Analysis</h3>
              <p className=' text-gray-600  text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium iste accusamus magnam ad, qui officiis ipsa minus cum at quas.</p>
            </div>
            <div className=' bg-slate-100 pl-8 py-4 '>
              <p className='flex text-yellow-400'>Contact Us <ArrowSmRightIcon className=' w-5 ml-2'/></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support

