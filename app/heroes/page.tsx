'use client';

import HeroStyle1 from '../components/hero/HeroStyle1';
import HeroStyle2 from '../components/hero/HeroStyle2';
import HeroStyle3 from '../components/hero/HeroStyle3';
import HeroStyle4 from '../components/hero/HeroStyle4';
import HeroStyle5 from '../components/hero/HeroStyle5';
import HeroStyle7 from '../components/hero/HeroStyle7';

export default function HeroesPage() {
  return (
    <div className="w-full">
      {/* Hero Style 1 */}
      <section id="hero-1" className="border-b-4 border-gray-300">
        <HeroStyle1 heroImage="https://picsum.photos/1200/800?random=1" />
      </section>

      {/* Hero Style 2 */}
      <section id="hero-2" className="border-b-4 border-gray-300">
        <HeroStyle2 heroImage="https://picsum.photos/1200/800?random=2" />
      </section>

      {/* Hero Style 3 */}
      <section id="hero-3" className="border-b-4 border-gray-300">
        <HeroStyle3 heroImage="https://picsum.photos/1200/800?random=3" />
      </section>

      {/* Hero Style 4 */}
      <section id="hero-4" className="border-b-4 border-gray-300">
        <HeroStyle4 heroImage="https://picsum.photos/1200/800?random=4" />
      </section>

      {/* Hero Style 5 */}
      <section id="hero-5" className="border-b-4 border-gray-300">
        <HeroStyle5 heroImage="https://picsum.photos/1200/800?random=5" />
      </section>

      {/* Hero Style 7 */}
      <section id="hero-7">
        <HeroStyle7 heroImage="https://picsum.photos/1200/800?random=7" />
      </section>

      {/* Navigation Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center space-y-4">
          <h2 className="text-2xl font-bold">Hero Component Library</h2>
          <p className="text-gray-400">Scroll omhoog om alle hero stijlen te bekijken</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="#hero-1" className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors">
              Hero 1
            </a>
            <a href="#hero-2" className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors">
              Hero 2
            </a>
            <a href="#hero-3" className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors">
              Hero 3
            </a>
            <a href="#hero-4" className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors">
              Hero 4
            </a>
            <a href="#hero-5" className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors">
              Hero 5
            </a>
            <a href="#hero-7" className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors">
              Hero 7
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

