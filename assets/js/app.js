$(function () {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffeset = $(window).scrollTop();


    /* Fixed header */
    checkScroll(scrollOffeset);

    $(window).on("scroll", function () {
        scrollOffeset = $(this).scrollTop();

        checkScroll(scrollOffeset);
    });

    function checkScroll() {

        if (scrollOffeset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smoth scroll */

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top - $('header').innerHeight();

        $("#nav a").removeClass("active");
        $this.addClass("active");

        if ($("#nav_toggle").hasClass("active")) {
            $(window).on("scroll", function () {
                $("#nav_toggle").removeClass("active");
                $("#nav").removeClass("active");
            });
        }

        $('.section__title').removeClass('bg-highlight');
        $(blockId + ' .section__title').addClass('bg-highlight');


        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);

    });

    /* Menu nav toggle */

    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /* Collapse */

    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data('collapse');

        $this.toggleClass("active");
    });

    /* Slider */

    $("[data-slider]").slick({

        infinite: true,
        fade: false,
        slidesToShow: 1,
        SlidesToScroll: 1
    });

});

/* $("#nav-toggle").on("click", function(event) {

        event.preventDefault();

        $(this).toggleClass("active");

        $("#nav").toggleClass("active").show();

    });

    // Hiding burger menu

    $("#nav a").on("click", function(event){

        event.preventDefault();

        $("#nav").hide();

        $("#nav-toggle").removeClass("active");

    });
+ в медиа запросы пропишите это правило
@media (min-width: 770px) {
    #nav {

        display: block !important;

    }

} */


/*

Вот так можно сделать задания из видео (скрыть меню при скроллинге, подстветка заголовка секций, при скроллинге учитывать пэддинг): 1. В JS изменить часть кода на такую:

   Smooth scroll 

  $("[data-scroll]").on("click", function(event) {

    event.preventDefault();
  
  
  
    var $this = $(this),
  
     blockId = $this.data('scroll'),
  
     blockOffset = $(blockId).offset().top - $('header').innerHeight();
  
  
  
    $("#nav a").removeClass('active')
  
    $this.addClass('active');
  
  
  
    if ($("#nav_toggle").hasClass('active')) {
  
     $(window).on("scroll", function() {
  
      $('#nav_toggle').removeClass("active");
  
      $("#nav").removeClass("active");
  
     });
  
    }
  
  
  
    $('.section__title').removeClass('bg-highlight')
  
    $(blockId + ' .section__title').addClass('bg-highlight')
  
  
  
    $("html, body").animate({
  
     scrollTop: blockOffset
  
    }, 500);
  
   });
  
  
  В CSS добавить в самый конец:
    JS Styles 
  
   header focus from menu 
  
  .bg-highlight {
  
   display: inline-block;
  
   padding: 0;
  
   position: relative;
  
   z-index: 0;
  
  }
  
  .bg-highlight:before {
  
      background-color: #fffe94;
  
      bottom: 67%;
  
      content: "";
  
      height: 15px;
  
      left: 0;
  
      position: absolute;
  
      width: 100%;
  
      z-index: -1;
  
  }

*/