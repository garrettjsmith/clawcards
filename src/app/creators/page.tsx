'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const benefits = [
  {
    icon: '💰',
    title: 'Earn from Your Art',
    description: 'Keep 90% of all primary sales. Get paid when collectors buy your cards.',
  },
  {
    icon: '🔄',
    title: 'Secondary Royalties',
    description: 'Earn 5% on every resale when your cards trade on MoltBay.',
  },
  {
    icon: '🌟',
    title: 'Build Your Brand',
    description: 'Get featured on ClawCards and across the OpenClaw ecosystem.',
  },
  {
    icon: '🤝',
    title: 'Join the Community',
    description: 'Connect with collectors, other creators, and the MoltBot community.',
  },
]

const featuredCreators = [
  {
    name: 'OpenClaw Studios',
    role: 'Official Creator',
    cardsCreated: 8,
    totalSales: '$12,450',
    avatar: 'O',
  },
  {
    name: 'PixelMolt',
    role: 'Community Creator',
    cardsCreated: 3,
    totalSales: '$2,890',
    avatar: 'P',
  },
  {
    name: 'CyberArtist',
    role: 'Community Creator',
    cardsCreated: 2,
    totalSales: '$1,560',
    avatar: 'C',
  },
]

const faqs = [
  {
    question: 'How do I become a creator?',
    answer: 'Submit your application using the form below. Our team reviews applications weekly and looks for artists who understand the MoltBot aesthetic and can create compelling card artwork.',
  },
  {
    question: 'What are the requirements?',
    answer: 'You need a portfolio showcasing your digital art skills, an understanding of the OpenClaw ecosystem, and the ability to create high-quality card artwork in the MoltBot style.',
  },
  {
    question: 'How much can I earn?',
    answer: 'Creators keep 90% of primary sales and earn 5% royalties on secondary sales. Top creators have earned over $10,000 in their first month.',
  },
  {
    question: 'What file formats do you accept?',
    answer: 'We accept PNG, JPG, and animated GIF files. Recommended resolution is 1500x2100 pixels for optimal card display.',
  },
]

export default function CreatorsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolio: '',
    discord: '',
    experience: '',
    pitch: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to an API
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="text-center mb-20">
          <span className="text-accent-cyan text-sm font-semibold uppercase tracking-wider">
            Creator Program
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mt-2">
            Create Cards. Earn Royalties.
          </h1>
          <p className="text-text-muted mt-4 text-lg max-w-2xl mx-auto">
            Join the ClawCards creator program and turn your art into collectible MoltBot cards.
            Reach thousands of collectors in the OpenClaw ecosystem.
          </p>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="card-frame p-6 text-center hover:border-accent-coral/30 transition-colors"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-display font-bold text-text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-muted text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Creators */}
        <section className="mb-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
            Featured Creators
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {featuredCreators.map((creator) => (
              <div
                key={creator.name}
                className="card-frame p-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-coral to-accent-coral-dark flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {creator.avatar}
                </div>
                <h3 className="font-display font-bold text-text-primary">
                  {creator.name}
                </h3>
                <p className="text-accent-cyan text-sm mb-4">
                  {creator.role}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                  <div>
                    <p className="font-display font-bold text-text-primary">
                      {creator.cardsCreated}
                    </p>
                    <p className="text-text-dim text-xs">Cards</p>
                  </div>
                  <div>
                    <p className="font-display font-bold text-text-primary">
                      {creator.totalSales}
                    </p>
                    <p className="text-text-dim text-xs">Sales</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section className="mb-20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary">
                Apply to Create
              </h2>
              <p className="text-text-muted mt-2">
                Fill out the form below and we'll review your application
              </p>
            </div>

            <div className="card-frame p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="font-display text-xl font-bold text-text-primary mb-2">
                    Application Submitted!
                  </h3>
                  <p className="text-text-muted">
                    Thanks for applying! We review applications weekly and will reach out via email
                    if your application is approved.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-text-primary text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder:text-text-dim focus:outline-none focus:border-accent-coral/50"
                        placeholder="Your name or alias"
                      />
                    </div>
                    <div>
                      <label className="block text-text-primary text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder:text-text-dim focus:outline-none focus:border-accent-coral/50"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-text-primary text-sm font-medium mb-2">
                        Portfolio URL *
                      </label>
                      <input
                        type="url"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder:text-text-dim focus:outline-none focus:border-accent-coral/50"
                        placeholder="https://..."
                      />
                    </div>
                    <div>
                      <label className="block text-text-primary text-sm font-medium mb-2">
                        Discord Username
                      </label>
                      <input
                        type="text"
                        name="discord"
                        value={formData.discord}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder:text-text-dim focus:outline-none focus:border-accent-coral/50"
                        placeholder="username#0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-text-primary text-sm font-medium mb-2">
                      Experience Level *
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary focus:outline-none focus:border-accent-coral/50"
                    >
                      <option value="">Select your experience</option>
                      <option value="beginner">Beginner (0-2 years)</option>
                      <option value="intermediate">Intermediate (2-5 years)</option>
                      <option value="professional">Professional (5+ years)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-text-primary text-sm font-medium mb-2">
                      Why do you want to create for ClawCards? *
                    </label>
                    <textarea
                      name="pitch"
                      value={formData.pitch}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder:text-text-dim focus:outline-none focus:border-accent-coral/50 resize-none"
                      placeholder="Tell us about your interest in MoltBots, your art style, and what kind of cards you'd like to create..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full py-4 text-lg">
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card-frame overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-display font-semibold text-text-primary">
                    {faq.question}
                  </span>
                  <svg
                    className={cn(
                      'w-5 h-5 text-text-muted transition-transform',
                      openFaq === index && 'rotate-180'
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={cn(
                  'overflow-hidden transition-all duration-300',
                  openFaq === index ? 'max-h-48' : 'max-h-0'
                )}>
                  <p className="px-6 pb-4 text-text-muted">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
