import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type CardProps = {
    images?: string[],
    className?: string
}

const LookCard = ({className, images = []}: CardProps) => {
    const [currentIndex, setcurrentIndex] = useState(0);
    useEffect(() => {
        if (!images || images.length === 0) return;
        const interval = setInterval(() => {
            setcurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 1000)
        return () => clearInterval(interval)
    }, [images])
    if (!images || images.length === 0) return null;
  
    return (
    <div className={`${className} !important bg-white w-64 h-[200px] flex justify-center items-center`}>
        <div className='w-11/12 h-11/12 flex flex-col justify-center items-center gap-3.5'>
                <Image
                    src={`/${images[currentIndex]}.webp`}
                    alt="img1"
                    width={180}
                    height={150}
                    loading='lazy'
                    className="w-full h-11/12 object-cover"
                />
                <div className='flex justify-between w-full'>
                    <Link href="#" className="relative group">
                        <p className='text-black text-[10.5px]'>SEE LOOKBOOK</p>
                        <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="#" className="relative group">
                        <p className='text-black text-[10.5px]'>SEE ALL</p>
                        <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>
        </div>
    </div>
  )
}

export default LookCard