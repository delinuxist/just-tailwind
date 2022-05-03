import React,{useState} from 'react'
import { Link } from 'react-scroll'

import {MenuIcon,XIcon} from "@heroicons/react/outline"

const Navbar = () => {
  const [nav,setNav] = useState(false);
  const handleClick=()=> setNav(!nav)
  const handleClose=()=> setNav(!nav);


  return (
    <div  className='w-screen h-[80px] z-10 fixed bg-yellow-50 drop-shadow-lg '>
      <div className='flex items-center justify-between w-full h-full px-2 '>
        <div className='flex items-center ' >
          <div className='flex flex-col items-center '>
          <h1 className='mr-4 text-3xl font-bold  sm:text-4xl'>Cyber<span className='text-gray-600 '>Corp</span></h1>
          <h2 className='text-xs '>Security</h2>
          </div>
          <ul className='hidden  md:flex'>
            <li>
            <Link  to="home"  smooth={true}  duration={-200} >
          Home
        </Link>
            </li>
            <li>
            <Link  to="about"  smooth={true} offset={-200} duration={500} >
          About
        </Link>
            </li>
            <li>
            <Link  to="support"  smooth={true} offset={-50} duration={500} >
          Support
        </Link>
            </li>
            <li>
            <Link  to="platforms"  smooth={true} offset={-100} duration={500} >
          Platforms
        </Link> </li>
            <li>
            <Link  to="pricing"  smooth={true} offset={-50} duration={500} >
          Pricing
        </Link>
            </li>
          </ul>
        </div>
        <div className='hidden pr-4  md:flex'>
          <button  className='mr-4 text-black bg-transparent border-none '>
            Sign In
          </button>
          <button className='px-8 py-3 '>
            Sign Up
          </button>
        </div>
        <div onClick={handleClick} className='md:hidden '>
        {nav ?<XIcon className='w-5 mr-4'/>: <MenuIcon className='w-5 mr-4 '/> }
        </div>
      </div>

      <ul className={nav ? ' absolute bg-zinc-200 w-full px-8 text-center':"hidden"}>
      <li className='w-full border-b-2  border-zinc-300'>
            <Link onClick={handleClose}  to="home" spy={true} smooth={true}  duration={-200} >
          Home
        </Link>
            </li>
            <li className='w-full border-b-2  border-zinc-300'>
            <Link onClick={handleClose}  to="about" spy={true} smooth={true} offset={-200} duration={500} >
          About
        </Link>
            </li>
            <li className='w-full border-b-2  border-zinc-300'>
            <Link onClick={handleClose}  to="support" spy={true} smooth={true} offset={-50} duration={500} >
          Support
        </Link>
            </li>
            <li className='w-full border-b-2  border-zinc-300'>
            <Link onClick={handleClose}  to="platforms" spy={true} smooth={true} offset={-100} duration={500} >
          Platforms
        </Link> </li>
            <li className='w-full border-b-2  border-zinc-300'>
            <Link onClick={handleClose}  to="pricing" spy={true} smooth={true} offset={-50} duration={500} >
          Pricing
        </Link>
            </li>
           
            <div className='flex flex-col my-4'>
            <button  className='px-8 py-3 mb-4 text-indigo-600 bg-transparent '>
            Sign In
          </button>
          <button className='px-8 py-3 '>
            Sign Up
          </button>
            </div>
      </ul>
     
    </div>
  )
}

export default Navbar;