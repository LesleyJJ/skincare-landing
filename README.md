# Glow Naturally - Skincare Landing Page

A beautiful, modern landing page for a Vitamin C Brightening Serum product built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, responsive design with natural color scheme
- 🎨 Beautiful gradient backgrounds and smooth animations
- 📱 Fully responsive across all devices
- 🚀 Optimized for performance and SEO
- 💫 Interactive FAQ section with smooth animations
- 🛒 Pricing tiers with clear call-to-action buttons
- ⭐ Customer testimonials and social proof
- 🎬 Video demo section placeholder
- 📧 Contact information and social media links

## Sections Included

1. **Hero Section** - Eye-catching headline with product image
2. **Problem → Solution** - Addresses common skin concerns
3. **Key Benefits** - 4 main product benefits with icons
4. **Ingredients Transparency** - Natural ingredients showcase
5. **Social Proof** - Customer reviews and testimonials
6. **Video/Demo** - Product demonstration section
7. **Pricing & Offers** - Three pricing tiers with discounts
8. **FAQ Section** - Interactive accordion with common questions
9. **Final CTA** - Strong closing call-to-action
10. **Footer** - Links, contact info, and social media

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Poppins Font** - Clean, modern typography

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd skincare-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://yourusername.github.io/skincare-landing`

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The static files will be generated in the `out` directory
3. Deploy the `out` directory to your hosting provider

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select "GitHub Actions" as the source
4. The workflow will automatically deploy on every push to main

## Customization

### Colors
The color scheme uses CSS custom properties defined in `globals.css`:
- Primary: Pink tones (`#f8b5c1`)
- Secondary: Green tones (`#a8d5ba`)
- Accent: Beige tones (`#f5e6d3`)

### Content
All content is easily customizable in the main `page.tsx` file:
- Headlines and descriptions
- Pricing information
- FAQ questions and answers
- Customer testimonials
- Contact information

### Images
Replace placeholder icons with actual product images:
- Hero section product image
- Ingredient illustrations
- Customer photos
- Video thumbnails

## Performance

- Optimized for Core Web Vitals
- Static site generation for fast loading
- Responsive images and lazy loading
- Minimal JavaScript bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support, email support@glownaturally.com or create an issue in this repository.