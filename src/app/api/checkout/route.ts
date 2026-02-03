import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getCardById } from '@/data/cards'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const cardId = formData.get('cardId') as string

    if (!cardId) {
      return NextResponse.json(
        { error: 'Card ID is required' },
        { status: 400 }
      )
    }

    const card = getCardById(cardId)
    if (!card) {
      return NextResponse.json(
        { error: 'Card not found' },
        { status: 404 }
      )
    }

    // Check if card is sold out
    const availableEditions = card.totalEditions - card.editionsSold
    if (availableEditions <= 0) {
      return NextResponse.json(
        { error: 'This card is sold out' },
        { status: 400 }
      )
    }

    // Calculate the next edition number
    const nextEdition = card.editionsSold + 1

    // Use request origin as fallback for base URL
    const origin = request.headers.get('origin') || request.headers.get('referer')?.replace(/\/[^/]*$/, '') || ''
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || origin || 'https://clawcards.ai'

    console.log('Creating checkout session:', {
      cardId: card.id,
      cardName: card.name,
      price: card.priceInCents,
      baseUrl,
    })

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${card.name} - ClawCard`,
              description: `${card.rarity.charAt(0).toUpperCase() + card.rarity.slice(1)} ${card.parallel !== 'base' ? card.parallel + ' ' : ''}${card.type} - Edition #${nextEdition}/${card.totalEditions}`,
            },
            unit_amount: card.priceInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout/cancel`,
      metadata: {
        card_id: card.id,
        card_name: card.name,
        edition: nextEdition.toString(),
        total_editions: card.totalEditions.toString(),
        rarity: card.rarity,
        parallel: card.parallel,
      },
    })

    console.log('Checkout session created:', session.id, session.url)

    if (!session.url) {
      return NextResponse.json(
        { error: 'Failed to create checkout session' },
        { status: 500 }
      )
    }

    // Return URL for client-side redirect
    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Checkout error:', error)

    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.statusCode || 500 }
      )
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}
