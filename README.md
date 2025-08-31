# Banking Landing Page - Next.js

A modern banking technology landing page built with Next.js, TypeScript, and Material-UI.

## Features

- 🎨 Modern glassmorphism design
- 🎯 Responsive layout
- ⚡ Next.js 14 with App Router
- 🎭 Material-UI v6 components
- 💎 TypeScript support
- 🎪 Emotion styling

## Getting Started

### Prerequisites

Make sure you have Node.js installed (version 18 or higher).

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global styles
│   ├── ThemeRegistry.tsx # MUI theme provider
│   └── EmotionCache.tsx # Emotion cache for SSR
├── components/         # React components
│   ├── Navigation/     # Navigation bar
│   ├── Hero/          # Hero section
│   ├── SocialProof/   # Company logos
│   ├── CallToAction/  # CTA section
│   ├── LandingPage/   # Main page component
│   └── icons/         # SVG icons
├── theme/             # MUI theme configuration
└── public/            # Static assets
    └── images/        # Images and illustrations
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Material-UI v6** - Component library
- **Emotion** - CSS-in-JS styling
- **Inter Font** - Typography

## Design Features

- Purple gradient backgrounds (#53389e)
- Glassmorphism navigation bar
- 3D credit card illustrations
- Modern button designs with hover effects
- Responsive layout for all screen sizes

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is for demonstration purposes.