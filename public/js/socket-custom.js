var socket = io();

socket.on('connect', function() {
    console.log('Conectado al Servidor!.');
});

// Los on, son para utilizados para escuchar
socket.on('disconnect', function() {
    console.log('Se perdió la conexión con el Servidor!.');
});

// Los emit, son utilizados para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Anderson',
    mensaje: 'Hola Mundo!'
}, function(resp) {
    console.log('Respuesta Server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});