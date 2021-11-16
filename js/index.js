$(function () {
    const menuBar = $(".menu-bar");
    const mobileNav = $(".header-mobile-nav");

    menuBar.on("click", () => {
        menuBar[0].classList.toggle("active");

        mobileNav[0].classList.toggle("in-view");
    });

    function scrollFunction(el, target, duration) {
        $(el).on("click", function () {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(target).offset().top
            }, duration);
        });
    }

    function scrollFunctionMobile(el, target, duration) {
        $(el).on("click", function () {
            menuBar[0].classList.remove("active");
            mobileNav[0].classList.remove("in-view");

            $([document.documentElement, document.body]).animate({
                scrollTop: $(target).offset().top
            }, duration);
        });
    }

    scrollFunction(".home", "#top", 2500); 
    
    scrollFunction(".footer__link", "#top", 2500);
    
    scrollFunction(".join-us", "#join-us", 2500);
    
    scrollFunction(".contact", "#contact", 2500);
    
    scrollFunction(".about", "#about", 2500);

    scrollFunctionMobile(".home", "#top", 2500);

    scrollFunctionMobile(".about-mobile", "#about", 2500);

    scrollFunctionMobile(".contact-mobile", "#contact", 2500);

    scrollFunctionMobile(".join-us-mobile", "#join-us", 2500);

    
});


