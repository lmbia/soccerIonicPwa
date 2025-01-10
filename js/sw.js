// Chequeo si el browser puede usar Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(reg => {
      console.log("Service worker esta listo! ");
    });
} else {
  console.log("Service worker no soportado. ");
}

// Event Listener para Offline/ Online Status
window.addEventListener('offline', event => {
  console.log('Estamos offline 1');
  location.href = "offline.html";
});

window.addEventListener('online', event => {
  console.log('Estamos Online');
  location.href = "index.html";
  
});

if (!navigator.onLine) {
  console.log('Estamos offline 2');
  /* location.href = "offline.html"; */
} 




/* const isOnline = async () => {
      try {
        // El "cache no-store" es para que el fetch no guarde en cache el request
        // Si esto pasara, responderia el cache del browser y no el resultado de tener conexion
        const response = await fetch('https://code.jquery.com/jquery-3.6.0.slim.min.js&#39, {cache: "no-store"}');
          console.log(response.json());

          if (response.url == "http://127.0.0.1:5500/offline.html&quot"){
            return false;
          }

          return true;
        }
        catch (error) {
          console.error('offline and rejected', error)
          return false;
        }
      }

      isOnline().then(
        // Resolve, estamos online
        resp => {
          if (resp) {
            // Creo un evento
            var evento = new CustomEvent("estamoActivo", {});

            // Lo Disparo!
            document.dispatchEvent(evento);
          } else {
            document.querySelector('body').classList.add('offline');
          }
        },
        // Reject, estamos offline
        () => {
          document.querySelector('body').classList.add('offline');
        }
      );  */