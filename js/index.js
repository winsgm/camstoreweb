$(document).ready(function () {
    // Cargar navbar
    fetch("nav.html")
        .then(response => {
            if (!response.ok) throw new Error("No se pudo cargar nav.html");
            return response.text();
        })
        .then(data => {
            document.getElementById("nav-container").innerHTML = data;

            // Inicializar carrusel
            const images = $('.carrusel-nav .carrusel-inner img');
            const totalImages = images.length;

            if (totalImages > 0) {
                let currentIndex = 0;

                function showNextImage() {
                    currentIndex = (currentIndex + 1) % totalImages;
                    const offset = -currentIndex * 100;
                    $('.carrusel-nav .carrusel-inner').css('transform', 'translateX(' + offset + '%)');
                }

                setInterval(showNextImage, 3000);
            }
        })
        .catch(error => console.error("Error cargando el nav:", error));
});
