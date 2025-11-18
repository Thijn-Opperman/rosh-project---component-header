'use client';

// Hero Style 5 – Video Background Hero

interface HeroStyle5Props {
  title?: string;
  subtitle?: string;
  heroVideo?: string;
  heroImage?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaText2?: string;
  ctaLink2?: string;
}

export default function HeroStyle5({
  title = 'Innovation in Motion',
  subtitle = 'Experience cutting-edge technology that adapts to your needs. Built for the future, available today.',
  heroVideo,
  heroImage,
  ctaText = 'Get Started',
  ctaLink = '#',
  ctaText2 = 'Learn More',
  ctaLink2 = '#'
}: HeroStyle5Props) {
  return (
    <section className="w-full h-screen flex items-center justify-center relative bg-gray-900 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroVideo ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        ) : heroImage ? (
          <img
            src={heroImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10 space-y-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          {ctaText && (
            <a
              href={ctaLink}
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              {ctaText}
            </a>
          )}
          {ctaText2 && (
            <a
              href={ctaLink2}
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              {ctaText2}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

