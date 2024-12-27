'use client';
import React from 'react'

function AutomationSection() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center relative py-20'>
      <div className='w-full max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
          {/* Left side - Text content */}
          <div className='space-y-8'>
            <p className='text-indigo-600 font-medium'>FEATURE</p>
            <h2 className='text-4xl md:text-5xl font-bold text-[#0a0a29]'>
              Automate Everything
            </h2>
            <p className='text-xl text-gray-600 max-w-lg'>
              Now that CopyCat learned how to do all your tasks, you'll be able to run any of your workflows at any time. Error-free and lightning-fast.
            </p>
          </div>

          {/* Right side - Task Stack UI */}
          <div className='relative'>
            {/* Stacked Cards */}
            <div className='relative w-full max-w-md mx-auto'>
              {/* Background Cards */}
              
              {/* Main Card */}
              <div className='relative bg-[#6B5ECD] rounded-lg p-6 pt-4'>
                <h3 className='text-xl text-white mb-4'>Save Client Info & Message The Team</h3>
                
                {/* Task Steps */}
                <div className='space-y-3'>
                  <div className='bg-white/10 rounded-lg p-4 flex items-start gap-3'>
                    <span className='bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0'>1</span>
                    <p className='text-sm text-white'>Find Client <span className='italic'>Name, Address</span> From Email</p>
                    <button className='ml-auto text-white'>⋮</button>
                  </div>

                  <div className='bg-white/10 rounded-lg p-4 flex items-start gap-3'>
                    <span className='bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0'>2</span>
                    <p className='text-sm text-white'>Save Client Info in <span className='italic'>google sheets</span></p>
                    <button className='ml-auto text-white'>⋮</button>
                  </div>

                  <div className='bg-white/10 rounded-lg p-4 flex items-start gap-3'>
                    <span className='bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0'>3</span>
                    <p className='text-sm text-white'>Send <span className='italic'>Lisa</span> Slack Message About Client</p>
                    <button className='ml-auto text-white'>⋮</button>
                  </div>

                  <div className='bg-white/10 rounded-lg p-4 flex items-start gap-3'>
                    <span className='bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0'>4</span>
                    <p className='text-sm text-white'>Book <span className='italic'>Lunch</span> Appointment With Client</p>
                    <button className='ml-auto text-white'>⋮</button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className='flex gap-2 mt-6'>
                  <button className='bg-[#4A4178] text-white px-4 py-2 rounded-lg text-sm'>Schedule</button>
                  <button className='bg-[#4A4178] text-white px-4 py-2 rounded-lg text-sm'>Run Workflow</button>
                  <button className='bg-[#4A4178] text-white px-4 py-2 rounded-lg text-sm'>Share</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AutomationSection 