'use client';
import React, { useState } from "react";
import { Menu } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

function Navbar({ className }: { className?: string }) {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <div className={cn("fixed top-0 inset-x-0 h-16 bg-white/80 backdrop-blur-sm z-50 border-b border-black/10", className)}>
            <div className="flex items-center h-full max-w-5xl mx-auto px-4">
                <Link href="/" className="flex items-center md:absolute md:left-1/2 md:-translate-x-[168px]">
                    <Image 
                        src="/cat.png"
                        alt="Logo"
                        width={32}
                        height={32}
                    />
                </Link>
                
                <button 
                    className="md:hidden ml-auto"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                <nav className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
                    <Link 
                        href="/" 
                        className={cn(
                            "text-sm font-medium transition-colors",
                            pathname === "/" ? "text-black" : "text-gray-500 hover:text-gray-800"
                        )}
                    >
                        Home
                    </Link>
                    <Link 
                        href="/pricing" 
                        className={cn(
                            "text-sm font-medium transition-colors",
                            pathname === "/pricing" ? "text-black" : "text-gray-500 hover:text-gray-800"
                        )}
                    >
                        Pricing
                    </Link>
                    <Link 
                        href="/contact" 
                        className={cn(
                            "text-sm font-medium transition-colors",
                            pathname === "/contact" ? "text-black" : "text-gray-500 hover:text-gray-800"
                        )}
                    >
                        Contact
                    </Link>
                </nav>

                {isMenuOpen && (
                    <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 md:hidden">
                        <div className="flex flex-col p-4">
                            <Link 
                                href="/" 
                                className={cn(
                                    "py-2 text-sm font-medium transition-colors",
                                    pathname === "/" ? "text-black" : "text-gray-500"
                                )}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link 
                                href="/pricing" 
                                className={cn(
                                    "py-2 text-sm font-medium transition-colors",
                                    pathname === "/pricing" ? "text-black" : "text-gray-500"
                                )}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Pricing
                            </Link>
                            <Link 
                                href="/contact" 
                                className={cn(
                                    "py-2 text-sm font-medium transition-colors",
                                    pathname === "/contact" ? "text-black" : "text-gray-500"
                                )}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar