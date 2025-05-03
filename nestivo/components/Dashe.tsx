import Image from 'next/image'
import React from 'react'

const Dashe = () => {
  return (
    <div className='h-[530px] w-screen border-b-[0.1px] flex'>
      <div className='w-16 h-full border-r-[0.1px] hidden md:block'>
        <div className='w-full h-4/5 flex justify-center items-end'>
          <p className='rotate-270 text-2xl font-[family-name:var(--font-geist-mono)]'>DETAILS</p>
        </div>
      </div>
      <div className='h-full w-full border-b-[0.1px] flex justify-center items-center'>
        <div className='w-8/12 h-full flex justify-center items-center'>
          <div className='w-11/12 h-11/12 relative'>
          <img
            src='/bg-frame.png'
            alt='image'
            className='w-full h-full'
          />
          <p className='absolute left-2.5 top-2.5 text-[10px]'>SOPHISTICATED DETAILS</p>
          </div>
        </div>
        <div className='w-4/12 h-full mr-[10px]'>
          <div className='w-full h-5/12 flex justify-center items-center'>
            <div className='w-11/12 h-11/12 relative'>
              <img
                src='/dashe.webp'
                alt='image'
                className='video-bg w-full h-full object-cover'
              />
              <p className='absolute left-2.5 top-2.5 text-[10px]'>CENTURY DASHE</p>
            </div>
          </div>
          <div className='w-full h-7/12 flex justify-center items-center'>
          <div className='w-11/12 h-11/12 relative'>
              <img
                src='/chair_3.webp'
                alt='image'
                className='video-bg w-full h-full object-cover'
              />
              <p className='absolute left-2.5 top-2.5 text-[10px]'>NATIVE LIGHT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashe