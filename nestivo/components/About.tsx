'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'
import React, { useLayoutEffect } from 'react'
import { Button } from './ui/button'

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    gsap.to('.about', {
      y: -500,
      height: 0,
      padding: 0,
      marginBottom: 0,
      scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        end: '+=410',
        scrub: 1,
        toggleActions: 'play reverse play reverse'
      }
    })
  }, [])
  return (
    <div>
      <div className='w-full h-[1350px] flex about z-40'>
        <div className='h-full w-1/3 flex justify-center items-center'>
          <div className='w-full h-2/3 flex flex-col justify-between gap-20 items-center'>
            <Image
                src="/lamppost.webp"
                alt="img1"
                width={180}
                height={150}
                className=""
                loading='lazy'
              />
              <Image
                src="/table.webp"
                alt="img1"
                width={310}
                height={310}
                loading='lazy'
                className=""
              />            
          </div>
        </div>
        <div className='h-full w-2/3 md:w-1/3 flex flex-col gap-6 items-center'>
          <div>
          <Image
              src="/lamp.jpg"
              alt="img1"
              width={300}
              height={220}
              loading='lazy'
              className="w-[220px] h-[170px] md:w-[300px] md:h-[220px]"
            />
          </div>
          <div className='flex flex-col justify-between items-center gap-3'>
            <p className='font-[family-name:var(--font-geist-mono)] text-4xl text-center'>
              CREATING PERFECT LINES AND IMPOSING PRESENCE
            </p>
            <p className='text-center font-[family-name:var(--font-geist-mono)] text-[11px] leading-3.5'>Developed the concept of exclusivity, a Nestivo features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present.</p>
            <Button variant={'secondary'} className='w-24 h-7 rounded-[2px] border-[0.1px]'><p className='text-center font-[family-name:var(--font-geist-mono)] text-[10px]'>READ ABOUT US</p></Button>
          </div>
        </div>
        <div className='relative h-full w-1/3 flex flex-col items-center md:gap-6 gap-28'>
          <Image
              src="/bedlight.webp"
              alt="img1"
              width={160}
              height={120}
              loading='lazy'
            />
            <Image
              src="/bag.webp"
              alt="img1"
              width={180}
              height={150}
              loading='lazy'
              className="w-[120px] h-[100px]"
            />
            <Image
              src="/sink.webp"
              alt="img1"
              width={280}
              height={120}
              loading='lazy'
              className="hidden md:block"
            />
        </div>
      </div>
    </div>
  )
}

export default About