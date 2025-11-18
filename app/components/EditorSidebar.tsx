'use client';

interface EditorProps {
  headerType: number;
  title: string;
  subtitle: string;
  backgroundColor: string;
  textColor: string;
  padding: number;
  heroImage: string;
  heroVideo: string;
  mediaType: 'image' | 'video' | 'none';
  height: number;
  ctaText: string;
  ctaLink: string;
  ctaText2: string;
  ctaLink2: string;
  ctaText3: string;
  ctaLink3: string;
  isOpen: boolean;
  onToggle: () => void;
  onHeaderTypeChange: (type: number) => void;
  onTitleChange: (title: string) => void;
  onSubtitleChange: (subtitle: string) => void;
  onBackgroundColorChange: (color: string) => void;
  onTextColorChange: (color: string) => void;
  onPaddingChange: (padding: number) => void;
  onHeroImageChange: (url: string) => void;
  onHeroVideoChange: (url: string) => void;
  onMediaTypeChange: (type: 'image' | 'video' | 'none') => void;
  onFileUpload: (file: File, type: 'image' | 'video') => void;
  onHeightChange: (height: number) => void;
  onCtaTextChange: (text: string) => void;
  onCtaLinkChange: (link: string) => void;
  onCtaText2Change: (text: string) => void;
  onCtaLink2Change: (link: string) => void;
  onCtaText3Change: (text: string) => void;
  onCtaLink3Change: (link: string) => void;
}

export default function EditorSidebar({
  headerType,
  title,
  subtitle,
  backgroundColor,
  textColor,
  padding,
  heroImage,
  heroVideo,
  mediaType,
  height,
  ctaText,
  ctaLink,
  ctaText2,
  ctaLink2,
  ctaText3,
  ctaLink3,
  isOpen,
  onToggle,
  onHeaderTypeChange,
  onTitleChange,
  onSubtitleChange,
  onBackgroundColorChange,
  onTextColorChange,
  onPaddingChange,
  onHeroImageChange,
  onHeroVideoChange,
  onMediaTypeChange,
  onFileUpload,
  onHeightChange,
  onCtaTextChange,
  onCtaLinkChange,
  onCtaText2Change,
  onCtaLink2Change,
  onCtaText3Change,
  onCtaLink3Change,
}: EditorProps) {
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'video') => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file, type);
    }
  };

  return (
    <>
      <div
        className={`fixed left-0 top-0 h-full bg-white dark:bg-gray-900 shadow-2xl z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '320px' }}
      >
        {/* Editor Content */}
        <div className="h-full overflow-y-auto p-6">
          <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200">Hero Section Editor</h2>

        {/* Header Type Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Hero Type
          </label>
          <select
            value={headerType}
            onChange={(e) => onHeaderTypeChange(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            <option value={5}>Hero Style 1 - Split (Image Left)</option>
            <option value={6}>Hero Style 2 - Fullscreen Centered</option>
            <option value={7}>Hero Style 3 - Image Background + Overlay</option>
            <option value={8}>Hero Style 4 - Card Layout</option>
            <option value={9}>Hero Style 5 - Video Background</option>
            <option value={11}>Hero Style 7 - Split (Image Right)</option>
          </select>
        </div>

        {/* Title Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            placeholder="Enter title"
          />
        </div>

        {/* Subtitle Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Subtitle (Optional)
          </label>
          <input
            type="text"
            value={subtitle}
            onChange={(e) => onSubtitleChange(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            placeholder="Enter subtitle"
          />
        </div>

        {/* Background Color */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Background Color
          </label>
          <div className="flex gap-2 items-center">
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => onBackgroundColorChange(e.target.value)}
              className="w-16 h-10 rounded cursor-pointer"
            />
            <input
              type="text"
              value={backgroundColor}
              onChange={(e) => onBackgroundColorChange(e.target.value)}
              className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              placeholder="#000000"
            />
          </div>
        </div>

        {/* Text Color */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Text Color
          </label>
          <div className="flex gap-2 items-center">
            <input
              type="color"
              value={textColor}
              onChange={(e) => onTextColorChange(e.target.value)}
              className="w-16 h-10 rounded cursor-pointer"
            />
            <input
              type="text"
              value={textColor}
              onChange={(e) => onTextColorChange(e.target.value)}
              className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              placeholder="#FFFFFF"
            />
          </div>
        </div>

        {/* Padding */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Padding: {padding}px
          </label>
          <input
            type="range"
            min="10"
            max="100"
            value={padding}
            onChange={(e) => onPaddingChange(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>10px</span>
            <span>100px</span>
          </div>
        </div>

        {/* Media Type Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Media Type
          </label>
          <select
            value={mediaType}
            onChange={(e) => onMediaTypeChange(e.target.value as 'image' | 'video' | 'none')}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            <option value="none">Geen media</option>
            <option value="image">Afbeelding</option>
            <option value="video">Video</option>
          </select>
        </div>

        {/* Hero Image/Video Upload */}
        {mediaType === 'image' && (
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Hero Image
            </label>
            <div className="mb-2">
              <label className="block w-full p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md cursor-pointer hover:border-blue-500 transition-colors text-center text-sm text-gray-600 dark:text-gray-400">
                <span className="block mb-1">📷 Upload afbeelding</span>
                <span className="text-xs">of sleep een bestand hierheen</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'image')}
                  className="hidden"
                />
              </label>
            </div>
            <input
              type="text"
              value={heroImage}
              onChange={(e) => onHeroImageChange(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              placeholder="Of plak een URL hier (https://...)"
            />
            {heroImage && (
              <div className="mt-2">
                <img src={heroImage} alt="Preview" className="w-full h-32 object-cover rounded-md border border-gray-300 dark:border-gray-600" />
              </div>
            )}
          </div>
        )}

        {mediaType === 'video' && (
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Hero Video
            </label>
            <div className="mb-2">
              <label className="block w-full p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md cursor-pointer hover:border-blue-500 transition-colors text-center text-sm text-gray-600 dark:text-gray-400">
                <span className="block mb-1">🎥 Upload video</span>
                <span className="text-xs">of sleep een bestand hierheen</span>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => handleFileChange(e, 'video')}
                  className="hidden"
                />
              </label>
            </div>
            <input
              type="text"
              value={heroVideo}
              onChange={(e) => onHeroVideoChange(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              placeholder="Of plak een URL hier (https://...)"
            />
            {heroVideo && (
              <div className="mt-2">
                <video src={heroVideo} className="w-full h-32 object-cover rounded-md border border-gray-300 dark:border-gray-600" controls />
              </div>
            )}
          </div>
        )}

        {/* Height */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Hoogte: {height}px
          </label>
          <input
            type="range"
            min="300"
            max="1000"
            value={height}
            onChange={(e) => onHeightChange(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>300px</span>
            <span>1000px</span>
          </div>
        </div>

        {/* CTA Button 1 */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Button 1 Text (Optional)
          </label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={ctaText}
              onChange={(e) => onCtaTextChange(e.target.value)}
              className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              placeholder="Button 1"
            />
            <input
              type="text"
              value={ctaLink}
              onChange={(e) => onCtaLinkChange(e.target.value)}
              className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              placeholder="#"
            />
          </div>
        </div>

        {/* CTA Button 2 */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Button 2 Text (Optional)
          </label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={ctaText2}
              onChange={(e) => onCtaText2Change(e.target.value)}
              className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              placeholder="Button 2"
            />
            <input
              type="text"
              value={ctaLink2}
              onChange={(e) => onCtaLink2Change(e.target.value)}
              className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              placeholder="#"
            />
          </div>
        </div>

        {/* CTA Button 3 */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Button 3 Text (Optional)
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={ctaText3}
              onChange={(e) => onCtaText3Change(e.target.value)}
              className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              placeholder="Button 3"
            />
            <input
              type="text"
              value={ctaLink3}
              onChange={(e) => onCtaLink3Change(e.target.value)}
              className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              placeholder="#"
            />
          </div>
        </div>
      </div>
      </div>
      {/* Toggle Button - Always visible */}
      <button
        onClick={onToggle}
        className="fixed left-0 top-4 z-50 bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 transition-colors shadow-lg"
        style={{ transform: isOpen ? 'translateX(320px)' : 'translateX(0)' }}
        aria-label="Toggle editor"
      >
        {isOpen ? '‹' : '›'}
      </button>
    </>
  );
}

