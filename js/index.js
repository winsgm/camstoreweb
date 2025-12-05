$(document).ready(function () {
    let currentIndex = 0;
    const images = $('.carrusel-nav .carrusel-inner img');
    const totalImages = images.length;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages; 
        const offset = -currentIndex * 100; 
        $('.carrusel-nav .carrusel-inner').css('transform', 'translateX(' + offset + '%)');
    }

    setInterval(showNextImage, 3000); 
});
