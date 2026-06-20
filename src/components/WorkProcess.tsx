import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, MapPin, PenTool, Hammer, CheckSquare, Flag } from 'lucide-react';

const steps = [
  { id: '01', title: 'Consultation', description: 'Understanding your requirements and project scope in detail.', icon: <MessageSquare strokeWidth={1.5} size={28} /> },
  { id: '02', title: 'Site Visit', description: 'Comprehensive inspection and measurement of the project site.', icon: <MapPin strokeWidth={1.5} size={28} /> },
  { id: '03', title: 'Planning & Design', description: 'Creating detailed plans, 3D models, and execution strategies.', icon: <PenTool strokeWidth={1.5} size={28} /> },
  { id: '04', title: 'Fabrication / Execution', description: 'Bringing the plans to life using modern equipment and skilled labor.', icon: <Hammer strokeWidth={1.5} size={28} /> },
  { id: '05', title: 'Quality Inspection', description: 'Rigorous checks to ensure standards and safety protocols are met.', icon: <CheckSquare strokeWidth={1.5} size={28} /> },
  { id: '06', title: 'Project Handover', description: 'Final delivery on time with complete client satisfaction.', icon: <Flag strokeWidth={1.5} size={28} /> },
];

const WorkProcess = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 md:gap-4 mb-4"
          >
            <div className="w-6 md:w-8 h-[2px] bg-primary-red" />
            <span className="text-primary-blue font-bold uppercase tracking-widest text-[10px] md:text-[11px]">How We Work</span>
            <div className="w-6 md:w-8 h-[2px] bg-primary-red" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark tracking-tight"
          >
            Our Proven <span className="text-primary-blue">Process</span>
          </motion.h2>
        </div>

        <div className="relative mt-8 md:mt-12">
          {/* Horizontal Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[40px] left-[calc(100%/12)] right-[calc(100%/12)] h-[1px] bg-gray-200 z-0" />
          
          {/* Vertical Connecting Line for Mobile */}
          <div className="block lg:hidden absolute top-[40px] bottom-[40px] left-1/2 -translate-x-1/2 w-[1px] bg-gray-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div className="w-20 h-20 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 mb-4 md:mb-6 relative shadow-sm group-hover:border-primary-blue group-hover:text-primary-blue transition-all duration-300 mx-auto">
                  {step.icon}
                  {/* Step Number Badge */}
                  <div className="absolute top-0 right-0 translate-x-1 -translate-y-1 w-6 h-6 rounded-full bg-primary-blue text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                    {step.id}
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="bg-white px-2 py-1 relative z-10">
                  <h3 className="text-[15px] md:text-base font-bold text-gray-900 mb-2 group-hover:text-primary-blue transition-colors leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed max-w-[200px] lg:max-w-[150px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkProcess;
