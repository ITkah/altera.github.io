$(document).ready(function() {

  $("nav ul li").each(function() {
    this_li = $(this);
    if ($(this_li).find("ul").length > 0) {
      $(this_li).append('<div class="arrow-mob"></div>')
    }
  });

  $(".arrow-mob").on("click", function(){
    $(this).toggleClass("active-arrow");
    $(this).siblings(".sub-menu").slideToggle(100);
  });

  $(".call-lang").on("click", function(){
    $(".hide-lang").fadeToggle(100);
  });

  $(".call-lang-2").on("click", function(){
    $(".hide-lang-2").fadeToggle(100);
  });

  $(".show-password").on("click", function() {
    let type = $(this).siblings("input").attr('type') == "text" ? "password" : 'text';
    $(this).siblings("input").prop('type', type);
  });

  $(".call-search").on("click", function(){
    $(".hide-search").fadeToggle(200);
  });

  $(".call-menu").on("click", function(){
    $("nav").toggleClass("active-menu");
  });

  $(".close-menu").on("click", function(){
    $("nav").removeClass("active-menu");
  });


  $('.constant-slider-wrap').slick({
      dots: false,
      infinite: true,
      arrows: true,
      speed: 600,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

  $('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
            
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

});