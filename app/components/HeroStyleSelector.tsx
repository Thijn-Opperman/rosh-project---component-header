'use client';

interface HeroStyleSelectorProps {
  selectedStyle: number;
  onStyleSelect: (style: number) => void;
  isOpen: boolean;
  onToggle: () => void;
  title: string;
  subtitle: string;
  heroImage?: string;
}

export default function HeroStyleSelector({
  selectedStyle,
  onStyleSelect,
  isOpen,
  onToggle,
  title,
  subtitle,
  heroImage
}: HeroStyleSelectorProps) {
  const heroStyles = [
    { id: 5, name: 'Split Left', component: 'HeroStyle1' },
    { id: 6, name: 'Fullscreen', component: 'HeroStyle2' },
    { id: 7, name: 'Background', component: 'HeroStyle3' },
    { id: 8, name: 'Card', component: 'HeroStyle4' },
    { id: 9, name: 'Video BG', component: 'HeroStyle5' },
    { id: 11, name: 'Split Right', component: 'HeroStyle7' },
  ];

  // Mini preview componenten
  const renderMiniPreview = (styleId: number) => {
    const previewImage = heroImage || 'https://picsum.photos/200/150';

    switch (styleId) {
      case 5: // Split Left
        return (
          <div className="w-full h-20 bg-gray-50 rounded border border-gray-200 overflow-hidden flex items-center">
            {heroImage ? (
              <img src={previewImage} alt="Preview" className="w-1/3 h-full object-cover flex-shrink-0" />
            ) : (
              <div className="w-1/3 h-full bg-gray-300 flex-shrink-0"></div>
            )}
            <div className="flex-1 p-2">
              <div className="h-2 bg-gray-400 rounded mb-1 w-full"></div>
              <div className="h-1.5 bg-gray-300 rounded w-2/3"></div>
            </div>
          </div>
        );
      case 6: // Fullscreen
        return (
          <div className="w-full h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded border border-gray-200 relative overflow-hidden flex items-center justify-center">
            {heroImage && (
              <>
                <img src={previewImage} alt="Preview" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 bg-black opacity-30"></div>
              </>
            )}
            <div className="relative text-center">
              <div className="h-2 bg-white rounded mb-1 w-16 mx-auto"></div>
              <div className="h-1 bg-blue-200 rounded w-12 mx-auto"></div>
            </div>
          </div>
        );
      case 7: // Background
        return (
          <div className="w-full h-20 bg-gray-900 rounded border border-gray-200 relative overflow-hidden">
            {heroImage ? (
              <>
                <img src={previewImage} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black opacity-60"></div>
              </>
            ) : (
              <div className="absolute inset-0 bg-gray-900"></div>
            )}
            <div className="relative h-full flex items-center p-2">
              <div className="h-2 bg-white rounded w-20"></div>
            </div>
          </div>
        );
      case 8: // Card
        return (
          <div className="w-full h-20 bg-gray-200 rounded border border-gray-200 flex items-center justify-center p-1">
            <div className="bg-white rounded shadow-md flex h-full w-full">
              {heroImage ? (
                <img src={previewImage} alt="Preview" className="w-1/3 h-full object-cover flex-shrink-0 rounded-l" />
              ) : (
                <div className="w-1/3 bg-gray-300 flex-shrink-0 rounded-l"></div>
              )}
              <div className="flex-1 p-1">
                <div className="h-2 bg-gray-400 rounded mb-1"></div>
                <div className="h-1 bg-gray-300 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        );
      case 9: // Video BG
        return (
          <div className="w-full h-20 bg-gray-900 rounded border border-gray-200 relative overflow-hidden">
            {heroImage ? (
              <>
                <img src={previewImage} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black opacity-70"></div>
              </>
            ) : (
              <div className="absolute inset-0 bg-black opacity-70"></div>
            )}
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center">
                <div className="h-2 bg-white rounded mb-1 w-16 mx-auto"></div>
                <div className="h-1 bg-gray-300 rounded w-12 mx-auto"></div>
              </div>
            </div>
          </div>
        );
      case 11: // Split Right
        return (
          <div className="w-full h-20 bg-gray-50 rounded border border-gray-200 overflow-hidden flex items-center">
            <div className="flex-1 p-2">
              <div className="h-2 bg-gray-400 rounded mb-1 w-full"></div>
              <div className="h-1.5 bg-gray-300 rounded w-2/3"></div>
            </div>
            {heroImage ? (
              <img src={previewImage} alt="Preview" className="w-1/3 h-full object-cover flex-shrink-0" />
            ) : (
              <div className="w-1/3 h-full bg-gray-300 flex-shrink-0"></div>
            )}
          </div>
        );
      default:
        return <div className="w-full h-20 bg-gray-100 rounded"></div>;
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
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-semibold ${
                    selectedStyle === style.id
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}>
                    {style.name}
                  </span>
                  {selectedStyle === style.id && (
                    <span className="text-blue-600 text-xs">✓ Selected</span>
                  )}
                </div>
                <div className="w-full">
                  {renderMiniPreview(style.id)}
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

