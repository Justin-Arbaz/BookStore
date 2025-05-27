import React from 'react';
import banner from '../../public/banner.png';

const Banner = () => {
  return (
    <>
      <div className=' max-w-screen-2xl mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1 flex flex-col justify-center'>
          <div className='space-y-6'>
            <h1 className='text-4xl font-bold'>Hello, here to learn something new <span className='text-pink-500'>everyday!!!</span></h1>
            <p className='text-gray-500 text-xl font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam, voluptatibus.</p>
            <div>
              <label className="input validator w-full">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="mail@site.com" required />
              </label>
              <div className="validator-hint hidden">Enter valid email address</div>
            </div>
          </div>
          <div className='mt-4'>
            <button className="btn btn-secondary">Secondary</button>
          </div>

        </div>
        <div className='w-full order-1 md:w-1/2  mt-12 md:mt-32'>
          <img src={banner} alt="" className='w-92 h-92 object-cover rounded-full mx-auto' />
        </div>

      </div>
    </>
  )
}

export default Banner