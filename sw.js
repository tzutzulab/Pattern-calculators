const CACHE_NAME = 'pattern-calc-v1';
const ASSETS = [
  'index.html',
  '女子原型計算機.html',
  '男子原型計算機.html',
  '兒童原型計算機.html',
  '基本長褲計算機.html',
  '基本窄裙計算機.html',
  'icon.png'
];

// 安裝 Service Worker 並快取檔案
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// 攔截請求，優先從快取讀取
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});