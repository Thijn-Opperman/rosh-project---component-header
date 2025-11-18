# Hero Component Library

Een volledig herbruikbare Hero Component Library voor Next.js projecten met 6 verschillende hero styles en een visuele editor.

## 📋 Overzicht

Deze library bevat:
- **6 herbruikbare hero components** (HeroStyle1-5 en HeroStyle7)
- **Visuele editor** met sidebar voor content en styling
- **Style selector** met live previews van alle hero styles
- **Fullscreen preview pagina** (`/heroes`) om alle components te bekijken

## 🚀 Quick Start

### Installatie

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) om de editor te zien.

## 📁 Project Structuur

```
app/
├── components/
│   ├── hero/
│   │   ├── HeroStyle1.tsx    # Split Hero (Image Left)
│   │   ├── HeroStyle2.tsx    # Fullscreen Centered
│   │   ├── HeroStyle3.tsx    # Image Background + Overlay
│   │   ├── HeroStyle4.tsx    # Card Layout
│   │   ├── HeroStyle5.tsx    # Video Background
│   │   └── HeroStyle7.tsx    # Split Hero (Image Right)
│   ├── EditorSidebar.tsx     # Linker editor voor content/styling
│   └── HeroStyleSelector.tsx # Rechter preview panel
├── heroes/
│   └── page.tsx              # Fullscreen preview pagina
└── page.tsx                  # Hoofd editor pagina
```

## 🎨 Hero Styles

### Hero Style 1 - Split Left
Split layout met afbeelding links en content rechts.

### Hero Style 2 - Fullscreen Centered
Fullscreen hero met gecentreerde content. Ondersteunt gradient of achtergrondafbeelding.

### Hero Style 3 - Image Background + Overlay
Hero met achtergrondafbeelding en donkere overlay voor goede leesbaarheid.

### Hero Style 4 - Card Layout
Hero met witte card container en afbeelding in card layout.

### Hero Style 5 - Video Background
Hero met video of afbeelding als achtergrond.

### Hero Style 7 - Split Right
Split layout met content links en afbeelding rechts.

## 🔧 Componenten Overzetten naar Ander Project

### Stap 1: Copy Componenten

Kopieer de volgende bestanden naar je nieuwe project:

1. **Hero Components:**
   ```
   app/components/hero/
   ├── HeroStyle1.tsx
   ├── HeroStyle2.tsx
   ├── HeroStyle3.tsx
   ├── HeroStyle4.tsx
   ├── HeroStyle5.tsx
   └── HeroStyle7.tsx
   ```

2. **Editor Components (optioneel - alleen als je de editor wilt):**
   ```
   app/components/
   ├── EditorSidebar.tsx
   └── HeroStyleSelector.tsx
   ```

### Stap 2: Dependencies Controleren

Zorg ervoor dat je project de volgende dependencies heeft:

```json
{
  "dependencies": {
    "next": ">=16.0.0",
    "react": ">=18.0.0",
    "react-dom": ">=18.0.0"
  },
  "devDependencies": {
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### Stap 3: Tailwind CSS Configureren

De hero components gebruiken Tailwind CSS. Zorg ervoor dat Tailwind is geconfigureerd:

```javascript
// tailwind.config.js of tailwind.config.ts
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // ... rest van je config
}
```

### Stap 4: Hero Component Gebruiken

```tsx
import HeroStyle1 from './components/hero/HeroStyle1';

export default function MyPage() {
  return (
    <HeroStyle1
      title="Your Tournament"
      subtitle="Build amazing experiences"
      heroImage="https://example.com/image.jpg"
      backgroundColor="#3b82f6"
      textColor="#ffffff"
      ctaText="Get Started"
      ctaLink="/register"
      ctaText2="Learn More"
      ctaLink2="/about"
    />
  );
}
```

## 📝 Component Props

Alle hero components accepteren de volgende props:

### Algemene Props

| Prop | Type | Default | Beschrijving |
|------|------|---------|--------------|
| `title` | `string?` | - | Hero titel |
| `subtitle` | `string?` | - | Hero subtitel |
| `heroImage` | `string?` | - | URL naar hero afbeelding (ondersteunt data URLs en externe URLs) |
| `heroVideo` | `string?` | - | URL naar hero video (alleen HeroStyle5) |
| `backgroundColor` | `string?` | - | Achtergrondkleur (hex, rgb, of Tailwind class) |
| `textColor` | `string?` | - | Tekstkleur (hex, rgb, of Tailwind class) |
| `ctaText` | `string?` | - | Tekst voor eerste CTA button |
| `ctaLink` | `string?` | `#` | Link voor eerste CTA button |
| `ctaText2` | `string?` | - | Tekst voor tweede CTA button |
| `ctaLink2` | `string?` | `#` | Link voor tweede CTA button |
| `ctaText3` | `string?` | - | Tekst voor derde CTA button (niet alle styles) |
| `ctaLink3` | `string?` | `#` | Link voor derde CTA button (niet alle styles) |

### Hero Style Specifieke Props

Sommige styles hebben extra props:

- **HeroStyle1 & HeroStyle7:** Split layouts - `padding`, `height` (optioneel)
- **HeroStyle2:** Fullscreen - `height` (standaard fullscreen)
- **HeroStyle3:** Background overlay - `heroImage` wordt gebruikt als achtergrond
- **HeroStyle5:** Video background - `heroVideo` heeft prioriteit over `heroImage`

## 💡 Gebruik Voorbeelden

### Basis Gebruik

```tsx
import HeroStyle1 from './components/hero/HeroStyle1';

<HeroStyle1 
  title="Welcome"
  subtitle="Get started today"
/>
```

### Met Afbeelding

```tsx
<HeroStyle1 
  title="Your Tournament"
  subtitle="Join the competition"
  heroImage="/images/hero.jpg"
  ctaText="Register Now"
  ctaLink="/register"
/>
```

### Met Custom Kleuren

```tsx
<HeroStyle2
  title="Fullscreen Hero"
  subtitle="Amazing content"
  backgroundColor="#1e40af"
  textColor="#ffffff"
/>
```

### Met Video Background (HeroStyle5)

```tsx
<HeroStyle5
  title="Video Hero"
  subtitle="Watch this"
  heroVideo="/videos/background.mp4"
  heroImage="/images/fallback.jpg" // Fallback als video niet laadt
/>
```

### Met Data URL (Uploaded Image)

```tsx
const [imageDataUrl, setImageDataUrl] = useState('');

// Na file upload:
<HeroStyle1
  heroImage={imageDataUrl} // data:image/jpeg;base64,...
/>
```

## 🎯 Features

- ✅ **6 Verschillende Hero Styles**
- ✅ **Fully Customizable** - Titels, subtitels, kleuren, media
- ✅ **Image & Video Support** - Upload via FileReader of gebruik URLs
- ✅ **Multiple CTA Buttons** - Tot 3 call-to-action buttons per hero
- ✅ **Responsive Design** - Mobile-first met Tailwind CSS
- ✅ **TypeScript Support** - Volledig getypeerd
- ✅ **Portable** - Geen Next.js specifieke dependencies (behalve 'use client')
- ✅ **Dark Mode Ready** - Ondersteunt dark mode classes

## 🔄 Editor Functionaliteit (Optioneel)

Als je de volledige editor functionaliteit wilt gebruiken:

1. Kopieer `EditorSidebar.tsx` en `HeroStyleSelector.tsx`
2. Kopieer de state management logica uit `app/page.tsx`
3. Zorg ervoor dat alle hero components geïmporteerd zijn

Zie `app/page.tsx` voor een volledig werkend voorbeeld.

## 📄 Preview Pagina

Gebruik `/heroes` om alle hero styles in fullscreen te bekijken:

```tsx
// app/heroes/page.tsx
import HeroStyle1 from '../components/hero/HeroStyle1';
// ... andere imports

export default function HeroesPage() {
  return (
    <>
      <HeroStyle1 heroImage="..." />
      <HeroStyle2 heroImage="..." />
      {/* etc */}
    </>
  );
}
```

## 🎨 Styling

Alle components gebruiken Tailwind CSS. Custom styles kunnen worden toegevoegd via:
- `backgroundColor` prop (Tailwind class of hex color)
- `textColor` prop (Tailwind class of hex color)
- Custom CSS classes in de component files

## 🔧 Customization

### Custom Styling Toevoegen

Je kunt de hero components aanpassen door de `.tsx` bestanden te bewerken:

```tsx
// HeroStyle1.tsx
<section className={`w-full min-h-screen ${bgColorClass} custom-class`}>
  {/* ... */}
</section>
```

### Nieuwe Hero Style Toevoegen

1. Maak een nieuw bestand in `app/components/hero/` (bijv. `HeroStyle8.tsx`)
2. Volg het patroon van bestaande styles
3. Export de component met dezelfde props interface
4. Voeg toe aan de editor (als je die gebruikt)

## 📦 Export Voor Gebruik in Andere Projecten

Voor optimale portabiliteit:

1. **Kopieer alleen de hero components** (`app/components/hero/*.tsx`)
2. **Zorg voor Tailwind CSS** configuratie
3. **Importeer direct** - geen extra setup nodig

De components zijn volledig standalone en hebben geen externe dependencies behalve React en Tailwind.

## 🐛 Troubleshooting

### Afbeeldingen Laden Niet
- Controleer of de image URL toegankelijk is
- Voor Next.js: configureer `next.config.js` met `remotePatterns` voor externe images
- Voor data URLs: zorg dat de base64 string correct is

### Styling Ziet Er Anders Uit
- Controleer Tailwind CSS configuratie
- Zorg dat alle Tailwind classes in je config staan
- Check of custom CSS niet conflicteert

### Component Renders Niet
- Zorg dat `'use client'` directive aanwezig is
- Check React en Next.js versies
- Controleer TypeScript errors

## 📚 Extra Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)

## 📝 Licentie

Deze component library is vrij te gebruiken in je projecten.

## 🤝 Support

Voor vragen of issues, maak een issue aan in de repository.

---

**Versie:** 1.0.0  
**Laatste Update:** 2024
