$(function(){var e=($(window).scroll(function(){var e=$(this).scrollTop();e>0?($("#navbarScroll").addClass("navbar-scrolled"),$("#navbarScroll .reprograma-logo .white").removeClass("white").addClass("light-purple")):($("#navbarScroll").removeClass("navbar-scrolled"),$("#navbarScroll .reprograma-logo .light-purple").removeClass("light-purple").addClass("white"))}),function(){$leftKey=$("#leftKey"),$rightKey=$("#rightKey"),$leftKey.animate({left:"-=300px",opacity:1},"slow"),$rightKey.animate({right:"-=300px",opacity:1},"slow")});window.onload=e,setTimeout(function(){$leftKey.animate({left:"0",opacity:1},"slow"),$rightKey.animate({left:"-=300px",opacity:1},"slow")},4500);var t=theaterJS();t.on("type:start, erase:start",function(){var e=t.getCurrentActor();e.$element.classList.add("is-typing")}).on("type:end, erase:end",function(){var e=t.getCurrentActor();e.$element.classList.remove("is-typing")}),t.addActor("typed"),t.addScene("typed:reprograma",2e3).addScene(-10)});