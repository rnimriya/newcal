/**
 * CalcUnit Service Worker — Cache-first strategy for app shell + schemas.
 * Network-first for Next.js RSC data and API routes.
 */

const CACHE_VERSION = "calchub-v1";
const APP_SHELL_CACHE = `${CACHE_VERSION}-shell`;
const CALC_DATA_CACHE = `${CACHE_VERSION}-data`;

// Resources to pre-cache on install (app shell)
const PRECACHE_URLS = [
  "/",
  "/categories",
  "/saved",
  "/settings",
  "/manifest.json",
];

// ─── Install: pre-cache app shell ─────────────────────────────────────────────
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(APP_SHELL_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ─── Activate: clean up old caches ────────────────────────────────────────────
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k.startsWith("calchub-") && k !== APP_SHELL_CACHE && k !== CALC_DATA_CACHE)
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

// ─── Fetch: routing strategy ───────────────────────────────────────────────────
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and browser extension requests
  if (request.method !== "GET") return;
  if (!url.origin.startsWith("http")) return;

  // Next.js internal routes — network only
  if (
    url.pathname.startsWith("/_next/") ||
    url.pathname.startsWith("/api/")
  ) {
    event.respondWith(networkFirst(request, CALC_DATA_CACHE));
    return;
  }

  // Static assets (_next/static) — cache first
  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(cacheFirst(request, APP_SHELL_CACHE));
    return;
  }

  // Calculator pages and shell routes — stale-while-revalidate
  event.respondWith(staleWhileRevalidate(request, APP_SHELL_CACHE));
});

// ─── Strategy helpers ──────────────────────────────────────────────────────────

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) cache.put(request, response.clone());
  return response;
}

async function networkFirst(request, cacheName) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    return cached ?? new Response("Offline", { status: 503 });
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  const fetchPromise = fetch(request)
    .then((response) => {
      if (response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => null);

  return cached ?? (await fetchPromise) ?? new Response("Offline", { status: 503 });
}
