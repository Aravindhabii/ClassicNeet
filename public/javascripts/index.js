const count = (e, delay) => {
  let max = parseInt(e.innerText);

  if (max < 10) {
    var min = parseInt(max);
  } else {
    var min = Math.floor(parseInt(max) / 2);
  }

  setInterval(() => {
    console.log(min);
    if (min <= max) {
      min += 5;
      e.innerText = Math.floor(min);
    } else {
      e.innerText = max;
    }
  }, delay);
};

count(document.querySelector(".MBBS_Seats"), 20);
count(document.querySelector(".Consecutive"), 150);
count(document.querySelector(".successRate"), 20);
count(document.querySelector(".admission"), 40);

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
}

var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

// var swiper = new Swiper('.swiper', {
//   slidesPerView: 3,
//   direction: getDirection(),
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   on: {
//     resize: function () {
//       swiper.changeDirection(getDirection());
//     },
//   },
// });

// function getDirection() {
//   var windowWidth = window.innerWidth;
//   var direction = window.innerWidth <= 760 ? 'horizontal' : 'horizontal';

//   return direction;
// }

// const counters = document.querySelectorAll('.counter');
