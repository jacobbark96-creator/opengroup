import { motion } from "framer-motion";
import { Leaf, Recycle, Globe, Wind } from "lucide-react";

export default function Sustainability() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center py-32 px-6 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=pristine+nature+meets+modern+sustainable+architecture+solar+panels+green+roof+clean+energy+luxury&image_size=landscape_16_9"
            alt="Sustainability Background"
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
            Clearer <span className="text-primary">Tomorrow</span>
          </motion.h1>
          <p className="text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light italic">
            "At The Open Group, we believe that business success and environmental stewardship go hand in hand."
          </p>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Leaf size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Net Zero by 2040</h3>
                <p className="text-gray-500">We have set an ambitious target to achieve net-zero carbon emissions across all our brands by 2040.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Recycle size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Circular Economy</h3>
                <p className="text-gray-500">Through OpenWaste and OpenEnergy, we are implementing circular economy principles to minimize waste and maximize resource efficiency.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Globe size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Global Impact</h3>
                <p className="text-gray-500">Our initiatives extend across all global operations, ensuring that every brand contributes to a sustainable future.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Wind size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Renewable Energy</h3>
                <p className="text-gray-500">Investing in wind, solar, and aqua energy solutions to power our infrastructure and help our partners do the same.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
