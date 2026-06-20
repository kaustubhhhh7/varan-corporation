import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const features = [
    'Fabrication & Signage',
    'Industrial Painting',
    'Civil Works & Maintenance',
    'Manpower Solutions',
  ];

  return (
    <section id="about" className="py-12 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-50 rounded-full -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary-blue/5 rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070"
                alt="Construction & Infrastructure"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/80 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                <div className="bg-white/90 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-lg border-l-4 border-primary-red">
                  <h3 className="text-lg md:text-xl font-bold text-primary-blue mb-1 md:mb-2">Excellence in Execution</h3>
                  <p className="text-gray-600 text-xs md:text-sm">Delivering quality projects across Mumbai with precision and dedication.</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Dots */}
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-16 h-16 md:w-24 md:h-24 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:10px_10px]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="w-8 md:w-12 h-1 bg-primary-red rounded-full" />
              <span className="text-primary-blue font-semibold uppercase tracking-wider text-xs md:text-sm">About Us</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4 md:mb-6 leading-tight">
              Building Brands. <br className="hidden md:block" />
              <span className="text-primary-blue">Enhancing Infrastructure.</span>
            </h2>
            
            <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
              Varan Corporation is a multidisciplinary company providing fabrication, printing, advertising displays, industrial painting, civil works, beautification projects, maintenance services, and manpower solutions.
            </p>
            
            <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              With expertise spanning commercial, industrial, and public infrastructure projects, we deliver durable, high-quality solutions backed by skilled manpower, modern equipment, and professional project execution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary-red shrink-0" size={20} className="md:w-6 md:h-6 text-primary-red" />
                  <span className="text-dark font-medium text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-primary-blue hover:bg-blue-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium transition-colors text-sm md:text-base"
            >
              Explore Our Services
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
