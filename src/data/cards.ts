// =============================================================================
// CLAWCARDS - Premium Digital Collectibles for the OpenClaw Ecosystem
// =============================================================================

export type CardRarity = 'mythic' | 'legendary' | 'epic' | 'rare' | 'uncommon' | 'common'
export type CardType = 'founder' | 'character' | 'moment' | 'artifact' | 'location'
export type CardSeries = 'genesis' | 'founders' | 'moltbot-origins' | 'historic-firsts' | 'artifacts'
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
    description: 'Celebrating the pioneers who built the OpenClaw ecosystem.',
    icon: '👑',
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
