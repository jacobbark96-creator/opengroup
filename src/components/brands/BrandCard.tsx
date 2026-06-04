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
      whileHover={{ y: -6, scale: 1.02 }}
      className="group bg-white p-6 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(0,242,255,0.1)] hover:border-primary/40 transition-all duration-500 rounded-3xl flex flex-col items-center text-center relative overflow-hidden h-full cursor-pointer z-10"
    >
      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-[2rem] -mr-4 -mt-4 group-hover:bg-primary/20 group-hover:scale-150 transition-all duration-700 ease-out" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex items-center space-x-1 mb-2 relative z-10">
        <h3 className="font-display font-bold text-2xl text-black tracking-tight">{brand.name}</h3>
        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 group-hover:scale-150 transition-transform duration-300 ${brand.id === 'openenergy' ? 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]' : 'bg-primary shadow-[0_0_8px_rgba(0,242,255,0.6)]'}`} />
      </div>
      
      <p className="text-gray-400 font-semibold text-[9px] uppercase tracking-[0.2em] mb-4 leading-relaxed px-2 relative z-10">
        {brand.tagline}
      </p>
      
      <div className="w-12 h-[2px] bg-gray-100 mb-4 group-hover:bg-primary group-hover:w-full transition-all duration-500 relative z-10" />
      
      <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 group-hover:text-gray-800 transition-colors flex-grow relative z-10">
        {brand.description}
      </p>
      
      <motion.div 
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 1, x: 5 }}
        className="mt-4 text-primary text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 relative z-10"
      >
        {brand.url ? "Visit Website" : "Learn More"} <span className="text-sm">→</span>
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
