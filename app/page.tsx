'use client';

import { useState } from 'react';
import HeroStyle1 from './components/hero/HeroStyle1';
import HeroStyle2 from './components/hero/HeroStyle2';
import HeroStyle3 from './components/hero/HeroStyle3';
import HeroStyle4 from './components/hero/HeroStyle4';
import HeroStyle5 from './components/hero/HeroStyle5';
import HeroStyle7 from './components/hero/HeroStyle7';
import EditorSidebar from './components/EditorSidebar';
import HeroStyleSelector from './components/HeroStyleSelector';

export default function Home() {
  const [headerType, setHeaderType] = useState(5);
  const [title, setTitle] = useState('Your Tournament');
  const [subtitle, setSubtitle] = useState('Build amazing experiences with our customizable hero sections');
  const [backgroundColor, setBackgroundColor] = useState('#3b82f6');
  const [textColor, setTextColor] = useState('#ffffff');
  const [padding, setPadding] = useState(40);
  const [heroImage, setHeroImage] = useState('');
  const [heroVideo, setHeroVideo] = useState('');
  const [mediaType, setMediaType] = useState<'image' | 'video' | 'none'>('none');
  const [height, setHeight] = useState(600);
  const [ctaText, setCtaText] = useState('Button 1');
  const [ctaLink, setCtaLink] = useState('#');
  const [ctaText2, setCtaText2] = useState('Button 2');
  const [ctaLink2, setCtaLink2] = useState('#');
  const [ctaText3, setCtaText3] = useState('Button 3');
  const [ctaLink3, setCtaLink3] = useState('#');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSelectorOpen, setIsSelectorOpen] = useState(true);

  const handleFileUpload = (file: File, type: 'image' | 'video') => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      if (type === 'image') {
        setHeroImage(result);
        setMediaType('image');
      } else {
        setHeroVideo(result);
        setMediaType('video');
      }
    };
    reader.readAsDataURL(file);
  };

  const renderHeader = () => {
    const commonProps = {
      title,
      subtitle,
      backgroundColor,
      textColor,
      padding,
      heroImage: mediaType === 'image' && heroImage ? heroImage : undefined,
      heroVideo: mediaType === 'video' && heroVideo ? heroVideo : undefined,
      height,
      ctaText: ctaText || undefined,
      ctaLink,
      ctaText2: ctaText2 || undefined,
      ctaLink2,
      ctaText3: ctaText3 || undefined,
      ctaLink3,
    };

    switch (headerType) {
      case 5:
        return <HeroStyle1 {...commonProps} />;
      case 6:
        return <HeroStyle2 {...commonProps} />;
      case 7:
        return <HeroStyle3 {...commonProps} />;
      case 8:
        return <HeroStyle4 {...commonProps} />;
      case 9:
        return <HeroStyle5 {...commonProps} />;
      case 11:
        return <HeroStyle7 {...commonProps} />;
      default:
        return <HeroStyle1 {...commonProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <EditorSidebar
        headerType={headerType}
        title={title}
        subtitle={subtitle}
        backgroundColor={backgroundColor}
        textColor={textColor}
        padding={padding}
        heroImage={heroImage}
        heroVideo={heroVideo}
        mediaType={mediaType}
        onFileUpload={handleFileUpload}
        onMediaTypeChange={setMediaType}
        height={height}
        ctaText={ctaText}
        ctaLink={ctaLink}
        ctaText2={ctaText2}
        ctaLink2={ctaLink2}
        ctaText3={ctaText3}
        ctaLink3={ctaLink3}
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        onTitleChange={setTitle}
        onSubtitleChange={setSubtitle}
        onBackgroundColorChange={setBackgroundColor}
        onTextColorChange={setTextColor}
        onPaddingChange={setPadding}
        onHeroImageChange={setHeroImage}
        onHeroVideoChange={setHeroVideo}
        onHeightChange={setHeight}
        onCtaTextChange={setCtaText}
        onCtaLinkChange={setCtaLink}
        onCtaText2Change={setCtaText2}
        onCtaLink2Change={setCtaLink2}
        onCtaText3Change={setCtaText3}
        onCtaLink3Change={setCtaLink3}
      />
      
      <HeroStyleSelector
        selectedStyle={headerType}
        onStyleSelect={setHeaderType}
        isOpen={isSelectorOpen}
        onToggle={() => setIsSelectorOpen(!isSelectorOpen)}
        title={title}
        subtitle={subtitle}
        heroImage={mediaType === 'image' && heroImage ? heroImage : undefined}
        backgroundColor={backgroundColor}
        textColor={textColor}
        ctaText={ctaText}
        ctaText2={ctaText2}
      />
      
      <div 
        className="transition-all duration-300" 
        style={{ 
          marginLeft: isSidebarOpen ? '320px' : '0',
          marginRight: isSelectorOpen ? '320px' : '0'
        }}
      >
        {renderHeader()}
        <main className="container mx-auto px-6 py-12">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Preview Area
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              De hero section hierboven kan worden aangepast via de editor aan de linkerkant. 
              Gebruik de knop links om de editor uit te klappen of in te klappen. Je kunt verschillende 
              hero styles kiezen, hero images toevoegen, en call-to-action buttons configureren.
            </p>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Bekijk alle 6 herbruikbare hero components:
              </p>
              <a
                href="/heroes"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Bekijk Hero Library →
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
