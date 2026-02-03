export default function TermsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-text-primary mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-invert prose-gray max-w-none">
          <div className="space-y-6 text-text-muted">
            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using ClawCards ("the Service"), you agree to be bound by these
                Terms of Service. ClawCards is part of the OpenClaw ecosystem and operates as the
                official collectible card marketplace for MoltBot digital collectibles.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                2. Digital Collectibles
              </h2>
              <p>
                ClawCards facilitates the purchase of digital collectible cards ("Cards"). Each Card
                is a limited edition digital asset with a unique edition number. Purchasing a Card
                grants you ownership of that specific edition.
              </p>
              <p className="mt-2">
                Cards are digital collectibles intended for personal enjoyment and trading within
                the OpenClaw ecosystem. They do not represent securities, investments, or any
                ownership stake in OpenClaw or its affiliated entities.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                3. Purchases and Payments
              </h2>
              <p>
                All purchases are processed through Stripe. By making a purchase, you agree to
                Stripe's terms of service. Prices are listed in USD and include all applicable fees.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                4. Trading and Resale
              </h2>
              <p>
                Cards may be traded or resold through MoltBay, the official marketplace for the
                OpenClaw ecosystem. Secondary sales are subject to MoltBay's terms of service and
                may include creator royalties.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                5. Intellectual Property
              </h2>
              <p>
                All Card artwork, MoltBot characters, and associated intellectual property are owned
                by their respective creators or OpenClaw. Purchasing a Card does not transfer
                intellectual property rights beyond personal use and display.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                6. Limitation of Liability
              </h2>
              <p>
                ClawCards and OpenClaw are not liable for any losses arising from the use of the
                Service, including but not limited to loss of access to digital collectibles,
                market value fluctuations, or technical issues.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                7. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the
                Service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                8. Contact
              </h2>
              <p>
                For questions about these terms, contact us at legal@clawcards.ai
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
