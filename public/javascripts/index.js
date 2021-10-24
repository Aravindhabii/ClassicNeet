const section1 = document.querySelector(".home").offsetHeight;
const section2 = document.querySelector(".sec-2").offsetHeight;
const section3 = document.querySelector(".HexagonDiv").offsetHeight;
const section4 = document.querySelector(".cardsDiv").offsetHeight;
const section5 = document.querySelector(".drive").offsetHeight;
const section6 = document.querySelector(".bgTopper").offsetHeight;
const perc = document.querySelector('.successRate').innerText
const height =
section1 +
  section2 +
  section3 +
  section4 +
  section5 ;
console.log(height,'hey');
console.log(section1,'hey1');
let count1 = 1;
let count2 = 1;
let count3 = 1;
let count4 = 1;

// function MBBS_Seats() {
// 	count1++;
// 	document.querySelector('.MBBS_Seats').innerHTML = count1;
// 	if (
// 		count1 == document.querySelector('.MBBS_Seats').getAttribute('data-target')
// 	) {
// 		clearInterval(MBBS_Seats);
// 	}
// }

// function Consecutive() {
// 	count2++;
// 	document.querySelector('.Consecutive').innerHTML = count2;
// 	if (
// 		count2 == document.querySelector('.Consecutive').getAttribute('data-target')
// 	) {
// 		clearInterval(Consecutive);
// 	}
// }

// function successRate() {
// 	count3++;
// 	document.querySelector('.successRate').innerHTML = `${count3}%`;
// 	if (
// 		count3 == document.querySelector('.successRate').getAttribute('data-target')
// 	) {
// 		clearInterval(successRate);
// 	}
// }

// function admission() {
// 	count4++;
// 	document.querySelector('.admission').innerHTML = `${count4}%`;
// 	if (
// 		count4 == document.querySelector('.admission').getAttribute('data-target')
// 	) {
// 		clearInterval(admission);
// 	}
// }

// number count for stats, using jQuery animate

  




var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});