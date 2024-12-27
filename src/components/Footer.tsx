'use client';
import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer className='w-full py-12 border-t border-gray-100'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col items-center gap-4'>
        {/* Logo */}
        <Image 
          src="/cat.png"  // Replace with your cat logo
          alt="CopyCat Logo"
          width={40}
          height={40}
          className='mb-2'
        />
        
        {/* Tagline */}
        <p className='text-gray-600 text-lg'>
          Screen Recordings to Workflows in Seconds
        </p>
        
        {/* Copyright */}
        <p className='text-gray-400 text-sm mt-4'>
          CopyCat • Copyright © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer 