import { motion } from "framer-motion";
import { BRANDS, GROUP_MISSION } from "@/constants/brands";
import { BrandCard } from "@/components/brands/BrandCard";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { LogoCarousel } from "@/components/common/LogoCarousel";

export default function Home() {
  const partners = [
    { name: "Microsoft", url: "https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg" },
    { name: "Google", url: "https://www.vectorlogo.zone/logos/google/google-ar21.svg" },
    { name: "Amazon", url: "https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg" },
    { name: "Salesforce", url: "https://www.vectorlogo.zone/logos/salesforce/salesforce-ar21.svg" },
    { name: "Oracle", url: "https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg" },
    { name: "IBM", url: "https://www.vectorlogo.zone/logos/ibm/ibm-ar21.svg" }
  ];

  const featured = [
    { name: "Forbes", url: "https://www.vectorlogo.zone/logos/forbes/forbes-ar21.svg" },
    { name: "TechCrunch", url: "https://www.vectorlogo.zone/logos/techcrunch/techcrunch-ar21.svg" },
    { name: "Wired", url: "https://www.vectorlogo.zone/logos/wired/wired-ar21.svg" },
    { name: "The Times", url: "https://www.vectorlogo.zone/logos/the_times/the_times-ar21.svg" },
    { name: "Business Insider", url: "https://www.vectorlogo.zone/logos/businessinsider/businessinsider-ar21.svg" },
    { name: "Bloomberg", url: "https://www.vectorlogo.zone/logos/bloomberg/bloomberg-ar21.svg" }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern+corporate+architecture+glass+facade+cyan+accents+professional+minimalist+luxury+office+building&image_size=landscape_16_9"
            alt="Corporate Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-white" />
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="font-display text-6xl md:text-[8rem] font-black tracking-tighter text-white mb-4 leading-[0.85]">
              The Open<br />Group<span className="text-primary inline-block ml-2 w-5 h-5 md:w-8 md:h-8 bg-primary rounded-full shadow-[0_0_30px_rgba(0,242,255,1)]" />
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-200 font-light mb-12 tracking-tight max-w-2xl mx-auto italic"
            >
              "{GROUP_MISSION}"
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/mission"
                className="group bg-primary text-black px-8 py-4 rounded-xl font-bold hover:bg-white transition-all duration-300 flex items-center gap-3 shadow-[0_10px_30px_rgba(0,242,255,0.3)] text-sm"
              >
                Our Strategic Vision <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#brands"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-all duration-300 text-sm"
              >
                Portfolio Overview
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-gray-400">Scroll to Explore</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Trusted By Carousel */}
      <LogoCarousel title="Trusted by Global Leaders" logos={partners} />

      {/* Brands Grid Section */}
      <section id="brands" className="py-20 px-6 bg-[#fafafa] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.01] pointer-events-none"
             style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-3 block"
              >
                Sector Leadership
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl md:text-5xl font-bold text-black"
              >
                Global Brand Portfolio
              </motion.h2>
            </div>
            <p className="text-gray-400 text-base max-w-md font-light leading-relaxed">
              Fourteen specialized entities working in synergy to provide comprehensive business infrastructure across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {BRANDS.map((brand, index) => (
              <BrandCard key={brand.id} brand={brand} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* As Featured In Carousel */}
      <LogoCarousel title="As Featured In" logos={featured} reverse={true} />

      {/* Features/Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
              <Shield size={32} />
            </div>
            <h3 className="font-display font-bold text-xl mb-4">Trusted Worldwide</h3>
            <p className="text-gray-500">Global reach across 50+ countries with established local expertise.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
              <Zap size={32} />
            </div>
            <h3 className="font-display font-bold text-xl mb-4">Innovation First</h3>
            <p className="text-gray-500">Investing heavily in R&D to lead the next generation of business solutions.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
              <Users size={32} />
            </div>
            <h3 className="font-display font-bold text-xl mb-4">People Driven</h3>
            <p className="text-gray-500">Over 5,000 dedicated professionals working towards a common goal.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
