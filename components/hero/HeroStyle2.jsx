// Hero Style 2 – Fullscreen Centered Hero

import React from 'react';

function HeroStyle2() {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] bg-repeat"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl text-center relative z-10 space-y-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight tracking-tight">
          Transform Your Business
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
          Discover innovative solutions that drive growth and unlock your potential. 
          Join thousands of satisfied customers worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <a
            href="#"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Start Free Trial
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-blue-600 transition-all duration-200"
          >
            Watch Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroStyle2;

