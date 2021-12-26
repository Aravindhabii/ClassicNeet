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
const changablespan = document.querySelector(".changablespan");
const editbtn = document.querySelectorAll(".editbtn");
const marqueetext = document.querySelector(".marqueetext");
const marqueelink = document.querySelector(".marqueelink");
const marqueeid = document.querySelector(".marqueeid");

editbtn.forEach((edit) => {
  edit.addEventListener("click", () => {
    previewDiv.style.display = "flex";
    imgform.style.transform = "translate(300vw,0)";
    previewDiv.style.transform = "none";
    marqueetext.value = edit.value.split("**")[0];
    marqueelink.value = edit.value.split("**")[1];
    marqueeid.value = edit.value.split("**")[2];
    changablespan.innerText = marqueetext.value.length;
  });
});

backbtn.addEventListener("click", () => {
  previewDiv.style.transform = "translate(300vw,0)";
  imgform.style.transform = "translate(0,0)";
  marqueetext.value = "";
  marqueelink.value = "";
  marqueeid.value = "";
});

marqueetext.addEventListener("input", (e) => {
    changablespan.innerText = e.target.value.length;
})
