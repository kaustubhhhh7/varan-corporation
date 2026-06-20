
import { motion } from 'framer-motion';
import { Building2, Landmark, Train, Factory, ShoppingBag, Briefcase } from 'lucide-react';

const industries = [
  { name: 'Infrastructure', icon: <Building2 size={24} />, color: 'from-blue-500/10 to-blue-500/5', iconColor: 'text-blue-600', borderColor: 'group-hover:border-blue-500' },
  { name: 'Government Projects', icon: <Landmark size={24} />, color: 'from-indigo-500/10 to-indigo-500/5', iconColor: 'text-indigo-600', borderColor: 'group-hover:border-indigo-500' },
  { name: 'Metro Rail', icon: <Train size={24} />, color: 'from-primary-red/10 to-primary-red/5', iconColor: 'text-primary-red', borderColor: 'group-hover:border-primary-red' },
  { name: 'Manufacturing Units', icon: <Factory size={24} />, color: 'from-amber-500/10 to-amber-500/5', iconColor: 'text-amber-600', borderColor: 'group-hover:border-amber-500' },
  { name: 'Retail Businesses', icon: <ShoppingBag size={24} />, color: 'from-emerald-500/10 to-emerald-500/5', iconColor: 'text-emerald-600', borderColor: 'group-hover:border-emerald-500' },
  { name: 'Corporate Offices', icon: <Briefcase size={24} />, color: 'from-cyan-500/10 to-cyan-500/5', iconColor: 'text-cyan-600', borderColor: 'group-hover:border-cyan-500' },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`relative overflow-hidden bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 ${industry.borderColor} group cursor-pointer`}
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${industry.color}`} />
              
              {/* Unique Watermark Element */}
              <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-12 pointer-events-none [&>svg]:w-28 [&>svg]:h-28 text-gray-900">
                {industry.icon}
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-white group-hover:shadow-md transition-all duration-300 ${industry.iconColor} [&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-7 md:[&>svg]:h-7`}>
                  {industry.icon}
                </div>
                <h3 className="text-xs md:text-sm font-bold text-dark group-hover:text-primary-blue transition-colors leading-tight">
                  {industry.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;
