"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users, Rocket } from "lucide-react";
import Link from "next/link";

export default function Careers() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center py-32 px-6 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=diverse+group+of+young+professionals+collaborating+in+a+high-end+modern+office+sunlight+creative+energy&image_size=landscape_16_9"
            alt="Careers Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-white" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-8xl font-black mb-8 tracking-tighter"
          >
            Shape the <span className="text-primary">Future</span>
          </motion.h1>
          <p className="text-2xl text-gray-200 max-w-2xl mx-auto mb-12 font-light italic">
            "Join a dynamic group of brands where innovation and collaboration are at the heart of everything we do."
          </p>
          <Link
            href="#openings"
            className="bg-primary text-black px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all duration-300 shadow-[0_20px_40px_rgba(0,242,255,0.3)]"
          >
            Explore Open Positions
          </Link>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-16">Why The Open Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6 p-8 rounded-2xl bg-gray-50">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                <Rocket size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Growth Opportunities</h3>
                <p className="text-gray-500">With 14 diverse brands, the possibilities for cross-brand movements and career advancement are endless.</p>
              </div>
            </div>
            <div className="flex gap-6 p-8 rounded-2xl bg-gray-50">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Diverse Culture</h3>
                <p className="text-gray-500">We celebrate diversity and foster an inclusive environment where every voice is heard and valued.</p>
              </div>
            </div>
            <div className="flex gap-6 p-8 rounded-2xl bg-gray-50">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                <p className="text-gray-500">Through OpenAcademy, we provide world-class training and development programs to all employees.</p>
              </div>
            </div>
            <div className="flex gap-6 p-8 rounded-2xl bg-gray-50">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Modern Workspace</h3>
                <p className="text-gray-500">Work in state-of-the-art facilities designed by OpenSpace, optimized for collaboration and creativity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder for Openings */}
      <section id="openings" className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-8">Current Openings</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center text-left hover:border-primary transition-all cursor-pointer group">
              <div>
                <h4 className="font-bold text-lg group-hover:text-primary transition-colors">Senior Software Engineer</h4>
                <p className="text-gray-500 text-sm">OpenTech • London / Remote</p>
              </div>
              <div className="text-primary font-bold">Apply &rarr;</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center text-left hover:border-primary transition-all cursor-pointer group">
              <div>
                <h4 className="font-bold text-lg group-hover:text-primary transition-colors">Marketing Manager</h4>
                <p className="text-gray-500 text-sm">Openlead • Manchester</p>
              </div>
              <div className="text-primary font-bold">Apply &rarr;</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center text-left hover:border-primary transition-all cursor-pointer group">
              <div>
                <h4 className="font-bold text-lg group-hover:text-primary transition-colors">Sustainability Consultant</h4>
                <p className="text-gray-500 text-sm">OpenEnergy • Edinburgh</p>
              </div>
              <div className="text-primary font-bold">Apply &rarr;</div>
            </div>
          </div>
          <p className="mt-12 text-gray-500">
            Don't see a role for you? Send your CV to <span className="text-black font-medium">careers@theopengroup.com</span>
          </p>
        </div>
      </section>
    </div>
  );
}
