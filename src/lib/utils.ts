import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(priceInCents / 100)
}

export function formatEdition(current: number, total: number): string {
  const padLength = String(total).length
  return `#${String(current).padStart(padLength, '0')}/${total}`
}

export function getRarityClass(rarity: string): string {
  const classes: Record<string, string> = {
    legendary: 'card-legendary',
    epic: 'card-epic',
    rare: 'card-rare',
    uncommon: 'card-uncommon',
    common: 'card-common',
  }
  return classes[rarity.toLowerCase()] || classes.common
}

export function getRarityColor(rarity: string): string {
  const colors: Record<string, string> = {
    legendary: 'text-rarity-legendary',
    epic: 'text-rarity-epic',
    rare: 'text-rarity-rare',
    uncommon: 'text-rarity-uncommon',
    common: 'text-rarity-common',
  }
  return colors[rarity.toLowerCase()] || colors.common
}

export function getRarityBgColor(rarity: string): string {
  const colors: Record<string, string> = {
    legendary: 'bg-rarity-legendary/20',
    epic: 'bg-rarity-epic/20',
    rare: 'bg-rarity-rare/20',
    uncommon: 'bg-rarity-uncommon/20',
    common: 'bg-rarity-common/20',
  }
  return colors[rarity.toLowerCase()] || colors.common
}

export function getAvailableEditions(card: { totalEditions: number; editionsSold: number }): number {
  return card.totalEditions - card.editionsSold
}
