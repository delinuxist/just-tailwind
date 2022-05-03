import React from 'react'

const About = () => {
  return (
    <div name="about" className='  w-full my-32'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
          <h2 className=' text-5xl font-bold'>Trusted By Companies Across The World</h2>
          <p className=' text-gray-400 text-3xl py-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio delectus dignissimos, quis quisquam voluptates a sit? Architecto ad voluptatibus dolores labore, necessitatibus dolor, soluta, aut debitis sit eum consequatur illum.</p>
        </div>
        <div className=' grid md:grid-cols-3 py-3 gap-3 text-center px-4'>
          <div className=' hover:ring hover:ring-slate-400 py-8 rounded-xl shadow-xl '>
            <p className=' text-6xl text-yellow-400 font-bold '>100%</p>
            <p className=' text-gray-400 mt-2'>Completion</p>
          </div>
          <div className=' hover:ring hover:ring-slate-400 py-8 rounded-xl shadow-xl '>
            <p className=' text-6xl text-yellow-400 font-bold '>24/7</p>
            <p className=' text-gray-400 mt-2'>Delivery</p>
          </div>
          <div className=' hover:ring hover:ring-slate-400 py-8 rounded-xl shadow-xl '>
            <p className=' text-6xl text-yellow-400 font-bold '>10K</p>
            <p className=' text-gray-400 mt-2'>Web Secured</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About