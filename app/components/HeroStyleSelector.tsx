'use client';

import HeroStyle1 from './hero/HeroStyle1';
import HeroStyle2 from './hero/HeroStyle2';
import HeroStyle3 from './hero/HeroStyle3';
import HeroStyle4 from './hero/HeroStyle4';
import HeroStyle5 from './hero/HeroStyle5';
import HeroStyle7 from './hero/HeroStyle7';

interface HeroStyleSelectorProps {
  selectedStyle: number;
  onStyleSelect: (style: number) => void;
  isOpen: boolean;
  onToggle: () => void;
  title: string;
  subtitle: string;
  heroImage?: string;
  backgroundColor?: string;
  textColor?: string;
  ctaText?: string;
  ctaText2?: string;
}

export default function HeroStyleSelector({
  selectedStyle,
  onStyleSelect,
  isOpen,
  onToggle,
  title,
  subtitle,
  heroImage,
  backgroundColor,
  textColor,
  ctaText,
  ctaText2
}: HeroStyleSelectorProps) {
  const heroStyles = [
    { id: 5, name: 'Split Left', component: 'HeroStyle1' },
    { id: 6, name: 'Fullscreen', component: 'HeroStyle2' },
    { id: 7, name: 'Background', component: 'HeroStyle3' },
    { id: 8, name: 'Card', component: 'HeroStyle4' },
    { id: 9, name: 'Video BG', component: 'HeroStyle5' },
    { id: 11, name: 'Split Right', component: 'HeroStyle7' },
  ];

  // Render echte hero componenten als mini previews
  const renderMiniPreview = (styleId: number) => {
    const previewImage = heroImage || 'https://picsum.photos/1200/800?random=' + styleId;
    const previewTitle = title || 'Your Tournament';
    const previewSubtitle = subtitle || 'Build amazing experiences with our powerful tools';
    const previewBgColor = backgroundColor || undefined;
    const previewTextColor = textColor || undefined;
    const previewCta1 = ctaText || undefined;
    const previewCta2 = ctaText2 || undefined;

    const commonProps = {
      title: previewTitle,
      subtitle: previewSubtitle,
      heroImage: previewImage,
      backgroundColor: previewBgColor,
      textColor: previewTextColor,
      ctaText: previewCta1,
      ctaText2: previewCta2,
    };

    switch (styleId) {
      case 5:
        return (
          <div className="w-full h-40 rounded-lg border border-gray-300 overflow-hidden shadow-sm" style={{ transform: 'scale(0.3)', transformOrigin: 'top left', width: '333%', height: '333%', pointerEvents: 'none' }}>
            <HeroStyle1 {...commonProps} />
          </div>
        );
      case 6:
        return (
          <div className="w-full h-40 rounded-lg border border-gray-300 overflow-hidden shadow-sm" style={{ transform: 'scale(0.3)', transformOrigin: 'top left', width: '333%', height: '333%', pointerEvents: 'none' }}>
            <HeroStyle2 {...commonProps} />
          </div>
        );
      case 7:
        return (
          <div className="w-full h-40 rounded-lg border border-gray-300 overflow-hidden shadow-sm" style={{ transform: 'scale(0.3)', transformOrigin: 'top left', width: '333%', height: '333%', pointerEvents: 'none' }}>
            <HeroStyle3 {...commonProps} />
          </div>
        );
      case 8:
        return (
          <div className="w-full h-40 rounded-lg border border-gray-300 overflow-hidden shadow-sm" style={{ transform: 'scale(0.3)', transformOrigin: 'top left', width: '333%', height: '333%', pointerEvents: 'none' }}>
            <HeroStyle4 {...commonProps} />
          </div>
        );
      case 9:
        return (
          <div className="w-full h-40 rounded-lg border border-gray-300 overflow-hidden shadow-sm" style={{ transform: 'scale(0.3)', transformOrigin: 'top left', width: '333%', height: '333%', pointerEvents: 'none' }}>
            <HeroStyle5 {...commonProps} />
          </div>
        );
      case 11:
        return (
          <div className="w-full h-40 rounded-lg border border-gray-300 overflow-hidden shadow-sm" style={{ transform: 'scale(0.3)', transformOrigin: 'top left', width: '333%', height: '333%', pointerEvents: 'none' }}>
            <HeroStyle7 {...commonProps} />
          </div>
        );
      default:
        return <div className="w-full h-40 bg-gray-100 rounded-lg"></div>;
    }
  };

  return (
    <>
      <div
        className={`fixed right-0 top-0 h-full bg-white dark:bg-gray-900 shadow-2xl z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: '320px' }}
      >
        <div className="h-full overflow-y-auto p-6">
          <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Hero Style Selector
          </h2>
          
          <div className="space-y-4">
            {heroStyles.map((style) => (
              <button
                key={style.id}
                onClick={() => onStyleSelect(style.id)}
                className={`w-full text-left transition-all duration-200 rounded-lg border-2 p-3 ${
                  selectedStyle === style.id
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-sm font-semibold ${
                    selectedStyle === style.id
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}>
                    {style.name}
                  </span>
                  {selectedStyle === style.id && (
                    <span className="text-blue-600 text-xs font-medium">✓ Selected</span>
                  )}
                </div>
                <div className="w-full h-40 rounded-lg border border-gray-200 overflow-hidden relative" style={{ transform: 'scale(1)', transformOrigin: 'center' }}>
                  <div className="absolute inset-0" style={{ overflow: 'hidden' }}>
                    {renderMiniPreview(style.id)}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Toggle Button - Always visible */}
      <button
        onClick={onToggle}
        className="fixed right-0 top-4 z-50 bg-blue-600 text-white p-2 rounded-l-lg hover:bg-blue-700 transition-colors shadow-lg"
        style={{ transform: isOpen ? 'translateX(-320px)' : 'translateX(0)' }}
        aria-label="Toggle style selector"
      >
        {isOpen ? '›' : '‹'}
      </button>
    </>
  );
}

