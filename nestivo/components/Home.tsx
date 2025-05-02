'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Loading = ({ loading }: { loading: number }) => {
  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <p className='font-[family-name:var(--font-geist-mono)]'>Nestivo</p>
      {loading}%
    </div>
  )
}

const Home = () => {
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(true)
  const container = useRef(null)
  const [showImages, setShowImages] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [imgLoaded, setimgLoaded] = useState(false)

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + Math.floor(Math.random() * 10 + 1), 100))
      }, 200)
      return () => clearInterval(interval)
    } else {
      const timeout = setTimeout(() => {
        setLoading(false)
        setShowImages(true) // Start showing images after loading is done
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [progress])

  // GSAP animation for images
  useEffect(() => {
    if (showImages) {
      gsap.from('.animated-img', {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        stagger: 0.6,
        ease: 'power1.inOut'
      })
    }
  }, [showImages])

  // After the images are shown and animated, show the main content after 3.5 seconds
  useEffect(() => {
    if (showImages) {
      gsap.delayedCall(3.5, () => {
         // Show main content after 3.5 seconds
         gsap.to('.image-wrapper', {
          y: -400,
          opacity: 0,
          duration: 1.5,
          ease: 'power2.inOut',
          onComplete: () => setShowContent(true)
         })
      })
    }
  }, [showImages]);

  useEffect(() => {
    if (showContent && imgLoaded) {
      gsap.fromTo('.video-bg', { scale: 1.5, opacity: 0 }, { opacity: 1, scale: 1, duration: 3, ease: 'power2.inOut', delay: 0.5 })
    }
  }, [showContent, imgLoaded]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: 'pinned',
        start: 'top top',
        end: '+=100',
        pin: true,
        pinSpacing: false,
        scrub: true
      })
    })
    return () => ctx.revert()
  }, [])

  // useGSAP(() => {
  //   gsap.fromTo('.video-bg', { scale: 1.5 }, { scale: 1, duration: 3, ease: 'power2.inOut' })
  // }, [])

  return (
    <div ref={container} className='flex justify-center items-center loading w-full h-full'>
      {loading ? (
        <Loading loading={progress} />
      ) : !showContent ? (
        <div className='flex justify-center items-center w-[500px] h-[500px]'>
            <div className="image-wrapper relative w-[450px] h-[450px] mx-auto">
            <Image
                src="/loading-img-5.webp"
                alt="img1"
                width={120}
                height={120}
                className="animated-img absolute top-[10px] right-[-10px] z-20"
            />
            <Image
                src="/loading-img-3.webp"
                alt="img2"
                width={180}
                height={180}
                className="animated-img absolute top-[100px] left-[-20px] z-20"
            />
            <Image
                src="/loading-img-4.webp"
                alt="img2"
                width={80}
                height={80}
                className="animated-img absolute top-[250px] z-20"
            />
            <Image
                src="/loading-img.webp"
                alt="img2"
                width={450}
                height={450}
                className="animated-img absolute bottom-16 left-2 z-10"
            />
            </div>
            </div>
      ) : (
        <div className="relative w-screen h-full overflow-hidden">
          <img
            src='/bg-frame.png'
            alt='image'
            className='video-bg pinned absolute top-0 left-0 w-full h-full object-cover z-[-1] scale-[1.5] opacity-0'
            onLoad={() => setimgLoaded(true)}
          />
            <Navbar />
            <Hero />
        </div>
      )}
    </div>
  )
}

export default Home
