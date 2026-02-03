'use client'

import { useState } from 'react'
import { cards, getNewDrops } from '@/data/cards'
import { CardItem } from '@/components/CardItem'
import { cn, formatPrice, getRarityColor, getAvailableEditions } from '@/lib/utils'

// Simulated upcoming drops
const upcomingDrops = [
  {
    id: 'plasma-phoenix',
    name: 'Plasma Phoenix',
    description: 'Rising from the digital ashes, the Phoenix represents rebirth in the MoltBot world.',
    rarity: 'legendary',
    type: 'character',
    priceInCents: 19999,
    totalEditions: 50,
    releaseDate: '2024-03-01',
    creator: 'OpenClaw Studios',
  },
  {
    id: 'quantum-core',
    name: 'Quantum Core',
    description: 'The heart of all MoltBot technology. Harnesses infinite parallel possibilities.',
    rarity: 'epic',
    type: 'item',
    priceInCents: 7999,
    totalEditions: 200,
    releaseDate: '2024-02-25',
    creator: 'OpenClaw Studios',
  },
  {
    id: 'genesis-block',
    name: 'Genesis Block',
    description: 'The moment it all began. Own a piece of MoltBot history.',
    rarity: 'epic',
    type: 'moment',
    priceInCents: 5999,
    totalEditions: 300,
    releaseDate: '2024-02-20',
    creator: 'Community Creator',
  },
]

// Past drops (cards that sold out or completed)
const pastDrops = cards.filter(c => !c.isNewDrop && c.editionsSold > c.totalEditions * 0.8)

export default function DropsPage() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const currentDrops = getNewDrops()
  const featuredDrop = cards.find(c => c.rarity === 'legendary')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would call an API
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
            New cards are released regularly. Subscribe to get notified about upcoming drops
            so you never miss a legendary release.
          </p>
        </div>

        {/* Featured Drop */}
        {featuredDrop && (
          <section className="mb-20">
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rarity-legendary/10 border border-rarity-legendary/20">
                <span className="w-2 h-2 bg-rarity-legendary rounded-full animate-pulse" />
                <span className="text-rarity-legendary text-sm font-medium">Live Now</span>
              </span>
            </div>

            <div className="card-frame card-legendary p-6 md:p-10 max-w-4xl mx-auto">
              <div className="holographic-overlay rounded-xl" />
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                {/* Card Preview */}
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-rarity-legendary/30 to-rarity-legendary/5 flex items-center justify-center">
                  <span className="text-9xl opacity-30">🤖</span>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-rarity-legendary/20 text-rarity-legendary text-xs font-semibold uppercase tracking-wider rounded">
                      Legendary
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="edition-badge text-rarity-legendary">
                      {getAvailableEditions(featuredDrop)} LEFT
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-5">
                  <div>
                    <h2 className="font-display text-3xl font-bold text-text-primary">
                      {featuredDrop.name}
                    </h2>
                    <p className="text-text-dim text-sm uppercase tracking-wider mt-1">
                      {featuredDrop.type} Card by {featuredDrop.creator}
                    </p>
                  </div>

                  <p className="text-text-muted">
                    {featuredDrop.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-white/5">
                      <p className="text-text-dim text-xs uppercase tracking-wider">Price</p>
                      <p className="font-display text-2xl font-bold text-text-primary">
                        {formatPrice(featuredDrop.priceInCents)}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5">
                      <p className="text-text-dim text-xs uppercase tracking-wider">Editions</p>
                      <p className="font-display text-2xl font-bold text-text-primary">
                        {featuredDrop.editionsSold}/{featuredDrop.totalEditions}
                      </p>
                    </div>
                  </div>

                  <form action="/api/checkout" method="POST">
                    <input type="hidden" name="cardId" value={featuredDrop.id} />
                    <button
                      type="submit"
                      className="btn-primary w-full text-lg py-4"
                    >
                      Purchase for {formatPrice(featuredDrop.priceInCents)}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Coming Soon */}
        <section className="mb-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-8">
            Coming Soon
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingDrops.map((drop) => (
              <div
                key={drop.id}
                className={cn(
                  'card-frame p-5',
                  drop.rarity === 'legendary' && 'card-legendary',
                  drop.rarity === 'epic' && 'card-epic',
                )}
              >
                {/* Preview */}
                <div className={cn(
                  'relative aspect-video rounded-lg overflow-hidden mb-4 flex items-center justify-center',
                  drop.rarity === 'legendary' && 'bg-gradient-to-br from-rarity-legendary/20 to-rarity-legendary/5',
                  drop.rarity === 'epic' && 'bg-gradient-to-br from-rarity-epic/20 to-rarity-epic/5',
                )}>
                  <span className="text-5xl opacity-30">
                    {drop.type === 'character' && '🤖'}
                    {drop.type === 'moment' && '⚡'}
                    {drop.type === 'item' && '🔧'}
                  </span>
                  <div className="absolute top-3 left-3">
                    <span className={cn(
                      'px-2 py-1 text-xs font-semibold uppercase tracking-wider rounded',
                      getRarityColor(drop.rarity),
                      drop.rarity === 'legendary' && 'bg-rarity-legendary/20',
                      drop.rarity === 'epic' && 'bg-rarity-epic/20',
                    )}>
                      {drop.rarity}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-3">
                  <div>
                    <h3 className="font-display font-bold text-lg text-text-primary">
                      {drop.name}
                    </h3>
                    <p className="text-text-dim text-xs uppercase tracking-wider">
                      {drop.type}
                    </p>
                  </div>

                  <p className="text-text-muted text-sm line-clamp-2">
                    {drop.description}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <div>
                      <p className="font-display font-bold text-text-primary">
                        {formatPrice(drop.priceInCents)}
                      </p>
                      <p className="text-text-dim text-xs">
                        {drop.totalEditions} editions
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-accent-cyan text-sm font-medium">
                        Coming Soon
                      </p>
                      <p className="text-text-dim text-xs">
                        {new Date(drop.releaseDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
              Get notified when new cards are released. Be first in line for legendary drops.
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
