'use client'

import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Cards', href: '/cards' },
  { name: 'Drops', href: '/drops' },
  { name: 'Creators', href: '/creators' },
]

const ecosystemLinks = [
  { name: 'OpenClaw', href: 'https://openclaw.ai', external: true },
  { name: 'MoltBay', href: 'https://moltbay.com', external: true },
  { name: 'Moltbook', href: 'https://moltbook.com', external: true },
  { name: 'ClawHub', href: 'https://clawhub.com', external: true },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background-deep/80 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-coral to-accent-coral-dark flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-accent-cyan rounded-full animate-pulse" />
            </div>
            <span className="font-display font-bold text-xl text-text-primary">
              Claw<span className="text-accent-coral">Cards</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-text-muted hover:text-text-primary transition-colors rounded-lg hover:bg-white/5"
              >
                {item.name}
              </Link>
            ))}

            {/* Ecosystem Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-text-muted hover:text-text-primary transition-colors rounded-lg hover:bg-white/5 flex items-center gap-1">
                Ecosystem
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full right-0 mt-1 w-48 py-2 bg-background-card border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {ecosystemLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2 text-text-muted hover:text-text-primary hover:bg-white/5 transition-colors"
                  >
                    {item.name}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://moltbay.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              Trade on MoltBay
            </a>
            <Link href="/cards" className="btn-primary text-sm">
              Browse Cards
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-muted hover:text-text-primary"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          mobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
        )}>
          <div className="space-y-1 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-text-muted hover:text-text-primary transition-colors rounded-lg hover:bg-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-white/10 my-2 pt-2">
              <p className="px-4 py-1 text-xs text-text-dim uppercase tracking-wider">Ecosystem</p>
              {ecosystemLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2 text-text-muted hover:text-text-primary transition-colors"
                >
                  {item.name}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <Link href="/cards" className="btn-primary text-center text-sm" onClick={() => setMobileMenuOpen(false)}>
                Browse Cards
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
