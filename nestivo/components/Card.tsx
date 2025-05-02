import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

type cardProps = {
    img: string,
    price: number,
    name: string,
    className?: string
}
const Card = ({img, price, name, className}: cardProps) => {
  return (
    <div className={`${className} !important w-full md:w-1/4 h-64 md:h-96 border-[0.1px] flex justify-center items-center`}>
        <div className='w-11/12 h-5/6 flex flex-col gap-2'>
            <div className='w-full h-5/6 md:h-full'>
                <Image
                    src={`/${img}.webp`}
                    alt="img1"
                    width={180}
                    height={150}
                    loading='lazy'
                    className="w-full h-full"
                />
            </div>
            <div className='w-full h-32 md:h-auto flex flex-col md:flex-row justify-between gap-2.5 md:gap-0'>
                <p className='text-[11px] md:text-sm'>{name}</p>
                <p className='text-[11px] md:text-sm'>${price}</p>
            </div>
        </div>
    </div>
  )
}

export default Card