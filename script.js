let currentIndex = 0; // Índice de la imagen activa
const items = document.querySelectorAll('.carousel-item'); // Selecciona todas las imágenes

function showImage(index) {
    items.forEach(item => item.classList.remove('active')); // Oculta todas las imágenes
    items[index].classList.add('active'); // Muestra la imagen activa
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    } else if (currentIndex >= items.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

// Cambio automático cada 5 segundos
setInterval(() => changeImage(1), 5000);

// Mostrar la primera imagen al cargar
showImage(currentIndex);


