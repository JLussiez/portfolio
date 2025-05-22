document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('[data-carousel="slide"]');
    carousels.forEach(carousel => {
        const instance = new Flowbite.Carousel(carousel, {
            interval: 0,
            indicators: true,
            ride: false
        });
    });
});