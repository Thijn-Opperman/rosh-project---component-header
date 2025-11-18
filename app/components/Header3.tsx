'use client';

import Image from 'next/image';

interface Header3Props {
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

export default function Header3({ 
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
}: Header3Props) {
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
      className="w-full relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="relative">
          {/* Centrale Media */}
          {heroImage ? (
            <div className="relative aspect-square max-w-lg mx-auto mb-8">
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
            <div className="relative aspect-square max-w-lg mx-auto mb-8">
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
            <div className="relative aspect-square max-w-lg mx-auto mb-8 border-2 border-dashed rounded-lg flex items-center justify-center" style={{ borderColor: textColor, opacity: 0.3 }}>
              <span className="text-sm" style={{ color: textColor, opacity: 0.5 }}>Media placeholder</span>
            </div>
          )}

          {/* Content met overlap */}
          <div className="relative z-10 grid md:grid-cols-2 gap-6 items-end">
            {/* Titel Links */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">{title}</h1>
              {subtitle && <p className="text-base md:text-lg mt-2 opacity-90">{subtitle}</p>}
            </div>

            {/* Buttons Rechtsonder (overlappend) */}
            {buttons.length > 0 && (
              <div className="flex flex-wrap gap-3 justify-end md:justify-start">
                {buttons.map((btn, idx) => (
                  <a 
                    key={idx}
                    href={btn.link || '#'} 
                    className="px-5 py-2.5 rounded-md font-medium transition-all hover:scale-105 border relative z-20"
                    style={{ 
                      borderColor: textColor, 
                      color: textColor,
                      backgroundColor: backgroundColor
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

