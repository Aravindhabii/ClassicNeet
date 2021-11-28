const formtextarea = document.querySelector(".formtextarea");
const changablespan = document.querySelector(".changablespan");
formtextarea.addEventListener("input", (e) => {
  changablespan.innerText = e.target.value.length;
});
const formtextarea1 = document.querySelector(".formtextarea1");
const changablespan1 = document.querySelector(".changablespan1");
formtextarea1.addEventListener("input", (e) => {
  changablespan1.innerText = e.target.value.length;
});
const addbtn = document.querySelector(".addbtn");
const preview = document.querySelector(".preview");
const backbtn = document.querySelector(".backbtn");
const sectionop = document.querySelector(".mainsection");
const imgform = document.querySelector(".imgform");
const submit = document.querySelector(".submit");
const submitbtn = document.querySelector(".submitbtn");
const confirmdelete = document.querySelector(".confirmdelete");
const latestupdateform = document.querySelector(".latestupdateform");
const contents = document.querySelectorAll(".content");
const closebtn = document.querySelector(".closebtn");
const previewdiv = document.querySelector(".previewdiv");
const yearnum = document.querySelector(".yearnum");

yearnum.setAttribute("max", new Date().getFullYear()+1);

addbtn.addEventListener("click", () => {
  preview.style.display = "flex";
  imgform.style.transform = "translate(300vw,0)";
  preview.style.transform = "none";
});

backbtn.addEventListener("click", () => {
  preview.style.transform = "translate(300vw,0)";
  imgform.style.transform = "translate(0,0)";
});

closebtn.addEventListener("click", () => {
  previewdiv.style.opacity = "0";
  previewdiv.style.zIndex = "-5";
});

contents.forEach((content) => {
  content.addEventListener("click", () => {
    previewdiv.style.opacity = "1";
    previewdiv.style.zIndex = "5";
    const value = content.value;
    formtextarea.value = value;
  });
});

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
