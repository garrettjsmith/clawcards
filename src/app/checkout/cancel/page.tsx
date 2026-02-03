import Link from 'next/link'

export default function CheckoutCancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-background-deep">
      <div className="max-w-md w-full text-center">
        <div className="bg-background-card rounded-xl p-8 md:p-12 border border-white/10 relative z-10">
          {/* Cancel Icon */}
          <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>

          <h1 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-3">
            Purchase Cancelled
          </h1>

          <p className="text-text-muted mb-8">
            No worries! Your card is still available. Changed your mind or had an issue?
            Feel free to try again or browse other cards.
          </p>

          <div className="space-y-4">
            <Link
              href="/cards"
              className="block w-full px-6 py-3 bg-accent-coral hover:bg-accent-coral-dark text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent-coral/25"
            >
              Browse Cards
            </Link>

            <Link
              href="/drops"
              className="block w-full px-6 py-3 border border-accent-coral/30 text-accent-coral hover:bg-accent-coral/10 font-semibold rounded-lg transition-all duration-200"
            >
              View Latest Drops
            </Link>

            <Link
              href="/"
              className="block w-full px-4 py-2 text-text-muted hover:text-text-primary hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              Return Home
            </Link>
          </div>

          <p className="text-text-dim text-xs mt-8">
            Need help? Contact us at support@clawcards.ai
          </p>
        </div>
      </div>
    </div>
  )
}
