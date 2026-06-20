import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, HardHat } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1541888081639-6501f2f01fbd?auto=format&fit=crop&q=80&w=2070', // Industrial/Printing
    title: 'Transforming Ideas Into Impactful Infrastructure & Branding Solutions',
  },
  {
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=2070', // Fabrication/Metal
    title: 'Excellence in Fabrication, Signage & Maintenance',
  },
  {
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2071', // Bridge/Infrastructure
    title: 'Delivering Durable, High-Quality Infrastructure Solutions',
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-dark">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src={slides[currentSlide].image}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-4 md:mb-6"
        >
          <div className="bg-primary-blue/80 backdrop-blur-sm p-2 px-3 md:p-3 md:px-5 rounded-full text-white inline-flex items-center gap-1.5 md:gap-2">
            <HardHat className="w-4 h-4 md:w-5 md:h-5 text-accent-blue" />
            <span className="text-[9px] md:text-sm font-semibold tracking-wider uppercase leading-tight md:leading-normal">Premium Industrial & Branding Solutions</span>
          </div>
        </motion.div>

        <motion.h1
          key={`title-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight max-w-5xl mx-auto text-shadow-md"
        >
          {slides[currentSlide].title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[13px] md:text-xl text-gray-200 mb-6 md:mb-10 max-w-3xl mx-auto font-light leading-relaxed md:leading-normal"
        >
          From industrial painting and fabrication to signage, branding, maintenance, and manpower solutions, Varan Corporation delivers excellence across every project.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
        >
          <a
            href="#contact"
            className="group bg-primary-red hover:bg-red-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-medium transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <span>Get Free Quote</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-medium transition-all w-full sm:w-auto text-center"
          >
            View Our Services
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-0 right-0 z-20 flex justify-center gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all ${
              currentSlide === index ? 'bg-primary-red w-6 h-2 md:w-8 md:h-3' : 'bg-white/50 hover:bg-white w-2 h-2 md:w-3 md:h-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
