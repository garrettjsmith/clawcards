import Link from 'next/link'

export default function CheckoutCancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full text-center">
        <div className="card-frame p-8 md:p-12">
          {/* Cancel Icon */}
          <div className="w-20 h-20 rounded-full bg-text-dim/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>

          <h1 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-3">
            Purchase Cancelled
          </h1>

          <p className="text-text-muted mb-6">
            No worries! Your card is still available. Changed your mind or had an issue?
            Feel free to try again or browse other cards.
          </p>

          <div className="space-y-3">
            <Link href="/cards" className="btn-primary w-full block">
              Browse Cards
            </Link>

            <Link href="/drops" className="btn-secondary w-full block">
              View Latest Drops
            </Link>

            <Link href="/" className="btn-ghost w-full block text-center">
              Return Home
            </Link>
          </div>

          <p className="text-text-dim text-xs mt-6">
            Need help? Contact us at support@clawcards.ai
          </p>
        </div>
      </div>
    </div>
  )
}
