document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 4000,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });
});