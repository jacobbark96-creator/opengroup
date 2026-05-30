"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LogoItem {
  name: string;
  url?: string;
}

interface LogoCarouselProps {
  title: string;
  logos: LogoItem[];
  reverse?: boolean;
}

export function LogoCarousel({ title, logos, reverse = false }: LogoCarouselProps) {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h3 className="text-center text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400">
          {title}
        </h3>
      </div>
      
      <div className="relative flex">
        <motion.div
          initial={{ x: reverse ? "-33.33%" : "0" }}
          animate={{ x: reverse ? "0" : "-33.33%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-16 md:gap-32 items-center"
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default select-none"
            >
              {logo.url ? (
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-8 md:h-12 w-auto object-contain"
                />
              ) : (
                <span className="text-2xl md:text-4xl font-display font-black text-gray-200 tracking-tighter">
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
