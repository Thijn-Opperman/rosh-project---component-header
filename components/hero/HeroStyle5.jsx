// Hero Style 5 – Video Background Hero

import React from 'react';

function HeroStyle5() {
  return (
    <section className="w-full h-screen flex items-center justify-center relative bg-gray-900 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/sample.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img
            src="https://picsum.photos/1200/800"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl text-center relative z-10 space-y-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight">
          Innovation in Motion
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
          Experience cutting-edge technology that adapts to your needs. 
          Built for the future, available today.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <a
            href="#"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Get Started
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroStyle5;

