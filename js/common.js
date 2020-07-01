$(document).ready(function() {

  $("nav ul li").each(function() {
    this_li = $(this);
    if ($(this_li).find("ul").length > 0) {
      $(this_li).append('<div class="arrow-mob"></div>')
    }
  });

  $(".post-favorite-box").on("click", function(){
    $(this).toggleClass("post-favorite-click");
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
  
  $(".coment-text").on("keyup",function(){
    var letter = ($(this).val().length);
    $(this).siblings(".textarea-box").children(".coll-box").children(".coll-letter").text(letter);
  });

  $(".call-messages-invite").on("click", function(){
    $(".messages-hide-answer").not($(this)).fadeOut(150);
    $(this).children(".messages-hide-answer").fadeToggle(150);
  });

  $(".filter-title").on("click", function(){
    $(this).toggleClass("minus");
    $(this).siblings(".filter-element").slideToggle(150);
  });

  $(".filter-template-btn").on("click", function(){
    $(".post-tempate-sort-wrap").toggleClass("close-div");
    $(".filter-main-wrap").slideToggle(100);
  });

  $(".close-filter").on("click", function(){
    $(".post-tempate-sort-wrap").removeClass("close-div");
    $(".filter-main-wrap").slideUp(100);
  });

  $(".show-comment").on("click", function(){
    $(".coment-box-container").show(150);
    $(this).remove();
  });

  $(".coment-box").on("click", function(){
    $(this).parent().siblings(".coment-container").slideToggle(150);
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