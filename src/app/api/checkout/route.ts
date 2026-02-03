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

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: card.name,
              description: `${card.rarity.charAt(0).toUpperCase() + card.rarity.slice(1)} ${card.type} Card - Edition #${String(nextEdition).padStart(String(card.totalEditions).length, '0')}/${card.totalEditions}`,
              images: card.imageUrl.startsWith('http')
                ? [card.imageUrl]
                : [`${baseUrl}${card.imageUrl}`],
              metadata: {
                card_id: card.id,
                rarity: card.rarity,
                type: card.type,
                edition: nextEdition.toString(),
                total_editions: card.totalEditions.toString(),
              },
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
      },
    })

    // Redirect to Stripe Checkout
    return NextResponse.redirect(session.url!, { status: 303 })
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
