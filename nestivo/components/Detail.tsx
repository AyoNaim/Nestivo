import React from 'react'

const Detail = () => {
  return (
    <div className='h-[490px] w-screen border-b-[0.1px] flex'>
      <div className='w-16 h-full border-r-[0.1px] hidden md:block'>
        <div className='w-full h-4/5 flex justify-center items-end'>
          <p className='rotate-270 text-2xl font-[family-name:var(--font-geist-mono)]'>DETAILS</p>
        </div>
      </div>
      <div className='h-full w-full border-b-[0.1px] flex justify-center items-center'>
        <div className='w-11/12 md:h-3/5 md:w-1/2 flex flex-col items-center gap-12'>
          <div className='flex justify-center items-center flex-col gap-5'>
            <p className='font-[family-name:var(--font-geist-mono)] text-3xl'>EVERY DETAIL MATTER</p>
            <p className='text-center text-[12px] md:text-sm font-[family-name:var(--font-geist-mono)] leading-tight tracking-tight'>WE ARE SPECIALIZED IN ADORNMENTS, THAT BRING CHARM TO ANY ENVIRONMENT.</p>
          </div>
          <div className='font-[family-name:var(--font-geist-mono)]'>
            <p className='text-center text-[11px]'>There are multiples of high quality pieces, with styles that transition from classic to contemporary. An exclusive selection of lampshades, vases, murals, pillows, paintings and many gifts to compose great projects. In order selection, a mix of basic style, stricter customization and more compact dimensions, composing sophisticated and exclusive environments.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail