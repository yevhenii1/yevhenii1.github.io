"use strict";

//toggle menu
$(document).ready(function () {
  $('.menu__btn').click(function () {
    $('.header__top').addClass('header__top--active');
    $('body').addClass('overflow-hidden');
    $('html').addClass('overflow-hidden');
    $('body').addClass('bg-hide');
    $('.menu__btn').css('opacity', '0');
    $('.menu__btn-mob').css('opacity', '1');
    $('.menu__btn-mob').css('display', 'flex');
  });
  $('.menu__btn-mob').click(function () {
    hideWindiwsMenu();
  });
});

var hideWindiwsMenu = function hideWindiwsMenu() {
  $('.header__top').removeClass('header__top--active');
  $('body').removeClass('overflow-hidden');
  $('html').removeClass('overflow-hidden');
  $('body').removeClass('bg-hide');
  $('.menu__btn').css('opacity', '1');
  $('.menu__btn-mob').css('opacity', '0');
  $('.menu__btn-mob').css('display', 'none');
}; //toggle menu
// $(document).ready(function () {
//   let ticker = document.querySelector('.ticker')
//     , list = document.querySelector('.ticker__list')
//     , clone = list.cloneNode(true)
//   ticker.append(clone)
// });


$('.ticker').simplemarquee({
  speed: 50,
  cycles: Infinity,
  space: 25,
  delayBetweenCycles: .1,
  handleHover: true,
  handleResize: false
}); //heder anim
// if ($('body').width() > 1024) {

var animItems = document.querySelectorAll('._anim-items');
console.log('window');

if (animItems.length > 0) {
  var animOnScroll = function animOnScroll() {
    for (var index = 0; index < animItems.length; index++) {
      var animItem = animItems[index];
      var animItemHeight = animItem.offsetHeight;
      var animItemOffset = offset(animItem).top;
      var animStart = 4;
      var animatemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animatemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (pageYOffset > animItemOffset - animatemPoint && pageYOffset < animItemOffset + animItemHeight) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-not')) {
          animItem.classList.remove('_active');
        }
      }
    }
  };

  var offset = function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  };

  window.addEventListener("scroll", animOnScroll);
  setTimeout(function () {
    animOnScroll();
  }, 300);
} // }
// var smallMediaQuery = window.matchMedia("(min-width:1025px)"),
//   mediumMediaQuery = window.matchMedia("(min-width:769px) and (max-width:1024px)"),
//   tableMediaQuery = window.matchMedia("(min-width:581px) and (max-width:768px)"),
//   mobMediaQuery = window.matchMedia("(min-width:320px) and (max-width:580px)");
// // largeMediaQuery = window.matchMedia("(min-width:769px) and (max-width:992px)");
// let interval = 30
// //Create listener for SMALL
// var smallListener = function (e) {
//   if (e.matches) {
//     var tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl.to(".banner-items-desc__item-1", { x: 100, duration: 1, opacity: 1 });
//     tl.to(".banner-items-desc__item-1", { x: 300, duration: 1, delay: interval });
//     tl.to(".banner-items-desc__item-1", { x: 300, duration: 1, delay: interval, opacity: 0 });
//     tl.to(".banner-items-desc__item-1", { x: 0, duration: 3, opacity: 0 });
//     var tl2 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl2.to(".banner-items-desc__item-2", { x: 200, duration: 1, opacity: 1 });
//     tl2.to(".banner-items-desc__item-2", { x: 400, duration: 1, delay: interval });
//     tl2.to(".banner-items-desc__item-2", { x: 400, duration: 1, delay: interval, opacity: 0 });
//     tl2.to(".banner-items-desc__item-2", { x: 0, duration: 3, opacity: 0 });
//     var tl3 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     // tl3.to(".banner-items-desc__item-3", { x: 200, duration: 1, opacity: 1 });
//     tl3.to(".banner-items-desc__item-3", { x: 400, duration: 1, opacity: 1 });
//     tl3.to(".banner-items-desc__item-3", { x: 600, duration: 1, delay: interval });
//     tl3.to(".banner-items-desc__item-3", { x: 600, duration: 1, delay: interval, opacity: 0 });
//     tl3.to(".banner-items-desc__item-3", { x: 0, duration: 3, opacity: 0 });
//     var tl4 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl4.to(".banner-items-desc__item-4", { x: 300, duration: 1, opacity: 1 });
//     tl4.to(".banner-items-desc__item-4", { x: 500, duration: 1, delay: interval });
//     tl4.to(".banner-items-desc__item-4", { x: 500, duration: 1, delay: interval, opacity: 0 });
//     tl4.to(".banner-items-desc__item-4", { x: 0, duration: 3, opacity: 0 });
//     var tl5 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     // tl5.to(".banner-items-desc__item-5", { x: 200, duration: 1, opacity: 1 });
//     tl5.to(".banner-items-desc__item-5", { x: 100, duration: 1, opacity: 1 });
//     tl5.to(".banner-items-desc__item-5", { x: 200, duration: 1, delay: interval });
//     tl5.to(".banner-items-desc__item-5", { x: 200, duration: 1, delay: interval, opacity: 0 });
//     tl5.to(".banner-items-desc__item-5", { x: 0, duration: 3, opacity: 0 });
//   }
// };
// var mediumListener = function (e) {
//   if (e.matches) {
//     var tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl.to(".banner-items-desc__item-1", { x: 77, duration: 1, opacity: 1 });
//     tl.to(".banner-items-desc__item-1", { x: 235, duration: 1, delay: interval });
//     tl.to(".banner-items-desc__item-1", { x: 235, duration: 1, delay: interval, opacity: 0 });
//     tl.to(".banner-items-desc__item-1", { x: 0, duration: 3, opacity: 0 });
//     var tl2 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl2.to(".banner-items-desc__item-2", { x: 155, duration: 1, opacity: 1 });
//     tl2.to(".banner-items-desc__item-2", { x: 312, duration: 1, delay: interval });
//     tl2.to(".banner-items-desc__item-2", { x: 312, duration: 1, delay: interval, opacity: 0 });
//     tl2.to(".banner-items-desc__item-2", { x: 0, duration: 3, opacity: 0 });
//     var tl3 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl3.to(".banner-items-desc__item-3", { x: 316, duration: 1, opacity: 1 });
//     tl3.to(".banner-items-desc__item-3", { x: 472, duration: 1, delay: interval });
//     tl3.to(".banner-items-desc__item-3", { x: 472, duration: 1, delay: interval, opacity: 0 });
//     tl3.to(".banner-items-desc__item-3", { x: 0, duration: 3, opacity: 0 });
//     var tl4 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl4.to(".banner-items-desc__item-4", { x: 234, duration: 1, opacity: 1 });
//     tl4.to(".banner-items-desc__item-4", { x: 390, duration: 1, delay: interval });
//     tl4.to(".banner-items-desc__item-4", { x: 390, duration: 1, delay: interval, opacity: 0 });
//     tl4.to(".banner-items-desc__item-4", { x: 0, duration: 3, opacity: 0 });
//     var tl5 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl5.to(".banner-items-desc__item-5", { x: 4, duration: 1, opacity: 1 });
//     tl5.to(".banner-items-desc__item-5", { x: 160, duration: 1, delay: interval });
//     tl5.to(".banner-items-desc__item-5", { x: 160, duration: 1, delay: interval, opacity: 0 });
//     tl5.to(".banner-items-desc__item-5", { x: 0, duration: 3, opacity: 0 });
//   }
// };
// var tableListener = function (e) {
//   if (e.matches) {
//     let tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl.to(".mob-icons__item--1", { x: -102, duration: 1, opacity: 1 });
//     tl.to(".mob-icons__item--1", { x: 6, duration: 1, delay: 1 });
//     tl.to(".mob-icons__item--1", { x: 6, duration: 1, delay: interval, opacity: 0 });
//     tl.to(".mob-icons__item--1", { x: -102, duration: 3, opacity: 0 });
//     let tl2 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl2.to(".mob-icons__item--2", { x: 0, duration: 1, opacity: 1 });
//     tl2.to(".mob-icons__item--2", { x: 217, duration: 1, delay: 1 });
//     tl2.to(".mob-icons__item--2", { x: 217, duration: 1, delay: interval, opacity: 0 });
//     tl2.to(".mob-icons__item--2", { x: 0, duration: 3, opacity: 0 });
//     let tl3 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl3.to(".mob-icons-b__item--3", { x: -232, duration: 1, opacity: 1 });
//     tl3.to(".mob-icons-b__item--3", { x: 220, duration: 1, delay: 1 });
//     tl3.to(".mob-icons-b__item--3", { x: 220, duration: 1, delay: interval, opacity: 0 });
//     tl3.to(".mob-icons-b__item--3", { x: -232, duration: 3, opacity: 0 });
//     let tlt = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tlt.to(".mob-icons-b__item--4", { x: 108, duration: 1, opacity: 1 });
//     tlt.to(".mob-icons-b__item--4", { x: 327, duration: 1, delay: 1 });
//     tlt.to(".mob-icons-b__item--4", { x: 327, duration: 1, delay: interval, opacity: 0 });
//     tlt.to(".mob-icons-b__item--4", { x: 108, duration: 3, opacity: 0 });
//     let tl5 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl5.to(".mob-icons-b__item--5", { x: 6, duration: 1, opacity: 1 });
//     tl5.to(".mob-icons-b__item--5", { x: 222, duration: 1, delay: 1 });
//     tl5.to(".mob-icons-b__item--5", { x: 222, duration: 1, delay: interval, opacity: 0 });
//     tl5.to(".mob-icons-b__item--5", { x: 6, duration: 3, opacity: 0 });
//     let tl6 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl6.to(".mob-icons-b__item--6", { x: 0, duration: 1, opacity: 1 });
//     tl6.to(".mob-icons-b__item--6", { x: 326, duration: 1, delay: 1 });
//     tl6.to(".mob-icons-b__item--6", { x: 326, duration: 1, delay: interval, opacity: 0 });
//     tl6.to(".mob-icons-b__item--6", { x: 0, duration: 3, opacity: 0 });
//   }
// };
// var mobListener = function (e) {
//   if (e.matches) {
//     let tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl.to(".mob-icons__item--1", { x: -152, duration: 1, opacity: 0 });
//     tl.to(".mob-icons__item--1", { x: 4, duration: 1, delay: 1, opacity: 1 });
//     tl.to(".mob-icons__item--1", { x: 4, duration: 1, delay: interval, opacity: 0 });
//     tl.to(".mob-icons__item--1", { x: -152, duration: 3, opacity: 0 });
//     let tl2 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl2.to(".mob-icons__item--2", { x: 0, duration: 1, opacity: 1 });
//     tl2.to(".mob-icons__item--2", { x: 117, duration: 1, delay: 1 });
//     tl2.to(".mob-icons__item--2", { x: 117, duration: 1, delay: interval, opacity: 0 });
//     tl2.to(".mob-icons__item--2", { x: 0, duration: 3, opacity: 0 });
//     let tl3 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl3.to(".mob-icons-b__item--3", { x: -232, duration: 1, opacity: 1 });
//     tl3.to(".mob-icons-b__item--3", { x: 372, duration: 1, delay: 1 });
//     tl3.to(".mob-icons-b__item--3", { x: 372, duration: 1, delay: interval, opacity: 0 });
//     tl3.to(".mob-icons-b__item--3", { x: -232, duration: 3, opacity: 0 });
//     let tlt = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tlt.to(".mob-icons-b__item--4", { x: 0, duration: 1, opacity: 1 });
//     tlt.to(".mob-icons-b__item--4", { x: 170, duration: 1, delay: 1 });
//     tlt.to(".mob-icons-b__item--4", { x: 170, duration: 1, delay: interval, opacity: 0 });
//     tlt.to(".mob-icons-b__item--4", { x: 0, duration: 3, opacity: 0 });
//     let tl5 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl5.to(".mob-icons-b__item--5", { x: 6, duration: 1, opacity: 1 });
//     tl5.to(".mob-icons-b__item--5", { x: 118, duration: 1, delay: 1 });
//     tl5.to(".mob-icons-b__item--5", { x: 118, duration: 1, delay: interval, opacity: 0 });
//     tl5.to(".mob-icons-b__item--5", { x: 6, duration: 3, opacity: 0 });
//     let tl6 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl6.to(".mob-icons-b__item--6", { x: 0, duration: 1, opacity: 1 });
//     tl6.to(".mob-icons-b__item--6", { x: 172, duration: 1, delay: 1 });
//     tl6.to(".mob-icons-b__item--6", { x: 172, duration: 1, delay: interval, opacity: 0 });
//     tl6.to(".mob-icons-b__item--6", { x: 0, duration: 3, opacity: 0 });
//   }
// };
// var largeListener = function(e){
//   if(e.matches){
//     var tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl.to(".banner-items-desc__item-1", { x: 79, duration: 1, opacity: 1 });
//     tl.to(".banner-items-desc__item-1", { x: 235, duration: 1, delay: interval });
//     tl.to(".banner-items-desc__item-1", { x: 235, duration: 1, delay: interval, opacity: 0  });
//     tl.to(".banner-items-desc__item-1", { x: 0, duration: 3, opacity: 0  });
//     var tl2 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl2.to(".banner-items-desc__item-2", { x: 155, duration: 1, opacity: 1 });
//     tl2.to(".banner-items-desc__item-2", { x: 312, duration: 1, delay: interval });
//     tl2.to(".banner-items-desc__item-2", { x: 312, duration: 1, delay: interval, opacity: 0  });
//     tl2.to(".banner-items-desc__item-2", { x: 0, duration: 3, opacity: 0  });
//     var tl3 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl3.to(".banner-items-desc__item-3", { x: 316, duration: 1, opacity: 1 });
//     tl3.to(".banner-items-desc__item-3", { x: 472, duration: 1, delay: interval });
//     tl3.to(".banner-items-desc__item-3", { x: 472, duration: 1, delay: interval, opacity: 0  });
//     tl3.to(".banner-items-desc__item-3", { x: 0, duration: 3, opacity: 0  });
//     var tl4 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl4.to(".banner-items-desc__item-4", { x: 234, duration: 1, opacity: 1 });
//     tl4.to(".banner-items-desc__item-4", { x: 390, duration: 1, delay: interval });
//     tl4.to(".banner-items-desc__item-4", { x: 390, duration: 1, delay: interval, opacity: 0  });
//     tl4.to(".banner-items-desc__item-4", { x: 0, duration: 3,  opacity: 0  });
//     var tl5 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl5.to(".banner-items-desc__item-5", { x: 4, duration: 1, opacity: 1 });
//     tl5.to(".banner-items-desc__item-5", { x: 160, duration: 1, delay: interval });
//     tl5.to(".banner-items-desc__item-5", { x: 160, duration: 1, delay: interval, opacity: 0  });
//     tl5.to(".banner-items-desc__item-5", { x: 0, duration: 3,  opacity: 0  });
//   }
// };
//Add the listener to MediaQueryList
// smallMediaQuery.addListener(smallListener);
// mediumMediaQuery.addListener(mediumListener);
// tableMediaQuery.addListener(tableListener);
// mobMediaQuery.addListener(mobListener);
// // largeMediaQuery.addListener(largeListener);
// // Initialise onload
// smallListener(smallMediaQuery);
// mediumListener(mediumMediaQuery);
// tableListener(tableMediaQuery);
// mobListener(mobMediaQuery);
// largeListener(largeMediaQuery); 


if ($('body').width() <= 930) {
  $(".roadmap__header--oct").addClass("active");
  $(".roadmap__content--oct").addClass("active");
  $(".roadmap__content--oct").children('ul').addClass("_active");
}

$(".roadmap__header--oct span").hover(function () {
  $('.roadmap__header--oct').addClass("active");
  $(".roadmap__content--oct").addClass("active");
  $(".roadmap__line-oct:last").addClass("active");
  $(".roadmap__content--oct").children('ul').addClass("_active");
}, function () {
  $('.roadmap__header--oct').removeClass("active");
  $(".roadmap__content--oct").removeClass("active");
  $(".roadmap__line-oct:last").removeClass("active");
  $(".roadmap__content--oct").children('ul').removeClass("_active");
});
$(".roadmap__header--nov span").hover(function () {
  $('.roadmap__header--nov').addClass("active");
  $(".roadmap__header--oct").addClass("active--nov");
  $(".roadmap__content--nov").addClass("active");
  $(".roadmap__line-nov:last").addClass("active");
  $(".roadmap__content--nov").children('ul').addClass("_active");

  if ($('body').width() <= 930) {
    $(".roadmap__header--oct").removeClass("active");
    $(".roadmap__content--oct").removeClass("active");
  }
}, function () {
  $('.roadmap__header--nov').removeClass("active");
  $(".roadmap__header--oct").removeClass("active--nov");
  $(".roadmap__content--nov").removeClass("active");
  $(".roadmap__line-nov:last").removeClass("active");
  $(".roadmap__content--nov").children('ul').removeClass("_active");
});
$(".roadmap__header--ter span").hover(function () {
  $('.roadmap__header--ter').addClass("active");
  $(".roadmap__header--nov").addClass("active--ter");
  $(".roadmap__header--oct").addClass("active--nov");
  $(".roadmap__content--ter").addClass("active");
  $(".roadmap__line-ter:last").addClass("active");
  $(".roadmap__content--ter").children('ul').addClass("_active");

  if ($('body').width() <= 930) {
    $(".roadmap__header--oct").removeClass("active");
    $(".roadmap__content--oct").removeClass("active");
  }
}, function () {
  $('.roadmap__header--ter').removeClass("active");
  $(".roadmap__header--nov").removeClass("active--ter");
  $(".roadmap__header--oct").removeClass("active--nov");
  $(".roadmap__content--ter").removeClass("active");
  $(".roadmap__line-ter:last").removeClass("active");
  $(".roadmap__content--ter").children('ul').removeClass("_active");
}); //////////////

$(".roadmap__content--oct").hover(function () {
  $('.roadmap__header--oct').addClass("active");
  $(".roadmap__content--oct").addClass("active");
  $(".roadmap__line-oct:last").addClass("active");
  $(".roadmap__content--oct").children('ul').addClass("_active");
}, function () {
  $('.roadmap__header--oct').removeClass("active");
  $(".roadmap__content--oct").removeClass("active");
  $(".roadmap__line-oct:last").removeClass("active");
  $(".roadmap__content--oct").children('ul').removeClass("_active");
});
$(".roadmap__content--nov").hover(function () {
  $('.roadmap__header--nov').addClass("active");
  $(".roadmap__header--oct").addClass("active--nov");
  $(".roadmap__content--nov").addClass("active");
  $(".roadmap__line-nov:last").addClass("active");
  $(".roadmap__content--nov").children('ul').addClass("_active");

  if ($('body').width() <= 930) {
    $(".roadmap__header--oct").removeClass("active");
    $(".roadmap__content--oct").removeClass("active");
  }
}, function () {
  $('.roadmap__header--nov').removeClass("active");
  $(".roadmap__header--oct").removeClass("active--nov");
  $(".roadmap__content--nov").removeClass("active");
  $(".roadmap__line-nov:last").removeClass("active");
  $(".roadmap__content--nov").children('ul').removeClass("_active");
});
$(".roadmap__content--ter").hover(function () {
  $('.roadmap__header--ter').addClass("active");
  $(".roadmap__header--nov").addClass("active--ter");
  $(".roadmap__header--oct").addClass("active--nov");
  $(".roadmap__content--ter").addClass("active");
  $(".roadmap__line-ter:last").addClass("active");
  $(".roadmap__content--ter").children('ul').addClass("_active");

  if ($('body').width() <= 930) {
    $(".roadmap__header--oct").removeClass("active");
    $(".roadmap__content--oct").removeClass("active");
  }
}, function () {
  $('.roadmap__header--ter').removeClass("active");
  $(".roadmap__header--nov").removeClass("active--ter");
  $(".roadmap__header--oct").removeClass("active--nov");
  $(".roadmap__content--ter").removeClass("active");
  $(".roadmap__line-ter:last").removeClass("active");
  $(".roadmap__content--ter").children('ul').removeClass("_active");
});

if ($('body').width() <= 768) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: -20,
    freeMode: true
  });
} //copy text


function copyData(containerid) {
  var range = document.createRange();
  range.selectNode(containerid); //changed here

  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}

function copyDataTwo(containeridTwo) {
  var range = document.createRange();
  range.selectNode(containeridTwo); //changed here

  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}

$(".address__copy-btn").hover(function () {
  $('.address__popup--one').addClass('active');
}, function () {
  $('.address__popup--one').removeClass('active');
});
$(".contactUs__copy-btn").hover(function () {
  $('.address__popup--tow').addClass('active');
}, function () {
  $('.address__popup--tow').removeClass('active');
});
$(".address__copy-btn").click(function () {
  $('.address__popup--one-copy').addClass('active');
  $('.address__popup--one').removeClass('active');
  setTimeout(function () {
    $('.address__popup--one-copy').removeClass('active');
  }, 2000);
});
$(".contactUs__copy-btn").click(function () {
  $('.address__popup--tow-copy').addClass('active');
  $('.address__popup--tow').removeClass('active');
  setTimeout(function () {
    $('.address__popup--tow-copy').removeClass('active');
  }, 2000);
});
var scrolling = false;
$(window).scroll(function (event) {
  scrolling = true;
  console.log("event");
});
setInterval(function () {
  if (scrolling) {
    scrolling = false;
    $(".menu__btn").removeClass('_active');
  } else {
    console.log("false");
    $(".menu__btn").addClass('_active');
  }
}, 500);
"use strict";

console.log('maxgraph');
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
