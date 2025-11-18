'use client';

// Hero Style 7 – Split Hero (Image Right / Content Left)

interface HeroStyle7Props {
  title?: string;
  subtitle?: string;
  heroImage?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaText2?: string;
  ctaLink2?: string;
  backgroundColor?: string;
  textColor?: string;
}

export default function HeroStyle7({
  title = 'Welcome to Our Platform',
  subtitle = 'Build amazing experiences with our powerful tools and intuitive interface. Start your journey today and transform your ideas into reality.',
  heroImage,
  ctaText = 'Get Started',
  ctaLink = '#',
  ctaText2 = 'Learn More',
  ctaLink2 = '#',
  backgroundColor = 'bg-gray-50',
  textColor = 'text-gray-900'
}: HeroStyle7Props) {
  const bgColorClass = backgroundColor?.startsWith('#') ? '' : backgroundColor;
  const textColorClass = textColor?.startsWith('#') ? '' : textColor;
  const bgStyle = backgroundColor?.startsWith('#') ? { backgroundColor } : {};
  const textStyle = textColor?.startsWith('#') ? { color: textColor } : {};

  return (
    <section 
      className={`w-full min-h-screen flex items-center ${bgColorClass} py-12 md:py-20 px-4 sm:px-6 lg:px-8`}
      style={bgStyle}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Left */}
          <div className="order-2 md:order-1 space-y-6 text-center md:text-left">
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${textColorClass} leading-tight`}
              style={textStyle}
            >
              {title}
            </h1>
            <p 
              className={`text-lg sm:text-xl leading-relaxed max-w-xl mx-auto md:mx-0 ${textColorClass === 'text-gray-900' ? 'text-gray-600' : 'opacity-90'}`}
              style={textStyle}
            >
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              {ctaText && (
                <a
                  href={ctaLink}
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  {ctaText}
                </a>
              )}
              {ctaText2 && (
                <a
                  href={ctaLink2}
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-200"
                >
                  {ctaText2}
                </a>
              )}
            </div>
          </div>

          {/* Image Right */}
          {heroImage && (
            <div className="order-1 md:order-2 w-full">
              <img
                src={heroImage}
                alt="Hero"
                className="w-full h-auto rounded-lg shadow-xl object-cover aspect-[4/3]"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

