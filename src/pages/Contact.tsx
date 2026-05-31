import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl font-bold mb-8 text-black"
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            Have a question about our group or interested in partnering with one of our brands? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm border border-gray-100">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email Us</h4>
                    <p className="text-gray-500">info@theopengroup.com</p>
                    <p className="text-gray-500">careers@theopengroup.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm border border-gray-100">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Call Us</h4>
                    <p className="text-gray-500">+44 (0) 123 456 789</p>
                    <p className="text-gray-500">Mon - Fri, 9am - 6pm GMT</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm border border-gray-100">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Our Headquarters</h4>
                    <p className="text-gray-500">123 Innovation Way, Canary Wharf</p>
                    <p className="text-gray-500">London, E14 5AB, United Kingdom</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Brand of Interest</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                  <option>General Inquiry</option>
                  <option>OpenSpace</option>
                  <option>OpenComms</option>
                  <option>OpenTech</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all min-h-[150px]"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-primary hover:text-black transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
