import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Landmark, Train, Factory, ShoppingBag, Briefcase } from 'lucide-react';

const industries = [
  { name: 'Infrastructure', icon: <Building2 size={40} /> },
  { name: 'Government Projects', icon: <Landmark size={40} /> },
  { name: 'Metro Rail', icon: <Train size={40} /> },
  { name: 'Manufacturing Units', icon: <Factory size={40} /> },
  { name: 'Retail Businesses', icon: <ShoppingBag size={40} /> },
  { name: 'Corporate Offices', icon: <Briefcase size={40} /> },
];

const Industries = () => {
  return (
    <section className="py-24 bg-gray-50 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-12 h-1 bg-primary-red rounded-full" />
            <span className="text-primary-blue font-semibold uppercase tracking-wider text-sm">Sectors We Serve</span>
            <div className="w-12 h-1 bg-primary-red rounded-full" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-dark mb-6"
          >
            Industries <span className="text-primary-blue">We Empower</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border border-gray-100 group cursor-pointer"
            >
              <div className="text-gray-400 group-hover:text-primary-red flex justify-center mb-4 transition-colors">
                {industry.icon}
              </div>
              <h3 className="text-sm font-semibold text-dark group-hover:text-primary-blue transition-colors">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;
