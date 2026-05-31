import { Link } from "react-router-dom";
import { GROUP_MISSION } from "@/constants/brands";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="group flex items-center space-x-1 mb-6">
            <span className="font-display font-bold text-3xl tracking-tighter text-white">
              The Open Group
            </span>
            <span className="w-3 h-3 bg-primary rounded-full mt-1 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_15px_rgba(0,242,255,0.6)]" />
          </Link>
          <p className="text-gray-400 max-w-sm mb-8 italic">
            {GROUP_MISSION}
          </p>
          <div className="flex space-x-4">
            {/* Social Icons Placeholder */}
            <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-primary hover:text-black transition-all cursor-pointer">
              IN
            </div>
            <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-primary hover:text-black transition-all cursor-pointer">
              TW
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Explore</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/sustainability" className="hover:text-primary transition-colors">Sustainability</Link></li>
            <li><Link to="/mission" className="hover:text-primary transition-colors">Mission</Link></li>
            <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-gray-400">
            <li>info@theopengroup.com</li>
            <li>+44 (0) 123 456 789</li>
            <li>London, United Kingdom</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} The Open Group. All rights reserved.</p>
      </div>
    </footer>
  );
}
