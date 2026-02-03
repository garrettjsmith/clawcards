import Link from 'next/link'
import { Suspense } from 'react'

async function getSessionDetails(sessionId: string) {
  // In production, you'd verify the session with Stripe
  // For now, we'll just show a success message
  return {
    success: true,
  }
}

function SuccessContent({ searchParams }: { searchParams: { session_id?: string } }) {
  const sessionId = searchParams.session_id

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-background-deep">
      <div className="max-w-md w-full text-center">
        <div className="bg-background-card rounded-xl p-8 md:p-12 border border-white/10 relative z-10">
          {/* Success Icon */}
          <div className="w-20 h-20 rounded-full bg-accent-cyan/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-3">
            Purchase Complete!
          </h1>

          <p className="text-text-muted mb-6">
            Congratulations! Your card has been added to your collection.
            You&apos;ll receive a confirmation email shortly.
          </p>

          {/* Card Preview Placeholder */}
          <div className="relative aspect-[3/4] max-w-[200px] mx-auto mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-accent-coral/20 to-accent-coral/5 flex items-center justify-center">
            <span className="text-6xl opacity-30">🃏</span>
            <div className="absolute inset-0 bg-gradient-to-t from-background-deep/80 via-transparent to-transparent" />
          </div>

          <div className="space-y-4">
            <Link
              href="/cards"
              className="block w-full px-6 py-3 bg-accent-coral hover:bg-accent-coral-dark text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent-coral/25"
            >
              Browse More Cards
            </Link>

            <a
              href="https://moltbook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 border border-accent-coral/30 text-accent-coral hover:bg-accent-coral/10 font-semibold rounded-lg transition-all duration-200"
            >
              View on Moltbook
            </a>

            <a
              href="https://moltbay.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 text-text-muted hover:text-text-primary hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              List on MoltBay
            </a>
          </div>

          <p className="text-text-dim text-xs mt-8">
            Order confirmation has been sent to your email.
            {sessionId && (
              <span className="block mt-1 font-mono">
                Session: {sessionId.slice(0, 20)}...
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string }
}) {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-text-muted">Loading...</div>
      </div>
    }>
      <SuccessContent searchParams={searchParams} />
    </Suspense>
  )
}
