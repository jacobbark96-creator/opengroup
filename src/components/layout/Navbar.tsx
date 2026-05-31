import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Mission", href: "/mission" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="group flex items-center space-x-1">
          <span className="font-display font-bold text-2xl tracking-tighter text-black">
            The Open Group
          </span>
          <span className="w-2.5 h-2.5 bg-primary rounded-full mt-1 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(0,242,255,0.5)]" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-black transition-all"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t mt-4"
          >
            <div className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
