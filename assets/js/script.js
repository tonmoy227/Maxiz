/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var TXT_Custom_JS = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {

				this.preloader();
				this.BackgroundImage();
				this.Animation();
				this.StickyHeader();
				this.MobileMenu();
				this.scrollTop();
				this.CounterUp();
				this.searchPopUp();
				this.ServiceActive();
				this.MasonryGridItem();
				this.SponsorSlider3();
				this.ProjectSliderthree();
				this.TextScroller();
				this.MainSliderOne();
				this.MainSliderThree();
				this.SponsorScroll();
				this.ProjectSliderFour();
				this.TXTMServiceSlider();
				this.TXTMTeamSlider();
				this.TXTMPriceSlider();
				this.TestimonialSlideFour();
				this.TestimonialSliderOne();
				
				


				
				
			},
			preloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
				
			},
			
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
				if ($('.scene').length > 0 ) {
					$('.scene').parallax({
						scalarX: 10.0,
						scalarY: 10.0,
					}); 
				};
			},
			Animation: function (){
				if($('.wow').length){
					var wow = new WOW(
					{
						boxClass:     'wow',
						animateClass: 'animated',
						offset:       0,
						mobile:       true,
						live:         true
					}
					);
					wow.init();
				};
				jQuery(document).ready(function() {
					var st = jQuery(".tx-split-text");
					if(st.length == 0) return;
					gsap.registerPlugin(SplitText);
					st.each(function(index, el) {
						el.split = new SplitText(el, { 
							type: "lines,words,chars",
							linesClass: "split-line"
						});
						gsap.set(el, { perspective: 400 });
						if( jQuery(el).hasClass('split-in-fade') ){
							gsap.set(el.split.chars, {
								opacity: 0,
								ease: "Back.easeOut",
							});
						}
						if( jQuery(el).hasClass('split-in-right') ){
							gsap.set(el.split.chars, {
								opacity: 1,
								x: "100",
								color:'#bee041',
								ease: "Back.easeOut",
							});
						}
						if( jQuery(el).hasClass('split-in-right-2') ){
							gsap.set(el.split.chars, {
								opacity: 1,
								x: "100",
								color:'#00DDD0',
								ease: "Back.easeOut",
							});
						}
						if( jQuery(el).hasClass('split-in-left') ){
							gsap.set(el.split.chars, {
								opacity: 0,
								x: "-50",
								ease: "circ.out",
							});
						}
						if( jQuery(el).hasClass('split-in-up') ){
							gsap.set(el.split.chars, {
								y: "80",
								ease: "circ.out",
							});
						}
						if( jQuery(el).hasClass('split-in-down') ){
							gsap.set(el.split.chars, {
								opacity: 0,
								y: "-80",
								ease: "circ.out",
							});
						}
						if( jQuery(el).hasClass('split-in-rotate') ){
							gsap.set(el.split.chars, {
								opacity: 1,
								rotateX: "50deg",
								ease: "circ.out",
								color:'#A249ED',
								ease: "Back.easeOut",

							});
						}
						if( jQuery(el).hasClass('split-in-scale') ){
							gsap.set(el.split.chars, {
								opacity: 0,
								scale: "0.5",
								ease: "circ.out",
							});
						}
						if( jQuery(el).hasClass('split-in-fade') ){
							gsap.set(el.split.chars, {
								opacity: 0,
								duration: 0.2, 
								ease: "power1.out",
								stagger: { amount: 0.8 },
							});
						}
						el.anim = gsap.to(el.split.chars, {
							scrollTrigger: {
								trigger: el,
								start: "top 90%",
							},
							x: "0",
							y: "0",
							rotateX: "0",
							color: 'inherit',
							webkitTextStroke: "0px white",
							scale: 1,
							opacity: 1,
							duration: 1, 
							stagger: 0.02,
						});
					});
				});
				gsap.utils.toArray(' .appear_left').forEach((el, index) => { 
					let tlcta = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							scrub: 2,
							start: "top 90%",
							end: "top 70%",
							toggleActions: "play none none reverse",
							markers: false
						}
					})

					tlcta
					.set(el, {transformOrigin: 'center center'})
					.from(el, { opacity: 1,  x: "-=300"}, {opacity: 1, x: 0, duration: 1, immediateRender: false})
				})
				gsap.utils.toArray(' .appear_right').forEach((el, index) => { 
					let tlcta = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							scrub: 2,
							start: "top 90%",
							end: "top 70%",
							toggleActions: "play none none reverse",
							markers: false
						}
					})

					tlcta
					.set(el, {transformOrigin: 'center center'})
					.from(el, { opacity: 1,  x: "+=300"}, {opacity: 1, x: 0, duration: 1, immediateRender: false})
				})
				gsap.utils.toArray(' .appear_top').forEach((el, index) => { 
					let tlcta = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							scrub: 2,
							start: "top 90%",
							end: "top 70%",
							toggleActions: "play none none reverse",
							markers: false
						}
					})

					tlcta
					.set(el, {transformOrigin: 'center center'})
					.from(el, { opacity: 1,  y: "+=300"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
				})
				gsap.utils.toArray(' .appear_bottom').forEach((el, index) => { 
					let tlcta = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							scrub: 2,
							start: "top 90%",
							end: "top 70%",
							toggleActions: "play none none reverse",
							markers: false
						}
					})

					tlcta
					.set(el, {transformOrigin: 'center center'})
					.from(el, { opacity: 1,  y: "-=300"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
				})
				let splitTextLines = gsap.utils.toArray(".txt-text-anim p");
				splitTextLines.forEach(splitTextLine => {
					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: splitTextLine,
							start: 'top 90%',
							duration: 2,
							end: 'bottom 60%',
							scrub: false,
							markers: false,
							toggleActions: 'play none none none'
						}
					});
					const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
					gsap.set(splitTextLine, { perspective: 400 });
					itemSplitted.split({ type: "lines" })
					tl.from(itemSplitted.lines, {
						duration: 1,
						delay: 0.5, 
						opacity: 0, 
						x: "50",
						force3D: true, 
						transformOrigin: "top center -50",
						stagger: 0.1 
					});
				});
				jQuery(window).on('load', function(){
					const boxes = gsap.utils.toArray('.txt_item_active');
					boxes.forEach(svg => {
						gsap.to(svg, {
							scrollTrigger: {
								trigger: svg,
								start: "top 70%",
								end: "bottom bottom",
								toggleClass: "active",
								once: true,
							}
						});
					});
				});
				gsap.utils.toArray('.txtm-sponsor-slider').forEach((el, index) => { 
					let tl1 = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							scrub: 1,
							start: "top 80%",
							end: "buttom 60%",
							toggleActions: "play none none reverse",
							markers: false
						}
					})

					tl1
					.set(el, {transformOrigin: 'center center'})
					.from(el, {  scale: .7 }, {background: "inherit", scale: 1, duration: 1, immediateRender: false})
				})	
				gsap.utils.toArray('.txtm-cta-content .txtm-cta-img2').forEach((el, index) => { 
					let arspin = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							scrub: 1,
							start: "top 85%",
							end: "top 0%",
							toggleActions: "play none none reverse",
							markers: false
						}
					})

					arspin
					.set(el, {transformOrigin: 'center center'})
					.fromTo(el, { rotate: 0}, { rotate: 180, duration: 2, immediateRender: false})
				});	
				$(window).on("load", function () {
					Splitting();
				});
				if ($('.scene').length > 0 ) {
					$('.scene').parallax({
						scalarX: 10.0,
						scalarY: 10.0,
					}); 
				};
				gsap.utils.toArray('.txt-portfolio-section-3 .txt-portfolio-bg').forEach((el, index) => { 
					let tl1 = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							scrub: 1,
							start: "top 80%",
							end: "buttom 60%",
							toggleActions: "play none none reverse",
							markers: false
						}
					})

					tl1
					.set(el, {transformOrigin: 'center center'})
					.from(el, {  scale: .7 }, {background: "inherit", scale: 1, duration: 1, immediateRender: false})
				})
			},
			StickyHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.txt-header-section').addClass('sticky-on')
					} else {
						jQuery('.txt-header-section').removeClass('sticky-on')
					}
				});

			},
			MobileMenu: function (){
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
			},
			searchPopUp: function (){
				$('.search-btn').on('click', function() {
					$('.search-body').toggleClass('search-open');
				});
			},
			scrollTop: function (){
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.scrollup').fadeIn();
					} else {
						$('.scrollup').fadeOut();
					}
				});
				$('.scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
				jQuery('.video_box').magnificPopup({
					disableOn: 200,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false,
				});
				$('.zoom-gallery').magnificPopup({
					delegate: 'a',
					type: 'image',
					closeOnContentClick: false,
					preloader: true,
					closeBtnInside: false,
					mainClass: 'mfp-with-zoom',
					gallery: {
						enabled: true
					},
					zoom: {
						enabled: false,
						duration: 300, 
						opener: function(element) {
							return element.find('img');
						}
					}
				});
			},
			CounterUp: function (){
				$('.counter').counterUp({
					delay: 15,
					time: 1500,
				});
			},
			ServiceActive: function (){
				var ltn__active_item = $('.txt-service-item-1')
				ltn__active_item.mouseover(function() {
					ltn__active_item.removeClass('active');
					$(this).addClass('active');
				});
				$('.ptx-custom-bottom-img').marquee({
					speed: 8,
					gap: 0,
					delayBeforeStart: 0,
					direction: 'left',
					duplicated: true,
					pauseOnHover: false,
					startVisible:true,
				});
			},
			
			
			MasonryGridItem: function (){
				var $grid = $('.grid').imagesLoaded( function() {
					$grid.masonry({
						percentPosition: true,
						itemSelector: '.grid-item',
						columnWidth: '.grid-sizer'
					}); 
				});
			},
			SponsorSlider3: function (){
				var slider = new Swiper('.txt-main-slider-sponsor', {
					spaceBetween: 70,
					slidesPerView: 4,
					roundLengths: true,
					loop: true,
					loopAdditionalSlides: 30,
					autoplay: {
						enabled: true,
						delay: 6000
					},
					speed: 400,
					breakpoints: {
						'1600': {
							slidesPerView: 4,
						},
						'1400': {
							slidesPerView: 3,
						},
						'1400': {
							slidesPerView: 5,
						},
						'992': {
							slidesPerView: 4,
						},
						'768': {
							slidesPerView: 3,
						},
						'576': {
							slidesPerView: 3,
						},
						'576': {
							slidesPerView: 3,
						},
						'0': {
							slidesPerView: 2,
						},
					},
				});
				var slider = new Swiper('.slider-sponsor-slide, .slider-sponsor-slide-2, .slider-sponsor-slide-3', {
					spaceBetween: 40,
					slidesPerView: 4,
					roundLengths: true,
					loop: true,
					loopAdditionalSlides: 30,
					autoplay: {
						enabled: true,
						delay: 2000
					},
					speed: 1000,
					breakpoints: {
						'1600': {
							slidesPerView: 4,
						},
						'1400': {
							slidesPerView: 3,
						},
						'1400': {
							slidesPerView: 3,
						},
						'992': {
							slidesPerView: 3,
						},
						'991': {
							slidesPerView: 4,
						},
						'768': {
							slidesPerView: 3,
						},
						'576': {
							slidesPerView: 3,
						},
						'576': {
							slidesPerView: 3,
						},
						'0': {
							slidesPerView: 2,
						},
					},
				});
				var slider = new Swiper('.txtm-sponsor-slider ', {
					spaceBetween: 25,
					slidesPerView: 5,
					roundLengths: true,
					loop: true,
					loopAdditionalSlides: 30,
					autoplay: {
						enabled: true,
						delay: 6000
					},
					speed: 400,
					breakpoints: {
						'1600': {
							slidesPerView: 5,
						},
						'1400': {
							slidesPerView: 5,
						},
						'1400': {
							slidesPerView: 5,
						},
						'992': {
							slidesPerView: 4,
						},
						'768': {
							slidesPerView: 3,
						},
						'700': {
							slidesPerView: 2,
						},
						'576': {
							slidesPerView: 2,
						},
						'480': {
							slidesPerView: 1,
						},
						'0': {
							slidesPerView: 1,
						},
					},
				});
			},
			ProjectSliderthree: function (){
				var swiper2 = new Swiper(".txt-portfolio-slider-3", {
					slidesPerView: 1,
					loop: true,
					spaceBetween: 30,
					roundLengths: true,
					effect: "fade",
					speed: 1000,
					navigation: {
						prevEl: ".txt-pro-button-prev-3",
						nextEl: ".txt-pro-button-next-3",
					},
				});
			},
			TextScroller: function (){
				$('.txt-footer-scroll-text').marquee({
					speed: 50,
					gap: 0,
					delayBeforeStart: 0,
					direction: 'left',
					duplicated: true,
					pauseOnHover: false,
					startVisible:true,
				});
			},
			SponsorScroll: function (){
				$(document).ready(function () {
					if ($(".progress-bar").length) {
						var $progress_bar = $('.progress-bar');
						$progress_bar.appear();
						$(document.body).on('appear', '.progress-bar', function() {
							var current_item = $(this);
							if (!current_item.hasClass('appeared')) {
								var percent = current_item.data('percent');
								current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
							}

						});
					};
				});
			},
			MainSliderThree: function (){
				var slider = new Swiper('.txt-banner-slider-3', {
					spaceBetween: 30,
					slidesPerView: 1,
					effect: 'fade',
					loop: true,
					pagination: {
						el: ".swiper-pagination",
						clickable: true,
						renderBullet: function (index, className) {
							return '<span class="' + className + '">' + (index + 1) + '</span>';
						},
					},
				});
			},
			MainSliderOne: function (){
				jQuery(window).on('load', function(){
					var slider = new Swiper('.txt-slider-main-m', {
						spaceBetween: 30,
						slidesPerView: 1,
						effect: 'fade',
						loop: true,
						navigation: {
							prevEl: ".txt-main-button-prev",
							nextEl: ".txt-main-button-next",
						},
					});
				});
			},
			ProjectSliderFour: function (){
				var swiper2 = new Swiper(".txt-project-sldier-4", {
					slidesPerView: 2,
					loop: true,
					centeredSlides: true,
					spaceBetween: 30,
					roundLengths: true,
					speed: 1000,
					navigation: {
						prevEl: ".txt-pro-button-prev",
						nextEl: ".txt-pro-button-next",
					},
					breakpoints: {  
						'1400': {
							slidesPerView: 2,
						},
						'1300': {
							slidesPerView: 2,
							centeredSlides: true,
						},
						'1200': {
							slidesPerView: 2,
							centeredSlides: true,
						},
						'992': {
							slidesPerView: 1,
							centeredSlides: false,
						},
						'768': {
							slidesPerView: 1,
							centeredSlides: false,
						},
						'576': {
							slidesPerView: 1,
							centeredSlides: false,

						},
						'0': {
							slidesPerView: 1,
							centeredSlides: false,
						},
					},
				});
			},
			TXTMTeamSlider: function (){
				var swiper2 = new Swiper(".txtm-team-slider", {
					slidesPerView: 3,
					loop: true,
					spaceBetween: 50,
					roundLengths: true,
					speed: 1000,
					navigation: {
						prevEl: ".txt-team-button-prev",
						nextEl: ".txt-team-button-next",
					},
					breakpoints: {  
						'1400': {
							slidesPerView: 3,
						},
						'1300': {
							slidesPerView: 3,
						},
						'1200': {
							slidesPerView: 3,
						},
						'992': {
							slidesPerView: 3,
						},
						'768': {
							slidesPerView: 2,
						},
						'576': {
							slidesPerView: 2,
						},
						'480': {
							slidesPerView: 1,
						},
						'0': {
							slidesPerView: 1,
						},
					},
				});
			},
			TXTMServiceSlider: function (){
				var swiper2 = new Swiper(".txt-service-slide-m", {
					slidesPerView: 4,
					loop: true,
					spaceBetween: 35,
					roundLengths: true,
					speed: 1000,
					navigation: {
						prevEl: ".txt-ser-button-prev",
						nextEl: ".txt-ser-button-next",
					},
					breakpoints: {  
						'1400': {
							slidesPerView: 4,
						},
						'1300': {
							slidesPerView: 4,
						},
						'1200': {
							slidesPerView: 4,
						},
						'992': {
							slidesPerView: 3,
						},
						'850': {
							slidesPerView: 3,
						},
						'768': {
							slidesPerView: 2,
						},
						'576': {
							slidesPerView: 2,
						},
						'0': {
							slidesPerView: 1,
						},
					},
				});
			},
			TXTMPriceSlider: function (){
				var swiper2 = new Swiper(".txtm-pricing-slider", {
					slidesPerView: 4,
					loop: true,
					spaceBetween: 35,
					roundLengths: true,
					speed: 1000,
					navigation: {
						prevEl: ".txt-price-button-prev",
						nextEl: ".txt-price-button-next",
					},
					breakpoints: {  
						'1400': {
							slidesPerView: 2,
						},
						'1300': {
							slidesPerView: 2,
						},
						'1200': {
							slidesPerView: 2,
						},
						'992': {
							slidesPerView: 1,
						},
						'850': {
							slidesPerView: 1,
						},
						'768': {
							slidesPerView: 1,
						},
						'576': {
							slidesPerView: 1,
						},
						'0': {
							slidesPerView: 1,
						},
					},
				});
			},
			TestimonialSlideFour: function (){
				var swiper2 = new Swiper(".testimonial-carousel", {
					slidesPerView: 1,
					loop: true,
					spaceBetween: 30,
					roundLengths: true,
					speed: 1000,
					navigation: {
						prevEl: ".testimonial-one-button-prev",
						nextEl: ".testimonial-one-button-next",
					},
				});
			},
			TestimonialSliderOne: function (){
				var swiper = new Swiper(".txt-testimonial-slider-nav-1", {
					loop: true,
					spaceBetween: 0,
					speed: 500,
					slidesPerView: 5,
					centeredSlides: true,
					navigation: {
						nextEl: ".txt-testimonial-next-1",
						prevEl: ".txt-testimonial-prev-1",
					},
					breakpoints: {  
						'1400': {
							slidesPerView: 5,
						},
						'1200': {
							slidesPerView: 5,
						},
						'992': {
							slidesPerView: 3,
						},
						'768': {
							slidesPerView: 3,
						},
						'576': {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						'0': {
							slidesPerView: 1,
						},
					},
				});
				var swiper2 = new Swiper(".txt-testimonial-slider-for-1", {
					loop: true,
					spaceBetween: 10,
					effect: 'fade',
					navigation: {
						nextEl: ".txt-testimonial-next-1",
						prevEl: ".txt-testimonial-prev-1",
					},
					thumbs: {
						swiper: swiper,
					},
				});
			},

			
		}
	}
	jQuery(document).ready(function (){
		TXT_Custom_JS.init();
	});

})();