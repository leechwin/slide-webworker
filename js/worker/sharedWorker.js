var globalConnections = 0;

onconnect = function ( event ) {
    var port = event.ports[0];
    globalConnections++;

    port.onmessage = function ( event ) {
        port. postMessage( globalConnections );
    }
}