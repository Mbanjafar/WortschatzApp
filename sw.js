const CACHE = "wortschatz-en-de-v13";
const ASSETS = ["./", "./index.html", "./styles.css", "./data.js", "./app.js", "./icon.svg", "./icon-512.png", "./apple-touch-icon.png", "./manifest.webmanifest", "./assets/lektion-1-memories.png", "./assets/lektion-2-friendship.png", "./assets/lektion-3-strengths.png", "./assets/lektion-4-habits.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(fetch(event.request).then((response) => {
    const copy = response.clone();
    caches.open(CACHE).then((cache) => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match(event.request).then((cached) => cached || caches.match("./index.html"))));
});
