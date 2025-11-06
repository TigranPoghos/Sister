document.addEventListener("DOMContentLoaded", function(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper__button-next",
            prevEl: ".swiper__button-prev",
        },
    });



    const burger__button = document.querySelector('.burger__button')
    const burger__menu = document.querySelector('.burger__menu')
    const opacite = document.querySelector('.opacite')
    const body = document.querySelector('body')
    burger__button.addEventListener('click', function(){
        burger__menu.classList.toggle('active')
        opacite.classList.toggle('active')
        body.classList.toggle('active')
    })
    const burger__close = document.querySelector('.burger__close')
    burger__close.addEventListener('click', function(){
        burger__menu.classList.toggle('active')
        opacite.classList.toggle('active')
        body.classList.toggle('active')
    })
    document.addEventListener('click', (e) => {
        const clickBurger = e.composedPath().includes(burger__menu)
        const clickBurgerButton = e.composedPath().includes(burger__button)

        if ( !clickBurger && !clickBurgerButton ) {
            burger__menu.classList.remove('active')
            opacite.classList.remove('active')
            body.classList.remove('active')
        }
    })





    const menuButtons = document.querySelectorAll('.header__menu-item');
    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionName = button.textContent.trim().toLowerCase();
            const target = document.getElementById(sectionName);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            if (burger__menu.classList.contains('active')) {
                burger__menu.classList.remove('active');
                opacite.classList.remove('active')
                body.classList.remove('active')
            }
        });
    });



})