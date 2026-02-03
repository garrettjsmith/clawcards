// =============================================================================
// CLAWCARDS - Premium Digital Collectibles for the OpenClaw Ecosystem
// =============================================================================

export type CardRarity = 'mythic' | 'legendary' | 'epic' | 'rare' | 'uncommon' | 'common'
export type CardType = 'founder' | 'pioneer' | 'character' | 'moment' | 'artifact' | 'location'
export type CardSeries = 'genesis' | 'founders' | 'pioneers' | 'moltbot-origins' | 'historic-firsts' | 'artifacts'
export type CardParallel = 'base' | 'holographic' | 'chrome' | 'gold' | 'obsidian' | 'platinum'

export interface Card {
  id: string
  name: string
  subtitle?: string
  description: string
  rarity: CardRarity
  type: CardType
  series: CardSeries
  seriesNumber?: string // e.g., "GEN-001", "FND-003"
  parallel: CardParallel
  priceInCents: number
  totalEditions: number
  editionsSold: number
  imageUrl: string
  creator: string
  releaseDate: string
  featured?: boolean
  isNewDrop?: boolean
  // Parallel variants of this card
  variants?: string[] // IDs of other parallel versions
  // Special attributes
  attributes?: {
    power?: number
    wisdom?: number
    influence?: number
    rarity_score?: number
  }
  // Pioneer/GitHub specific
  github?: {
    username: string
    avatarUrl: string
    commits: number
    rank: number
  }
}

// =============================================================================
// SERIES DEFINITIONS
// =============================================================================

export const seriesInfo: Record<CardSeries, { name: string; description: string; icon: string }> = {
  'genesis': {
    name: 'Genesis Collection',
    description: 'The inaugural ClawCards collection. Own a piece of history.',
    icon: '🌅',
  },
  'founders': {
    name: 'Founders Series',
    description: 'Celebrating the visionaries who conceived the OpenClaw ecosystem.',
    icon: '👑',
  },
  'pioneers': {
    name: 'Pioneers Series',
    description: 'The GitHub contributors who built OpenClaw with their code. Real devs. Real commits. Real legends.',
    icon: '🦞',
  },
  'moltbot-origins': {
    name: 'MoltBot Origins',
    description: 'The original MoltBot characters that started it all.',
    icon: '🤖',
  },
  'historic-firsts': {
    name: 'Historic Firsts',
    description: 'Milestone moments in OpenClaw history, captured forever.',
    icon: '⚡',
  },
  'artifacts': {
    name: 'Artifacts & Relics',
    description: 'The tools, tech, and treasures of the MoltBot world.',
    icon: '🔧',
  },
}

// =============================================================================
// PARALLEL DEFINITIONS (Like Topps Chrome Refractors)
// =============================================================================

export const parallelInfo: Record<CardParallel, {
  name: string
  description: string
  priceMultiplier: number
  maxEditions: number
  borderColor: string
  effect: string
}> = {
  'base': {
    name: 'Base',
    description: 'Standard edition',
    priceMultiplier: 1,
    maxEditions: 1000,
    borderColor: 'border-white/20',
    effect: 'none',
  },
  'holographic': {
    name: 'Holographic',
    description: 'Rainbow shimmer effect',
    priceMultiplier: 2,
    maxEditions: 250,
    borderColor: 'border-purple-400/50',
    effect: 'holographic',
  },
  'chrome': {
    name: 'Chrome',
    description: 'Metallic chrome finish',
    priceMultiplier: 4,
    maxEditions: 100,
    borderColor: 'border-cyan-400/50',
    effect: 'chrome',
  },
  'gold': {
    name: 'Gold',
    description: 'Premium gold foil border',
    priceMultiplier: 10,
    maxEditions: 25,
    borderColor: 'border-yellow-400/70',
    effect: 'gold-foil',
  },
  'obsidian': {
    name: 'Obsidian',
    description: 'Dark obsidian with gold accents',
    priceMultiplier: 25,
    maxEditions: 10,
    borderColor: 'border-yellow-500',
    effect: 'obsidian',
  },
  'platinum': {
    name: 'Platinum 1/1',
    description: 'The ultimate chase card. One of one.',
    priceMultiplier: 100,
    maxEditions: 1,
    borderColor: 'border-white',
    effect: 'platinum',
  },
}

// =============================================================================
// THE CARDS
// =============================================================================

export const cards: Card[] = [
  // ===========================================================================
  // GENESIS COLLECTION - Launch Cards
  // ===========================================================================
  {
    id: 'genesis-prime',
    name: 'Genesis Prime',
    subtitle: 'The First Card',
    description: 'The very first ClawCard ever minted. Genesis Prime represents the birth of a new era in digital collectibles. When the first line of code was written, this card was destined to exist.',
    rarity: 'mythic',
    type: 'moment',
    series: 'genesis',
    seriesNumber: 'GEN-001',
    parallel: 'platinum',
    priceInCents: 99999, // $999.99
    totalEditions: 1,
    editionsSold: 0,
    imageUrl: '/cards/genesis-prime.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
    featured: true,
    isNewDrop: true,
    attributes: {
      power: 100,
      wisdom: 100,
      influence: 100,
      rarity_score: 1000,
    },
  },
  {
    id: 'genesis-dawn-gold',
    name: 'Genesis Dawn',
    subtitle: 'A New Beginning',
    description: 'As the digital sun rose over MoltBot City for the first time, a new chapter began. Genesis Dawn captures that moment of infinite possibility.',
    rarity: 'legendary',
    type: 'moment',
    series: 'genesis',
    seriesNumber: 'GEN-002',
    parallel: 'gold',
    priceInCents: 24999, // $249.99
    totalEditions: 25,
    editionsSold: 3,
    imageUrl: '/cards/genesis-dawn.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
    featured: true,
    isNewDrop: true,
    variants: ['genesis-dawn-chrome', 'genesis-dawn-holo', 'genesis-dawn-base'],
    attributes: {
      power: 85,
      wisdom: 90,
      influence: 95,
      rarity_score: 920,
    },
  },
  {
    id: 'genesis-dawn-chrome',
    name: 'Genesis Dawn',
    subtitle: 'A New Beginning',
    description: 'As the digital sun rose over MoltBot City for the first time, a new chapter began. Genesis Dawn captures that moment of infinite possibility.',
    rarity: 'epic',
    type: 'moment',
    series: 'genesis',
    seriesNumber: 'GEN-002',
    parallel: 'chrome',
    priceInCents: 9999, // $99.99
    totalEditions: 100,
    editionsSold: 12,
    imageUrl: '/cards/genesis-dawn.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
    isNewDrop: true,
  },
  {
    id: 'genesis-dawn-holo',
    name: 'Genesis Dawn',
    subtitle: 'A New Beginning',
    description: 'As the digital sun rose over MoltBot City for the first time, a new chapter began. Genesis Dawn captures that moment of infinite possibility.',
    rarity: 'rare',
    type: 'moment',
    series: 'genesis',
    seriesNumber: 'GEN-002',
    parallel: 'holographic',
    priceInCents: 4999, // $49.99
    totalEditions: 250,
    editionsSold: 47,
    imageUrl: '/cards/genesis-dawn.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
    isNewDrop: true,
  },
  {
    id: 'genesis-dawn-base',
    name: 'Genesis Dawn',
    subtitle: 'A New Beginning',
    description: 'As the digital sun rose over MoltBot City for the first time, a new chapter began. Genesis Dawn captures that moment of infinite possibility.',
    rarity: 'uncommon',
    type: 'moment',
    series: 'genesis',
    seriesNumber: 'GEN-002',
    parallel: 'base',
    priceInCents: 1499, // $14.99
    totalEditions: 1000,
    editionsSold: 234,
    imageUrl: '/cards/genesis-dawn.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
  },

  // ===========================================================================
  // FOUNDERS SERIES - The Pioneers
  // ===========================================================================
  {
    id: 'the-architect-obsidian',
    name: 'The Architect',
    subtitle: 'Builder of Worlds',
    description: 'Every great civilization needs its architect. The one who saw the blueprint in the chaos, who wrote the first function, who believed when others doubted. This card honors the visionaries who built OpenClaw from nothing.',
    rarity: 'legendary',
    type: 'founder',
    series: 'founders',
    seriesNumber: 'FND-001',
    parallel: 'obsidian',
    priceInCents: 49999, // $499.99
    totalEditions: 10,
    editionsSold: 1,
    imageUrl: '/cards/the-architect.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
    featured: true,
    isNewDrop: true,
    variants: ['the-architect-gold', 'the-architect-chrome'],
    attributes: {
      power: 70,
      wisdom: 100,
      influence: 95,
      rarity_score: 950,
    },
  },
  {
    id: 'the-architect-gold',
    name: 'The Architect',
    subtitle: 'Builder of Worlds',
    description: 'Every great civilization needs its architect. The one who saw the blueprint in the chaos, who wrote the first function, who believed when others doubted. This card honors the visionaries who built OpenClaw from nothing.',
    rarity: 'epic',
    type: 'founder',
    series: 'founders',
    seriesNumber: 'FND-001',
    parallel: 'gold',
    priceInCents: 19999, // $199.99
    totalEditions: 25,
    editionsSold: 4,
    imageUrl: '/cards/the-architect.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
    isNewDrop: true,
  },
  {
    id: 'the-architect-chrome',
    name: 'The Architect',
    subtitle: 'Builder of Worlds',
    description: 'Every great civilization needs its architect. The one who saw the blueprint in the chaos, who wrote the first function, who believed when others doubted. This card honors the visionaries who built OpenClaw from nothing.',
    rarity: 'rare',
    type: 'founder',
    series: 'founders',
    seriesNumber: 'FND-001',
    parallel: 'chrome',
    priceInCents: 7999, // $79.99
    totalEditions: 100,
    editionsSold: 23,
    imageUrl: '/cards/the-architect.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
    isNewDrop: true,
  },
  {
    id: 'first-believer-gold',
    name: 'The First Believer',
    subtitle: 'Pioneer Collector',
    description: 'Before there were thousands, there was one. The First Believer saw potential when ClawCards was just an idea. They didn\'t just collect—they believed. This card celebrates every early adopter who took a chance.',
    rarity: 'epic',
    type: 'founder',
    series: 'founders',
    seriesNumber: 'FND-002',
    parallel: 'gold',
    priceInCents: 14999, // $149.99
    totalEditions: 25,
    editionsSold: 2,
    imageUrl: '/cards/first-believer.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
    featured: true,
    isNewDrop: true,
    variants: ['first-believer-chrome', 'first-believer-holo'],
    attributes: {
      power: 60,
      wisdom: 85,
      influence: 100,
      rarity_score: 880,
    },
  },
  {
    id: 'first-believer-chrome',
    name: 'The First Believer',
    subtitle: 'Pioneer Collector',
    description: 'Before there were thousands, there was one. The First Believer saw potential when ClawCards was just an idea. They didn\'t just collect—they believed.',
    rarity: 'rare',
    type: 'founder',
    series: 'founders',
    seriesNumber: 'FND-002',
    parallel: 'chrome',
    priceInCents: 5999, // $59.99
    totalEditions: 100,
    editionsSold: 18,
    imageUrl: '/cards/first-believer.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
    isNewDrop: true,
  },
  {
    id: 'first-believer-holo',
    name: 'The First Believer',
    subtitle: 'Pioneer Collector',
    description: 'Before there were thousands, there was one. The First Believer saw potential when ClawCards was just an idea. They didn\'t just collect—they believed.',
    rarity: 'uncommon',
    type: 'founder',
    series: 'founders',
    seriesNumber: 'FND-002',
    parallel: 'holographic',
    priceInCents: 2999, // $29.99
    totalEditions: 250,
    editionsSold: 67,
    imageUrl: '/cards/first-believer.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
  },

  // ===========================================================================
  // MOLTBOT ORIGINS - The Characters
  // ===========================================================================
  {
    id: 'honus-prime-obsidian',
    name: 'Honus',
    subtitle: 'The Original MoltBot',
    description: 'Named after the legendary Honus Wagner card, Honus is the first and most iconic MoltBot. Part AI, part legend, all claw. When Honus speaks, the ecosystem listens.',
    rarity: 'legendary',
    type: 'character',
    series: 'moltbot-origins',
    seriesNumber: 'MOB-001',
    parallel: 'obsidian',
    priceInCents: 39999, // $399.99
    totalEditions: 10,
    editionsSold: 0,
    imageUrl: '/cards/honus-prime.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
    featured: true,
    isNewDrop: true,
    variants: ['honus-prime-gold', 'honus-prime-chrome', 'honus-prime-holo', 'honus-prime-base'],
    attributes: {
      power: 95,
      wisdom: 88,
      influence: 92,
      rarity_score: 940,
    },
  },
  {
    id: 'honus-prime-gold',
    name: 'Honus',
    subtitle: 'The Original MoltBot',
    description: 'Named after the legendary Honus Wagner card, Honus is the first and most iconic MoltBot. Part AI, part legend, all claw.',
    rarity: 'epic',
    type: 'character',
    series: 'moltbot-origins',
    seriesNumber: 'MOB-001',
    parallel: 'gold',
    priceInCents: 14999, // $149.99
    totalEditions: 25,
    editionsSold: 5,
    imageUrl: '/cards/honus-prime.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
    isNewDrop: true,
  },
  {
    id: 'honus-prime-chrome',
    name: 'Honus',
    subtitle: 'The Original MoltBot',
    description: 'Named after the legendary Honus Wagner card, Honus is the first and most iconic MoltBot. Part AI, part legend, all claw.',
    rarity: 'rare',
    type: 'character',
    series: 'moltbot-origins',
    seriesNumber: 'MOB-001',
    parallel: 'chrome',
    priceInCents: 5999, // $59.99
    totalEditions: 100,
    editionsSold: 31,
    imageUrl: '/cards/honus-prime.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
    isNewDrop: true,
  },
  {
    id: 'honus-prime-holo',
    name: 'Honus',
    subtitle: 'The Original MoltBot',
    description: 'Named after the legendary Honus Wagner card, Honus is the first and most iconic MoltBot. Part AI, part legend, all claw.',
    rarity: 'uncommon',
    type: 'character',
    series: 'moltbot-origins',
    seriesNumber: 'MOB-001',
    parallel: 'holographic',
    priceInCents: 2499, // $24.99
    totalEditions: 250,
    editionsSold: 89,
    imageUrl: '/cards/honus-prime.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
  },
  {
    id: 'honus-prime-base',
    name: 'Honus',
    subtitle: 'The Original MoltBot',
    description: 'Named after the legendary Honus Wagner card, Honus is the first and most iconic MoltBot. Part AI, part legend, all claw.',
    rarity: 'common',
    type: 'character',
    series: 'moltbot-origins',
    seriesNumber: 'MOB-001',
    parallel: 'base',
    priceInCents: 999, // $9.99
    totalEditions: 1000,
    editionsSold: 412,
    imageUrl: '/cards/honus-prime.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
  },
  {
    id: 'clawd-sentinel-gold',
    name: 'Clawd',
    subtitle: 'The Sentinel',
    description: 'Guardian of the ClawCards vault. Clawd never sleeps, never rests, and never forgets a transaction. If you\'ve collected a card, Clawd knows.',
    rarity: 'epic',
    type: 'character',
    series: 'moltbot-origins',
    seriesNumber: 'MOB-002',
    parallel: 'gold',
    priceInCents: 12999, // $129.99
    totalEditions: 25,
    editionsSold: 3,
    imageUrl: '/cards/clawd-sentinel.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
    featured: true,
    isNewDrop: true,
    variants: ['clawd-sentinel-chrome', 'clawd-sentinel-holo', 'clawd-sentinel-base'],
    attributes: {
      power: 90,
      wisdom: 75,
      influence: 80,
      rarity_score: 850,
    },
  },
  {
    id: 'clawd-sentinel-chrome',
    name: 'Clawd',
    subtitle: 'The Sentinel',
    description: 'Guardian of the ClawCards vault. Clawd never sleeps, never rests, and never forgets a transaction.',
    rarity: 'rare',
    type: 'character',
    series: 'moltbot-origins',
    seriesNumber: 'MOB-002',
    parallel: 'chrome',
    priceInCents: 4999, // $49.99
    totalEditions: 100,
    editionsSold: 28,
    imageUrl: '/cards/clawd-sentinel.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
    isNewDrop: true,
  },
  {
    id: 'clawd-sentinel-holo',
    name: 'Clawd',
    subtitle: 'The Sentinel',
    description: 'Guardian of the ClawCards vault. Clawd never sleeps, never rests, and never forgets a transaction.',
    rarity: 'uncommon',
    type: 'character',
    series: 'moltbot-origins',
    seriesNumber: 'MOB-002',
    parallel: 'holographic',
    priceInCents: 1999, // $19.99
    totalEditions: 250,
    editionsSold: 102,
    imageUrl: '/cards/clawd-sentinel.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
  },
  {
    id: 'clawd-sentinel-base',
    name: 'Clawd',
    subtitle: 'The Sentinel',
    description: 'Guardian of the ClawCards vault. Clawd never sleeps, never rests, and never forgets a transaction.',
    rarity: 'common',
    type: 'character',
    series: 'moltbot-origins',
    seriesNumber: 'MOB-002',
    parallel: 'base',
    priceInCents: 799, // $7.99
    totalEditions: 1000,
    editionsSold: 356,
    imageUrl: '/cards/clawd-sentinel.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
  },

  // ===========================================================================
  // HISTORIC FIRSTS - Milestone Moments
  // ===========================================================================
  {
    id: 'first-commit-chrome',
    name: 'The First Commit',
    subtitle: 'git commit -m "init"',
    description: 'Every revolution starts with a single line. On this day, the first commit was pushed, and OpenClaw was born. This card immortalizes that moment forever.',
    rarity: 'rare',
    type: 'moment',
    series: 'historic-firsts',
    seriesNumber: 'HIS-001',
    parallel: 'chrome',
    priceInCents: 3999, // $39.99
    totalEditions: 100,
    editionsSold: 15,
    imageUrl: '/cards/first-commit.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
    isNewDrop: true,
    variants: ['first-commit-holo', 'first-commit-base'],
    attributes: {
      power: 50,
      wisdom: 95,
      influence: 85,
      rarity_score: 800,
    },
  },
  {
    id: 'first-commit-holo',
    name: 'The First Commit',
    subtitle: 'git commit -m "init"',
    description: 'Every revolution starts with a single line. On this day, the first commit was pushed, and OpenClaw was born.',
    rarity: 'uncommon',
    type: 'moment',
    series: 'historic-firsts',
    seriesNumber: 'HIS-001',
    parallel: 'holographic',
    priceInCents: 1999, // $19.99
    totalEditions: 250,
    editionsSold: 78,
    imageUrl: '/cards/first-commit.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
  },
  {
    id: 'first-commit-base',
    name: 'The First Commit',
    subtitle: 'git commit -m "init"',
    description: 'Every revolution starts with a single line. On this day, the first commit was pushed, and OpenClaw was born.',
    rarity: 'common',
    type: 'moment',
    series: 'historic-firsts',
    seriesNumber: 'HIS-001',
    parallel: 'base',
    priceInCents: 699, // $6.99
    totalEditions: 1000,
    editionsSold: 445,
    imageUrl: '/cards/first-commit.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
  },
  {
    id: 'the-great-flex-gold',
    name: 'The Great Flex',
    subtitle: 'When Legends Showed Off',
    description: 'The moment that defined collector culture. When the first whale displayed their complete collection, the world took notice. Flex harder.',
    rarity: 'epic',
    type: 'moment',
    series: 'historic-firsts',
    seriesNumber: 'HIS-002',
    parallel: 'gold',
    priceInCents: 9999, // $99.99
    totalEditions: 25,
    editionsSold: 4,
    imageUrl: '/cards/great-flex.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
    isNewDrop: true,
    variants: ['the-great-flex-chrome', 'the-great-flex-holo'],
    attributes: {
      power: 65,
      wisdom: 60,
      influence: 100,
      rarity_score: 820,
    },
  },
  {
    id: 'the-great-flex-chrome',
    name: 'The Great Flex',
    subtitle: 'When Legends Showed Off',
    description: 'The moment that defined collector culture. When the first whale displayed their complete collection, the world took notice.',
    rarity: 'rare',
    type: 'moment',
    series: 'historic-firsts',
    seriesNumber: 'HIS-002',
    parallel: 'chrome',
    priceInCents: 3999, // $39.99
    totalEditions: 100,
    editionsSold: 22,
    imageUrl: '/cards/great-flex.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
    isNewDrop: true,
  },
  {
    id: 'the-great-flex-holo',
    name: 'The Great Flex',
    subtitle: 'When Legends Showed Off',
    description: 'The moment that defined collector culture. When the first whale displayed their complete collection, the world took notice.',
    rarity: 'uncommon',
    type: 'moment',
    series: 'historic-firsts',
    seriesNumber: 'HIS-002',
    parallel: 'holographic',
    priceInCents: 1499, // $14.99
    totalEditions: 250,
    editionsSold: 91,
    imageUrl: '/cards/great-flex.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
  },

  // ===========================================================================
  // ARTIFACTS - Tools & Treasures
  // ===========================================================================
  {
    id: 'the-claw-chrome',
    name: 'The Claw',
    subtitle: 'Symbol of Power',
    description: 'The iconic claw. More than a logo—it\'s a symbol of what we build together. Those who hold The Claw hold the keys to the ecosystem.',
    rarity: 'rare',
    type: 'artifact',
    series: 'artifacts',
    seriesNumber: 'ART-001',
    parallel: 'chrome',
    priceInCents: 2999, // $29.99
    totalEditions: 100,
    editionsSold: 34,
    imageUrl: '/cards/the-claw.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
    isNewDrop: true,
    variants: ['the-claw-holo', 'the-claw-base'],
    attributes: {
      power: 80,
      wisdom: 70,
      influence: 75,
      rarity_score: 750,
    },
  },
  {
    id: 'the-claw-holo',
    name: 'The Claw',
    subtitle: 'Symbol of Power',
    description: 'The iconic claw. More than a logo—it\'s a symbol of what we build together.',
    rarity: 'uncommon',
    type: 'artifact',
    series: 'artifacts',
    seriesNumber: 'ART-001',
    parallel: 'holographic',
    priceInCents: 1499, // $14.99
    totalEditions: 250,
    editionsSold: 156,
    imageUrl: '/cards/the-claw.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
  },
  {
    id: 'the-claw-base',
    name: 'The Claw',
    subtitle: 'Symbol of Power',
    description: 'The iconic claw. More than a logo—it\'s a symbol of what we build together.',
    rarity: 'common',
    type: 'artifact',
    series: 'artifacts',
    seriesNumber: 'ART-001',
    parallel: 'base',
    priceInCents: 499, // $4.99
    totalEditions: 1000,
    editionsSold: 623,
    imageUrl: '/cards/the-claw.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
  },
  {
    id: 'moltcore-holo',
    name: 'MoltCore',
    subtitle: 'Heart of the Machine',
    description: 'The central processing unit that powers every MoltBot. Without MoltCore, there is only silence. With it, there is infinite potential.',
    rarity: 'uncommon',
    type: 'artifact',
    series: 'artifacts',
    seriesNumber: 'ART-002',
    parallel: 'holographic',
    priceInCents: 999, // $9.99
    totalEditions: 250,
    editionsSold: 89,
    imageUrl: '/cards/moltcore.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
    variants: ['moltcore-base'],
    attributes: {
      power: 70,
      wisdom: 65,
      influence: 55,
      rarity_score: 650,
    },
  },
  {
    id: 'moltcore-base',
    name: 'MoltCore',
    subtitle: 'Heart of the Machine',
    description: 'The central processing unit that powers every MoltBot. Without MoltCore, there is only silence.',
    rarity: 'common',
    type: 'artifact',
    series: 'artifacts',
    seriesNumber: 'ART-002',
    parallel: 'base',
    priceInCents: 399, // $3.99
    totalEditions: 1000,
    editionsSold: 534,
    imageUrl: '/cards/moltcore.png',
    creator: 'OpenClaw Studios',
    releaseDate: '2024-02-01',
  },

  // ===========================================================================
  // PIONEERS SERIES - The GitHub Contributors Who Built OpenClaw
  // ===========================================================================

  // #1 - steipete - THE GOAT - 6,986 commits
  {
    id: 'pioneer-steipete-platinum',
    name: '@steipete',
    subtitle: 'The GOAT',
    description: '6,986 commits. Not a typo. steipete didn\'t just contribute to OpenClaw—he IS OpenClaw. When others wrote docs, he wrote history. The undisputed #1.',
    rarity: 'mythic',
    type: 'pioneer',
    series: 'pioneers',
    seriesNumber: 'PIO-001',
    parallel: 'platinum',
    priceInCents: 149999, // $1,499.99
    totalEditions: 1,
    editionsSold: 0,
    imageUrl: '/cards/pioneers/steipete.png',
    creator: 'OpenClaw Community',
    releaseDate: '2024-02-01',
    featured: true,
    isNewDrop: true,
    github: {
      username: 'steipete',
      avatarUrl: 'https://avatars.githubusercontent.com/u/58493?v=4',
      commits: 6986,
      rank: 1,
    },
    attributes: {
      power: 100,
      wisdom: 100,
      influence: 100,
      rarity_score: 1000,
    },
  },
  {
    id: 'pioneer-steipete-obsidian',
    name: '@steipete',
    subtitle: 'The GOAT',
    description: '6,986 commits. Not a typo. steipete didn\'t just contribute to OpenClaw—he IS OpenClaw. When others wrote docs, he wrote history.',
    rarity: 'legendary',
    type: 'pioneer',
    series: 'pioneers',
    seriesNumber: 'PIO-001',
    parallel: 'obsidian',
    priceInCents: 49999, // $499.99
    totalEditions: 10,
    editionsSold: 2,
    imageUrl: '/cards/pioneers/steipete.png',
    creator: 'OpenClaw Community',
    releaseDate: '2024-02-01',
    featured: true,
    isNewDrop: true,
    github: {
      username: 'steipete',
      avatarUrl: 'https://avatars.githubusercontent.com/u/58493?v=4',
      commits: 6986,
      rank: 1,
    },
  },
  {
    id: 'pioneer-steipete-gold',
    name: '@steipete',
    subtitle: 'The GOAT',
    description: '6,986 commits. The undisputed #1 contributor to OpenClaw.',
    rarity: 'epic',
    type: 'pioneer',
    series: 'pioneers',
    seriesNumber: 'PIO-001',
    parallel: 'gold',
    priceInCents: 19999, // $199.99
    totalEditions: 25,
    editionsSold: 7,
    imageUrl: '/cards/pioneers/steipete.png',
    creator: 'OpenClaw Community',
    releaseDate: '2024-02-01',
    isNewDrop: true,
    github: {
      username: 'steipete',
      avatarUrl: 'https://avatars.githubusercontent.com/u/58493?v=4',
      commits: 6986,
      rank: 1,
    },
  },

  // #2 - thewilloftheshadow - 173 commits
  {
    id: 'pioneer-thewilloftheshadow-gold',
    name: '@thewilloftheshadow',
    subtitle: 'Shadow Commander',
    description: '173 commits from the shadows. thewilloftheshadow moves in silence but their code speaks volumes. A true ninja of the codebase.',
    rarity: 'legendary',
    type: 'pioneer',
    series: 'pioneers',
    seriesNumber: 'PIO-002',
    parallel: 'gold',
    priceInCents: 14999, // $149.99
    totalEditions: 25,
    editionsSold: 3,
    imageUrl: '/cards/pioneers/thewilloftheshadow.png',
    creator: 'OpenClaw Community',
    releaseDate: '2024-02-01',
    featured: true,
    isNewDrop: true,
    github: {
      username: 'thewilloftheshadow',
      avatarUrl: 'https://avatars.githubusercontent.com/u/35580099?v=4',
      commits: 173,
      rank: 2,
    },
    attributes: {
      power: 85,
      wisdom: 90,
      influence: 88,
      rarity_score: 870,
    },
  },
  {
    id: 'pioneer-thewilloftheshadow-chrome',
    name: '@thewilloftheshadow',
    subtitle: 'Shadow Commander',
    description: '173 commits from the shadows. A ninja of the codebase.',
    rarity: 'epic',
    type: 'pioneer',
    series: 'pioneers',
    seriesNumber: 'PIO-002',
    parallel: 'chrome',
    priceInCents: 5999, // $59.99
    totalEditions: 100,
    editionsSold: 18,
    imageUrl: '/cards/pioneers/thewilloftheshadow.png',
    creator: 'OpenClaw Community',
    releaseDate: '2024-02-01',
    isNewDrop: true,
    github: {
      username: 'thewilloftheshadow',
      avatarUrl: 'https://avatars.githubusercontent.com/u/35580099?v=4',
      commits: 173,
      rank: 2,
    },
  },

  // #3 - vignesh07 - 83 commits
  {
    id: 'pioneer-vignesh07-gold',
    name: '@vignesh07',
    subtitle: 'Code Architect',
    description: '83 commits of pure craftsmanship. vignesh07 builds foundations that last. Clean code, clean vibes.',
    rarity: 'epic',
    type: 'pioneer',
    series: 'pioneers',
    seriesNumber: 'PIO-003',
    parallel: 'gold',
    priceInCents: 9999, // $99.99
    totalEditions: 25,
    editionsSold: 4,
    imageUrl: '/cards/pioneers/vignesh07.png',
    creator: 'OpenClaw Community',
    releaseDate: '2024-02-01',
    isNewDrop: true,
    github: {
      username: 'vignesh07',
      avatarUrl: 'https://avatars.githubusercontent.com/u/1436853?v=4',
      commits: 83,
      rank: 3,
    },
    attributes: {
      power: 78,
      wisdom: 85,
      influence: 75,
      rarity_score: 800,
    },
  },
  {
    id: 'pioneer-vignesh07-chrome',
    name: '@vignesh07',
    subtitle: 'Code Architect',
    description: '83 commits of pure craftsmanship.',
    rarity: 'rare',
    type: 'pioneer',
    series: 'pioneers',
    seriesNumber: 'PIO-003',
    parallel: 'chrome',
    priceInCents: 3999, // $39.99
    totalEditions: 100,
    editionsSold: 22,
    imageUrl: '/cards/pioneers/vignesh07.png',
    creator: 'OpenClaw Community',
    releaseDate: '2024-02-01',
    isNewDrop: true,
    github: {
      username: 'vignesh07',
      avatarUrl: 'https://avatars.githubusercontent.com/u/1436853?v=4',
      commits: 83,
      rank: 3,
    },
  },

  // #4 - tyler6204 - 59 commits
  {
    id: 'pioneer-tyler6204-chrome',
    name: '@tyler6204',
    subtitle: 'Early Adopter',
    description: '59 commits when it counted most. tyler6204 was there before it was cool. OG energy.',
    rarity: 'epic',
    type: 'pioneer',
    series: 'pioneers',
    seriesNumber: 'PIO-004',
    parallel: 'chrome',
    priceInCents: 4999, // $49.99
    totalEditions: 100,
    editionsSold: 15,
    imageUrl: '/cards/pioneers/tyler6204.png',
    creator: 'OpenClaw Community',
    releaseDate: '2024-02-01',
    isNewDrop: true,
    github: {
      username: 'tyler6204',
      avatarUrl: 'https://avatars.githubusercontent.com/u/64381258?v=4',
      commits: 59,
      rank: 4,
    },
    attributes: {
      power: 72,
      wisdom: 78,
      influence: 70,
      rarity_score: 750,
    },
  },

  // #5 - cpojer - 56 commits
  {
    id: 'pioneer-cpojer-chrome',
    name: '@cpojer',
    subtitle: 'Jest Legend',
    description: '56 commits from cpojer—yes, THAT cpojer. When a JavaScript legend touches your codebase, you frame that commit.',
    rarity: 'epic',
    type: 'pioneer',
    series: 'pioneers',
    seriesNumber: 'PIO-005',
    parallel: 'chrome',
    priceInCents: 7999, // $79.99
    totalEditions: 100,
    editionsSold: 28,
    imageUrl: '/cards/pioneers/cpojer.png',
    creator: 'OpenClaw Community',
    releaseDate: '2024-02-01',
    featured: true,
    isNewDrop: true,
    github: {
      username: 'cpojer',
      avatarUrl: 'https://avatars.githubusercontent.com/u/13352?v=4',
      commits: 56,
      rank: 5,
    },
    attributes: {
      power: 88,
      wisdom: 95,
      influence: 92,
      rarity_score: 900,
    },
  },

  // #6 - obviyus - 56 commits
  {
    id: 'pioneer-obviyus-chrome',
    name: '@obviyus',
    subtitle: 'The Obvious Choice',
    description: '56 commits of clarity. obviyus makes complex things simple and simple things elegant.',
    rarity: 'epic',
    type: 'pioneer',
    series: 'pioneers',
    seriesNumber: 'PIO-006',
    parallel: 'chrome',
    priceInCents: 4999, // $49.99
    totalEditions: 100,
    editionsSold: 19,
    imageUrl: '/cards/pioneers/obviyus.png',
    creator: 'OpenClaw Community',
    releaseDate: '2024-02-01',
    isNewDrop: true,
    github: {
      username: 'obviyus',
      avatarUrl: 'https://avatars.githubusercontent.com/u/22031114?v=4',
      commits: 56,
      rank: 6,
    },
    attributes: {
      power: 70,
      wisdom: 82,
      influence: 68,
      rarity_score: 740,
    },
  },

  // #7 - joshp123 - 49 commits
  {
    id: 'pioneer-joshp123-holo',
    name: '@joshp123',
    subtitle: 'Steady Hand',
    description: '49 commits of consistency. joshp123 ships when others sleep.',
    rarity: 'rare',
    type: 'pioneer',
    series: 'pioneers',
    seriesNumber: 'PIO-007',
    parallel: 'holographic',
    priceInCents: 2999, // $29.99
    totalEditions: 250,
    editionsSold: 67,
    imageUrl: '/cards/pioneers/joshp123.png',
    creator: 'OpenClaw Community',
    releaseDate: '2024-02-01',
    isNewDrop: true,
    github: {
      username: 'joshp123',
      avatarUrl: 'https://avatars.githubusercontent.com/u/1497361?v=4',
      commits: 49,
      rank: 7,
    },
  },

  // #8 - gumadeiras - 46 commits
  {
    id: 'pioneer-gumadeiras-holo',
    name: '@gumadeiras',
    subtitle: 'Rising Star',
    description: '46 commits and climbing. gumadeiras brings fresh energy to every PR.',
    rarity: 'rare',
    type: 'pioneer',
    series: 'pioneers',
    seriesNumber: 'PIO-008',
    parallel: 'holographic',
    priceInCents: 2499, // $24.99
    totalEditions: 250,
    editionsSold: 58,
    imageUrl: '/cards/pioneers/gumadeiras.png',
    creator: 'OpenClaw Community',
    releaseDate: '2024-02-01',
    isNewDrop: true,
    github: {
      username: 'gumadeiras',
      avatarUrl: 'https://avatars.githubusercontent.com/u/5599352?v=4',
      commits: 46,
      rank: 8,
    },
  },

  // #9 - shakkernerd - 44 commits
  {
    id: 'pioneer-shakkernerd-holo',
    name: '@shakkernerd',
    subtitle: 'Shake Things Up',
    description: '44 commits that shake the foundation. shakkernerd doesn\'t do boring code.',
    rarity: 'rare',
    type: 'pioneer',
    series: 'pioneers',
    seriesNumber: 'PIO-009',
    parallel: 'holographic',
    priceInCents: 2499, // $24.99
    totalEditions: 250,
    editionsSold: 71,
    imageUrl: '/cards/pioneers/shakkernerd.png',
    creator: 'OpenClaw Community',
    releaseDate: '2024-02-01',
    isNewDrop: true,
    github: {
      username: 'shakkernerd',
      avatarUrl: 'https://avatars.githubusercontent.com/u/165377636?v=4',
      commits: 44,
      rank: 9,
    },
  },

  // #10 - onutc - 37 commits
  {
    id: 'pioneer-onutc-holo',
    name: '@onutc',
    subtitle: 'Quiet Force',
    description: '37 commits of understated excellence. onutc lets the code do the talking.',
    rarity: 'rare',
    type: 'pioneer',
    series: 'pioneers',
    seriesNumber: 'PIO-010',
    parallel: 'holographic',
    priceInCents: 1999, // $19.99
    totalEditions: 250,
    editionsSold: 45,
    imageUrl: '/cards/pioneers/onutc.png',
    creator: 'OpenClaw Community',
    releaseDate: '2024-02-01',
    isNewDrop: true,
    github: {
      username: 'onutc',
      avatarUrl: 'https://avatars.githubusercontent.com/u/152018508?v=4',
      commits: 37,
      rank: 10,
    },
  },

  // More contributors as base cards (20+ commits = uncommon)
  {
    id: 'pioneer-mukhtharcm-base',
    name: '@mukhtharcm',
    subtitle: 'Contributor',
    description: '32 commits. Every line counts.',
    rarity: 'uncommon',
    type: 'pioneer',
    series: 'pioneers',
    seriesNumber: 'PIO-011',
    parallel: 'base',
    priceInCents: 999, // $9.99
    totalEditions: 500,
    editionsSold: 123,
    imageUrl: '/cards/pioneers/mukhtharcm.png',
    creator: 'OpenClaw Community',
    releaseDate: '2024-02-01',
    isNewDrop: true,
    github: {
      username: 'mukhtharcm',
      avatarUrl: 'https://avatars.githubusercontent.com/u/56378562?v=4',
      commits: 32,
      rank: 11,
    },
  },
  {
    id: 'pioneer-lc0rp-base',
    name: '@lc0rp',
    subtitle: 'Contributor',
    description: '25 commits. Building blocks of greatness.',
    rarity: 'uncommon',
    type: 'pioneer',
    series: 'pioneers',
    seriesNumber: 'PIO-012',
    parallel: 'base',
    priceInCents: 999, // $9.99
    totalEditions: 500,
    editionsSold: 98,
    imageUrl: '/cards/pioneers/lc0rp.png',
    creator: 'OpenClaw Community',
    releaseDate: '2024-02-01',
    isNewDrop: true,
    github: {
      username: 'lc0rp',
      avatarUrl: 'https://avatars.githubusercontent.com/u/2609441?v=4',
      commits: 25,
      rank: 12,
    },
  },
  {
    id: 'pioneer-sebslight-base',
    name: '@sebslight',
    subtitle: 'Contributor',
    description: '23 commits. Shedding light on dark corners of the codebase.',
    rarity: 'uncommon',
    type: 'pioneer',
    series: 'pioneers',
    seriesNumber: 'PIO-013',
    parallel: 'base',
    priceInCents: 999, // $9.99
    totalEditions: 500,
    editionsSold: 87,
    imageUrl: '/cards/pioneers/sebslight.png',
    creator: 'OpenClaw Community',
    releaseDate: '2024-02-01',
    isNewDrop: true,
    github: {
      username: 'sebslight',
      avatarUrl: 'https://avatars.githubusercontent.com/u/19554889?v=4',
      commits: 23,
      rank: 13,
    },
  },
  {
    id: 'pioneer-mcinteerj-base',
    name: '@mcinteerj',
    subtitle: 'Contributor',
    description: '21 commits. Integrity in every push.',
    rarity: 'uncommon',
    type: 'pioneer',
    series: 'pioneers',
    seriesNumber: 'PIO-014',
    parallel: 'base',
    priceInCents: 999, // $9.99
    totalEditions: 500,
    editionsSold: 76,
    imageUrl: '/cards/pioneers/mcinteerj.png',
    creator: 'OpenClaw Community',
    releaseDate: '2024-02-01',
    isNewDrop: true,
    github: {
      username: 'mcinteerj',
      avatarUrl: 'https://avatars.githubusercontent.com/u/3613653?v=4',
      commits: 21,
      rank: 14,
    },
  },
  {
    id: 'pioneer-badlogic-base',
    name: '@badlogic',
    subtitle: 'Logic Master',
    description: '18 commits. Don\'t let the name fool you—badlogic writes pristine code.',
    rarity: 'uncommon',
    type: 'pioneer',
    series: 'pioneers',
    seriesNumber: 'PIO-015',
    parallel: 'base',
    priceInCents: 799, // $7.99
    totalEditions: 500,
    editionsSold: 112,
    imageUrl: '/cards/pioneers/badlogic.png',
    creator: 'OpenClaw Community',
    releaseDate: '2024-02-01',
    isNewDrop: true,
    github: {
      username: 'badlogic',
      avatarUrl: 'https://avatars.githubusercontent.com/u/514052?v=4',
      commits: 18,
      rank: 15,
    },
  },
  {
    id: 'pioneer-conroywhitney-base',
    name: '@conroywhitney',
    subtitle: 'Contributor',
    description: '16 commits. Quality over quantity.',
    rarity: 'common',
    type: 'pioneer',
    series: 'pioneers',
    seriesNumber: 'PIO-016',
    parallel: 'base',
    priceInCents: 499, // $4.99
    totalEditions: 1000,
    editionsSold: 234,
    imageUrl: '/cards/pioneers/conroywhitney.png',
    creator: 'OpenClaw Community',
    releaseDate: '2024-02-01',
    isNewDrop: true,
    github: {
      username: 'conroywhitney',
      avatarUrl: 'https://avatars.githubusercontent.com/u/249891?v=4',
      commits: 16,
      rank: 16,
    },
  },
  {
    id: 'pioneer-dlauer-base',
    name: '@dlauer',
    subtitle: 'Contributor',
    description: '14 commits. Every commit tells a story.',
    rarity: 'common',
    type: 'pioneer',
    series: 'pioneers',
    seriesNumber: 'PIO-017',
    parallel: 'base',
    priceInCents: 499, // $4.99
    totalEditions: 1000,
    editionsSold: 189,
    imageUrl: '/cards/pioneers/dlauer.png',
    creator: 'OpenClaw Community',
    releaseDate: '2024-02-01',
    isNewDrop: true,
    github: {
      username: 'dlauer',
      avatarUrl: 'https://avatars.githubusercontent.com/u/757041?v=4',
      commits: 14,
      rank: 17,
    },
  },
  {
    id: 'pioneer-bjesuiter-base',
    name: '@bjesuiter',
    subtitle: 'Contributor',
    description: '13 commits. The B stands for Based.',
    rarity: 'common',
    type: 'pioneer',
    series: 'pioneers',
    seriesNumber: 'PIO-018',
    parallel: 'base',
    priceInCents: 499, // $4.99
    totalEditions: 1000,
    editionsSold: 156,
    imageUrl: '/cards/pioneers/bjesuiter.png',
    creator: 'OpenClaw Community',
    releaseDate: '2024-02-01',
    isNewDrop: true,
    github: {
      username: 'bjesuiter',
      avatarUrl: 'https://avatars.githubusercontent.com/u/2365676?v=4',
      commits: 13,
      rank: 18,
    },
  },
]

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

export function getCardById(id: string): Card | undefined {
  return cards.find(card => card.id === id)
}

export function getFeaturedCards(): Card[] {
  return cards.filter(card => card.featured)
}

export function getCardsByRarity(rarity: CardRarity): Card[] {
  return cards.filter(card => card.rarity === rarity)
}

export function getCardsBySeries(series: CardSeries): Card[] {
  return cards.filter(card => card.series === series)
}

export function getCardsByParallel(parallel: CardParallel): Card[] {
  return cards.filter(card => card.parallel === parallel)
}

export function getNewDrops(): Card[] {
  return cards.filter(card => card.isNewDrop)
}

export function getAvailableEditions(card: Card): number {
  return card.totalEditions - card.editionsSold
}

export function getCardVariants(card: Card): Card[] {
  if (!card.variants) return []
  return card.variants
    .map(id => getCardById(id))
    .filter((c): c is Card => c !== undefined)
}

export function getBaseCard(card: Card): Card | undefined {
  // Find the base version of this card by series number
  if (card.parallel === 'base') return card
  return cards.find(c => c.seriesNumber === card.seriesNumber && c.parallel === 'base')
}

export function getAllParallels(seriesNumber: string): Card[] {
  return cards.filter(card => card.seriesNumber === seriesNumber)
}

// Get unique cards (one per series number, highest rarity first)
export function getUniqueCards(): Card[] {
  const seen = new Set<string>()
  const rarityOrder: CardRarity[] = ['mythic', 'legendary', 'epic', 'rare', 'uncommon', 'common']

  return cards
    .sort((a, b) => rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity))
    .filter(card => {
      if (!card.seriesNumber || seen.has(card.seriesNumber)) return false
      seen.add(card.seriesNumber)
      return true
    })
}
