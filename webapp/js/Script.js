// Horientación horizontal
if (screen.orientation && screen.orientation.lock) {
    // Bloquear la orientación en horizontal
    screen.orientation.lock('landscape').then(function() {
      // La orientación se ha bloqueado con éxito
    }).catch(function(error) {
      // No se pudo bloquear la orientación
      console.error('Error al bloquear la orientación:', error);
    });
  }