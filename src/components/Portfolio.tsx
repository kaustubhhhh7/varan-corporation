import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Printing & Branding', 'Fabrication', 'Painting', 'Civil & Beautification'];

const projects = [
  {
    id: 1,
    title: 'Corporate ACP Signage',
    category: 'Printing & Branding',
    image: 'https://images.unsplash.com/photo-1541888081639-6501f2070500?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Metro Bridge Painting',
    category: 'Painting',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Industrial Shed Fabrication',
    category: 'Fabrication',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Public Park Beautification',
    category: 'Civil & Beautification',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    title: 'Acrylic Letter Signage',
    category: 'Printing & Branding',
    image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    title: 'Highway Divider Painting',
    category: 'Painting',
    image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=800'
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-3 md:mb-4"
          >
            <div className="w-8 md:w-12 h-1 bg-primary-red rounded-full" />
            <span className="text-primary-blue font-semibold uppercase tracking-wider text-xs md:text-sm">Our Portfolio</span>
            <div className="w-8 md:w-12 h-1 bg-primary-red rounded-full" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-dark mb-4 md:mb-6"
          >
            Featured <span className="text-primary-blue">Projects</span>
          </motion.h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 md:px-6 md:py-2 rounded-full text-[13px] md:text-base font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-primary-red text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-xl md:rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] bg-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/30 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 md:p-8">
                  <div className="transform translate-y-0 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-accent-blue font-medium text-[9px] md:text-sm mb-1 md:mb-2 block uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-sm md:text-2xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;
