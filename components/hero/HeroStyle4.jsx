// Hero Style 4 – Card-on-Hero Layout

import React from 'react';

function HeroStyle4() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Side */}
            <div className="hidden lg:block relative h-full min-h-[400px]">
              <img
                src="https://picsum.photos/1200/800"
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Side */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Journey Starts Here
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Join our community of innovators and creators. Access exclusive 
                features, expert guidance, and the tools you need to succeed in 
                today&apos;s competitive landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Sign Up Free
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroStyle4;

