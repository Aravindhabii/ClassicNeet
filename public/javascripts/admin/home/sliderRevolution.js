const previewDiv = document.querySelector(".preview");
const previewSpan = document.querySelectorAll(".previewSpan");
const sectionop = document.querySelector(".mainsection");
const closesvg = document.querySelector(".closesvg");
const fileimg = document.querySelectorAll(".fileimg");
const sliderimgurl = document.querySelectorAll(".sliderimgurl");

for (let i = 0; i <= fileimg.length - 1; i++) {
  fileimg[i].addEventListener("input", (e) => {
    document
      .querySelectorAll(".updatesCheckbox")
      [i].removeAttribute("disabled");
    for (let j = 0; j <= sliderimgurl.length - 1; j++) {
      if (i === j) {
        sliderimgurl[j].innerText = URL.createObjectURL(e.target.files[0]);
      }
    }
  });
}

document.querySelectorAll(".updatesCheckbox").forEach((check, i) => {
  check.addEventListener("change", () => {
    if (document.querySelectorAll('input[type="checkbox"]:checked').length) {
      document.querySelector(".submit").removeAttribute("disabled");
    } else {
      document.querySelector(".submit").setAttribute("disabled", true);
    }
  });
});

for (let i = 0; i <= previewSpan.length - 1; i++) {
  previewSpan[i].addEventListener("click", (e) => {
    for (let j = 0; j <= sliderimgurl.length - 1; j++) {
      if (i === j) {
        const img = document.createElement("img");
        if (sliderimgurl[j].innerText.length < 1) return;
        img.src = sliderimgurl[j].innerText;
        previewDiv.appendChild(img);
        previewDiv.style.display = "flex";
        previewDiv.style.background = "rgba(104, 100, 100, 0.671)";
        closesvg.addEventListener("click", () => {
          previewDiv.removeChild(img);
          previewDiv.style.display = "none";
          previewDiv.style.background = "none";
        });
      }
    }
  });
}

const currentPreviewSpan = document.querySelectorAll(".currentPreviewSpan");
const currentSliderimgurl = document.querySelectorAll(".currentSliderimgurl");
for (let i = 0; i <= currentPreviewSpan.length - 1; i++) {
  currentPreviewSpan[i].addEventListener("click", (e) => {
    for (let j = 0; j <= currentSliderimgurl.length - 1; j++) {
      if (i === j) {
        const img = document.createElement("img");
        img.src = currentSliderimgurl[j].innerText;
        previewDiv.appendChild(img);
        previewDiv.style.display = "flex";
        previewDiv.style.background = "rgba(104, 100, 100, 0.671)";
        closesvg.addEventListener("click", () => {
          previewDiv.removeChild(img);
          previewDiv.style.display = "none";
          previewDiv.style.background = "none";
        });
      }
    }
  });
}
