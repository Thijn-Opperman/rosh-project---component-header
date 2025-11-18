# Export Guide - Hero Components naar Ander Project

Deze guide helpt je om de hero components over te zetten naar een ander Next.js project.

## 📋 Overzicht Bestanden

### Verplichte Bestanden (Voor Hero Components)

```
app/components/hero/
├── HeroStyle1.tsx    ✅ Verplicht
├── HeroStyle2.tsx    ✅ Verplicht
├── HeroStyle3.tsx    ✅ Verplicht
├── HeroStyle4.tsx    ✅ Verplicht
├── HeroStyle5.tsx    ✅ Verplicht
└── HeroStyle7.tsx    ✅ Verplicht
```

### Optionele Bestanden (Voor Editor Functionaliteit)

```
app/components/
├── EditorSidebar.tsx       ⚪ Optioneel - alleen voor editor
└── HeroStyleSelector.tsx   ⚪ Optioneel - alleen voor style selector

app/heroes/
└── page.tsx                ⚪ Optioneel - alleen voor preview pagina
```

## 🚀 Stap-voor-Stap Export

### Stap 1: Copy Hero Components

Kopieer de `app/components/hero/` directory naar je nieuwe project:

```bash
# Van dit project
cp -r app/components/hero/ /pad/naar/nieuw/project/app/components/

# Of gebruik Windows Explorer/Finder om de folder te kopiëren
```

### Stap 2: Dependencies Controleren

Controleer of je project de volgende dependencies heeft:

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

**Installeer indien nodig:**
```bash
npm install next react react-dom
npm install -D tailwindcss typescript @types/react @types/react-dom
```

### Stap 3: Tailwind CSS Configureren

**Belangrijk:** Alle hero components gebruiken Tailwind CSS. Zorg dat Tailwind is geconfigureerd:

1. **Tailwind config bestand:**
```javascript
// tailwind.config.js of tailwind.config.ts
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

2. **PostCSS config (als nodig):**
```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

3. **Global CSS:**
```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Stap 4: TypeScript Configureren (Als TypeScript Project)

Zorg dat `tsconfig.json` de juiste instellingen heeft:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Stap 5: Hero Component Gebruiken

**Basis gebruik:**

```tsx
// app/page.tsx of een andere pagina
'use client';

import HeroStyle1 from './components/hero/HeroStyle1';

export default function Home() {
  return (
    <HeroStyle1 
      title="Your Tournament"
      subtitle="Build amazing experiences"
      heroImage="https://example.com/image.jpg"
      ctaText="Get Started"
      ctaLink="/register"
    />
  );
}
```

### Stap 6: Image Configuration (Voor Externe Images)

Als je externe images gebruikt, configureer `next.config.js`:

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
```

**Let op:** De hero components gebruiken gewone `<img>` tags voor portabiliteit, maar Next.js Image componenten werken ook als je de imports aanpast.

## 🔧 Optionele: Editor Functionaliteit

Als je de volledige editor functionaliteit wilt overzetten:

### Stap 1: Copy Editor Components

```bash
cp app/components/EditorSidebar.tsx /pad/naar/nieuw/project/app/components/
cp app/components/HeroStyleSelector.tsx /pad/naar/nieuw/project/app/components/
```

### Stap 2: Copy State Management

Kopieer de state management logica uit `app/page.tsx`:

```tsx
// Zie app/page.tsx voor volledige implementatie
const [headerType, setHeaderType] = useState(5);
const [title, setTitle] = useState('Your Tournament');
// ... etc
```

### Stap 3: Imports Aanpassen

Pas de import paths aan naar je nieuwe project structuur:

```tsx
// Pas aan naar je project structuur
import HeroStyle1 from './components/hero/HeroStyle1';
// ... andere imports
```

## 📦 Minimale Setup (Zonder Editor)

Voor minimale setup zonder editor, heb je alleen nodig:

1. ✅ Hero components (`app/components/hero/*.tsx`)
2. ✅ Tailwind CSS configuratie
3. ✅ TypeScript configuratie (als TypeScript project)

**Gebruik:**
```tsx
import HeroStyle1 from './components/hero/HeroStyle1';

export default function Page() {
  return <HeroStyle1 title="Title" subtitle="Subtitle" />;
}
```

## ✅ Checklist

Gebruik deze checklist om te verifiëren dat alles werkt:

- [ ] Hero components gekopieerd naar `app/components/hero/`
- [ ] Tailwind CSS geconfigureerd
- [ ] Dependencies geïnstalleerd (Next.js, React, Tailwind)
- [ ] TypeScript geconfigureerd (als TypeScript project)
- [ ] Next.js image config (als externe images gebruikt worden)
- [ ] Component kan worden geïmporteerd zonder errors
- [ ] Component rendert correct in browser
- [ ] Styling ziet er correct uit
- [ ] Images laden (als gebruikt)
- [ ] Buttons werken (als gebruikt)

## 🐛 Troubleshooting

### Component Renders Niet

**Probleem:** Blank scherm of errors

**Oplossing:**
- Check of `'use client'` directive aanwezig is in component
- Verify React/Next.js versies
- Check browser console voor errors

### Styling Ziet Er Anders Uit

**Probleem:** Components zien er niet gestyled uit

**Oplossing:**
- Verify Tailwind CSS is geconfigureerd
- Check of `globals.css` Tailwind directives bevat
- Verify Tailwind classes in `tailwind.config.js`
- Restart development server

### Images Laden Niet

**Probleem:** Images verschijnen niet

**Oplossing:**
- Voor externe URLs: configureer `next.config.js` met `remotePatterns`
- Voor data URLs: check of base64 string correct is
- Check network tab in browser dev tools
- Verify image URLs zijn toegankelijk

### TypeScript Errors

**Probleem:** Type errors bij import

**Oplossing:**
- Verify TypeScript is geïnstalleerd
- Check `tsconfig.json` configuratie
- Verify alle type definitions aanwezig zijn
- Check import paths zijn correct

## 📝 Tips

1. **Start Klein:** Begin met één hero component om te testen voordat je alles overzet
2. **Test Eerst:** Test elke component individueel voordat je ze allemaal gebruikt
3. **Check Dependencies:** Zorg dat alle dependencies up-to-date zijn
4. **Documenteer:** Pas de README aan voor je specifieke project
5. **Customize:** Pas de default waarden aan naar jouw project needs

## 🔗 Extra Resources

- [Tailwind CSS Setup Guide](https://tailwindcss.com/docs/installation)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)

## ❓ Hulp Nodig?

Als je problemen ondervindt:
1. Check de README.md voor algemene documentatie
2. Check browser console voor errors
3. Verify alle stappen in deze guide zijn gevolgd
4. Check of dependencies correct zijn geïnstalleerd

---

**Laatste Update:** 2024

