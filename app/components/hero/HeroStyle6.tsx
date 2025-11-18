'use client';

// Hero Style 6 – Minimalist Hero (Veel white space, text-left)

interface HeroStyle6Props {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaText2?: string;
  ctaLink2?: string;
}

export default function HeroStyle6({
  title = 'Simplicity Meets Power',
  subtitle = 'Clean design. Powerful features. Focus on what matters most. Our minimalist approach eliminates complexity while delivering everything you need to succeed.',
  ctaText = 'Explore Features',
  ctaLink = '#',
  ctaText2 = 'Read Documentation',
  ctaLink2 = '#'
}: HeroStyle6Props) {
  return (
    <section className="w-full min-h-screen flex items-center bg-white py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-lg">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>

          <div className="lg:col-span-10 space-y-8 max-w-3xl">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight">
                {title}
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              {ctaText && (
                <a
                  href={ctaLink}
                  className="inline-flex items-center justify-start px-6 py-3 text-base font-medium text-gray-900 bg-transparent border border-gray-300 rounded-md hover:border-gray-900 transition-colors duration-200 w-auto"
                >
                  {ctaText}
                </a>
              )}
              {ctaText2 && (
                <a
                  href={ctaLink2}
                  className="inline-flex items-center justify-start px-6 py-3 text-base font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 w-auto"
                >
                  {ctaText2} →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

