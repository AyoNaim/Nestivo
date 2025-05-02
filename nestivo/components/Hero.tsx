import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Button } from './ui/button'

const Hero = () => {
  useGSAP(() => {
    gsap.from('.hero-item', {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 4,
        ease: 'power1.inOut',
        stagger: 0.9
    })
}, [])
  return (
    <div className='hero-item text-white text-center hero-item flex flex-col gap-10 justify-center items-center h-7/12'>
      <p className='font-[family-name:var(--font-geist-mono)] text-6xl w-full tracking-tighter'>
        SEAMLESS FURNITURE<br/> WITH NATURAL FABRICS
      </p>
      <Button variant={'secondary'} className='font-[family-name:var(--font-geist-mono)]'>Shop All</Button>
    </div>
  )
}

export default Hero