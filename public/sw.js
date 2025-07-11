// public/sw.js
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("✅ Service Worker activated");
});

self.addEventListener("fetch", (event) => {
  // You can cache files here if needed
});
