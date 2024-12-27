"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function FloatingGlobe() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      animate={{
        x: mousePosition.x + 2,
        y: mousePosition.y + 10,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 250,
        mass: 0.5
      }}
    >
      <Image
        src="/cat.png"
        alt="Floating Globe"
        width={34}
        height={34}
        className="w-10 h-10"
      />
    </motion.div>
  );
} 