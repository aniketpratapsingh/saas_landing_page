'use client';
import React from 'react'

function TaskVisualizationSection() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center relative py-20'>
      <div className='w-full max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
          {/* Left side - Task UI */}
          <div className='relative aspect-square w-full max-w-md mx-auto'>
            <div className='bg-[#6B5ECD] rounded-lg p-6 w-full h-full text-white'>
              <h3 className='text-xl mb-6'>Send Pics of Cats to Steven</h3>
              
              {/* Task Steps */}
              <div className='space-y-4'>
                <div className='bg-white/10 rounded-lg p-4 flex items-start gap-3'>
                  <span className='bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0'>1</span>
                  <p className='text-sm'>Find pictures of cats on google</p>
                  <button className='ml-auto'>⋮</button>
                </div>

                <div className='bg-white/10 rounded-lg p-4 flex items-start gap-3'>
                  <span className='bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0'>2</span>
                  <p className='text-sm'>Save them in the <span className='italic'>personal</span> google drive</p>
                  <button className='ml-auto'>⋮</button>
                </div>

                <div className='bg-white/10 rounded-lg p-4 flex items-start gap-3'>
                  <span className='bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0'>3</span>
                  <p className='text-sm'>Email the drive to <span className='underline'>Steven</span></p>
                  <button className='ml-auto'>⋮</button>
                </div>
              </div>

              {/* Add Step Button */}
              <button className='mt-6 w-full h-12 rounded-lg border border-white/20 flex items-center justify-center'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className='space-y-8 lg:pl-10'>
            <p className='text-indigo-600 font-medium'>FEATURE</p>
            <h2 className='text-4xl md:text-5xl font-bold text-[#0a0a29]'>
              AI Task Visualization
            </h2>
            <p className='text-xl text-gray-600 max-w-lg'>
              Using AI, the task you recorded will get turned into a smart visualization that lets you see exactly what steps CopyCat learned from you.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskVisualizationSection 