#!/usr/bin/env node
/**
 * Moltybras Card Grid Slicer
 *
 * Takes a grid image of cards and slices it into individual card files.
 *
 * Usage: node scripts/slice-card-grid.js <input-image> [options]
 *
 * Options:
 *   --cols=N      Number of columns (default: 4)
 *   --rows=N      Number of rows (default: 3)
 *   --output=DIR  Output directory (default: ./cards-output)
 *   --prefix=STR  Filename prefix (default: card)
 *   --gap=N       Gap between cards in pixels (default: 0)
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function sliceCardGrid(inputPath, options = {}) {
  const {
    cols = 4,
    rows = 3,
    outputDir = './cards-output',
    prefix = 'card',
    gap = 0,
  } = options;

  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Get image metadata
  const image = sharp(inputPath);
  const metadata = await image.metadata();

  console.log(`Input image: ${inputPath}`);
  console.log(`Dimensions: ${metadata.width}x${metadata.height}`);
  console.log(`Grid: ${cols}x${rows} = ${cols * rows} cards`);

  // Calculate card dimensions
  const totalGapWidth = gap * (cols - 1);
  const totalGapHeight = gap * (rows - 1);
  const cardWidth = Math.floor((metadata.width - totalGapWidth) / cols);
  const cardHeight = Math.floor((metadata.height - totalGapHeight) / rows);

  console.log(`Card size: ${cardWidth}x${cardHeight}`);
  console.log(`Output directory: ${outputDir}`);
  console.log('');

  const results = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cardIndex = row * cols + col + 1;
      const x = col * (cardWidth + gap);
      const y = row * (cardHeight + gap);

      const outputFilename = `${prefix}-${String(cardIndex).padStart(2, '0')}.png`;
      const outputPath = path.join(outputDir, outputFilename);

      try {
        await sharp(inputPath)
          .extract({
            left: x,
            top: y,
            width: cardWidth,
            height: cardHeight,
          })
          .toFile(outputPath);

        console.log(`✓ Card ${cardIndex}: ${outputFilename} (${x},${y})`);
        results.push({ index: cardIndex, path: outputPath, success: true });
      } catch (err) {
        console.error(`✗ Card ${cardIndex}: ${err.message}`);
        results.push({ index: cardIndex, error: err.message, success: false });
      }
    }
  }

  console.log('');
  console.log(`Done! ${results.filter(r => r.success).length}/${cols * rows} cards extracted.`);

  return results;
}

// CLI handling
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes('--help')) {
    console.log(`
Moltybras Card Grid Slicer

Usage: node scripts/slice-card-grid.js <input-image> [options]

Options:
  --cols=N      Number of columns (default: 4)
  --rows=N      Number of rows (default: 3)
  --output=DIR  Output directory (default: ./cards-output)
  --prefix=STR  Filename prefix (default: card)
  --gap=N       Gap between cards in pixels (default: 0)

Examples:
  node scripts/slice-card-grid.js moltybras-black.png
  node scripts/slice-card-grid.js moltybras-gold.png --prefix=gold --output=./gold-cards
  node scripts/slice-card-grid.js grid.png --cols=3 --rows=4 --gap=10
    `);
    process.exit(0);
  }

  const inputPath = args[0];

  if (!fs.existsSync(inputPath)) {
    console.error(`Error: File not found: ${inputPath}`);
    process.exit(1);
  }

  // Parse options
  const options = {};
  for (const arg of args.slice(1)) {
    const match = arg.match(/^--(\w+)=(.+)$/);
    if (match) {
      const [, key, value] = match;
      if (['cols', 'rows', 'gap'].includes(key)) {
        options[key] = parseInt(value, 10);
      } else if (key === 'output') {
        options.outputDir = value;
      } else {
        options[key] = value;
      }
    }
  }

  try {
    await sliceCardGrid(inputPath, options);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

main();
