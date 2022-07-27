$(function() {

    var header = $("#header"),
        introH = $("#hero").innerHeight(),
        scrollOffset = $(window).scrollTop();


    // Fixed Header
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {        
        
        if(scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
    
    // Smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId =$this.data('scroll'),
            blockOffset = $(blockId).offset().top;
        
        $("#nav a").removeClass("active");
        $this.addClass("active");

        $('html, body').animate({
            scrollTop: blockOffset
        }, 500);
    });

    // Slider
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});

//Buy now

(() => {
    const refs = {
      openBuymodalBtn: document.querySelector('[data-buy-open]'),
      closeBuymodalBtn: document.querySelector('[data-buy-close]'),
      buymodal: document.querySelector('[data-buy]'),
      body: document.querySelector('body'),
    };
  
    refs.openBuymodalBtn.addEventListener('click', toggleBuymodal);
    refs.closeBuymodalBtn.addEventListener('click', toggleBuymodal);
  
    function toggleBuymodal() {
      refs.buymodal.classList.toggle('is-hidden');
      refs.body.classList.toggle('no-scroll');
    }
  })();