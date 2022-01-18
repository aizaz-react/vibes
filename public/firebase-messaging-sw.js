importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then(function (registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function (err) {
      console.log("Service worker registration failed, error:", err);
    });
}

firebase.initializeApp({
  messagingSenderId: "96215168760",
});

const initMessaging = firebase.messaging();

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true,
    })
    .then((windowClients) => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification("my notification title");
    });
  return promiseChain;
});

self.addEventListener("notificationclick", function (event) {
  console.log(event);
});
