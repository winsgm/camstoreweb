// Espera a que el DOM esté listo
$(document).ready(function () {
    // 1️⃣ Cargar el navbar automáticamente
    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-container").innerHTML = data;

            // 2️⃣ Inicializar el carrusel después de que se cargue el nav
            let currentIndex = 0;
            const images = $('.carrusel-nav .carrusel-inner img');
            const totalImages = images.length;

            function showNextImage() {
                currentIndex = (currentIndex + 1) % totalImages;
                const offset = -currentIndex * 100; 
                $('.carrusel-nav .carrusel-inner').css('transform', 'translateX(' + offset + '%)');
            }

            setInterval(showNextImage, 3000);
        })
        .catch(error => console.error("Error cargando el nav:", error));
});
