import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="w-8 md:w-12 h-1 bg-primary-red rounded-full" />
              <span className="text-primary-blue font-semibold uppercase tracking-wider text-[10px] md:text-sm">Get In Touch</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-3 md:mb-6 leading-tight">
              Let's Discuss Your <span className="text-primary-blue">Project</span>
            </h2>
            
            <p className="text-gray-600 text-[13px] md:text-lg mb-6 md:mb-12 leading-relaxed">
              Ready to start your next infrastructure or branding project? Contact Varan Corporation today for a free consultation and quote.
            </p>
            
            <div className="space-y-4 md:space-y-8">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-primary-blue/10 rounded-lg md:rounded-xl flex items-center justify-center text-primary-blue shrink-0">
                  <Phone className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-sm md:text-lg font-bold text-dark mb-0.5 md:mb-1">Call Us</h4>
                  <p className="text-[12px] md:text-base text-gray-600">+91 81014158309</p>
                  <p className="text-[12px] md:text-base text-gray-600">+91 9324841946</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-primary-red/10 rounded-lg md:rounded-xl flex items-center justify-center text-primary-red shrink-0">
                  <Mail className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-sm md:text-lg font-bold text-dark mb-0.5 md:mb-1">Email Us</h4>
                  <a href="mailto:mdgroupofindia@gmail.com" className="text-[12px] md:text-base text-gray-600 hover:text-primary-red transition-colors block">
                    mdgroupofindia@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-accent-blue/10 rounded-lg md:rounded-xl flex items-center justify-center text-accent-blue shrink-0">
                  <MapPin className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-sm md:text-lg font-bold text-dark mb-0.5 md:mb-1">Location</h4>
                  <p className="text-[12px] md:text-base text-gray-600">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl md:rounded-2xl shadow-xl p-5 md:p-8 border border-gray-100"
          >
            <h3 className="text-xl md:text-2xl font-bold text-dark mb-4 md:mb-6">Request a Quote</h3>
            
            <form className="space-y-3 md:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-[11px] md:text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 md:px-4 md:py-3 text-[13px] md:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-[11px] md:text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 md:px-4 md:py-3 text-[13px] md:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue outline-none transition-all"
                    placeholder="Company Name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-[11px] md:text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 md:px-4 md:py-3 text-[13px] md:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue outline-none transition-all"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <label className="block text-[11px] md:text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 md:px-4 md:py-3 text-[13px] md:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue outline-none transition-all"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-[11px] md:text-sm font-medium text-gray-700 mb-1">Service Required</label>
                <select className="w-full px-3 py-2 md:px-4 md:py-3 text-[13px] md:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue outline-none transition-all bg-white">
                  <option>Printing & Branding</option>
                  <option>Fabrication Services</option>
                  <option>Painting Services</option>
                  <option>Civil & Maintenance</option>
                  <option>Workforce Solutions</option>
                  <option>Other Services</option>
                </select>
              </div>
              
              <div>
                <label className="block text-[11px] md:text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  rows={3}
                  className="w-full px-3 py-2 md:px-4 md:py-3 text-[13px] md:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue outline-none transition-all resize-none md:rows-4"
                  placeholder="Tell us about your project requirements..."
                />
              </div>
              
              <button 
                type="button"
                className="w-full bg-primary-red hover:bg-red-700 text-white font-bold py-3 md:py-4 text-sm md:text-base rounded-lg transition-colors flex items-center justify-center gap-2 mt-2 md:mt-4"
              >
                <Send className="w-4 h-4 md:w-5 md:h-5" />
                <span>Request a Quote</span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
