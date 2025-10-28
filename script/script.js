document.addEventListener("DOMContentLoaded", function(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper__button-next",
            prevEl: ".swiper__button-prev",
        },
    });
})