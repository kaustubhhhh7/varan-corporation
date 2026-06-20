import React from 'react';
import { Phone, Mail, MapPin, ChevronRight, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A1930] text-white pt-16 pb-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-red to-transparent opacity-50" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-blue rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-red rounded-full blur-[120px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-4 pr-4">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-extrabold text-3xl tracking-tighter text-white">
                VARAN
              </span>
              <span className="font-medium text-xl tracking-widest text-primary-red">
                CORP.
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              A multidisciplinary company providing premium fabrication, printing, advertising displays, industrial painting, civil works, and manpower solutions across Mumbai.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-red hover:border-primary-red transition-all duration-300">
                <span className="text-white text-sm font-bold">in</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-red hover:border-primary-red transition-all duration-300">
                <span className="text-white text-sm font-bold">fb</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Portfolio', 'Work Process', 'Contact Us'].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white flex items-center gap-2 group transition-colors text-sm">
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 ease-out flex-shrink-0">
                      <ChevronRight size={16} className="text-primary-red" />
                    </span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300 ease-out">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {['Printing & Branding', 'Fabrication Services', 'Industrial Painting', 'Civil & Maintenance', 'Workforce Solutions'].map((service, i) => (
                <li key={i}>
                  <a href="#services" className="text-gray-400 hover:text-white flex items-center gap-2 group transition-colors text-sm">
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 ease-out flex-shrink-0">
                      <ChevronRight size={16} className="text-primary-red" />
                    </span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300 ease-out">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-primary-red" />
                </div>
                <span className="text-gray-400 text-sm pt-2">Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-primary-red" />
                </div>
                <div className="text-gray-400 text-sm pt-1 leading-relaxed">
                  <p className="hover:text-white transition-colors cursor-pointer">+91 81014158309</p>
                  <p className="hover:text-white transition-colors cursor-pointer">+91 9324841946</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-primary-red" />
                </div>
                <a href="mailto:mdgroupofindia@gmail.com" className="text-gray-400 hover:text-white text-sm transition-colors break-all">
                  mdgroupofindia@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Varan Corporation. All rights reserved. Designed for Excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+9181014158309"
              className="bg-primary-red hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-red-900/20 hover:shadow-red-900/40"
            >
              <Phone size={16} />
              Call Now
            </a>
            <a 
              href="https://wa.me/9181014158309"
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
