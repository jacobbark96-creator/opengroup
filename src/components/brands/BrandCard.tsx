"use client";

import { motion } from "framer-motion";
import { Brand } from "@/constants/brands";

interface BrandCardProps {
  brand: Brand;
  index: number;
}

export function BrandCard({ brand, index }: BrandCardProps) {
  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group bg-white p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-primary/30 transition-all duration-500 rounded-[2rem] flex flex-col items-center text-center relative overflow-hidden h-full cursor-pointer"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[4rem] -mr-8 -mt-8 group-hover:bg-primary/10 transition-colors duration-500" />
      
      <div className="flex items-center space-x-1 mb-3">
        <h3 className="font-display font-bold text-3xl text-black tracking-tight">{brand.name}</h3>
        <span className="w-2 h-2 bg-primary rounded-full mt-1.5 shadow-[0_0_8px_rgba(0,242,255,0.4)]" />
      </div>
      
      <p className="text-gray-400 font-medium text-xs uppercase tracking-[0.2em] mb-6 leading-relaxed px-4">
        {brand.tagline}
      </p>
      
      <div className="w-full h-[1px] bg-gray-100 mb-6 group-hover:bg-primary/20 transition-colors" />
      
      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors flex-grow">
        {brand.description}
      </p>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="mt-6 text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2"
      >
        {brand.url ? "Visit Website" : "Learn More"} <span className="text-lg">→</span>
      </motion.div>
    </motion.div>
  );

  if (brand.url) {
    return (
      <a href={brand.url} target="_blank" rel="noopener noreferrer" className="block h-full">
        {cardContent}
      </a>
    );
  }

  return <div className="block h-full">{cardContent}</div>;
}
