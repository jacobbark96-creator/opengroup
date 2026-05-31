"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  const handleImageError = (name: string) => {
    setFailedLogos((prev) => ({ ...prev, [name]: true }));
  };

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
          className="flex whitespace-nowrap gap-8 md:gap-16 items-center"
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center justify-center min-w-[100px] md:min-w-[150px]"
            >
              {logo.url && !failedLogos[logo.name] ? (
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-8 md:h-12 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  onError={() => handleImageError(logo.name)}
                />
              ) : (
                <span className="text-xl md:text-2xl font-display font-black text-gray-300 tracking-tighter hover:text-primary transition-colors cursor-default select-none">
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
