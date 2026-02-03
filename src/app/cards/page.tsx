'use client'

import { useState, useMemo } from 'react'
import { cards, CardRarity, CardType } from '@/data/cards'
import { CardItem } from '@/components/CardItem'
import { cn } from '@/lib/utils'

const rarityFilters: { value: CardRarity | 'all'; label: string }[] = [
  { value: 'all', label: 'All Rarities' },
  { value: 'legendary', label: 'Legendary' },
  { value: 'epic', label: 'Epic' },
  { value: 'rare', label: 'Rare' },
  { value: 'uncommon', label: 'Uncommon' },
  { value: 'common', label: 'Common' },
]

const typeFilters: { value: CardType | 'all'; label: string }[] = [
  { value: 'all', label: 'All Types' },
  { value: 'character', label: 'Characters' },
  { value: 'moment', label: 'Moments' },
  { value: 'item', label: 'Items' },
  { value: 'location', label: 'Locations' },
]

const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'rarity', label: 'Rarity' },
  { value: 'available', label: 'Most Available' },
]

const rarityOrder: Record<CardRarity, number> = {
  legendary: 5,
  epic: 4,
  rare: 3,
  uncommon: 2,
  common: 1,
}

export default function CardsPage() {
  const [rarityFilter, setRarityFilter] = useState<CardRarity | 'all'>('all')
  const [typeFilter, setTypeFilter] = useState<CardType | 'all'>('all')
  const [sortBy, setSortBy] = useState('newest')

  const filteredCards = useMemo(() => {
    let result = [...cards]

    // Apply rarity filter
    if (rarityFilter !== 'all') {
      result = result.filter(card => card.rarity === rarityFilter)
    }

    // Apply type filter
    if (typeFilter !== 'all') {
      result = result.filter(card => card.type === typeFilter)
    }

    // Apply sorting
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
        break
      case 'price-high':
        result.sort((a, b) => b.priceInCents - a.priceInCents)
        break
      case 'price-low':
        result.sort((a, b) => a.priceInCents - b.priceInCents)
        break
      case 'rarity':
        result.sort((a, b) => rarityOrder[b.rarity] - rarityOrder[a.rarity])
        break
      case 'available':
        result.sort((a, b) => (b.totalEditions - b.editionsSold) - (a.totalEditions - a.editionsSold))
        break
    }

    return result
  }, [rarityFilter, typeFilter, sortBy])

  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
            Card Collection
          </h1>
          <p className="text-text-muted mt-2 text-lg">
            Browse all {cards.length} cards in the ClawCards marketplace
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 p-4 rounded-xl bg-background-card border border-white/5">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Rarity Filter */}
            <div className="flex-1">
              <label className="block text-text-dim text-xs uppercase tracking-wider mb-2">
                Rarity
              </label>
              <div className="flex flex-wrap gap-2">
                {rarityFilters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setRarityFilter(filter.value)}
                    className={cn(
                      'px-3 py-1.5 rounded-lg text-sm font-medium transition-all',
                      rarityFilter === filter.value
                        ? 'bg-accent-coral text-white'
                        : 'bg-white/5 text-text-muted hover:bg-white/10 hover:text-text-primary'
                    )}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div className="flex-1">
              <label className="block text-text-dim text-xs uppercase tracking-wider mb-2">
                Type
              </label>
              <div className="flex flex-wrap gap-2">
                {typeFilters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setTypeFilter(filter.value)}
                    className={cn(
                      'px-3 py-1.5 rounded-lg text-sm font-medium transition-all',
                      typeFilter === filter.value
                        ? 'bg-accent-cyan text-background-deep'
                        : 'bg-white/5 text-text-muted hover:bg-white/10 hover:text-text-primary'
                    )}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="lg:w-48">
              <label className="block text-text-dim text-xs uppercase tracking-wider mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-text-primary text-sm focus:outline-none focus:border-accent-coral/50"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-text-muted text-sm">
            Showing <span className="text-text-primary font-medium">{filteredCards.length}</span> cards
          </p>
        </div>

        {/* Cards Grid */}
        {filteredCards.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCards.map((card) => (
              <CardItem key={card.id} card={card} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="font-display text-xl font-semibold text-text-primary mb-2">
              No cards found
            </h3>
            <p className="text-text-muted">
              Try adjusting your filters to see more results.
            </p>
            <button
              onClick={() => {
                setRarityFilter('all')
                setTypeFilter('all')
              }}
              className="btn-secondary mt-4"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
