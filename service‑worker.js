// service-worker.js
self.addEventListener('install', function() {
    console.log('Install!');
  });
  self.addEventListener("activate", event => {
    console.log('Activate!');
  });
  self.addEventListener('fetch', function(event) {
    console.log('Fetch!', event.request);
  });


  //Add push notifications
  navigator.serviceWorker.ready.then(function(registration) {
    if (!registration.pushManager) {
      alert('No push notifications support.');
      return false;
    }
    //To subscribe `push notification` from push manager
    registration.pushManager.subscribe({
    userVisibleOnly: true //Always show notification when received
    })
    .then(function (subscription) {
    console.log('Subscribed.');
    })
    .catch(function (error) {
    console.log('Subscription error: ', error);
    });
  })


  //Configure the install prompt
  window.addEventListener('beforeinstallprompt', e => {
    console.log('beforeinstallprompt Event fired');
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = e;
    return false;
    });
  // When you want to trigger prompt:
  this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice.then(choice => {
    console.log(choice);
    });
  this.deferredPrompt = null;