// Hero Style 1 – Split Hero (Image Left / Content Right)

import React from 'react';

function HeroStyle1() {
  return (
    <section className="w-full min-h-screen flex items-center bg-gray-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Left */}
          <div className="order-2 md:order-1 w-full">
            <img
              src="https://picsum.photos/1200/800"
              alt="Hero"
              className="w-full h-auto rounded-lg shadow-xl object-cover aspect-[4/3]"
            />
          </div>

          {/* Content Right */}
          <div className="order-1 md:order-2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Welcome to Our Platform
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
              Build amazing experiences with our powerful tools and intuitive interface. 
              Start your journey today and transform your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Get Started
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroStyle1;

