# SPINN - Artist Direct Support Platform

A Next.js application that enables fans to purchase music directly from artists with integrated payment processing.

## Features

- **Black & Dark Green Theme**: Modern, dark interface with accent green
- **Direct Artist Payments**: 100% of purchases go directly to artists
- **Song Marketplace**: Browse and purchase individual songs, albums, and experiences
- **Artist Profiles**: Detailed pages showcasing artist information and catalog
- **Shopping Cart**: Add multiple items and batch checkout
- **Payment Processing**: Secure checkout with multiple payment methods
- **Responsive Design**: Mobile-first design with bottom navigation
- **Real-time Cart**: Live cart updates with item count display

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom brand colors
- **Language**: TypeScript
- **State Management**: React Context API for payment/cart state
- **Payments**: Stripe integration ready
- **Images**: Next.js Image optimization with Unsplash placeholders

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── explore/           # Music discovery page
│   ├── artist/[id]/       # Dynamic artist profile pages
│   ├── song/[id]/         # Individual song purchase pages
│   ├── cart/              # Shopping cart page
│   └── artists/           # Artist directory
├── components/             # Reusable UI components
│   ├── header.tsx         # Main navigation
│   ├── footer.tsx         # Site footer
│   ├── bottom-nav.tsx     # Mobile navigation
│   ├── content-card.tsx   # Music/artist cards
│   ├── content-carousel.tsx # Horizontal scrolling lists
│   └── payment/           # Payment-related components
└── lib/                   # Utilities and context
    ├── payment-context.tsx # Cart & payment state
    └── mockData.ts        # Sample data
```

## Key Pages

- **Home** (`/`): Landing page with call-to-action
- **Explore** (`/explore`): Main content discovery with carousels
- **Artists** (`/artists`): Browse artists by genre
- **Artist Profile** (`/artist/[id]`): Artist info, songs, support options
- **Song Detail** (`/song/[id]`): Individual song with purchase options
- **Cart** (`/cart`): Shopping cart with checkout

## Payment Features

- Add songs/albums to cart
- Secure payment modal with method selection
- Real-time payment processing simulation
- Purchase history tracking
- Direct artist payouts (100% to artist)
- Support for individual song or batch purchases

## Customization

The app uses a custom Tailwind theme with brand colors:

```css
brand: {
  900: "#02040A",   /* main background */
  800: "#050814",
  700: "#07101F",
  600: "#0B1729",
  500: "#111827",
  accent: "#16A34A" /* dark green accent */
}
```

Modify `tailwind.config.mjs` to adjust the color scheme.

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Future Enhancements

- Real Stripe payment integration
- User authentication and profiles
- Artist dashboard for uploads
- Playlist creation and sharing
- Social features and following
- Advanced search and filtering
- Mobile app version

---

**SPINN** - *Support artists directly*