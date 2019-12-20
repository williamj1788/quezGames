window.addEventListener("install", event => {
  event.waitUntil(caches.open())
});