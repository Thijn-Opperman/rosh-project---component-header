'use client';

import Image from 'next/image';

interface Header1Props {
  title: string;
  subtitle?: string;
  backgroundColor: string;
  textColor: string;
  padding: number;
  heroImage?: string;
  heroVideo?: string;
  height: number;
  ctaText?: string;
  ctaLink?: string;
  ctaText2?: string;
  ctaLink2?: string;
  ctaText3?: string;
  ctaLink3?: string;
}

export default function Header1({ 
  title, 
  subtitle, 
  backgroundColor, 
  textColor, 
  padding, 
  heroImage,
  heroVideo,
  height,
  ctaText,
  ctaLink,
  ctaText2,
  ctaLink2,
  ctaText3,
  ctaLink3
}: Header1Props) {
  const buttons = [
    { text: ctaText, link: ctaLink },
    { text: ctaText2, link: ctaLink2 },
    { text: ctaText3, link: ctaLink3 }
  ].filter(btn => btn.text);

  return (
    <section 
      style={{ 
        backgroundColor, 
        color: textColor,
        minHeight: `${height}px`,
        padding: `${padding}px 0`
      }}
      className="w-full relative overflow-hidden flex items-center"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Media Links */}
          {heroImage ? (
            <div className="relative aspect-square w-full max-w-md mx-auto md:mx-0">
              {heroImage.startsWith('data:') || heroImage.startsWith('http') ? (
                <img 
                  src={heroImage} 
                  alt="Hero" 
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <Image 
                  src={heroImage} 
                  alt="Hero" 
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              )}
            </div>
          ) : heroVideo ? (
            <div className="relative aspect-square w-full max-w-md mx-auto md:mx-0">
              <video 
                src={heroVideo} 
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          ) : (
            <div className="relative aspect-square w-full max-w-md mx-auto md:mx-0 border-2 border-dashed rounded-lg flex items-center justify-center" style={{ borderColor: textColor, opacity: 0.3 }}>
              <span className="text-sm" style={{ color: textColor, opacity: 0.5 }}>Media placeholder</span>
            </div>
          )}
          
          {/* Content Rechts */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{title}</h1>
            {subtitle && <p className="text-lg md:text-xl mb-6 opacity-90 leading-relaxed">{subtitle}</p>}
            {buttons.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {buttons.map((btn, idx) => (
                  <a 
                    key={idx}
                    href={btn.link || '#'} 
                    className="px-6 py-3 rounded-md font-medium transition-all hover:scale-105 border"
                    style={{ 
                      borderColor: textColor, 
                      color: textColor,
                      backgroundColor: 'transparent'
                    }}
                  >
                    {btn.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

