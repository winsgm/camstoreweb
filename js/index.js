
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el carrusel SI existe en esta página
    if (document.querySelector('.carrusel-inner')) {
        initCarrusel();
    }
});

function initCarrusel() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carrusel-inner img');
    const totalImages = images.length;
    const carruselInner = document.querySelector('.carrusel-inner');

    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages; 
        const offset = -currentIndex * 100; 
        carruselInner.style.transform = `translateX(${offset}%)`;
        carruselInner.style.transition = 'transform 0.5s ease-in-out';
    }

    // Configurar el ancho del contenedor
    carruselInner.style.width = `${totalImages * 100}%`;
    images.forEach(img => {
        img.style.width = `${100 / totalImages}%`;
    });

    setInterval(showNextImage, 3000);
}
