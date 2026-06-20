
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    content: "Varan Corporation delivered exceptional quality on our metro bridge painting project. Their team was professional, adhered to safety standards, and completed the work ahead of schedule.",
    author: "Rajesh Kumar",
    role: "Project Director",
    company: "Metro Infrastructure Ltd."
  },
  {
    content: "The ACP signage and branding work done for our corporate office was outstanding. It perfectly captured our brand identity. Highly recommend their fabrication services.",
    author: "Anita Desai",
    role: "Marketing Head",
    company: "Global Tech Solutions"
  },
  {
    content: "Reliable manpower and excellent civil maintenance. They have been managing our industrial plant's upkeep for two years now, and the service quality is consistently top-notch.",
    author: "Vikram Singh",
    role: "Plant Manager",
    company: "Industrial Manufacturing Co."
  }
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-3 md:mb-4"
          >
            <div className="w-8 md:w-12 h-1 bg-primary-red rounded-full" />
            <span className="text-primary-blue font-semibold uppercase tracking-wider text-[10px] md:text-sm">Client Feedback</span>
            <div className="w-8 md:w-12 h-1 bg-primary-red rounded-full" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-dark leading-tight"
          >
            What Our <span className="text-primary-blue">Clients Say</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-5 md:p-8 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 relative group hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-100 group-hover:text-primary-red/10 transition-colors duration-300 w-10 h-10 md:w-16 md:h-16" />
              
              <div className="flex gap-1 mb-4 md:mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" />)}
              </div>
              
              <p className="text-[13px] md:text-base text-gray-600 mb-5 md:mb-8 relative z-10 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3 md:gap-4 border-t border-gray-100 pt-4 md:pt-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-blue/10 rounded-full flex items-center justify-center text-primary-blue font-bold text-lg md:text-xl shrink-0">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-dark text-[14px] md:text-base mb-0.5 md:mb-0 leading-tight">{testimonial.author}</h4>
                  <p className="text-[11px] md:text-sm text-gray-500 leading-tight">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
