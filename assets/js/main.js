
/*

Template Name:  example
Description:  example
Author: themexriver
Version: 1.0

====javascript indexing======

preloader


*/


(function ($) {
    "use strict";
    
    /*
    preloader
    ====start====
    */
    function preloader() {
        $('#preloader').delay(0).fadeOut();
    };
    $(window).on('load', function () {
        preloader();
    });
    /*
    preloder
    ====end====
    */
    
    /*
    mobile-menu
    ====start====
    */
    $('.open_mobile_menu').on("click", function() {
        $('.mobile_menu_wrap').toggleClass("mobile_menu_on");
    });
    $('.open_mobile_menu').on('click', function () {
        $('body').toggleClass('mobile_menu_overlay_on');
    });
    if($('.mobile_menu li.dropdown ul').length){
        $('.mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>');
        $('.mobile_menu li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
        });
    }
    $(".dropdown-btn").on("click", function () {
        $(this).toggleClass("toggle-open");
    });
    /*
    mobile-menu
    ====end====
    */
    
    /*
    sticky-header
    ====start====
    */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300){
        $('.header_sticky').addClass('sticky');
        }
        else{
        $('.header_sticky').removeClass('sticky');
        }
    });
    /*
    sticky-header
    ====end====
    */
    
    
    /*
    search-popup
    ====start====
    */
    
    $('.gto_h1_search_btn_1').on('click', function() {
        $('.overlay, .search_1_popup_active').addClass('active');
    });
    $('.overlay, .gto_search_1_popup_close').on('click', function() {
        $('.search_1_popup_active').removeClass('active');
        $('.overlay').removeClass('active');
    })
    /*
    search-popup
    ====end====
    */
    
    /*
    cart-popup
    ====start====
    */
    $('.header-cart-btn').on('click', function () {
        $('.cart_sidebar').addClass('active');
        $('.offcanvas-overlay').addClass('active');
    });
    
    $('.cart_close_btn, .offcanvas-overlay').on('click', function () {
        $('.cart_sidebar').removeClass('active');
        $('.offcanvas-overlay').removeClass('active');
    });
    
    
    /*
    cart-popup
    ====end====
    */
    
    
    
    
// hero-9-slider-START
function sliderActive_hero3() {
    /*------------------------------------
    Slider
    --------------------------------------*/
    if (jQuery(".gto_hero_3_active").length > 0) {
        let sliderActive1 = '.gto_hero_3_active';
        let sliderInit1 = new Swiper(sliderActive1, {
            // Optional parameters
            slidesPerView: 1,
            // paginationClickable: true,
            loop: true,
            effect: "fade",
            keyboard: true,
            // cssMode: true,
            // mousewheel: true,
            autoplay: {
                delay: 8000,
                },
                pagination: {
                el: ".gto_hero_3_pagination",
                type: "fraction",
                },
                navigation: {
                nextEl: ".gto_hero_3_next",
                prevEl: ".gto_hero_3_prev",
                },
            

        });

        function animated_swiper(selector, init) {
            let animated = function animated() {
                $(selector + ' [data-animation]').each(function () {
                    let anim = $(this).data('animation');
                    let delay = $(this).data('delay');
                    let duration = $(this).data('duration');

                    $(this).removeClass('anim' + anim)
                        .addClass(anim + ' animated')
                        .css({
                            webkitAnimationDelay: delay,
                            animationDelay: delay,
                            webkitAnimationDuration: duration,
                            animationDuration: duration
                        })
                        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                            $(this).removeClass(anim + ' animated');
                        });
                });
            };
            animated();
            // Make animated when slide change
            init.on('slideChange', function () {
                $(sliderActive1 + ' [data-animation]').removeClass('animated');
            });
            init.on('slideChange', animated);
        }

        animated_swiper(sliderActive1, sliderInit1);
    }}

sliderActive_hero3();
// hero-9-slider-END



/*
brand-logo-1
====start====
*/

    var dfasdfdf = new Swiper(".txa_brand_logo_1_active", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        rtl: true,
        autoplay: {     //add
            delay: 5000,   //add
        },   
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            320: {
            slidesPerView: 2,
          },
            576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 6,
          },
        },
      });
/*
brand-logo-1
====end====
*/









    
    
    
    /*
    faq-active-class
    ====start====
    */
    $(document).on('click', '.accordion-item', function(){
        $(this).addClass('faq_bg').siblings().removeClass('faq_bg')
    })
    /*
    faq-active-class
    ====end====
    */
    
    /*
    hero-2-video-active
    ====start====
    */
    $('.plyvideo').on("click", function() {
        $('.gto-hero-2-video-item, .btn-position').toggleClass("active");
    });
    /*
    hero-2-video-active
    ====end====
    */
    
    
    /*
    progress-2-active-class
    ====start====
    */
    $('#pills-home-tab').hover(function() {
        $(this).tab('show');
    });
    $('#pills-contact-tab').hover(function() {
        $(this).tab('show');
    });
    $('#pills-profile-tab').hover(function() {
        $(this).tab('show');
    });
    $('#pills-contact-tab-2').hover(function() {
        $(this).tab('show');
    });
    /*
    progress-2-active-class
    ====end====
    */
    
    /*
    team-2-active-class
    ====start====
    */
    $(".gto-team-2-member").on("mouseover", function(){
        var current_class = document.getElementsByClassName("gto-team-2-member active");
        current_class[0].className = current_class[0].className.replace(" active", "");
        this.className += " active";
      });
    /*
    team-2-active-class
    ====end====
    */
    
    /*
    services-3-hover-active
    ====start====
    */
    $(".gto-testimonial-3-item").on("mouseover", function(){
        var current_class = document.getElementsByClassName("gto-testimonial-3-item active");
        current_class[0].className = current_class[0].className.replace(" active", "");
        this.className += " active";
      });
    /*
    services-3-hover-active
    ====end====
    */
    
    /*
    project-page-2
    ====start====
    */
    function enableMasonry2  () {
        // ----------------------------- isotop gallery
    
        $(window).on("load", function () {
          if ($(".project-filter-item-wrap").length) {
            var $grid = $(".project-filter-item-wrap").isotope({
              // options
              itemSelector: ".isotop-item",
              percentPosition: true,
              masonry: {
                // use element for option
                columnWidth: 1,
              },
            });
    
            // filter items on button click
            $(".project-filter-btn").on("click", "li", function () {
              var filterValue = $(this).attr("data-filter");
              $grid.isotope({ filter: filterValue });
            });
    
            // change is-checked class on buttons
            $(".project-filter-btn").each(function (i, buttonGroup) {
              var $buttonGroup = $(buttonGroup);
              $buttonGroup.on("click", "li", function () {
                $buttonGroup.find(".is-checked").removeClass("is-checked");
                $(this).addClass("is-checked");
              });
            });
          }
        });
    }
    
    enableMasonry2();
    /*
    project-page-2
    ====end====
    */
    
    
    /*
    odomater-activition
    ====start====
    */
    jQuery('.odometer').appear(function (e) {
        var odo = jQuery(".odometer");
        odo.each(function () {
            var countNumber = jQuery(this).attr("data-count");
            jQuery(this).html(countNumber);
        });
    });
    /*
    odomater-activition
    ====end====
    */
    
    
    /*
    knob-activition
    ====start====
    */
    if (typeof ($.fn.knob) != 'undefined') {
        $('.knob').each(function () {
            var $this = $(this),
                knobVal = $this.attr('data-rel');
    
            $this.knob({
                'draw': function () {
                    $(this.i).val(this.cv + '%')
                }
            });
    
            $this.appear(function () {
                $({
                    value: 0
                }).animate({
                    value: knobVal
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.val(Math.ceil(this.value)).trigger('change');
                    }
                });
            }, {
                accX: 0,
                accY: -150
            });
        });
    }
    /*
    knob-activition
    ====end====
    */
    
    
    /*
    popup-video-activition
    ====start====
    */
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });
    /*
    popup-video-activition
    ====end====
    */
    
    /*
    popup-img-activition
    ====start====
    */
    $('.popup_img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
        },
    });
    /*
    popup-img-activition
    ====end====
    */
    
    /*
    counter-activition
    ====start====
    */
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    /*
    counter-activition
    ====end====
    */
    
    /*
    data-bg-activition
    ====start====
    */
    $("[data-background]").each(function(){
        $(this).css("background-image","url("+$(this).attr("data-background") + ") ")
    })
    /*
    data-bg-activition
    ====end====
    */
    
    /*
    data-width-activition
    ====start====
    */
    $("[data-width]").each(function(){
        $(this).css("width",$(this).attr("data-width"))
    })
    /*
    data-width-activition
    ====end====
    */
    
    /*
    data-bg-color-activition
    ====start====
    */
    $("[data-bg-color]").each(function(){
        $(this).css("background-color",$(this).attr("data-bg-color"))
    })
    /*
    data-bg-color-activition
    ====end====
    */
    
    
    
    /*
    add-class
    ====start====
    */
    
    const boxes = gsap.utils.toArray('.tx-animation-style1,.asx-class,.h1-animation');
    boxes.forEach(img => {
        gsap.to(img, {
            scrollTrigger: {
                trigger: img,
                scrub: 1,
                start: "top 80%",
                end: "bottom bottom",
                toggleClass: "active",
                toggleActions: "play none none reverse",
                once: true,
            }
        });
    });
    
    /*
    add-class
    ====end====
    */
    
    /*
    gsap-animation
    ====start====
    */
    
    gsap.registerPlugin(ScrollTrigger);
    
    
    gsap.utils.toArray('.gto-hero-2-video-item ').forEach((el, index) => { 
      let tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: 1,
          start: "top 90%",
          end: "buttom 50%",
          toggleActions: "play none none reverse",
           markers: false
        }
      })
      
      tl1
      .set(el, {transformOrigin: 'center center'})
      .from(el, { opacity: 1, scale: .2, y: "+=100"}, {opacity: 1, scale: 1, y: 0, duration: 1, immediateRender: false})
    })
    
    gsap.utils.toArray(' .asslideup').forEach((el, index) => { 
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: 1,
          start: "top 90%",
          end: "top 70%",
          toggleActions: "play none none reverse",
           markers: false
        }
      })
      
      tl2
      .set(el, {transformOrigin: 'center center'})
      .from(el, { opacity: 1, scale: 0, y: "+=100"}, {opacity: 1, scale: 1, y: 0, duration: 1, immediateRender: false})
    })
    
    gsap.utils.toArray(' .asslideupcta').forEach((el, index) => { 
      let tlcta = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: 1,
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none reverse",
           markers: false
        }
      })
      
      tlcta
      .set(el, {transformOrigin: 'center center'})
      .from(el, { opacity: 1,  y: "+=300"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
    })
    
    
    // For each images with class "animate-image" on page
    gsap.utils.toArray('.animate-image').forEach((el, index) => { 
        let tl3 = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "buttom 40%",
            toggleActions: "play none none reverse",
             markers: false
          }
        })
        
        tl3
        .set(el, {transformOrigin: 'center center'})
        .from(el, { opacity: 0, scale: 0.8, y: "+=100"}, {opacity: 1, scale: 1, y: 0, duration: 1, immediateRender: false})
      })
    
    // For each images with class "animate-image" on page
    gsap.utils.toArray('.asa3bg').forEach((el, index) => { 
        let vasa3bg = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "buttom 40%",
            toggleActions: "play none none reverse",
             markers: false
          }
        })
        
        vasa3bg
        .set(el, {transformOrigin: 'center center'})
        .from(el, { opacity: 1, scale: 0.2, y: "+=100"}, {opacity: 1, scale: 1, y: 0, duration: 1, immediateRender: false})
      })
    
    // For each images with class "animate-image" on page
    gsap.utils.toArray('.ass3bgsl').forEach((el, index) => { 
        let vass3bgsl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            scrub: 1,
            start: "top 95%",
            end: "top 70%",
            toggleActions: "play none none reverse",
             markers: false
          }
        })
        
        .fromTo(el, {
            x: -200,
            duration: 1,
          }, {
            x: 0,
          })
      })
    
    // For each images with class "animate-image" on page
    gsap.utils.toArray('.ass3bgsr').forEach((el, index) => { 
        let vass3bgsr = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            scrub: 1,
            start: "top 95%",
            end: "top 70%",
            toggleActions: "play none none reverse",
             markers: false
          }
        })
        
        vass3bgsr
        .fromTo(el, {
            x: 200,
            duration: 1,
          }, {
            x: 0,
          })
      })
    
    gsap.utils.toArray('.ass3vrd').forEach((el, index) => { 
        let vass3vrd = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            scrub: 1,
            start: "top 95%",
            end: "top 5%",
            toggleActions: "play none none reverse",
             markers: false
          }
        })
        
        vass3vrd
        .to(el, {
            rotateZ: 360,
            duration: 3,
          })
      })
    
    gsap.utils.toArray('.ast3vrd').forEach((el, index) => { 
        let vast3vrd = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            // scrub: 1,
            start: "top 95%",
            end: "top 5%",
            toggleActions: "play none none reverse",
             markers: false
          }
        })
        
        vast3vrd
        .fromTo(el, {
            rotateZ: 90,
            duration: 2,
          }, {
            rotateZ: 0,
          })
      })
    
    
    gsap.utils.toArray('.ascta3y').forEach((el, index) => { 
        let vascta3y = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            scrub: 1,
            start: "top 95%",
            end: "top 5%",
            toggleActions: "play none none reverse",
             markers: false
          }
        })
        
        vascta3y
        .fromTo(el, {
            y: 150,
            duration: 2,
          }, {
            y: 0,
          })
      })
    
    gsap.utils.toArray('.ascta3y').forEach((el, index) => { 
        let vascta3y = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            scrub: 1,
            start: "top 95%",
            end: "top 5%",
            toggleActions: "play none none reverse",
             markers: false
          }
        })
        
        vascta3y
        .fromTo(el, {
            y: 150,
            duration: 2,
          }, {
            y: 0,
          })
      })
    
    //   home-4
    
      window.onload = function() {
    
        var timeline = new TimelineMax();
        timeline.
            
          from(".hero-4-img", 1, {yPercent:100 , ease: "power2.out", duration:500 }, 0  )
        
      }
    
    
      gsap.utils.toArray('.news5-img').forEach((el, index) => { 
        let vascta3y = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            // scrub: 1,
            start: "top 90%",
            end: "top 50%",
            toggleActions: "play none none reverse",
             markers: false
          }
        })
        
        vascta3y
        .fromTo(el, {
            yPercent:100,
            duration: 1,
            ease: "power2.out",
          }, {
            yPercent:0,
            ease: "power2.out",
            duration: 1,
          })
      })
    
    
      gsap.utils.toArray('.va4bgimg').forEach((el, index) => { 
        let va4bgimg = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            scrub: 1,
            start: "top 95%",
            end: "top 5%",
            toggleActions: "play none none reverse",
             markers: false
          }
        })
        
        va4bgimg
        .fromTo(el, {
            rotateZ: 360,
            duration: 2,
          }, {
            rotateZ: 0,
          })
      })
    
      if (screen.width < 1199 ) {
        
        
    }
    
    if ($(window).width() > 1199) {
        ScrollTrigger.create({
            trigger:".gto-blog-4-area",
            start:"top top",
            end:"bottom bottom",
            pin:".gto-blog-4-content-wrap",
        })
     }
    
    
    
    /*
    gsap-animation
    ====end====
    */
    
    /*
    mouse-move-animation
    ====start====
    */
    
    document.addEventListener("mousemove" , parallax);
    function parallax(e){
    
        document.querySelectorAll(".object").forEach(function(move){
    
            var moving_value = move.getAttribute("data-value");
            var x = (e.clientX * moving_value) /250;
            var y = (e.clientY * moving_value) /250;
    
            move.style.transform = "translateX(" + x + "px) translateY(" + y +"px)";
        })
    
    }
    
    /*
    mouse-move-animation
    ====end====
    */
    
    /*
    splitting-text
    ====start====
    */

    /*
    splitting-text
    =====end==== 
    */
    
    /*
    nice-selector-activiton
    ====start====
    */
    
    // $('.nice-select select').niceSelect();
    /*
    nice-selector-activiton
    =====end==== 
    */
    
    
    /*
    mouse-over-scale
    =====start=====
    */
    
    // $('.tilt_scale').tilt({
    //     glare: true,
    //     maxGlare: .5
    // })
    
    /*
    mouse-over-scale
    =====end=====
    */
    
    
    /*
    back-to-top
    =====start==== */
    var backtotop = $('.scroll-top');
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
        backtotop.addClass('show');
        } else {
        backtotop.removeClass('show');
        }
    });
    
    backtotop.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '700');
    });
    /*
    back-to-top
    =====end==== 
    */
    
    /*
    wow-activition
    =====start==== 
    */
    new WOW().init();
    /*
    wow-activition
    =====end==== 
    */
    
    
    })(jQuery);