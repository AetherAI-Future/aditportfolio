import React from 'react';
import { Brain, Sparkles, Code } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-20 relative overflow-hidden bg-dark">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/20 to-dark-light/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 floating delay-100">
        <Brain className="w-16 h-16 text-accent-purple opacity-60" />
      </div>
      <div className="absolute top-1/3 right-1/4 floating delay-300">
        <Sparkles className="w-12 h-12 text-accent-blue opacity-40" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 floating delay-500">
        <Code className="w-14 h-14 text-accent-pink opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 relative">
        <div className="text-center">
          <h1 className="text-5xl tracking-tight font-extrabold text-white sm:text-6xl md:text-7xl">
            <span className="block mb-3">Hi, I'm Aadit</span>
            <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-accent-purple via-accent-blue to-accent-pink">
              AI Specialist
            </span>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-lg text-gray-300 sm:text-xl md:mt-8 md:max-w-3xl">
            Transforming ideas into intelligent solutions through machine learning, 
            natural language processing, and cutting-edge AI technologies.
          </p>
          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-primary via-accent-blue to-accent-purple hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-primary/50"
            >
              Explore My Work
              <Sparkles className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;