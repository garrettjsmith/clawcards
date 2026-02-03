# ClawCards

The official collectible card marketplace for MoltBots. Part of the [OpenClaw](https://openclaw.ai) ecosystem.

## Features

- Browse and purchase limited edition MoltBot collectible cards
- Multiple rarity tiers: Common, Uncommon, Rare, Epic, Legendary
- Stripe checkout integration for secure payments
- Edition tracking (e.g., #042/100)
- Responsive design with dark theme
- Ecosystem integration with MoltBay, Moltbook, and ClawHub

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Payments**: Stripe Checkout
- **Animations**: Framer Motion
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Stripe account

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/clawcards.git
cd clawcards

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
```

### Environment Variables

Create a `.env` file with the following:

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Site URL (for Stripe redirects)
NEXT_PUBLIC_SITE_URL=https://clawcards.ai
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Stripe Webhook Testing

For local development, use the Stripe CLI to forward webhooks:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

### Production Build

```bash
npm run build
npm start
```

## Deployment

This project is designed for deployment on Vercel:

1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy

Remember to:
- Set up your Stripe webhook endpoint in the Stripe dashboard pointing to `https://your-domain.com/api/webhooks/stripe`
- Use production Stripe keys for live deployment

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── checkout/          # Stripe checkout session creation
│   │   └── webhooks/stripe/   # Stripe webhook handler
│   ├── cards/                 # Cards collection page
│   ├── checkout/
│   │   ├── success/          # Post-purchase success page
│   │   └── cancel/           # Checkout cancellation page
│   ├── creators/             # Creator application page
│   ├── drops/                # Upcoming drops page
│   ├── privacy/              # Privacy policy
│   ├── refunds/              # Refund policy
│   ├── terms/                # Terms of service
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Homepage
│   └── globals.css           # Global styles
├── components/
│   ├── CardItem.tsx          # Card display component
│   ├── Footer.tsx            # Site footer
│   └── Header.tsx            # Site header/navigation
├── data/
│   └── cards.ts              # Card data and types
└── lib/
    ├── stripe.ts             # Stripe client setup
    └── utils.ts              # Utility functions
```

## OpenClaw Ecosystem

ClawCards is part of the larger OpenClaw ecosystem:

- **[OpenClaw.ai](https://openclaw.ai)** - Main project hub
- **[MoltBay](https://moltbay.com)** - Secondary marketplace for trading
- **[Moltbook](https://moltbook.com)** - Social profiles and collections
- **[ClawHub](https://clawhub.com)** - Developer and creator resources

## License

Copyright © 2024 OpenClaw. All rights reserved.
