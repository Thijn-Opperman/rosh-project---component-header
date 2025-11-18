'use client';

// Hero Style 4 – Card-on-Hero Layout

interface HeroStyle4Props {
  title?: string;
  subtitle?: string;
  heroImage?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaText2?: string;
  ctaLink2?: string;
}

export default function HeroStyle4({
  title = 'Your Journey Starts Here',
  subtitle = 'Join our community of innovators and creators. Access exclusive features, expert guidance, and the tools you need to succeed in today\'s competitive landscape.',
  heroImage,
  ctaText = 'Sign Up Free',
  ctaLink = '#',
  ctaText2 = 'View Pricing',
  ctaLink2 = '#'
}: HeroStyle4Props) {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {heroImage && (
              <div className="hidden lg:block relative h-full min-h-[400px]">
                <img
                  src={heroImage}
                  alt="Hero"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                {subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    {ctaText2}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

