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
document.querySelectorAll(".updatesCheckbox").forEach((check, i) => {
  check.addEventListener("change", () => {
    if (document.querySelectorAll('input[type="checkbox"]:checked').length) {
      document.querySelector(".submit").removeAttribute("disabled");
    } else {
      document.querySelector(".submit").setAttribute("disabled", true);
    }
  });
});
