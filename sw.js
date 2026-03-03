const CACHE_NAME = 'mystic-tarot-v1';

const APP_SHELL = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './majorCards.js',
    './cupCards.js',
    './swordCards.js',
    './wandCards.js',
    './pentacleCards.js',
];

// 설치: 앱 셸 캐싱
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
    );
    self.skipWaiting();
});

// 활성화: 이전 캐시 삭제
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

// 요청 처리: 이미지는 캐시 우선, 나머지는 네트워크 우선
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    if (url.pathname.includes('/images/')) {
        // 이미지: 캐시에 있으면 캐시 반환, 없으면 네트워크에서 가져와 캐싱
        event.respondWith(
            caches.match(event.request).then(cached => {
                if (cached) return cached;
                return fetch(event.request).then(response => {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    return response;
                });
            })
        );
    } else {
        // 앱 셸: 네트워크 우선, 실패 시 캐시
        event.respondWith(
            fetch(event.request).catch(() => caches.match(event.request))
        );
    }
});
