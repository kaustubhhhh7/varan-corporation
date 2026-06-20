import React from 'react';
import { motion } from 'framer-motion';
import { 
  Printer, 
  Hammer, 
  Paintbrush, 
  Wrench, 
  Users, 
  Zap,
  Building,
  Image as ImageIcon
} from 'lucide-react';

const services = [
  {
    id: 'printing',
    title: 'Printing & Branding',
    icon: <Printer className="w-5 h-5 md:w-8 md:h-8" />,
    description: 'High-quality advertising displays, board banners, outdoor branding, and signage solutions.',
    features: ['Advertising Displays', 'Board Banners', 'Outdoor Branding', 'Sign Boards', 'ACP Signage', 'Acrylic Letter Signage', 'Display Fabrication'],
    color: 'bg-blue-50 text-primary-blue border-blue-100',
    iconBg: 'bg-primary-blue text-white'
  },
  {
    id: 'fabrication',
    title: 'Fabrication Services',
    icon: <Hammer className="w-5 h-5 md:w-8 md:h-8" />,
    description: 'Precision engineering and fabrication for structural, industrial, and custom display needs.',
    features: ['ACP Fabrication', 'Acrylic Letter Fabrication', 'Industrial Fabrication', 'Structural Fabrication', 'Display Structures', 'Metal Fabrication', 'Custom Fabrication'],
    color: 'bg-red-50 text-primary-red border-red-100',
    iconBg: 'bg-primary-red text-white'
  },
  {
    id: 'painting',
    title: 'Painting Services',
    icon: <Paintbrush className="w-5 h-5 md:w-8 md:h-8" />,
    description: 'Professional painting solutions for massive infrastructure, industrial structures, and commercial spaces.',
    features: ['Bridge Painting', 'Flyover Painting', 'Metro Painting', 'Gantry Painting', 'Divider Painting', 'Wall Painting', 'Building Painting', 'Industrial Structure Painting'],
    color: 'bg-cyan-50 text-accent-blue border-cyan-100',
    iconBg: 'bg-accent-blue text-white'
  },
  {
    id: 'civil',
    title: 'Civil & Maintenance',
    icon: <Building className="w-5 h-5 md:w-8 md:h-8" />,
    description: 'Comprehensive civil construction, restoration, and ongoing infrastructure maintenance.',
    features: ['Civil Work', 'Building Maintenance', 'Infrastructure Maintenance', 'Beautification Projects', 'Cleaning Services', 'Restoration Work'],
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    iconBg: 'bg-indigo-600 text-white'
  },
  {
    id: 'workforce',
    title: 'Workforce Solutions',
    icon: <Users className="w-5 h-5 md:w-8 md:h-8" />,
    description: 'Reliable supply of skilled labor, security personnel, and dedicated project teams.',
    features: ['Manpower Supply', 'Skilled Labour', 'Security Guards', 'Maintenance Teams', 'Project Workforce'],
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    iconBg: 'bg-emerald-600 text-white'
  },
  {
    id: 'technical',
    title: 'Technical Services',
    icon: <Zap className="w-5 h-5 md:w-8 md:h-8" />,
    description: 'Specialized electrical works and renewable energy installations for modern infrastructure.',
    features: ['Solar System Installation', 'Electrical Work', 'System Maintenance', 'Technical Support'],
    color: 'bg-orange-50 text-orange-600 border-orange-100',
    iconBg: 'bg-orange-600 text-white'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-3 md:mb-4"
          >
            <div className="w-6 md:w-12 h-1 bg-primary-red rounded-full" />
            <span className="text-primary-blue font-semibold uppercase tracking-wider text-[10px] md:text-sm">Our Expertise</span>
            <div className="w-6 md:w-12 h-1 bg-primary-red rounded-full" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-dark mb-3 md:mb-6"
          >
            Comprehensive <span className="text-primary-blue">Solutions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-[13px] md:text-lg"
          >
            We deliver a wide spectrum of services with unmatched quality, blending creative branding with robust industrial execution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
            >
              {/* Hover Background Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${service.color.split(' ')[0]}`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 md:block mb-3 md:mb-6">
                  <div className={`w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-2xl flex items-center justify-center shrink-0 shadow-sm md:shadow-md transform md:group-hover:-translate-y-2 transition-transform duration-300 ${service.iconBg}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-dark group-hover:text-primary-blue transition-colors md:mt-4 leading-tight">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-[13px] md:text-base text-gray-600 mb-3 md:mb-6 line-clamp-2 md:line-clamp-none leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-8">
                  {service.features.slice(0, 2).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-[12px] md:text-sm text-gray-500">
                      <div className={`mt-[6px] w-1.5 h-1.5 rounded-full shrink-0 ${service.iconBg.split(' ')[0]}`} />
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                  {service.features.length > 2 && (
                    <li className="text-[11px] md:text-sm text-gray-400 italic">
                      + {service.features.length - 2} more...
                    </li>
                  )}
                </ul>
                
                <div className="mt-auto pt-3 md:pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className={`text-[11px] md:text-sm font-semibold uppercase tracking-wider ${service.color.split(' ')[1]}`}>
                    Learn More
                  </span>
                  <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center bg-gray-50 group-hover:${service.iconBg} group-hover:text-white transition-colors`}>
                    <svg className="w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
