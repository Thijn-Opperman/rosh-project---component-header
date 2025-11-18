'use client';

// Hero Style 2 – Fullscreen Centered Hero

interface HeroStyle2Props {
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

export default function HeroStyle2({
  title = 'Transform Your Business',
  subtitle = 'Discover innovative solutions that drive growth and unlock your potential. Join thousands of satisfied customers worldwide.',
  heroImage,
  ctaText = 'Start Free Trial',
  ctaLink = '#',
  ctaText2 = 'Watch Demo',
  ctaLink2 = '#',
  backgroundColor = 'bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700',
  textColor = 'text-white'
}: HeroStyle2Props) {
  const bgColorClass = backgroundColor?.startsWith('#') || !backgroundColor ? '' : backgroundColor;
  const textColorClass = textColor?.startsWith('#') || !textColor ? '' : textColor;
  const bgStyle = backgroundColor?.startsWith('#') ? { background: `linear-gradient(135deg, ${backgroundColor} 0%, ${adjustBrightness(backgroundColor, -20)} 100%)` } : {};
  const textStyle = textColor?.startsWith('#') ? { color: textColor } : {};

  return (
    <section 
      className={`w-full h-screen flex items-center justify-center ${bgColorClass} px-4 sm:px-6 lg:px-8 relative overflow-hidden`}
      style={bgStyle}
    >
      {/* Background Image */}
      {heroImage ? (
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      ) : (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] bg-repeat"></div>
        </div>
      )}

      <div className="container mx-auto max-w-4xl text-center relative z-10 space-y-8">
        <h1 
          className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold ${textColorClass} leading-tight tracking-tight`}
          style={textStyle}
        >
          {title}
        </h1>
        <p 
          className={`text-xl sm:text-2xl lg:text-3xl leading-relaxed max-w-3xl mx-auto ${textColorClass === 'text-white' ? 'text-blue-100' : 'opacity-90'}`}
          style={textStyle}
        >
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          {ctaText && (
            <a
              href={ctaLink}
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              {ctaText}
            </a>
          )}
          {ctaText2 && (
            <a
              href={ctaLink2}
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              {ctaText2}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

function adjustBrightness(color: string, percent: number): string {
  if (color.startsWith('#')) {
    const hex = color.replace('#', '');
    if (hex.length === 6) {
      const num = parseInt(hex, 16);
      const r = Math.min(255, Math.max(0, (num >> 16) + percent));
      const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + percent));
      const b = Math.min(255, Math.max(0, (num & 0x0000FF) + percent));
      return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    }
  }
  return color;
}

