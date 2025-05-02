import React from 'react'
import LookCard from './LookCard'

const images = ['chair_1', 'chair_2', 'chair_3', 'chair_4', 'chair_5']

const LookbookMobile = () => {
  return (
    <div className='h-auto w-full flex justify-center items-center'>
        <div className='w-10/12 h-10/12 flex flex-col justify-between items-center gap-12 mt-2.5'>
            <p className='font-[family-name:var(--font-geist-mono)] w-full text-center text-3xl'>LOOKBOOK</p>
            <p className='font-[family-name:var(--font-geist-mono)] text-center text-[11px] w-full'>The pieces stand out for their contemporary staight lines and imposing presence. Current, following the world trend of the great masters, the furniture stands out for its noble and innovative materials, composing sophisticated and exclusive environmments</p>
            <div className='w-full'>
                    <div className='w-full h-7 flex justify-center items-center font-[family-name:var(--font-geist-mono)] border-b-[0.1px]'>
                        <div className='w-11/12 h-full flex justify-center items-center'>
                            <div className='h-full w-1/2 flex items-center text-[11px]'>ITEM</div>
                            <div className='h-full w-1/2 flex items-center justify-end text-[11px]'>DESCRIPTION</div>
                        </div>
                    </div>
                    <div className='w-full h-7 flex justify-center items-center font-[family-name:var(--font-geist-mono)] border-t-[0.1px] border-b-[0.1px]'>
                        <div className='w-11/12 h-full flex justify-center items-center'>
                            <div className='h-full w-1/2 flex items-center text-[11px]'>MATERIALS</div>
                            <div className='h-full w-1/2 flex items-center justify-end text-[11px]'>CERAMIC GLASS,IRON WOOD</div>
                        </div>
                    </div>
                    <div className='w-full h-7 flex justify-center items-center font-[family-name:var(--font-geist-mono)] border-b-[0.1px]'>
                        <div className='w-11/12 h-full flex justify-center items-center'>
                            <div className='h-full w-1/2 flex items-center text-[11px]'>PRODUCED IN</div>
                            <div className='h-full w-1/2 flex items-center justify-end text-[11px]'>CANADA,ITALY,UNITED STATES</div>
                        </div>
                    </div>
                    <div className='w-full h-7 flex justify-center items-center font-[family-name:var(--font-geist-mono)] border-b-[0.1px]'>
                        <div className='w-11/12 h-full flex justify-center items-center'>
                            <div className='h-full w-1/2 flex items-center text-[11px]'>CATEGORIES</div>
                            <div className='h-full w-1/2 flex items-center justify-end text-[11px]'>DECORATION,LAMP,FURNITURE</div>
                        </div>
                    </div>
            </div>
            <div className='w-full mt-[-14px]'>
                <LookCard className='w-full h-auto' images={images} />
            </div>
        </div>
    </div>
  )
}

export default LookbookMobile