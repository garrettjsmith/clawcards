'use client'

import { Card, CardSeries, CardType, CardRarity, CardParallel } from '@/data/cards'

interface CardArtProps {
  card: Card
  className?: string
}

// Color schemes based on rarity
const rarityColors: Record<CardRarity, { primary: string; secondary: string; accent: string; glow: string }> = {
  mythic: { primary: '#ff1a75', secondary: '#9333ea', accent: '#00e5cc', glow: 'rgba(255, 26, 117, 0.5)' },
  legendary: { primary: '#f59e0b', secondary: '#dc2626', accent: '#fbbf24', glow: 'rgba(245, 158, 11, 0.5)' },
  epic: { primary: '#a855f7', secondary: '#6366f1', accent: '#c084fc', glow: 'rgba(168, 85, 247, 0.5)' },
  rare: { primary: '#3b82f6', secondary: '#0ea5e9', accent: '#60a5fa', glow: 'rgba(59, 130, 246, 0.5)' },
  uncommon: { primary: '#22c55e', secondary: '#10b981', accent: '#4ade80', glow: 'rgba(34, 197, 94, 0.5)' },
  common: { primary: '#6b7280', secondary: '#4b5563', accent: '#9ca3af', glow: 'rgba(107, 114, 128, 0.3)' },
}

// Pattern generators based on series
const getSeriesPattern = (series: CardSeries, colors: typeof rarityColors.mythic) => {
  switch (series) {
    case 'genesis':
      // Radiating lines from center - birth/origin
      return `
        <defs>
          <radialGradient id="genesis-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="${colors.accent}" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="${colors.primary}" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <circle cx="150" cy="200" r="120" fill="url(#genesis-glow)"/>
        ${[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180
          const x2 = 150 + Math.cos(angle) * 140
          const y2 = 200 + Math.sin(angle) * 140
          return `<line x1="150" y1="200" x2="${x2}" y2="${y2}" stroke="${colors.accent}" stroke-width="1" opacity="0.4"/>`
        }).join('')}
      `
    case 'founders':
      // Crown/throne pattern
      return `
        <defs>
          <linearGradient id="crown-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${colors.primary}"/>
            <stop offset="100%" stop-color="${colors.secondary}"/>
          </linearGradient>
        </defs>
        <path d="M75 280 L105 200 L135 250 L150 180 L165 250 L195 200 L225 280 Z" fill="none" stroke="url(#crown-gradient)" stroke-width="2" opacity="0.6"/>
        <path d="M90 300 L90 280 L210 280 L210 300 Z" fill="url(#crown-gradient)" opacity="0.3"/>
        <circle cx="150" cy="190" r="8" fill="${colors.accent}"/>
      `
    case 'moltbot-origins':
      // Robot/claw circuitry pattern
      return `
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${colors.primary}"/>
            <stop offset="50%" stop-color="${colors.accent}"/>
            <stop offset="100%" stop-color="${colors.secondary}"/>
          </linearGradient>
        </defs>
        <!-- Main claw shape -->
        <path d="M150 120 Q130 160 100 180 Q80 200 90 230 Q100 260 130 250 Q150 240 150 200"
              fill="none" stroke="url(#circuit-gradient)" stroke-width="3" opacity="0.7"/>
        <path d="M150 120 Q170 160 200 180 Q220 200 210 230 Q200 260 170 250 Q150 240 150 200"
              fill="none" stroke="url(#circuit-gradient)" stroke-width="3" opacity="0.7"/>
        <!-- Circuit nodes -->
        <circle cx="100" cy="180" r="4" fill="${colors.accent}"/>
        <circle cx="200" cy="180" r="4" fill="${colors.accent}"/>
        <circle cx="150" cy="120" r="6" fill="${colors.primary}"/>
        <circle cx="130" cy="250" r="3" fill="${colors.accent}"/>
        <circle cx="170" cy="250" r="3" fill="${colors.accent}"/>
        <!-- Circuit lines -->
        <line x1="100" y1="180" x2="60" y2="180" stroke="${colors.accent}" stroke-width="1" opacity="0.5"/>
        <line x1="200" y1="180" x2="240" y2="180" stroke="${colors.accent}" stroke-width="1" opacity="0.5"/>
        <line x1="150" y1="120" x2="150" y2="80" stroke="${colors.accent}" stroke-width="1" opacity="0.5"/>
      `
    case 'historic-firsts':
      // Lightning/moment capture
      return `
        <defs>
          <linearGradient id="bolt-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="${colors.accent}"/>
            <stop offset="100%" stop-color="${colors.primary}"/>
          </linearGradient>
        </defs>
        <path d="M160 100 L130 180 L155 180 L140 280 L190 170 L165 170 L185 100 Z"
              fill="url(#bolt-gradient)" opacity="0.7"/>
        <circle cx="150" cy="190" r="40" fill="none" stroke="${colors.accent}" stroke-width="1" opacity="0.3"/>
        <circle cx="150" cy="190" r="60" fill="none" stroke="${colors.accent}" stroke-width="1" opacity="0.2"/>
        <circle cx="150" cy="190" r="80" fill="none" stroke="${colors.accent}" stroke-width="1" opacity="0.1"/>
      `
    case 'artifacts':
      // Hexagonal shell/tech pattern
      return `
        <defs>
          <linearGradient id="hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${colors.primary}" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="${colors.secondary}" stop-opacity="0.3"/>
          </linearGradient>
        </defs>
        ${[
          { cx: 150, cy: 150, r: 30 },
          { cx: 110, cy: 180, r: 25 },
          { cx: 190, cy: 180, r: 25 },
          { cx: 130, cy: 230, r: 20 },
          { cx: 170, cy: 230, r: 20 },
          { cx: 150, cy: 270, r: 15 },
        ].map((hex, i) => `
          <polygon points="${getHexPoints(hex.cx, hex.cy, hex.r)}"
                   fill="url(#hex-gradient)" stroke="${colors.accent}" stroke-width="1" opacity="${0.7 - i * 0.08}"/>
        `).join('')}
      `
    default:
      return ''
  }
}

// Helper to generate hexagon points
function getHexPoints(cx: number, cy: number, r: number): string {
  return [...Array(6)].map((_, i) => {
    const angle = (i * 60 - 30) * Math.PI / 180
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`
  }).join(' ')
}

// Type-specific central icon
const getTypeIcon = (type: CardType, colors: typeof rarityColors.mythic) => {
  switch (type) {
    case 'founder':
      // Lobster/claw silhouette
      return `
        <g transform="translate(110, 160)">
          <path d="M40 0 Q20 20 10 50 Q0 80 20 90 Q30 80 40 60 Q50 80 60 90 Q80 80 70 50 Q60 20 40 0"
                fill="${colors.primary}" opacity="0.9"/>
          <ellipse cx="40" cy="35" rx="8" ry="12" fill="${colors.accent}"/>
        </g>
      `
    case 'character':
      // MoltBot face
      return `
        <g transform="translate(110, 150)">
          <rect x="10" y="10" width="60" height="50" rx="8" fill="${colors.primary}" opacity="0.8"/>
          <rect x="20" y="25" width="12" height="8" rx="2" fill="${colors.accent}"/>
          <rect x="48" y="25" width="12" height="8" rx="2" fill="${colors.accent}"/>
          <rect x="30" y="45" width="20" height="4" rx="2" fill="${colors.accent}"/>
          <!-- Antenna -->
          <line x1="25" y1="10" x2="20" y2="-10" stroke="${colors.accent}" stroke-width="2"/>
          <line x1="55" y1="10" x2="60" y2="-10" stroke="${colors.accent}" stroke-width="2"/>
          <circle cx="20" cy="-10" r="4" fill="${colors.accent}"/>
          <circle cx="60" cy="-10" r="4" fill="${colors.accent}"/>
        </g>
      `
    case 'moment':
      // Capture frame/shutter
      return `
        <g transform="translate(110, 160)">
          <rect x="5" y="5" width="70" height="50" rx="5" fill="none" stroke="${colors.primary}" stroke-width="3" opacity="0.8"/>
          <circle cx="40" cy="30" r="15" fill="none" stroke="${colors.accent}" stroke-width="2"/>
          <circle cx="40" cy="30" r="8" fill="${colors.accent}" opacity="0.6"/>
          <!-- Corner brackets -->
          <path d="M5 15 L5 5 L15 5" fill="none" stroke="${colors.accent}" stroke-width="2"/>
          <path d="M65 5 L75 5 L75 15" fill="none" stroke="${colors.accent}" stroke-width="2"/>
          <path d="M75 45 L75 55 L65 55" fill="none" stroke="${colors.accent}" stroke-width="2"/>
          <path d="M15 55 L5 55 L5 45" fill="none" stroke="${colors.accent}" stroke-width="2"/>
        </g>
      `
    case 'artifact':
      // Gear/cog
      return `
        <g transform="translate(110, 160)">
          <circle cx="40" cy="30" r="20" fill="${colors.primary}" opacity="0.8"/>
          <circle cx="40" cy="30" r="10" fill="${colors.secondary}"/>
          <circle cx="40" cy="30" r="5" fill="${colors.accent}"/>
          ${[...Array(8)].map((_, i) => {
            const angle = (i * 45) * Math.PI / 180
            const x1 = 40 + Math.cos(angle) * 18
            const y1 = 30 + Math.sin(angle) * 18
            const x2 = 40 + Math.cos(angle) * 28
            const y2 = 30 + Math.sin(angle) * 28
            return `<rect x="${x1 - 4}" y="${y1 - 4}" width="8" height="8" fill="${colors.primary}" transform="rotate(${i * 45}, ${x1}, ${y1})"/>`
          }).join('')}
        </g>
      `
    case 'location':
      // Building/spire
      return `
        <g transform="translate(110, 140)">
          <polygon points="40,0 10,60 70,60" fill="${colors.primary}" opacity="0.8"/>
          <rect x="25" y="40" width="30" height="30" fill="${colors.secondary}"/>
          <rect x="33" y="50" width="14" height="20" fill="${colors.accent}" opacity="0.6"/>
          <circle cx="40" cy="20" r="5" fill="${colors.accent}"/>
        </g>
      `
    default:
      return ''
  }
}

// Parallel overlay effects
const getParallelEffect = (parallel: CardParallel, colors: typeof rarityColors.mythic) => {
  switch (parallel) {
    case 'platinum':
      return `
        <defs>
          <linearGradient id="platinum-shine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="white" stop-opacity="0"/>
            <stop offset="45%" stop-color="white" stop-opacity="0"/>
            <stop offset="50%" stop-color="white" stop-opacity="0.4"/>
            <stop offset="55%" stop-color="white" stop-opacity="0"/>
            <stop offset="100%" stop-color="white" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="300" height="400" fill="url(#platinum-shine)">
          <animate attributeName="x" from="-300" to="300" dur="3s" repeatCount="indefinite"/>
        </rect>
      `
    case 'obsidian':
      return `
        <rect x="0" y="0" width="300" height="400" fill="rgba(0,0,0,0.3)"/>
        <rect x="10" y="10" width="280" height="380" fill="none" stroke="${colors.primary}" stroke-width="2" opacity="0.5"/>
      `
    case 'gold':
      return `
        <defs>
          <linearGradient id="gold-shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffd700" stop-opacity="0.1"/>
            <stop offset="50%" stop-color="#ffed4a" stop-opacity="0.2"/>
            <stop offset="100%" stop-color="#ffd700" stop-opacity="0.1"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="300" height="400" fill="url(#gold-shimmer)"/>
      `
    case 'chrome':
      return `
        <defs>
          <linearGradient id="chrome-reflect" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="${colors.accent}" stop-opacity="0.2"/>
            <stop offset="50%" stop-color="white" stop-opacity="0.1"/>
            <stop offset="100%" stop-color="${colors.accent}" stop-opacity="0.2"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="300" height="400" fill="url(#chrome-reflect)"/>
      `
    case 'holographic':
      return `
        <defs>
          <linearGradient id="holo-rainbow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ff0000" stop-opacity="0.1"/>
            <stop offset="20%" stop-color="#ff8800" stop-opacity="0.1"/>
            <stop offset="40%" stop-color="#ffff00" stop-opacity="0.1"/>
            <stop offset="60%" stop-color="#00ff00" stop-opacity="0.1"/>
            <stop offset="80%" stop-color="#0088ff" stop-opacity="0.1"/>
            <stop offset="100%" stop-color="#8800ff" stop-opacity="0.1"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="300" height="400" fill="url(#holo-rainbow)"/>
      `
    default:
      return ''
  }
}

export function CardArt({ card, className = '' }: CardArtProps) {
  const colors = rarityColors[card.rarity]

  return (
    <svg
      viewBox="0 0 300 400"
      className={`w-full h-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background gradient */}
      <defs>
        <linearGradient id={`bg-${card.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0a0f1a"/>
          <stop offset="50%" stopColor="#050810"/>
          <stop offset="100%" stopColor="#0a0f1a"/>
        </linearGradient>
        <radialGradient id={`glow-${card.id}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor={colors.glow}/>
          <stop offset="100%" stopColor="transparent"/>
        </radialGradient>
      </defs>

      {/* Base background */}
      <rect width="300" height="400" fill={`url(#bg-${card.id})`}/>

      {/* Rarity glow */}
      <rect width="300" height="400" fill={`url(#glow-${card.id})`}/>

      {/* Series-specific background pattern */}
      <g dangerouslySetInnerHTML={{ __html: getSeriesPattern(card.series, colors) }} />

      {/* Type-specific central icon */}
      <g dangerouslySetInnerHTML={{ __html: getTypeIcon(card.type, colors) }} />

      {/* Parallel overlay effect */}
      <g dangerouslySetInnerHTML={{ __html: getParallelEffect(card.parallel, colors) }} />

      {/* Border */}
      <rect
        x="5"
        y="5"
        width="290"
        height="390"
        rx="12"
        fill="none"
        stroke={colors.primary}
        strokeWidth="2"
        opacity="0.6"
      />

      {/* Corner accents */}
      <path d="M20 5 L5 5 L5 20" fill="none" stroke={colors.accent} strokeWidth="2"/>
      <path d="M280 5 L295 5 L295 20" fill="none" stroke={colors.accent} strokeWidth="2"/>
      <path d="M295 380 L295 395 L280 395" fill="none" stroke={colors.accent} strokeWidth="2"/>
      <path d="M5 380 L5 395 L20 395" fill="none" stroke={colors.accent} strokeWidth="2"/>

      {/* Series identifier at top */}
      <text
        x="150"
        y="30"
        textAnchor="middle"
        fill={colors.accent}
        fontSize="10"
        fontFamily="monospace"
        opacity="0.7"
      >
        {card.seriesNumber}
      </text>

      {/* Card name at bottom */}
      <text
        x="150"
        y="360"
        textAnchor="middle"
        fill={colors.primary}
        fontSize="16"
        fontWeight="bold"
        fontFamily="system-ui"
      >
        {card.name.toUpperCase()}
      </text>

      {/* Subtitle */}
      {card.subtitle && (
        <text
          x="150"
          y="378"
          textAnchor="middle"
          fill={colors.accent}
          fontSize="10"
          fontStyle="italic"
          opacity="0.8"
        >
          {card.subtitle}
        </text>
      )}
    </svg>
  )
}
