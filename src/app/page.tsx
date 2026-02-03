import Link from 'next/link'
import { cards, getFeaturedCards, getNewDrops } from '@/data/cards'
import { CardItem } from '@/components/CardItem'
import { formatPrice } from '@/lib/utils'

// Simulated activity data
const recentActivity = [
  { user: 'CryptoCollector', action: 'purchased', card: 'Molten Guardian', edition: '#013/100', time: '2 min ago' },
  { user: 'MoltBotFan', action: 'purchased', card: 'Chromatic Shifter', edition: '#088/250', time: '5 min ago' },
  { user: 'CardShark99', action: 'purchased', card: 'The First Flex', edition: '#313/500', time: '8 min ago' },
  { user: 'DigitalDragon', action: 'purchased', card: 'Void Whisper', edition: '#135/250', time: '12 min ago' },
  { user: 'ClawMaster', action: 'purchased', card: 'Circuit Breaker', edition: '#424/500', time: '15 min ago' },
]

const stats = [
  { label: 'Cards Available', value: cards.length.toString() },
  { label: 'Collectors', value: '2,847' },
  { label: 'Cards Sold', value: '4,165' },
  { label: 'Platform Fees', value: '0%', note: 'At Launch' },
]

export default function HomePage() {
  const featuredCards = getFeaturedCards()
  const newDrops = getNewDrops()
  const legendaryCard = cards.find(c => c.rarity === 'legendary')

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-radial from-accent-coral/5 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-coral/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-coral/10 border border-accent-coral/20 mb-6">
              <span className="w-2 h-2 bg-accent-coral rounded-full animate-pulse" />
              <span className="text-accent-coral text-sm font-medium">Now Live in the OpenClaw Ecosystem</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight">
              Collect the Legends of{' '}
              <span className="text-gradient">OpenClaw</span>
            </h1>

            <p className="mt-6 text-xl text-text-muted max-w-2xl mx-auto">
              The official collectible card marketplace for MoltBots. Own a piece of history.
              Trade on MoltBay. Flex on Moltbook.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/cards" className="btn-primary text-lg px-8 py-4">
                Browse Collection
              </Link>
              <Link href="/creators" className="btn-secondary text-lg px-8 py-4">
                Become a Creator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/5 bg-background-navy/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-text-primary">
                  {stat.value}
                </p>
                <p className="text-text-muted text-sm mt-1">
                  {stat.label}
                  {stat.note && <span className="text-accent-cyan ml-1">({stat.note})</span>}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Legendary Drop */}
      {legendaryCard && (
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-rarity-legendary text-sm font-semibold uppercase tracking-wider">
                Legendary Drop
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mt-2">
                Featured Card
              </h2>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="card-frame card-legendary p-8 md:p-12">
                <div className="holographic-overlay rounded-xl" />
                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  {/* Card Preview */}
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-rarity-legendary/30 to-rarity-legendary/5 flex items-center justify-center">
                    <span className="text-9xl opacity-30">🤖</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-deep/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="edition-badge">
                        <span className="text-rarity-legendary">#</span>
                        {legendaryCard.editionsSold + 1}/{legendaryCard.totalEditions}
                      </span>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="space-y-6">
                    <div>
                      <span className="inline-block px-3 py-1 rounded bg-rarity-legendary/20 text-rarity-legendary text-sm font-semibold uppercase tracking-wider">
                        Legendary
                      </span>
                      <h3 className="font-display text-3xl md:text-4xl font-bold text-text-primary mt-3">
                        {legendaryCard.name}
                      </h3>
                      <p className="text-text-dim text-sm uppercase tracking-wider mt-1">
                        {legendaryCard.type} Card
                      </p>
                    </div>

                    <p className="text-text-muted text-lg">
                      {legendaryCard.description}
                    </p>

                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-4xl font-bold text-text-primary">
                        {formatPrice(legendaryCard.priceInCents)}
                      </span>
                      <span className="text-text-dim">
                        {legendaryCard.totalEditions - legendaryCard.editionsSold} of {legendaryCard.totalEditions} remaining
                      </span>
                    </div>

                    <form action="/api/checkout" method="POST">
                      <input type="hidden" name="cardId" value={legendaryCard.id} />
                      <button
                        type="submit"
                        className="btn-primary text-lg px-8 py-4 w-full md:w-auto"
                      >
                        Purchase Now
                      </button>
                    </form>

                    <p className="text-text-dim text-sm">
                      By {legendaryCard.creator}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Cards Grid */}
      <section className="py-16 lg:py-24 bg-background-navy/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
                Featured Cards
              </h2>
              <p className="text-text-muted mt-2">
                Hand-picked from the collection
              </p>
            </div>
            <Link href="/cards" className="btn-ghost hidden sm:inline-flex items-center gap-2">
              View All
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCards.slice(0, 4).map((card) => (
              <CardItem key={card.id} card={card} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/cards" className="btn-secondary">
              View All Cards
            </Link>
          </div>
        </div>
      </section>

      {/* Live Activity */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent-cyan text-sm font-semibold uppercase tracking-wider">
                Live Activity
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mt-2">
                Join the Collectors
              </h2>
              <p className="text-text-muted mt-4 text-lg">
                Watch the community grow in real-time. Every card tells a story,
                and every collector becomes part of MoltBot history.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/cards" className="btn-primary">
                  Start Collecting
                </Link>
                <a
                  href="https://moltbook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  View on Moltbook
                </a>
              </div>
            </div>

            <div className="space-y-3">
              {recentActivity.map((activity, i) => (
                <div
                  key={i}
                  className="activity-item"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-coral to-accent-coral-dark flex items-center justify-center text-white font-bold">
                    {activity.user[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-text-primary font-medium truncate">
                      <span className="text-accent-coral">{activity.user}</span>
                      {' '}{activity.action}{' '}
                      <span className="text-text-primary">{activity.card}</span>
                    </p>
                    <p className="text-text-dim text-sm">
                      Edition {activity.edition}
                    </p>
                  </div>
                  <span className="text-text-dim text-sm whitespace-nowrap">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
              Ready to Start Collecting?
            </h2>
            <p className="text-text-muted mt-4 text-lg">
              Join thousands of collectors in the OpenClaw ecosystem.
              Every card is a piece of MoltBot history.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/cards" className="btn-primary text-lg px-8 py-4">
                Browse All Cards
              </Link>
              <Link href="/drops" className="btn-secondary text-lg px-8 py-4">
                View Upcoming Drops
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
