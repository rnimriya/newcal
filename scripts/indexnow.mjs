#!/usr/bin/env node
/**
 * Submit all calculator URLs to IndexNow API for instant indexing.
 * Run after a production deployment: node scripts/indexnow.mjs
 *
 * Set INDEXNOW_KEY env var (also create /public/<key>.txt with the key as content).
 */

const KEY = process.env.INDEXNOW_KEY || 'YOUR_INDEXNOW_KEY_HERE';
const HOST = 'calcunit.net';
const BASE = `https://${HOST}`;

// Import registry (read from the built output or hardcode a sample)
// For now, manually list the top pages. After build, this list auto-updates.
const STATIC_URLS = [
  `${BASE}/`,
  `${BASE}/categories`,
  `${BASE}/blog`,
  `${BASE}/about`,
  `${BASE}/math`,
  `${BASE}/finance`,
  `${BASE}/health`,
  `${BASE}/converters`,
  `${BASE}/physics`,
  `${BASE}/algebra`,
  `${BASE}/statistics`,
  `${BASE}/time`,
  `${BASE}/loans`,
  `${BASE}/retirement`,
  `${BASE}/stocks`,
  `${BASE}/credit`,
  // Top calculators
  `${BASE}/finance/tip-calculator`,
  `${BASE}/health/bac-calculator`,
  `${BASE}/finance/inflation-calculator`,
  `${BASE}/finance/paycheck-calculator`,
  `${BASE}/finance/fuel-cost-calculator`,
  `${BASE}/finance/electricity-bill-calculator`,
  `${BASE}/health/ovulation-calculator`,
  `${BASE}/health/dog-age-calculator`,
  `${BASE}/converters/aspect-ratio-calculator`,
  `${BASE}/health/love-calculator`,
  `${BASE}/time/time-zone-calculator`,
  `${BASE}/finance/net-worth-calculator`,
  `${BASE}/finance/compound-interest-calculator`,
  `${BASE}/health/bmi-calculator`,
  `${BASE}/finance/simple-interest-calculator`,
  `${BASE}/finance/mortgage-calculator`,
  `${BASE}/finance/roi-calculator`,
];

async function submitToIndexNow(urls) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `${BASE}/${KEY}.txt`,
    urlList: urls,
  };

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });

  console.log(`IndexNow response: ${res.status} ${res.statusText}`);
  if (res.status === 200) console.log('✅ URLs submitted successfully');
  else if (res.status === 202) console.log('✅ URLs accepted (will be processed)');
  else {
    const text = await res.text().catch(() => '');
    console.error('❌ Error:', text);
  }
}

// Split into batches of 100 (IndexNow limit)
const BATCH_SIZE = 100;
for (let i = 0; i < STATIC_URLS.length; i += BATCH_SIZE) {
  await submitToIndexNow(STATIC_URLS.slice(i, i + BATCH_SIZE));
}
