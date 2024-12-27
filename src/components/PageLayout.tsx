'use client';
import React from 'react'

interface PageLayoutProps {
  children: React.ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-blue-500/20">
      {children}
    </main>
  )
}

export default PageLayout 