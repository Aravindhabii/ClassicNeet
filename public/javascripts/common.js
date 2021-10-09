// Navbar
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navlinks");
const navlinks = document.querySelectorAll(".navlinks li");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

console.log("Hello");

const navslide = () => {
  hamburger.addEventListener("click", () => {
    //toggle
    nav.classList.toggle("nav-active");
    //animation
    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navlinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    if (line1.style.transform) {
      line1.style.transform = "";
      line2.style.display = "";
      line3.style.transform = "";
    } else {
      line1.style.transform = "rotate(-45deg) translate(-5px,6px)";
      line2.style.display = "none";
      line3.style.transform = "rotate(45deg) translate(0px,0px)";
    }
  });
};

//
//

navslide();

// swiper js

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    
  },
});

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  // mousewheel: true,
  // keyboard: true,
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

console.log('kolol');
const counters = document.querySelectorAll('.counter')

const speed = 200;
  

counters.forEach(c =>{
  const updateCount = () => {
    const target = +c.getAttribute('data-target')
    const count = +c.innerText
    const inc = target / speed
    console.log(target);
    console.log('hola');
    if(count < target) {
      c.innerText = (count + inc)
      setTimeout(updateCount,1)
    } else {
      count.innerText = (target)
    }
  }
  updateCount();
})