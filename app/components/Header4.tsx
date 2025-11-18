'use client';

import Image from 'next/image';

interface Header4Props {
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

export default function Header4({ 
  backgroundColor, 
  textColor, 
  padding, 
  heroImage,
  heroVideo,
  height
}: Header4Props) {
  return (
    <section 
      style={{ 
        backgroundColor, 
        color: textColor,
        minHeight: `${height}px`,
        padding: `${padding}px 0`
      }}
      className="w-full relative overflow-hidden flex items-center justify-center"
    >
      {/* Grote Centrale Media */}
      {heroImage ? (
        <div className="relative w-full max-w-4xl aspect-[4/3] mx-auto">
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
        <div className="relative w-full max-w-4xl aspect-[4/3] mx-auto">
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
        <div className="relative w-full max-w-4xl aspect-[4/3] mx-auto border-2 border-dashed rounded-lg flex items-center justify-center" style={{ borderColor: textColor, opacity: 0.3 }}>
          <span className="text-sm" style={{ color: textColor, opacity: 0.5 }}>Media placeholder</span>
        </div>
      )}
    </section>
  );
}

