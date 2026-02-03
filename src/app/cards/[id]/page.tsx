'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import { getCardById, getAllParallels, seriesInfo, parallelInfo, Card } from '@/data/cards'
import { CardArt } from '@/components/CardArt'
import { cn, formatPrice, getRarityClass, getRarityColor, getParallelClass, getParallelLabel, getAvailableEditions } from '@/lib/utils'

export default function CardDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const cardId = params.id as string
  const card = getCardById(cardId)

  if (!card) {
    return (
      <div className="min-h-screen bg-background-deep flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-text-primary mb-4">Card Not Found</h1>
          <p className="text-text-muted mb-8">The card you're looking for doesn't exist.</p>
          <Link href="/cards" className="btn-primary">
            Browse All Cards
          </Link>
        </div>
      </div>
    )
  }

  const available = getAvailableEditions(card)
  const soldOut = available === 0
  const series = seriesInfo[card.series]
  const parallel = parallelInfo[card.parallel]
  const allParallels = getAllParallels(card.seriesNumber || '')

  const handleBuy = async () => {
    setIsLoading(true)
    try {
      const formData = new FormData()
      formData.append('cardId', card.id)

      const response = await fetch('/api/checkout', {
        method: 'POST',
        body: formData,
      })

      if (response.redirected) {
        window.location.href = response.url
      } else {
        const data = await response.json()
        if (data.error) {
          alert(data.error)
        }
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Failed to initiate checkout. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background-deep">
      {/* Header */}
      <div className="bg-gradient-to-b from-background-card to-background-deep border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/cards" className="inline-flex items-center text-text-muted hover:text-accent-coral transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Cards
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Card Preview */}
          <div className="space-y-6">
            <div className={cn(
              'card-frame w-full max-w-md mx-auto',
              getRarityClass(card.rarity),
              getParallelClass(card.parallel)
            )}>
              {(card.rarity === 'legendary' || card.rarity === 'mythic' || card.parallel === 'holographic') && (
                <div className="holographic-overlay" />
              )}
              <div className="aspect-[3/4]">
                <CardArt card={card} />
              </div>
            </div>

            {/* Other Parallels */}
            {allParallels.length > 1 && (
              <div className="bg-background-card rounded-xl p-6 border border-white/5">
                <h3 className="text-lg font-display font-bold text-text-primary mb-4">Other Parallels</h3>
                <div className="flex flex-wrap gap-3">
                  {allParallels.map((p) => (
                    <Link
                      key={p.id}
                      href={`/cards/${p.id}`}
                      className={cn(
                        'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                        p.id === card.id
                          ? 'bg-accent-coral text-white'
                          : 'bg-white/5 text-text-muted hover:bg-white/10 hover:text-text-primary'
                      )}
                    >
                      {getParallelLabel(p.parallel)}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Card Details */}
          <div className="space-y-8">
            {/* Title Section */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={cn(
                  'px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider',
                  getRarityColor(card.rarity),
                  'bg-gradient-to-r from-white/5 to-white/10'
                )}>
                  {card.rarity}
                </span>
                {card.parallel !== 'base' && (
                  <span className={cn(
                    'px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider',
                    card.parallel === 'platinum' && 'bg-white/20 text-white',
                    card.parallel === 'obsidian' && 'bg-black/50 text-yellow-400 border border-yellow-400/30',
                    card.parallel === 'gold' && 'bg-yellow-500/20 text-yellow-400',
                    card.parallel === 'chrome' && 'bg-cyan-500/20 text-cyan-400',
                    card.parallel === 'holographic' && 'bg-purple-500/20 text-purple-400',
                  )}>
                    {getParallelLabel(card.parallel)}
                  </span>
                )}
                {card.isNewDrop && (
                  <span className="px-3 py-1 bg-accent-coral text-white text-xs font-semibold rounded animate-pulse">
                    NEW DROP
                  </span>
                )}
              </div>
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-text-primary mb-2">
                {card.name}
              </h1>
              {card.subtitle && (
                <p className="text-xl text-text-muted italic">{card.subtitle}</p>
              )}
              <p className="text-sm text-text-dim uppercase tracking-wider mt-2">
                {card.seriesNumber} • {card.type} • {card.series.replace(/-/g, ' ')}
              </p>
            </div>

            {/* Description */}
            <div className="bg-background-card rounded-xl p-6 border border-white/5">
              <p className="text-text-muted leading-relaxed">{card.description}</p>
            </div>

            {/* Attributes */}
            {card.attributes && (
              <div className="bg-background-card rounded-xl p-6 border border-white/5">
                <h3 className="text-lg font-display font-bold text-text-primary mb-4">Attributes</h3>
                <div className="grid grid-cols-4 gap-4">
                  {card.attributes.power !== undefined && (
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <p className="text-accent-coral font-mono text-2xl font-bold">{card.attributes.power}</p>
                      <p className="text-text-dim text-xs uppercase mt-1">Power</p>
                    </div>
                  )}
                  {card.attributes.wisdom !== undefined && (
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <p className="text-accent-cyan font-mono text-2xl font-bold">{card.attributes.wisdom}</p>
                      <p className="text-text-dim text-xs uppercase mt-1">Wisdom</p>
                    </div>
                  )}
                  {card.attributes.influence !== undefined && (
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <p className="text-rarity-epic font-mono text-2xl font-bold">{card.attributes.influence}</p>
                      <p className="text-text-dim text-xs uppercase mt-1">Influence</p>
                    </div>
                  )}
                  {card.attributes.rarity_score !== undefined && (
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <p className="text-rarity-legendary font-mono text-2xl font-bold">{card.attributes.rarity_score}</p>
                      <p className="text-text-dim text-xs uppercase mt-1">Rarity</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* GitHub Stats (for Pioneer cards) */}
            {card.github && (
              <div className="bg-background-card rounded-xl p-6 border border-white/5">
                <h3 className="text-lg font-display font-bold text-text-primary mb-4">GitHub Stats</h3>
                <div className="flex items-center gap-4">
                  <img
                    src={card.github.avatarUrl}
                    alt={card.github.username}
                    className="w-16 h-16 rounded-full border-2 border-accent-coral"
                  />
                  <div>
                    <a
                      href={`https://github.com/${card.github.username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-accent-coral hover:underline"
                    >
                      @{card.github.username}
                    </a>
                    <p className="text-text-muted">
                      <span className="font-mono text-accent-cyan">{card.github.commits.toLocaleString()}</span> commits
                    </p>
                    <p className="text-text-dim text-sm">Rank #{card.github.rank} contributor</p>
                  </div>
                </div>
              </div>
            )}

            {/* Series Info */}
            <div className="bg-background-card rounded-xl p-6 border border-white/5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{series.icon}</span>
                <h3 className="text-lg font-display font-bold text-text-primary">{series.name}</h3>
              </div>
              <p className="text-text-muted text-sm">{series.description}</p>
            </div>

            {/* Purchase Section */}
            <div className="bg-gradient-to-br from-background-card to-background-deep rounded-xl p-6 border border-accent-coral/20">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-text-dim text-sm mb-1">Price</p>
                  <p className="text-4xl font-display font-bold text-text-primary">
                    {formatPrice(card.priceInCents)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-text-dim text-sm mb-1">Edition</p>
                  <p className="text-xl font-mono">
                    <span className="text-accent-coral">{card.editionsSold + 1}</span>
                    <span className="text-text-dim"> / </span>
                    <span className="text-text-muted">{card.totalEditions}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <p className={cn(
                  'text-sm font-medium',
                  soldOut ? 'text-accent-coral' : 'text-rarity-uncommon'
                )}>
                  {soldOut ? 'SOLD OUT' : `${available} available`}
                </p>
                {parallel && (
                  <p className="text-text-dim text-sm">
                    {parallel.description}
                  </p>
                )}
              </div>

              <button
                onClick={handleBuy}
                disabled={soldOut || isLoading}
                className={cn(
                  'w-full py-4 rounded-lg font-display font-bold text-lg transition-all duration-200',
                  soldOut
                    ? 'bg-white/5 text-text-dim cursor-not-allowed'
                    : 'bg-accent-coral hover:bg-accent-coral-dark text-white hover:shadow-xl hover:shadow-accent-coral/25 hover:scale-[1.02]'
                )}
              >
                {isLoading ? 'Processing...' : soldOut ? 'Sold Out' : 'Buy Now'}
              </button>

              <p className="text-text-dim text-xs text-center mt-4">
                Secure checkout powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
