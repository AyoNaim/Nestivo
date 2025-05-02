import Image from 'next/image'
import React from 'react'

type CardProps = {
    img: string,
    price: number,
    name: string,
    className?: string
}

const DisplayCard = ({img, price, name, className}: CardProps) => {
  return (
    <div className={`${className} !important bg-white w-64 h-80 flex justify-center items-center`}>
        <div className='w-11/12 h-11/12 flex flex-col justify-center items-center gap-3.5'>
                <Image
                    src={`/${img}.webp`}
                    alt="img1"
                    width={180}
                    height={150}
                    loading='lazy'
                    className="w-full h-full"
                />
                <div className='flex justify-between w-full'>
                    <p className='text-[10px]'>{name}</p>
                    <p className='text-[10px]'>{price}</p>
                </div>
        </div>
    </div>
  )
}

export default DisplayCard