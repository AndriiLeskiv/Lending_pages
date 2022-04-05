/* ================= MOBILE NAV ========================= */
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click', function () {
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
	document.body.classList.toggle('no-scroll');
});


let mySliderimg = new Swiper('.image-slider', {
    spaceBetween: 30,
    autoHeight: true,
    hashNavigation: {
        watchState: true
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },

	breakpoints:{
        320:{
            slidesPerView: 1
        },
        480:{
            slidesPerView: 2
        },
        992:{
            slidesPerView: 2
        },
    },
	watchOverflow: true,
    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    speed: 800,
});


let mySlidertxt = new Swiper('.text-slider', {
	watchOverflow: true,
    spaceBetween: 30,
autoHeight: true,
 breakpoints:{
        320:{
            slidesPerView: 1
        },
        480:{
            slidesPerView: 2
        },
        992:{
            slidesPerView: 2
        },
    }
});

mySliderimg.controller.control = mySlidertxt;
mySlidertxt.controller.control = mySliderimg;