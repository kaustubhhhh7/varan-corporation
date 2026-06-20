
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Clock, Settings, ThumbsUp, Truck, HardHat, BadgeIndianRupee } from 'lucide-react';

const reasons = [
  {
    icon: <HardHat size={28} />,
    title: 'Experienced Team',
    description: 'Highly skilled professionals with years of industry expertise.'
  },
  {
    icon: <Settings size={28} />,
    title: 'End-to-End Solutions',
    description: 'Comprehensive services from initial planning to final execution.'
  },
  {
    icon: <Award size={28} />,
    title: 'Quality Materials',
    description: 'We source and use only premium grade materials for lasting durability.'
  },
  {
    icon: <Truck size={28} />,
    title: 'Modern Equipment',
    description: 'Utilizing state-of-the-art machinery and tools for precision work.'
  },
  {
    icon: <Clock size={28} />,
    title: 'Timely Delivery',
    description: 'Strict adherence to project timelines without compromising quality.'
  },
  {
    icon: <BadgeIndianRupee size={28} />,
    title: 'Competitive Pricing',
    description: 'Cost-effective solutions providing maximum value for your investment.'
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Safety Standards',
    description: 'Rigorous safety protocols to ensure secure work environments.'
  },
  {
    icon: <ThumbsUp size={28} />,
    title: 'Customer Satisfaction',
    description: 'Dedicated to exceeding client expectations on every single project.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-primary-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40V0H40V40H0z" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-12 h-1 bg-accent-blue rounded-full" />
            <span className="text-white font-semibold uppercase tracking-wider text-sm">Why Partner With Us</span>
            <div className="w-12 h-1 bg-accent-blue rounded-full" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            The Varan <span className="text-accent-blue">Advantage</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center text-white mb-3 md:mb-6 group-hover:scale-110 group-hover:bg-primary-red transition-all duration-300 [&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-7 md:[&>svg]:h-7">
                {reason.icon}
              </div>
              <h3 className="text-sm md:text-xl font-bold text-white mb-1.5 md:mb-3 leading-tight">
                {reason.title}
              </h3>
              <p className="text-gray-300 text-[11px] md:text-sm leading-snug md:leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
