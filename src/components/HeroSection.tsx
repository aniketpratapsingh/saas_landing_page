"use client";
import React from 'react'
import { Button } from './ui/moving-border'
import Link from 'next/link'
import { FadeUp } from './ui/fade-up'

function HeroSection() {
  return (
    <div className='min-h-[calc(100vh-4rem)] w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-8 px-4 md:py-0 mt-16'>
      <div className='relative z-10 w-full text-center'>
        <FadeUp>
          <h1 className='text-4xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 max-w-3xl mx-auto leading-[1.2] sm:leading-[1.1]'>
            Record a Task Once
            <br />
            Automate It Forever
          </h1>
        </FadeUp>
        
        <FadeUp delay={0.1}>
          <p className='mt-4 text-base sm:text-lg text-neutral-600 max-w-xl mx-auto px-4 sm:px-0'>
            CopyCat lets you show your computer how to do something once, and then it&apos;ll be able to do it forever
          </p>
        </FadeUp>
        
        <FadeUp delay={0.2}>
          <div className='mt-8'>
            <Link href="/contact">
              <Button
                borderRadius="0.5rem"
                className="bg-indigo-600 hover:bg-indigo-700 text-white border-0 font-medium text-sm sm:text-base w-full sm:w-auto px-4"
              >
                Early Access Beta →
              </Button>
            </Link>
          </div>
        </FadeUp>
        
        <FadeUp delay={0.3}>
          <div className='mt-8 sm:mt-12 text-center'>
            <p className='text-xs sm:text-sm text-gray-600 mb-2'>Backed By</p>
            <div className='flex items-center justify-center gap-2'>
              <div className='bg-[#141414] w-12 sm:w-14 h-6 sm:h-8 flex items-center justify-center text-white font-bold text-sm sm:text-base'>
                POGO
              </div>
              <span className='text-[#141414] text-lg sm:text-xl font-medium'>Ventures</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  )
}

export default HeroSection
