// Hero Style 3 – Image Background Hero + Dark Overlay

import React from 'react';

function HeroStyle3() {
  return (
    <section className="w-full min-h-screen flex items-center relative bg-gray-900 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1200/800"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-5xl relative z-10 py-20 md:py-32">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Experience the Difference
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed">
            Premium quality meets exceptional service. Elevate your expectations 
            with our carefully curated selection of products and services designed 
            to exceed your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <a
              href="#"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Explore Now
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroStyle3;

