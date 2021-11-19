const addbtn = document.querySelector(".addbtn");
const previewDiv = document.querySelector(".preview");
const previewDiv2 = document.querySelector(".preview2");
const backbtn = document.querySelector(".backbtn");
const backbtn2 = document.querySelector(".backbtn2");
const sectionop = document.querySelector(".mainsection");
const imgform = document.querySelector(".imgform");
const submitbtn = document.querySelector(".submitbtn");
const editbtn = document.querySelectorAll(".editbtn");
const editname = document.querySelector(".editname");
const editstudentimg = document.querySelector(".editstudentimg");
const editcollegename = document.querySelector(".editcollegename");
const editscore = document.querySelector(".editscore");

editbtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    previewDiv2.style.display = "flex";
    imgform.style.transform = "translate(300vw,0)";
    previewDiv2.style.transform = "none";
    console.log(btn.value);
    const namevalue = btn.value.split(",")[0];
    console.log(namevalue);
  });
});

addbtn.addEventListener("click", () => {
  previewDiv.style.display = "flex";
  imgform.style.transform = "translate(300vw,0)";
  previewDiv.style.transform = "none";
});

backbtn.addEventListener("click", () => {
  previewDiv.style.transform = "translate(300vw,0)";
  imgform.style.transform = "translate(0,0)";
});

backbtn2.addEventListener("click", () => {
  previewDiv2.style.transform = "translate(300vw,0)";
  imgform.style.transform = "translate(0,0)";
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
        if (sliderimgurl[j].innerText.length < 1) return;
        img.src = sliderimgurl[j].innerText;
        previewTopper.appendChild(img);
        previewTopper.style.display = "flex";
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

submitbtn.addEventListener("click", () => {
  Swal.fire({
    title: "Are you sure?",
    text: "Are you sure you want to delete!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      latestupdateform.submit();
    }
  });
});
document.querySelectorAll(".updatesCheckbox").forEach((check, i) => {
  check.addEventListener("change", () => {
    if (document.querySelectorAll('input[type="checkbox"]:checked').length) {
      document.querySelector(".submit").removeAttribute("disabled");
    } else {
      document.querySelector(".submit").setAttribute("disabled", true);
    }
  });
});

editbtn.addEventListener("click", () => {});
