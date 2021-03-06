$(function()
  {
      var navbarColor = $(window).scroll(function() {
          $('.hideme').each( function(i){

              var bottom_of_object = $(this).offset().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();

              if( bottom_of_window > bottom_of_object ){
                  $(this).animate({'opacity':'1'},300);
              }

          });
          var scrollVal = $(this).scrollTop();

          if (scrollVal > 0) {
              $('#navbarScroll').addClass('navbar-scrolled');
              $('#navbarScroll .reprograma-logo .white').removeClass('white').addClass('light-purple');
          } else {
              $('#navbarScroll').removeClass('navbar-scrolled');
              $('#navbarScroll .reprograma-logo .light-purple').removeClass('light-purple').addClass('white');
          }
      });

      var loadAnimation = function() {
          var animateHash = function() {
              $leftKey = $('#leftKey');
              $rightKey = $('#rightKey');
              $leftKey.animate({"left": "-=300px", "opacity":1}, "slow");
              $rightKey.animate({"right": "-=300px", "opacity":1}, "slow");
          };

          window.onload = animateHash;

          setTimeout(function() {
              $leftKey.animate({"left": "0", "opacity":1}, "slow");
              $rightKey.animate({"right": "0", "opacity":1}, "slow");
              removeAnimationFrame();
          }, 4500);
      }

      var loadTypingAnimation = function() {
          var theater = theaterJS();

          theater
              .on('type:start, erase:start', function () {
                  var actor = theater.getCurrentActor()
                  actor.$element.classList.add('is-typing')
              })
              .on('type:end, erase:end', function () {
                  var actor = theater.getCurrentActor()
                  actor.$element.classList.remove('is-typing')
              })

          theater
              .addActor('typed')

          theater
              .addScene('typed:reprograma', 2000)
              .addScene(-10)
      }

      var removeAnimationFrame = function() {
          setTimeout(function() {
              $('#intro').fadeOut('slow');
          }, 1800);
      }

      loadAnimation();
      loadTypingAnimation();
  });
