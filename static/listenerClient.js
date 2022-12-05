document.addEventListener('DOMContentLoaded', () => {
    var socket = new WebSocket('ws://localhost:8000/ws/Flight_visualization/');

    socket.onmessage = function (e) {
        var djangoData = JSON.parse(e.data);
        console.log(djangoData);

        document.querySelector('#listener').innerText = JSON.stringify(djangoData.value);
    };
    socket.onerror = function (error) {
        alert(`[error]`);
    };
});