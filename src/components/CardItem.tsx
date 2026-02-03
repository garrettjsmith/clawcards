'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/data/cards'
import { cn, formatPrice, getRarityClass, getRarityColor, getAvailableEditions } from '@/lib/utils'

interface CardItemProps {
  card: Card
  showBuyButton?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function CardItem({ card, showBuyButton = true, size = 'md' }: CardItemProps) {
  const available = getAvailableEditions(card)
  const soldOut = available === 0

  const sizeClasses = {
    sm: 'max-w-[200px]',
    md: 'max-w-[280px]',
    lg: 'max-w-[350px]',
  }

  const imageSizes = {
    sm: 'h-48',
    md: 'h-64',
    lg: 'h-80',
  }

  return (
    <div className={cn(
      'card-frame group w-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1',
      getRarityClass(card.rarity),
      sizeClasses[size]
    )}>
      {/* Holographic overlay for legendary cards */}
      {card.rarity === 'legendary' && <div className="holographic-overlay" />}

      {/* Card Image */}
      <div className={cn('relative overflow-hidden bg-background-navy', imageSizes[size])}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-deep/50 z-10" />

        {/* Placeholder gradient for missing images */}
        <div className={cn(
          'absolute inset-0 flex items-center justify-center',
          card.rarity === 'legendary' && 'bg-gradient-to-br from-rarity-legendary/20 to-rarity-legendary/5',
          card.rarity === 'epic' && 'bg-gradient-to-br from-rarity-epic/20 to-rarity-epic/5',
          card.rarity === 'rare' && 'bg-gradient-to-br from-rarity-rare/20 to-rarity-rare/5',
          card.rarity === 'uncommon' && 'bg-gradient-to-br from-rarity-uncommon/20 to-rarity-uncommon/5',
          card.rarity === 'common' && 'bg-gradient-to-br from-rarity-common/20 to-rarity-common/5',
        )}>
          <span className="text-6xl opacity-20">
            {card.type === 'character' && '🤖'}
            {card.type === 'moment' && '⚡'}
            {card.type === 'item' && '🔧'}
            {card.type === 'location' && '🏛️'}
          </span>
        </div>

        {/* Rarity badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className={cn(
            'px-2 py-1 rounded text-xs font-semibold uppercase tracking-wider',
            getRarityColor(card.rarity),
            card.rarity === 'legendary' && 'bg-rarity-legendary/20',
            card.rarity === 'epic' && 'bg-rarity-epic/20',
            card.rarity === 'rare' && 'bg-rarity-rare/20',
            card.rarity === 'uncommon' && 'bg-rarity-uncommon/20',
            card.rarity === 'common' && 'bg-rarity-common/20',
          )}>
            {card.rarity}
          </span>
        </div>

        {/* Edition counter - Topps style */}
        <div className="absolute top-3 right-3 z-20">
          <span className="edition-badge">
            <span className="text-text-dim">#</span>
            <span className="text-text-primary">{card.editionsSold + 1}</span>
            <span className="text-text-dim">/</span>
            <span className="text-text-muted">{card.totalEditions}</span>
          </span>
        </div>

        {/* New drop badge */}
        {card.isNewDrop && (
          <div className="absolute bottom-3 left-3 z-20">
            <span className="px-2 py-1 bg-accent-coral text-white text-xs font-semibold rounded animate-pulse">
              NEW DROP
            </span>
          </div>
        )}
      </div>

      {/* Card Info */}
      <div className="p-4 space-y-3">
        {/* Title and Type */}
        <div>
          <h3 className="font-display font-bold text-text-primary text-lg leading-tight group-hover:text-accent-coral transition-colors">
            {card.name}
          </h3>
          <p className="text-text-dim text-xs uppercase tracking-wider mt-0.5">
            {card.type}
          </p>
        </div>

        {/* Description */}
        <p className="text-text-muted text-sm line-clamp-2">
          {card.description}
        </p>

        {/* Price and Availability */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <div>
            <p className="text-text-primary font-display font-bold text-xl">
              {formatPrice(card.priceInCents)}
            </p>
            <p className={cn(
              'text-xs',
              soldOut ? 'text-accent-coral' : 'text-text-dim'
            )}>
              {soldOut ? 'SOLD OUT' : `${available} available`}
            </p>
          </div>

          {showBuyButton && (
            <form action="/api/checkout" method="POST">
              <input type="hidden" name="cardId" value={card.id} />
              <button
                type="submit"
                disabled={soldOut}
                className={cn(
                  'px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200',
                  soldOut
                    ? 'bg-white/5 text-text-dim cursor-not-allowed'
                    : 'bg-accent-coral hover:bg-accent-coral-dark text-white hover:shadow-lg hover:shadow-accent-coral/25'
                )}
              >
                {soldOut ? 'Sold Out' : 'Buy Now'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
