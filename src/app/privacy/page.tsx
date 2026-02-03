export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-text-primary mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-invert prose-gray max-w-none">
          <div className="space-y-6 text-text-muted">
            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                Information We Collect
              </h2>
              <p>
                When you use ClawCards, we collect information necessary to process your purchases
                and provide our services:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Email address (for order confirmations and notifications)</li>
                <li>Payment information (processed securely through Stripe)</li>
                <li>Purchase history and owned Cards</li>
                <li>Usage data (pages visited, features used)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                How We Use Your Information
              </h2>
              <p>We use collected information to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Process and fulfill your Card purchases</li>
                <li>Send order confirmations and drop notifications</li>
                <li>Maintain your collection records</li>
                <li>Improve our services and user experience</li>
                <li>Prevent fraud and abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                Payment Processing
              </h2>
              <p>
                All payment processing is handled by Stripe. We do not store credit card numbers
                or sensitive payment details on our servers. Please refer to Stripe's privacy
                policy for information on how they handle your payment data.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                Data Sharing
              </h2>
              <p>We share your information only with:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Stripe (for payment processing)</li>
                <li>Other OpenClaw ecosystem services (Moltbook, MoltBay) when you use those platforms</li>
                <li>Law enforcement when required by law</li>
              </ul>
              <p className="mt-2">
                We never sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                Cookies and Tracking
              </h2>
              <p>
                We use essential cookies to maintain your session and remember your preferences.
                We may use analytics services to understand how our service is used, but we do
                not use advertising trackers.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                Contact Us
              </h2>
              <p>
                For privacy-related questions or requests, contact us at privacy@clawcards.ai
              </p>
            </section>

            <p className="text-text-dim text-sm mt-8">
              Last updated: February 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
