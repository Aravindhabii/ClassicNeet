const addbtn = document.querySelector(".addbtn");
const previewDiv = document.querySelector(".preview");
const backbtn = document.querySelector(".backbtn");
const sectionop = document.querySelector(".mainsection");
const imgform = document.querySelector(".imgform");
const submit = document.querySelector(".submit");
const submitbtn = document.querySelector(".submitbtn");
const confirmdelete = document.querySelector(".confirmdelete");
const latestupdateform = document.querySelector(".latestupdateform");
var inputtext = document.querySelector(".inputtext");
const editbtn = document.querySelector(".editbtn");
const marqueetext = document.querySelector(".marqueetext");
const marqueeid = document.querySelector(".marqueeid");

editbtn.addEventListener("click", () => {
    previewDiv.style.display = "flex";
    imgform.style.transform = "translate(300vw,0)";
    previewDiv.style.transform = "none";
    marqueetext.value = editbtn.value.split("**")[0];
    marqueeid.value = editbtn.value.split("**")[1];
});

backbtn.addEventListener("click", () => {
  previewDiv.style.transform = "translate(300vw,0)";
  imgform.style.transform = "translate(0,0)";
  marqueetext.value = "";
  marqueeid.value = "";
});

