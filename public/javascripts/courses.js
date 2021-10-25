const btn1 = document.querySelector(".neet1btn");
const btn2 = document.querySelector(".neet2btn");
const btn3 = document.querySelector(".neet3btn");
const meth = document.querySelector(".bgmeth");
const meth2 = document.querySelector(".bgmeth2");
const meth3 = document.querySelector(".bgmeth3");
const body = document.querySelector("body");

const exit = document.querySelectorAll(".exit");
btn1.addEventListener("click", (e) => {
  console.log("clcik");
  meth.style.display = "flex";
  // meth.style.position = 'fixed';
  body.style.overflow = "hidden";
});

btn2.addEventListener("click", (e) => {
  console.log("clcik");
  meth2.style.display = "flex";
  // meth.style.position = 'fixed';
  body.style.overflow = "hidden";
});

btn3.addEventListener("click", (e) => {
  console.log("clcik");
  meth3.style.display = "flex";
  // meth.style.position = 'fixed';
  body.style.overflow = "hidden";
});
exit.forEach((e) => {
  e.addEventListener("click", () => {
    meth.style.display = "none";
    meth2.style.display = "none";
    meth3.style.display = "none";
    console.log("hrllo");
    body.style.overflow = "unset";
  });
});

//media query
const para1 = document.querySelector(".para1");

$(window)
  .resize(function () {
    if (window.innerWidth < 600) {
        console.log('lk');
      $(".para1neet").replaceWith(
          
        "<p class='hexContent'>This course is meant for those who have completed their 12th...</p>"
      );
      $(".para2neet").replaceWith(
          
        "<p class='hexContent'>This course is meant for students who have completed their 10th...</p>"
      );

      $(".para3neet").replaceWith(
          
        "<p class='hexContent'>The course is specifically designed for those who wish to focus on NEET...</p>"
      );
     
      $(".para4neet").replaceWith(
          
        "<p class='hexContent'>This course is meant for those who are appearing for their 12th...</p>"
      );
    }
    if (window.innerWidth < 750) {
        console.log('jk');
      $(".para1neet").replaceWith(
        "<p class='hexContent'>This course is meant for those who have completed their 12th classboard exams and might have already attempted the NEET.</p>"
      );
      $(".para2neet").replaceWith(
          
        "<p class='hexContent'>This course is meant for students who have completed their 10th std board exams.</p>"
      );
      $(".para4neet").replaceWith(
          
        "<p class='hexContent'>This course is meant for those who are appearing for their 12th class board exams and wish to focus on NEET after the Board exams.</p>"
      );
    } else if (window.innerWidth > 750) {
        $(".para1neet").replaceWith(
            "<p class='hexContent'>This course is meant for those who have completed their 12th classboard exams and might have already attempted the NEET. They willappear for NEET in the coming year after one year of trainingfocused on NEET.</p>"
          );
    }
   
    
  })
  .resize();
