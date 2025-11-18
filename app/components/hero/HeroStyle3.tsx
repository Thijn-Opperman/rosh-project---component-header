'use client';

// Hero Style 3 – Image Background Hero + Dark Overlay

interface HeroStyle3Props {
  title?: string;
  subtitle?: string;
  heroImage?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaText2?: string;
  ctaLink2?: string;
}

export default function HeroStyle3({
  title = 'Experience the Difference',
  subtitle = 'Premium quality meets exceptional service. Elevate your expectations with our carefully curated selection of products and services designed to exceed your needs.',
  heroImage,
  ctaText = 'Explore Now',
  ctaLink = '#',
  ctaText2 = 'Contact Us',
  ctaLink2 = '#'
}: HeroStyle3Props) {
  return (
    <section className="w-full min-h-screen flex items-center relative bg-gray-900 px-4 sm:px-6 lg:px-8">
      {heroImage ? (
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-gray-900"></div>
      )}

      <div className="container mx-auto max-w-5xl relative z-10 py-20 md:py-32">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            {ctaText && (
              <a
                href={ctaLink}
                className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                {ctaText}
              </a>
            )}
            {ctaText2 && (
              <a
                href={ctaLink2}
                className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200"
              >
                {ctaText2}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

