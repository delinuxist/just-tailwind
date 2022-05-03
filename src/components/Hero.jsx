import React from 'react';
// import {

// DatabaseIcon,
// PaperAirplaneIcon,
// ServerIcon,LockClosedIcon
// } from "@heroicons/react/solid";
// import bgImg from "../assets/cyber-bg.png";
import bg2Img from "../assets/—Pngtree—artificial intelligence concept in 3d_7601735.png"




const Hero = () => {
  return (
   <div name="home" className=' w-full md:h-screen h-full pt-20 flex flex-col justify-between bg-gray-400'>
     <div className=' grid md:grid-cols-2 max-w-[1240px] m-auto'>
<div className=' flex flex-col justify-center md:items-start w-full px-2 py-8'>
  <p className=' text-2xl'>Unique Sequencing & Production</p>
  <h1 className=' py-3 text-5xl md:text-7xl font-bold'> Web Pentesting <span className=' text-yellow-200'>&</span> Network Analysis </h1>
  <p className=' text-2xl' >This is our Tech brand</p>
  <button className=' py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
</div>
<div>
  <img className='w-full' src={bg2Img} alt='imgage' />
</div>
{/* adding md breakpoint */}
{/* <div className='hidden md:absolute md:flex md:flex-col md:py-8 md:min-w-[760px] md:bottom-[-5%] md:mx-1 md:left-1/2 md:transform md:-translate-x-1/2 md:bg-zinc-200 md:border md:border-slate-300 md:rounded-xl md:text-center md:shadow-xl'>
  <p>Services</p>
  <div className=' flex justify-between flex-wrap px-4'>
    <p  className=' flex px-4 py-2 text-slate-500'><LockClosedIcon className=' h-6 text-indigo-600'/> Web Security</p>
    <p className=' flex px-4 py-2 text-slate-500'><DatabaseIcon className=' h-6 text-indigo-600'/> Secured Database</p>
    <p  className=' flex px-4 py-2 text-slate-500'><ServerIcon className=' h-6 text-indigo-600'/> Cloud Data</p>
    <p  className=' flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className=' h-6 text-indigo-600'/> API</p>
  </div>
</div> */}
     </div>

   </div>
  )
}

export default Hero