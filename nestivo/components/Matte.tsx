'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Link from 'next/link'
import React, { useLayoutEffect } from 'react'
import DisplayCard from './DisplayCard'
import LookCard from './LookCard'
import TestCard from './Test'
import LookbookMobile from './LookbookMobile'

const images = ['chair_1', 'chair_2', 'chair_3', 'chair_4', 'chair_5']
const Matte = () => {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.to('.matte', {
          y: -30, // move it *down*
          scrollTrigger: {
            trigger: '.display',
            start: 'top center',
            end: '+=300',
            scrub: 1,
            toggleActions: 'play reverse play reverse',
          },
        });
      }, []);
      useGSAP(() => {
        gsap.to('.lookbook', {
          y: -30, // move it *down*
          scrollTrigger: {
            trigger: '.display',
            start: 'top center',
            end: '+=300',
            scrub: 1,
            toggleActions: 'play reverse play reverse',
          },
        });
      }, []);
  return (
    <section className='w-screen h-auto'>
        <div className='w-screen h-auto flex matte'>
            <div className='w-1/2 h-full hidden md:block'>
                <div className='flex flex-col gap-6 h-full justify-center items-center'>
                    <div className='flex items-start justify-start w-1/2'>
                        <p className='font-[family-name:var(--font-geist-mono)] hover:text-amber-400'>Matté Wood Chair</p>
                    </div>
                    <div className='flex flex-col items-start w-1/2 gap-3'>
                        <p className='font-[family-name:var(--font-geist-mono)] text-[10px]'>
                            Refinement Chair with Ripped Seat, made of retro Eucalyptus wood, of great resistance, Kiln dried, made with a spike system and painted with P.U. (Polyurethane) With its entire structure painted in wood, it offers a lot of elegance to your environment and when cleaning is very easy, as it is washable and light for movement. Enough of receiving visitors and not having a place to accommodate them. With the chair, your days as a host will be marked by a lot of elegance and sophistication.
                        </p>
                        <Link href="#" className="relative group">
                            <p className='text-black text-[10.5px] font-semibold'>VIEW PRODUCTS</p>
                            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        {/* <a href="#" className="relative group text-black">
                        Link Text
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </a> */}
                    </div>
                </div>
            </div>
            <div className='w-full md:w-1/2 h-full flex justify-center items-center'>
                <div className='w-5/6 h-5/6 flex flex-col gap-4'>
                    <img src='/chair_5.webp' alt='chair' className='w-full h-full hover:scale-[1.01] transition transition-all ease-in-out duration-200' />
                    <p className='font-[family-name:var(--font-geist-mono)] md:hidden hover:text-amber-400'>Matté Wood Chair</p>
                    <p className='font-[family-name:var(--font-geist-mono)] text-[10px] md:hidden'>
                        Refinement Chair with Ripped Seat, made of retro Eucalyptus wood, of great resistance, Kiln dried, made with a spike system and painted with P.U. (Polyurethane) With its entire structure painted in wood, it offers a lot of elegance to your environment and when cleaning is very easy, as it is washable and light for movement. Enough of receiving visitors and not having a place to accommodate them. With the chair, your days as a host will be marked by a lot of elegance and sophistication.
                    </p>
                        <Link href="#" className="relative group md:hidden">
                                <p className='text-black text-[10.5px] font-semibold'>VIEW PRODUCTS</p>
                                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                </div>
            </div>
        </div>

        {/*DISPLAY COMPONENT  */}
        <div className='w-screen h-[800px] relative display'>
            <img src='/bg_image.webp' alt='bg' className='w-full h-full object-cover' />
            <div className='absolute top-11 left-2.5 hidden md:block'>
                <DisplayCard img={'chair_5'} price={2999} name='MATTE WOOD CHAIR' />
            </div>
            <div className='absolute left-3/4 bottom-11 bg-white hidden md:block'>
                <DisplayCard img={'globe'} price={4999} name='DIVIT SPHERE' />
            </div>
        </div>

        {/* LOOKBOOK SECTION */}
        <div className='w-screen h-[550px] mt-7 md:flex lookbook'>
            <div className='md:hidden'>
                <LookbookMobile />
            </div>
            <div className='h-full w-8/12 hidden md:flex justify-center items-center'>
                <div className='w-1/2 h-10/12 flex flex-col justify-between items-center'>
                    <p className='font-[family-name:var(--font-geist-mono)] w-full text-center text-3xl'>LOOKBOOK</p>
                    <p className='font-[family-name:var(--font-geist-mono)] text-center text-[11px] w-full'>The pieces stand out for their contemporary staight lines and imposing presence. Current, following the world trend of the great masters, the furniture stands out for its noble and innovative materials, composing sophisticated and exclusive environmments</p>
                </div>
            </div>
            <div className='h-full w-4/12 hidden md:flex justify-center items-center'>
                <div className='w-11/12 h-full mr-3.5 flex items-center jutsify-center'>
                    <div className='w-full h-11/12'>
                            <div className='w-full h-7 mt-4 flex font-[family-name:var(--font-geist-mono)]'>
                                <div className='h-full w-1/2 flex items-center text-[11px] border-[0.1px] border-r-0'>ITEM</div>
                                <div className='h-full w-1/2 flex items-center justify-end text-[11px] border-[0.1px]'>DESCRIPTION</div>
                            </div>
                            {/* carousel */}
                            <div className='w-full h-9/12 flex justify-center items-center border-l-[0.1px] border-r-[0.1px] border-b-[0.1px]'>
                                <div className='w-full h-full'>
                                    <LookCard className='w-full h-full' images={images} />
                                </div>
                            </div> 
                            <div className='w-full h-7 flex justify-center items-center font-[family-name:var(--font-geist-mono)] border-[0.1px] border-t-0'>
                                <div className='w-11/12 h-full flex justify-center items-center'>
                                    <div className='h-full w-1/2 flex items-center text-[11px]'>MATERIALS</div>
                                    <div className='h-full w-1/2 flex items-center justify-end text-[11px]'>CERAMIC GLASS,IRON WOOD</div>
                                </div>
                            </div>
                            <div className='w-full h-7 flex justify-center items-center font-[family-name:var(--font-geist-mono)] border-[0.1px] border-t-0'>
                                <div className='w-11/12 h-full flex justify-center items-center'>
                                    <div className='h-full w-1/2 flex items-center text-[11px]'>PRODUCED IN</div>
                                    <div className='h-full w-1/2 flex items-center justify-end text-[11px]'>CANADA,ITALY,UNITED STATES</div>
                                </div>
                            </div>
                            <div className='w-full h-7 flex justify-center items-center font-[family-name:var(--font-geist-mono)] border-[0.1px] border-t-0'>
                                <div className='w-11/12 h-full flex justify-center items-center'>
                                    <div className='h-full w-1/2 flex items-center text-[11px]'>CATEGORIES</div>
                                    <div className='h-full w-1/2 flex items-center justify-end text-[11px]'>DECORATION,LAMP,FURNITURE</div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Matte