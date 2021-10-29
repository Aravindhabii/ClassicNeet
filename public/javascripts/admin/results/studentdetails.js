const addbtn = document.querySelector(".addbtn");
const previewDiv = document.querySelector(".preview");
const backbtn = document.querySelector(".backbtn");
const sectionop = document.querySelector(".mainsection");
const imgform = document.querySelector(".imgform");
const submit = document.querySelector(".submit");

addbtn.addEventListener("click", () => {
  previewDiv.style.display = "flex";
  imgform.style.transform = "translate(300vw,0)";
  previewDiv.style.transform = "none";
});

backbtn.addEventListener("click", () => {
  previewDiv.style.transform = "translate(300vw,0)";
  imgform.style.transform = "translate(0,0)";
});

submit.addEventListener("click", () => {
  confirm("Click CONFIRM TO DELETE");
});

const previewTopper = document.querySelector(".previewTopper");
const previewSpan = document.querySelectorAll(".currentPreviewSpan");
const closesvg = document.querySelector(".closesvg");
const sliderimgurl = document.querySelectorAll(".currentSliderimgurl");
for (let i = 0; i <= previewSpan.length - 1; i++) {
  previewSpan[i].addEventListener("click", (e) => {
    for (let j = 0; j <= sliderimgurl.length - 1; j++) {
      if (i === j) {
        const img = document.createElement("img");
        console.log(sliderimgurl[j].innerText.length < 1);
        if (sliderimgurl[j].innerText.length < 1) return;
        img.src = sliderimgurl[j].innerText;
        previewTopper.appendChild(img);
        previewTopper.style.display = "block";
        sectionop.style.filter = "blur(20px)";
        closesvg.addEventListener("click", () => {
          previewTopper.removeChild(img);
          previewTopper.style.display = "none";
          sectionop.style.filter = "blur(0px)";
        });
      }
    }
  });
}
