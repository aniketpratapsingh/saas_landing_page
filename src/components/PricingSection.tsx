'use client';
import React from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'

function PricingSection() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center py-20'>
      <div className='text-center max-w-3xl mx-auto px-4 mb-16'>
        <h2 className='text-4xl md:text-5xl font-bold text-[#0a0a29] mb-4'>
          Pricing
        </h2>
        <p className='text-xl text-gray-600'>
          Choose your ideal plan. No obligation, cancel anytime.
        </p>
      </div>

      <div className='w-full max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Starter Plan */}
          <div className='bg-white rounded-2xl p-8 shadow-sm border border-gray-200'>
            <h3 className='text-lg font-medium text-gray-600 mb-4'>Starter</h3>
            <div className='mb-6'>
              <span className='text-6xl font-bold'>Free</span>
            </div>
            <ul className='space-y-4'>
              <li className='flex items-center gap-3'>
                <CheckIcon className='w-5 h-5 text-gray-600' />
                <span className='text-gray-600'>50 Workflow Runs</span>
              </li>
              <li className='flex items-center gap-3'>
                <CheckIcon className='w-5 h-5 text-gray-600' />
                <span className='text-gray-600'>Limited Process Analytics</span>
              </li>
            </ul>
          </div>

          {/* Pro Plan */}
          <div className='bg-white rounded-2xl p-8 shadow-sm border border-gray-200'>
            <h3 className='text-lg font-medium text-gray-600 mb-4'>Pro</h3>
            <div className='mb-6'>
              <span className='text-6xl font-bold'>$30</span>
              <span className='text-gray-600 ml-2'>/month per user</span>
            </div>
            <ul className='space-y-4'>
              <li className='flex items-center gap-3'>
                <CheckIcon className='w-5 h-5 text-gray-600' />
                <span className='text-gray-600'>Unlimited Workflow Runs</span>
              </li>
              <li className='flex items-center gap-3'>
                <CheckIcon className='w-5 h-5 text-gray-600' />
                <span className='text-gray-600'>Basic Customer Support</span>
              </li>
              <li className='flex items-center gap-3'>
                <CheckIcon className='w-5 h-5 text-gray-600' />
                <span className='text-gray-600'>Basic Process Analytics</span>
              </li>
              <li className='flex items-center gap-3'>
                <CheckIcon className='w-5 h-5 text-gray-600' />
                <span className='text-gray-600'>Basic Collaboration Features</span>
              </li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className='bg-white rounded-2xl p-8 shadow-sm border border-gray-200'>
            <h3 className='text-lg font-medium text-gray-600 mb-4'>Enterprise</h3>
            <div className='mb-6'>
              <span className='text-xl font-medium text-indigo-600 flex items-center gap-2'>
                Talk to a Founder 🚀
              </span>
            </div>
            <ul className='space-y-4'>
              <li className='flex items-center gap-3'>
                <CheckIcon className='w-5 h-5 text-gray-600' />
                <span className='text-gray-600'>Unlimited Workflow Runs</span>
              </li>
              <li className='flex items-center gap-3'>
                <CheckIcon className='w-5 h-5 text-gray-600' />
                <span className='text-gray-600'>Enterprise Customer Support</span>
              </li>
              <li className='flex items-center gap-3'>
                <CheckIcon className='w-5 h-5 text-gray-600' />
                <span className='text-gray-600'>Advanced Process Analytics</span>
              </li>
              <li className='flex items-center gap-3'>
                <CheckIcon className='w-5 h-5 text-gray-600' />
                <span className='text-gray-600'>Advanced Collaboration Features</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingSection 