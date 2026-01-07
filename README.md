# Bold Theme v2 - Brutalist Photography Portfolio

Professional brutalist photography portfolio with systematic 8px grid spacing system.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run dev server on port 3006
npm run dev

# Build for production
npm run build
```

Visit **http://localhost:3006** to see the theme.

## ✨ Features

- **Professional Spacing**: 8px grid system with formula-based typography
- **Brutalist Design**: Zero border radius, thick borders, shocking pink (#ff0066)
- **Scroll Animations**: Framer Motion scroll-triggered effects
- **Image Lightbox**: Keyboard navigation (ESC, arrows)
- **Mobile Optimized**: Touch-friendly with generous spacing
- **Fully Static**: All pages pre-rendered for performance

## 📦 Tech Stack

- Next.js 16.1.1 (App Router)
- React 19.2.3
- Tailwind CSS v4
- Framer Motion 12
- Lucide React (icons)
- TypeScript

## 🌐 Deploy to Vercel

### Method 1: Vercel CLI (Fastest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (from this directory)
vercel

# Deploy to production
vercel --prod
```

### Method 2: Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your Git repository
3. **Root Directory**: Select `themes/bold-v2`
4. Vercel auto-detects Next.js - click **Deploy**

### Method 3: GitHub Integration

1. Push to GitHub
2. Connect repo to Vercel
3. Set **Root Directory**: `themes/bold-v2`
4. Deploy automatically on every push

## 📐 Spacing System

Professional 8px grid:

| Element | Desktop | Mobile |
|---------|---------|--------|
| Container | 120px | 60px |
| Sections | 160px vertical | 120px |
| Grid gaps | 40-64px | 24-40px |
| Headings | Formula-based* | Reduced 25% |

*Heading margins = 0.5x to 1.0x of font-size

## 📄 Pages

- **/** - Hero, featured work, scroll animations
- **/gallery** - Photo grid, category filters, lightbox
- **/about** - Bio, specialties, publications
- **/contact** - Contact form with services

## 🎨 Customization

### Update Colors

Edit `app/globals.css`:

```css
:root {
  --bg: #000000;      /* Black background */
  --accent: #ff0066;  /* Pink accent */
  --text: #ffffff;    /* White text */
}
```

### Update Contact Info

Edit `components/layout/Footer.tsx`:

```typescript
const contactInfo = {
  email: 'hello@opalaura.com',
  instagram: 'https://instagram.com/opalauraphoto',
};
```

### Adjust Spacing

Edit `lib/spacing.ts` to change all spacing values systematically.

## 📱 Contact Info

- **Email**: hello@opalaura.com
- **Instagram**: [@opalauraphoto](https://instagram.com/opalauraphoto)
- **Location**: Belgrade, Serbia

## 🏗️ Build Output

```
Route (app)
├ ○ /              (Static)
├ ○ /about         (Static)
├ ○ /contact       (Static)
└ ○ /gallery       (Static)
```

All pages are static HTML - perfect for Vercel.

## ⚡ Performance

- Static generation at build time
- Zero runtime overhead
- Optimized animations
- Mobile-first responsive

## 📝 License

MIT
