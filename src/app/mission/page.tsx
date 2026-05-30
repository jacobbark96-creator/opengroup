"use client";

import { motion } from "framer-motion";
import { GROUP_MISSION } from "@/constants/brands";
import { Target, Compass, Award, Heart } from "lucide-react";

export default function Mission() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center py-32 px-6 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=abstract+geometric+digital+network+cyan+lines+and+dots+connecting+globally+high+tech+minimalist+black+background&image_size=landscape_16_9"
            alt="Mission Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-white" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-display text-6xl md:text-8xl font-black mb-8 tracking-tighter"
          >
            Mission & <span className="text-primary">Values</span>
          </motion.h1>
          <p className="text-3xl font-light max-w-3xl mx-auto italic text-gray-200 leading-tight">
            "{GROUP_MISSION}"
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-black">
                <Target size={32} />
              </div>
              <h3 className="font-bold text-xl mb-4">Focus</h3>
              <p className="text-gray-500">Unwavering dedication to our clients' business objectives and success metrics.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-black">
                <Compass size={32} />
              </div>
              <h3 className="font-bold text-xl mb-4">Integrity</h3>
              <p className="text-gray-500">Operating with transparency and honesty in every interaction across our group.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-black">
                <Award size={32} />
              </div>
              <h3 className="font-bold text-xl mb-4">Excellence</h3>
              <p className="text-gray-500">Striving for the highest quality in every solution and service we provide.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-black">
                <Heart size={32} />
              </div>
              <h3 className="font-bold text-xl mb-4">Community</h3>
              <p className="text-gray-500">Building strong, supportive networks that empower businesses and individuals alike.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
