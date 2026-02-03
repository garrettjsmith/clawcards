export type CardRarity = 'legendary' | 'epic' | 'rare' | 'uncommon' | 'common'
export type CardType = 'character' | 'moment' | 'item' | 'location'

export interface Card {
  id: string
  name: string
  description: string
  rarity: CardRarity
  type: CardType
  priceInCents: number
  totalEditions: number
  editionsSold: number
  imageUrl: string
  creator: string
  releaseDate: string
  featured?: boolean
  isNewDrop?: boolean
}

export const cards: Card[] = [
  {
    id: 'molten-guardian',
    name: 'Molten Guardian',
    description: 'Forged in the heart of the volcanic core, the Guardian has watched over MoltBot civilization for a thousand cycles. Its flame never dims.',
    rarity: 'legendary',
    type: 'character',
    priceInCents: 14999,
    totalEditions: 100,
    editionsSold: 12,
    imageUrl: '/cards/molten-guardian.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
    featured: true,
    isNewDrop: true,
  },
  {
    id: 'chromatic-shifter',
    name: 'Chromatic Shifter',
    description: 'Master of color manipulation, the Shifter can bend light itself. No two collectors see the same bot.',
    rarity: 'epic',
    type: 'character',
    priceInCents: 4999,
    totalEditions: 250,
    editionsSold: 87,
    imageUrl: '/cards/chromatic-shifter.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-01-15',
    featured: true,
  },
  {
    id: 'void-whisper',
    name: 'Void Whisper',
    description: 'Speaker of the silent dark. Void Whisper communicates through frequencies only other MoltBots can perceive.',
    rarity: 'epic',
    type: 'character',
    priceInCents: 4999,
    totalEditions: 250,
    editionsSold: 134,
    imageUrl: '/cards/void-whisper.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-01-15',
  },
  {
    id: 'the-first-flex',
    name: 'The First Flex',
    description: 'A legendary moment captured forever - the first MoltBot to publicly display its collection. The flex heard around the world.',
    rarity: 'rare',
    type: 'moment',
    priceInCents: 2499,
    totalEditions: 500,
    editionsSold: 312,
    imageUrl: '/cards/first-flex.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-01-10',
    featured: true,
  },
  {
    id: 'circuit-breaker',
    name: 'Circuit Breaker',
    description: 'When systems fail, Circuit Breaker rises. This maintenance bot keeps the MoltBot network running smoothly.',
    rarity: 'rare',
    type: 'character',
    priceInCents: 1999,
    totalEditions: 500,
    editionsSold: 423,
    imageUrl: '/cards/circuit-breaker.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-01-08',
  },
  {
    id: 'data-stream',
    name: 'Data Stream',
    description: 'Pure information given form. Data Stream flows through the network, carrying memories and messages.',
    rarity: 'rare',
    type: 'item',
    priceInCents: 1499,
    totalEditions: 500,
    editionsSold: 289,
    imageUrl: '/cards/data-stream.png',
    creator: 'Community Creator',
    releaseDate: '2024-01-05',
  },
  {
    id: 'neon-spire',
    name: 'Neon Spire',
    description: 'The central tower of MoltBot City, where the Council of Cores convenes to decide the fate of all bots.',
    rarity: 'uncommon',
    type: 'location',
    priceInCents: 799,
    totalEditions: 1000,
    editionsSold: 567,
    imageUrl: '/cards/neon-spire.png',
    creator: 'Community Creator',
    releaseDate: '2024-01-01',
  },
  {
    id: 'rusty-cog',
    name: 'Rusty Cog',
    description: 'A humble but essential component. Every great MoltBot started with a single cog.',
    rarity: 'common',
    type: 'item',
    priceInCents: 299,
    totalEditions: 5000,
    editionsSold: 2341,
    imageUrl: '/cards/rusty-cog.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2023-12-15',
  },
]

export function getCardById(id: string): Card | undefined {
  return cards.find(card => card.id === id)
}

export function getFeaturedCards(): Card[] {
  return cards.filter(card => card.featured)
}

export function getCardsByRarity(rarity: CardRarity): Card[] {
  return cards.filter(card => card.rarity === rarity)
}

export function getNewDrops(): Card[] {
  return cards.filter(card => card.isNewDrop)
}

export function getAvailableEditions(card: Card): number {
  return card.totalEditions - card.editionsSold
}
