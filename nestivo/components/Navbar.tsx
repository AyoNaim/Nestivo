import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { MobileNav } from './MobileNav'

const Navbar = () => {
    useGSAP(() => {
        gsap.from('.nav-item', {
            y: 20,
            opacity: 0,
            duration: 1,
            delay: 3,
            ease: 'power1.inOut',
            stagger: 0.9
        })
    }, [])
  return (
    <nav className='nav-item flex justify-center items-center w-screen h-20'>
        <div className='flex justify-between items-center w-11/12 md:w-11/12'>
          <div className='md:flex md:justify-between md:items-center hidden font-[family-name:var(--font-geist-mono)]'>
            <MobileNav />
            <Link href={'./shop'} className='w-28 h-12 text-white flex justify-center items-center'>SHOP</Link>
          </div>
          {/* <div className={`md:flex md:justify-between md:items-center gap-3 hidden font-[family-name:var(--font-geist-mono)]`}>
            <Link href={'./about'} className='w-28 h-12 flex justify-center items-center font-semibold'>About</Link>
          </div> */}
          <div>
            <Link href={'./'} className='mt-3 md:mr-28 w-16 h-12 flex justify-center items-center gap-3'>
              <Image src={'./logo.svg'} alt='file' width={30} height={30} />
              <p className='font-[family-name:var(--font-geist-mono)] text-white'>Nestivo</p>
            </Link>
          </div>
          <div className={`font-[family-name:var(--font-geist-mono)]`}>
            <Link href={'./bag'} className='w-28 h-12 text-white flex justify-center items-center'>Bag</Link>
          </div>
        </div>
    </nav>
  )
}

export default Navbar