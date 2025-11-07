document.addEventListener("DOMContentLoaded", function(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 'auto',
        spaceBetween: 15,
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




    gsap.registerPlugin(ScrollTrigger)

    gsap.utils.toArray(".anim").forEach(elem => {
        gsap.fromTo(elem, 
            { opacity: 0, y: 20 }, 
            { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power2.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 80%",
                    toggleActions: "play none none none",
                    scrub: false,
                }
            }
        );
    });

    gsap.to('.info__line', {
        width: '100%',
        duration: 1,
    })

    gsap.to('.service__bottom-line', {
        width: '100%',
        duration: 1,
        scrollTrigger: {
            trigger: '.service__bottom-title',
            start: '100% bottom',
            scrub: false,
        }
    })

    gsap.from('.portfolio__title-star', {
        rotateY: 180,
        duration: 1,
        scrollTrigger: {
            trigger: '.portfolio__title-star',
            start: '100% bottom',
            scrub: false,
        }
    })

    gsap.utils.toArray('.price__list-item svg').forEach(svg => {
        gsap.from(svg, {
            scrollTrigger: {
                trigger: svg,
                start: 'bottom 100%',
                toggleActions: 'play none none reverse', 
            },
            rotate: 180,
            duration: 1,
        });
    });

    gsap.utils.toArray('.price__list-item').forEach(item => {
        gsap.fromTo(item, 
            { opacity: 0, y: 20 }, 
        { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            scrollTrigger: {
                trigger: item,
                start: 'bottom 100%',
                toggleActions: 'play none none reverse', 
            },
        });
    });


})