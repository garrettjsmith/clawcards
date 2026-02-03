'use client'

import { Card, parallelInfo } from '@/data/cards'
import { CardArt } from './CardArt'
import { cn, formatPrice, getRarityClass, getRarityColor, getAvailableEditions, getParallelClass, getParallelLabel } from '@/lib/utils'

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

  const getRarityBadgeBg = (rarity: string) => {
    const bgs: Record<string, string> = {
      mythic: 'bg-gradient-to-r from-rarity-mythic/30 to-purple-500/20',
      legendary: 'bg-rarity-legendary/20',
      epic: 'bg-rarity-epic/20',
      rare: 'bg-rarity-rare/20',
      uncommon: 'bg-rarity-uncommon/20',
      common: 'bg-rarity-common/20',
    }
    return bgs[rarity] || bgs.common
  }

  return (
    <div className={cn(
      'card-frame group w-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1',
      getRarityClass(card.rarity),
      getParallelClass(card.parallel),
      sizeClasses[size]
    )}>
      {/* Holographic overlay for legendary/mythic cards */}
      {(card.rarity === 'legendary' || card.rarity === 'mythic' || card.parallel === 'holographic') && (
        <div className="holographic-overlay" />
      )}

      {/* Card Art */}
      <div className={cn('relative overflow-hidden', imageSizes[size])}>
        {/* SVG Card Art */}
        <div className="absolute inset-0">
          <CardArt card={card} />
        </div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-deep/30 z-10 pointer-events-none" />

        {/* Rarity + Parallel badges - Top Right */}
        <div className="absolute top-3 right-3 z-20 flex flex-col gap-1 items-end">
          <span className={cn(
            'px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider',
            getRarityColor(card.rarity),
            getRarityBadgeBg(card.rarity),
          )}>
            {card.rarity}
          </span>
          {card.parallel !== 'base' && (
            <span className={cn(
              'px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider',
              card.parallel === 'platinum' && 'bg-white/20 text-white',
              card.parallel === 'obsidian' && 'bg-black/50 text-yellow-400 border border-yellow-400/30',
              card.parallel === 'gold' && 'bg-yellow-500/20 text-yellow-400',
              card.parallel === 'chrome' && 'bg-cyan-500/20 text-cyan-400',
              card.parallel === 'holographic' && 'bg-purple-500/20 text-purple-400',
            )}>
              {getParallelLabel(card.parallel)}
            </span>
          )}
        </div>

        {/* Edition counter - Bottom Right */}
        <div className="absolute bottom-3 right-3 z-20">
          <span className="edition-badge">
            <span className="text-text-dim">#</span>
            <span className="text-text-primary">{card.editionsSold + 1}</span>
            <span className="text-text-dim">/</span>
            <span className="text-text-muted">{card.totalEditions}</span>
          </span>
        </div>

        {/* New drop badge - Bottom Left */}
        {card.isNewDrop && (
          <div className="absolute bottom-3 left-3 z-20">
            <span className="px-2 py-1 bg-accent-coral text-white text-xs font-semibold rounded animate-pulse">
              NEW DROP
            </span>
          </div>
        )}
      </div>

      {/* Card Info */}
      <div className="p-4 space-y-2">
        {/* Title and Subtitle */}
        <div>
          <h3 className="font-display font-bold text-text-primary text-lg leading-tight group-hover:text-accent-coral transition-colors">
            {card.name}
          </h3>
          {card.subtitle && (
            <p className="text-text-muted text-xs italic mt-0.5">
              {card.subtitle}
            </p>
          )}
          <p className="text-text-dim text-[10px] uppercase tracking-wider mt-1">
            {card.type} • {card.series.replace(/-/g, ' ')}
          </p>
        </div>

        {/* Description */}
        <p className="text-text-muted text-sm line-clamp-2">
          {card.description}
        </p>

        {/* Attributes (if present) */}
        {card.attributes && size !== 'sm' && (
          <div className="flex gap-3 pt-1">
            {card.attributes.power !== undefined && (
              <div className="text-center">
                <p className="text-accent-coral font-mono text-xs font-bold">{card.attributes.power}</p>
                <p className="text-text-dim text-[9px] uppercase">PWR</p>
              </div>
            )}
            {card.attributes.wisdom !== undefined && (
              <div className="text-center">
                <p className="text-accent-cyan font-mono text-xs font-bold">{card.attributes.wisdom}</p>
                <p className="text-text-dim text-[9px] uppercase">WIS</p>
              </div>
            )}
            {card.attributes.influence !== undefined && (
              <div className="text-center">
                <p className="text-rarity-epic font-mono text-xs font-bold">{card.attributes.influence}</p>
                <p className="text-text-dim text-[9px] uppercase">INF</p>
              </div>
            )}
          </div>
        )}

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
