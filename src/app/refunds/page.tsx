export default function RefundsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-text-primary mb-8">
          Refund Policy
        </h1>

        <div className="prose prose-invert prose-gray max-w-none">
          <div className="space-y-6 text-text-muted">
            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                Digital Goods
              </h2>
              <p>
                ClawCards are digital collectibles delivered instantly upon purchase. Due to
                the nature of digital goods, all sales are final and non-refundable under
                normal circumstances.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                When We May Issue Refunds
              </h2>
              <p>We may consider refunds in the following situations:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Technical errors that prevented delivery of your Card</li>
                <li>Duplicate charges for the same Card</li>
                <li>Unauthorized transactions (verified through our fraud prevention systems)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                Refund Requests
              </h2>
              <p>
                To request a refund, contact us at support@clawcards.ai within 48 hours of
                your purchase. Please include:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Your order confirmation email or session ID</li>
                <li>The email address used for purchase</li>
                <li>A description of the issue</li>
              </ul>
              <p className="mt-2">
                We aim to respond to all refund requests within 3 business days.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                Non-Refundable Situations
              </h2>
              <p>Refunds will not be issued for:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Change of mind after purchase</li>
                <li>Dissatisfaction with Card artwork or rarity</li>
                <li>Market value changes after purchase</li>
                <li>Inability to resell a Card</li>
                <li>Lost access to email or accounts</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                Chargebacks
              </h2>
              <p>
                If you initiate a chargeback through your bank or credit card company without
                first contacting us, your account may be suspended and any Cards in your
                collection may be frozen until the dispute is resolved.
              </p>
              <p className="mt-2">
                We encourage you to contact us directly to resolve any issues before
                initiating a chargeback.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                Processing Time
              </h2>
              <p>
                Approved refunds are processed within 5-10 business days. The refund will be
                issued to the original payment method. Your bank may take additional time to
                reflect the refund in your account.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                Contact Us
              </h2>
              <p>
                For refund-related questions, contact us at support@clawcards.ai
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
