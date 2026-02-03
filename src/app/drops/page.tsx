'use client'

import { useState } from 'react'
import { cards, getNewDrops, seriesInfo, Card } from '@/data/cards'
import { CardItem } from '@/components/CardItem'
import { cn, formatPrice, getRarityColor, getAvailableEditions, getParallelLabel } from '@/lib/utils'

// Get the mythic/legendary cards as featured drops
const featuredDrops = cards.filter(c => c.rarity === 'mythic' || (c.rarity === 'legendary' && c.featured))

// Get all new drops sorted by rarity
const currentDrops = getNewDrops().sort((a, b) => {
  const rarityOrder = { mythic: 6, legendary: 5, epic: 4, rare: 3, uncommon: 2, common: 1 }
  return (rarityOrder[b.rarity] || 0) - (rarityOrder[a.rarity] || 0)
})

// Past drops (cards that are mostly sold out)
const pastDrops = cards.filter(c => !c.isNewDrop && c.editionsSold > c.totalEditions * 0.8)

export default function DropsPage() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const primaryFeatured = featuredDrops[0] // Genesis Prime - the 1/1

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
  }

  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent-coral text-sm font-semibold uppercase tracking-wider">
            Card Releases
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mt-2">
            Drops
          </h1>
          <p className="text-text-muted mt-4 text-lg max-w-2xl mx-auto">
            Premium ClawCards released regularly. From common collectibles to mythic 1/1s.
            Subscribe to never miss a legendary drop.
          </p>
        </div>

        {/* Ultimate Chase Card - Genesis Prime */}
        {primaryFeatured && (
          <section className="mb-20">
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rarity-mythic/20 to-purple-500/10 border border-rarity-mythic/30">
                <span className="w-2 h-2 bg-rarity-mythic rounded-full animate-pulse" />
                <span className="text-rarity-mythic text-sm font-medium">ULTIMATE CHASE CARD</span>
              </span>
            </div>

            <div className="card-frame card-mythic p-6 md:p-10 max-w-4xl mx-auto">
              <div className="holographic-overlay rounded-xl" />
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                {/* Card Preview */}
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-rarity-mythic/30 via-purple-500/20 to-cyan-500/10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
                  <span className="text-9xl opacity-40">🏆</span>

                  {/* Series Number */}
                  <div className="absolute top-4 left-4">
                    <span className="edition-badge text-rarity-mythic font-mono">
                      {primaryFeatured.seriesNumber}
                    </span>
                  </div>

                  {/* Rarity Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-1 items-end">
                    <span className="px-3 py-1 bg-gradient-to-r from-rarity-mythic/30 to-purple-500/20 text-rarity-mythic text-xs font-semibold uppercase tracking-wider rounded">
                      MYTHIC
                    </span>
                    <span className="px-3 py-1 bg-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded">
                      {getParallelLabel(primaryFeatured.parallel)}
                    </span>
                  </div>

                  {/* Edition */}
                  <div className="absolute bottom-4 right-4">
                    <span className="edition-badge text-white text-lg font-bold">
                      1 of 1
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-5">
                  <div>
                    <h2 className="font-display text-3xl font-bold text-text-primary">
                      {primaryFeatured.name}
                    </h2>
                    {primaryFeatured.subtitle && (
                      <p className="text-rarity-mythic text-lg italic mt-1">
                        {primaryFeatured.subtitle}
                      </p>
                    )}
                    <p className="text-text-dim text-sm uppercase tracking-wider mt-2">
                      {primaryFeatured.type} • {seriesInfo[primaryFeatured.series]?.name}
                    </p>
                  </div>

                  <p className="text-text-muted">
                    {primaryFeatured.description}
                  </p>

                  {/* Attributes */}
                  {primaryFeatured.attributes && (
                    <div className="grid grid-cols-4 gap-3">
                      <div className="p-3 rounded-lg bg-white/5 text-center">
                        <p className="text-accent-coral font-mono font-bold text-lg">{primaryFeatured.attributes.power}</p>
                        <p className="text-text-dim text-xs">POWER</p>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5 text-center">
                        <p className="text-accent-cyan font-mono font-bold text-lg">{primaryFeatured.attributes.wisdom}</p>
                        <p className="text-text-dim text-xs">WISDOM</p>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5 text-center">
                        <p className="text-rarity-epic font-mono font-bold text-lg">{primaryFeatured.attributes.influence}</p>
                        <p className="text-text-dim text-xs">INFLUENCE</p>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5 text-center">
                        <p className="text-rarity-mythic font-mono font-bold text-lg">{primaryFeatured.attributes.rarity_score}</p>
                        <p className="text-text-dim text-xs">SCORE</p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-white/5">
                      <p className="text-text-dim text-xs uppercase tracking-wider">Price</p>
                      <p className="font-display text-2xl font-bold text-gradient">
                        {formatPrice(primaryFeatured.priceInCents)}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5">
                      <p className="text-text-dim text-xs uppercase tracking-wider">Edition</p>
                      <p className="font-display text-2xl font-bold text-text-primary">
                        1/1
                      </p>
                    </div>
                  </div>

                  <form action="/api/checkout" method="POST">
                    <input type="hidden" name="cardId" value={primaryFeatured.id} />
                    <button
                      type="submit"
                      disabled={getAvailableEditions(primaryFeatured) === 0}
                      className={cn(
                        "w-full text-lg py-4 rounded-lg font-display font-bold transition-all",
                        getAvailableEditions(primaryFeatured) === 0
                          ? "bg-white/10 text-text-dim cursor-not-allowed"
                          : "bg-gradient-to-r from-rarity-mythic to-purple-600 hover:from-rarity-mythic/90 hover:to-purple-500 text-white shadow-lg shadow-rarity-mythic/25"
                      )}
                    >
                      {getAvailableEditions(primaryFeatured) === 0
                        ? 'Sold Out'
                        : `Purchase for ${formatPrice(primaryFeatured.priceInCents)}`
                      }
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Featured Legendary Drops */}
        {featuredDrops.length > 1 && (
          <section className="mb-20">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-8">
              Featured Drops
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredDrops.slice(1, 4).map((card) => (
                <CardItem key={card.id} card={card} size="lg" />
              ))}
            </div>
          </section>
        )}

        {/* All Current Drops */}
        <section className="mb-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-2">
            Current Drops
          </h2>
          <p className="text-text-muted mb-8">
            {currentDrops.length} cards available in this release
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentDrops.map((card) => (
              <CardItem key={card.id} card={card} />
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-20">
          <div className="card-frame p-8 md:p-12 text-center max-w-2xl mx-auto">
            <div className="text-4xl mb-4">🔔</div>
            <h2 className="font-display text-2xl font-bold text-text-primary mb-2">
              Never Miss a Drop
            </h2>
            <p className="text-text-muted mb-6">
              Get notified when new cards are released. Be first in line for legendary and mythic drops.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20">
                <p className="text-accent-cyan font-medium">
                  You're on the list! We'll notify you about upcoming drops.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder:text-text-dim focus:outline-none focus:border-accent-coral/50"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Past Drops */}
        <section>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-8">
            Past Drops
          </h2>

          {pastDrops.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pastDrops.map((card) => (
                <CardItem key={card.id} card={card} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 px-4 rounded-xl bg-background-card border border-white/5">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-display font-semibold text-text-primary mb-1">
                No past drops yet
              </h3>
              <p className="text-text-muted text-sm">
                You're early! All current cards are still available.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
