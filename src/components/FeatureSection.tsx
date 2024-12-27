'use client'
import React from 'react'
import Image from 'next/image'

function FeatureSection() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center relative py-20'>
      <div className='w-full max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
          {/* Left side - Text content */}
          <div className='space-y-8'>
            <p className='text-indigo-600 font-medium'>FEATURE</p>
            <h2 className='text-4xl md:text-5xl font-bold text-[#0a0a29]'>
              Record Your Screen
            </h2>
            <p className='text-xl text-gray-600 max-w-lg'>
              CopyCat will watch what you do as you go through a task, learning how to do it each step of the way.
            </p>
          </div>

          {/* Right side - Image/Screenshot */}
          <div className='relative aspect-[16/10] w-full'>
            <div className='w-full h-full rounded-lg overflow-hidden border border-gray-200 shadow-2xl'>
              <Image
                src="/screenshot.png" // Add your screenshot image
                alt="Screen Recording Feature"
                fill
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection 