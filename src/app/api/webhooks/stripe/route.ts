import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      )
    }

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error('Webhook signature verification failed:', err)
      return NextResponse.json(
        { error: 'Webhook signature verification failed' },
        { status: 400 }
      )
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session

        // Extract purchase details from metadata
        const {
          card_id,
          card_name,
          edition,
          total_editions,
          rarity,
        } = session.metadata || {}

        console.log('=== Purchase Completed ===')
        console.log(`Card: ${card_name} (${card_id})`)
        console.log(`Edition: #${edition}/${total_editions}`)
        console.log(`Rarity: ${rarity}`)
        console.log(`Customer Email: ${session.customer_details?.email}`)
        console.log(`Amount: $${(session.amount_total || 0) / 100}`)
        console.log(`Payment Intent: ${session.payment_intent}`)
        console.log('========================')

        // TODO: In production, you would:
        // 1. Update the database to mark the edition as sold
        // 2. Create a record in the purchases table
        // 3. Send a confirmation email to the customer
        // 4. Update the card's editionsSold count
        // 5. Create an entry in the collector's Moltbook profile

        break
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        console.log(`PaymentIntent ${paymentIntent.id} succeeded`)
        break
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        console.log(`PaymentIntent ${paymentIntent.id} failed`)
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}
