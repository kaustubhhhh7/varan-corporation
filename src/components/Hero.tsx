import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Printer } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1547895749-888a559fc2a7?auto=format&fit=crop&q=80&w=2070', // Industrial Painting
    title: 'Industrial Painting',
  },
  {
    image: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&q=80&w=2070', // Printing Press
    title: 'Commercial Printing',
  },
  {
    image: 'https://images.unsplash.com/photo-1544475982-9a3b42fff446?auto=format&fit=crop&q=80&w=2070', // Maintenance/Painting
    title: 'Protective Coatings',
  },
  {
    image: 'https://images.unsplash.com/photo-1581079289196-67865ea83118?auto=format&fit=crop&q=80&w=2070', // Digital Printing
    title: 'Large Format Displays',
  },
  {
    image: 'https://images.unsplash.com/photo-1629219857214-02b302d42272?auto=format&fit=crop&q=80&w=2070', // Signage/Branding
    title: 'Signage & Branding',
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-10" />
          <img
            src={slides[currentSlide].image}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 md:pt-20">
        <motion.div
          key={`badge-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-6 md:mb-8"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/20 p-2 px-4 md:px-6 md:py-2.5 rounded-full text-white inline-flex items-center gap-2 md:gap-3 shadow-2xl">
            <Printer className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/80" />
            <span className="text-[9px] md:text-xs font-medium tracking-[0.25em] uppercase leading-tight md:leading-normal text-white/90">Printing & Branding</span>
          </div>
        </motion.div>

        <motion.h1
          key={`title-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wide text-white mb-6 md:mb-8 leading-[1.15] max-w-4xl mx-auto drop-shadow-2xl"
        >
          {slides[currentSlide].title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm md:text-lg text-white/70 mb-8 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
        >
          Delivering absolute excellence in commercial printing, signage, and corporate branding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto bg-white text-black hover:bg-black hover:text-white border border-transparent hover:border-white px-8 py-3.5 md:px-10 md:py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base tracking-wide"
          >
            Get Free Quote <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black px-8 py-3.5 md:px-10 md:py-4 rounded-full font-medium transition-all duration-300 text-center text-sm md:text-base tracking-wide"
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
