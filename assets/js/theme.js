function init() {

    // swiperOne
    function initswiperOne() {
        new Swiper("#swiper_one", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            rewind: true,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1300: {
                    slidesPerView: 3,
                },
            },
        });
    };
    initswiperOne();

    // swiperTwo
    function initswiperTwo() {
        new Swiper("#swiper_Two", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            rewind: true,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1300: {
                    slidesPerView: 3,
                },
            },
        });
    };
    initswiperTwo();

    // swiperThree
    function initswiperThree() {
        new Swiper("#swiper_Three", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            rewind: true,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
            },
        });
    };
    initswiperThree();

    // swiperFour
    function initswiperFour() {
        new Swiper("#swiper_Four", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            rewind: true,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
            },
        });
    };
    initswiperFour();

    // swiperFive
    function initswiperFive() {
        new Swiper("#swiper_Five", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            rewind: true,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
            },
        });
    };
    initswiperFive();

};

init();


