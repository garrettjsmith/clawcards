'use client'

import { useState, useMemo } from 'react'
import { cards, CardRarity, CardType, CardSeries, CardParallel, seriesInfo, parallelInfo } from '@/data/cards'
import { CardItem } from '@/components/CardItem'
import { cn } from '@/lib/utils'

const rarityFilters: { value: CardRarity | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'mythic', label: 'Mythic' },
  { value: 'legendary', label: 'Legendary' },
  { value: 'epic', label: 'Epic' },
  { value: 'rare', label: 'Rare' },
  { value: 'uncommon', label: 'Uncommon' },
  { value: 'common', label: 'Common' },
]

const seriesFilters: { value: CardSeries | 'all'; label: string }[] = [
  { value: 'all', label: 'All Series' },
  { value: 'genesis', label: 'Genesis' },
  { value: 'founders', label: 'Founders' },
  { value: 'moltbot-origins', label: 'MoltBot Origins' },
  { value: 'historic-firsts', label: 'Historic Firsts' },
  { value: 'artifacts', label: 'Artifacts' },
]

const parallelFilters: { value: CardParallel | 'all'; label: string }[] = [
  { value: 'all', label: 'All Parallels' },
  { value: 'platinum', label: 'Platinum 1/1' },
  { value: 'obsidian', label: 'Obsidian' },
  { value: 'gold', label: 'Gold' },
  { value: 'chrome', label: 'Chrome' },
  { value: 'holographic', label: 'Holographic' },
  { value: 'base', label: 'Base' },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest First' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'rarity', label: 'Rarity' },
  { value: 'available', label: 'Most Available' },
]

const rarityOrder: Record<CardRarity, number> = {
  mythic: 6,
  legendary: 5,
  epic: 4,
  rare: 3,
  uncommon: 2,
  common: 1,
}

export default function CardsPage() {
  const [rarityFilter, setRarityFilter] = useState<CardRarity | 'all'>('all')
  const [seriesFilter, setSeriesFilter] = useState<CardSeries | 'all'>('all')
  const [parallelFilter, setParallelFilter] = useState<CardParallel | 'all'>('all')
  const [sortBy, setSortBy] = useState('featured')

  const filteredCards = useMemo(() => {
    let result = [...cards]

    // Apply rarity filter
    if (rarityFilter !== 'all') {
      result = result.filter(card => card.rarity === rarityFilter)
    }

    // Apply series filter
    if (seriesFilter !== 'all') {
      result = result.filter(card => card.series === seriesFilter)
    }

    // Apply parallel filter
    if (parallelFilter !== 'all') {
      result = result.filter(card => card.parallel === parallelFilter)
    }

    // Apply sorting
    switch (sortBy) {
      case 'featured':
        result.sort((a, b) => {
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return rarityOrder[b.rarity] - rarityOrder[a.rarity]
        })
        break
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
  }, [rarityFilter, seriesFilter, parallelFilter, sortBy])

  const clearFilters = () => {
    setRarityFilter('all')
    setSeriesFilter('all')
    setParallelFilter('all')
    setSortBy('featured')
  }

  const hasActiveFilters = rarityFilter !== 'all' || seriesFilter !== 'all' || parallelFilter !== 'all'

  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
            Card Collection
          </h1>
          <p className="text-text-muted mt-2 text-lg">
            Browse all {cards.length} cards across {Object.keys(seriesInfo).length} series
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 p-4 rounded-xl bg-background-card border border-white/5">
          <div className="flex flex-col gap-4">
            {/* Row 1: Rarity */}
            <div>
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

            {/* Row 2: Series and Parallel */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-text-dim text-xs uppercase tracking-wider mb-2">
                  Series
                </label>
                <select
                  value={seriesFilter}
                  onChange={(e) => setSeriesFilter(e.target.value as CardSeries | 'all')}
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-text-primary text-sm focus:outline-none focus:border-accent-coral/50"
                >
                  {seriesFilters.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-text-dim text-xs uppercase tracking-wider mb-2">
                  Parallel
                </label>
                <select
                  value={parallelFilter}
                  onChange={(e) => setParallelFilter(e.target.value as CardParallel | 'all')}
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-text-primary text-sm focus:outline-none focus:border-accent-coral/50"
                >
                  {parallelFilters.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 3: Sort and Clear */}
            <div className="flex flex-col sm:flex-row sm:items-end gap-4">
              <div className="flex-1">
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

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 text-sm text-accent-coral hover:text-accent-coral-dark transition-colors"
                >
                  Clear Filters
                </button>
              )}
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
              onClick={clearFilters}
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
