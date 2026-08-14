// Service Worker لاستقبال إشعارات المكالمات

self.addEventListener('push', function(event) {
  let data = { title: '📞 اتصال جديد', body: 'تم اتصال بأحد الصنايعية' };
  try {
    if (event.data) data = event.data.json();
  } catch (e) {}

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: 'https://jinyryodan.github.io/hirafi-app/icon.png',
      badge: 'https://jinyryodan.github.io/hirafi-app/icon.png',
      dir: 'rtl',
      lang: 'ar'
    })
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://jinyryodan.github.io/hirafi-app/')
  );
});

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});
