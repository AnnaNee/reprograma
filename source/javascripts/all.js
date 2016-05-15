$(function()
  {
      var a = $('#navbarScroll').offset().top;

      var navbarColor = $(window).scroll(function() {
          var scrollVal = $(this).scrollTop();

          if (scrollVal > 0) {
              $('#navbarScroll').addClass('navbar-scrolled');
              $('#navbarScroll .reprograma-logo .white').removeClass('white').addClass('light-purple');
          } else {
              $('#navbarScroll').removeClass('navbar-scrolled');
              $('#navbarScroll .reprograma-logo .light-purple').removeClass('light-purple').addClass('white');
          }
      }
      );
  }
);
