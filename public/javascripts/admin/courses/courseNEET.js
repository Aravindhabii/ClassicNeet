// const addbtn = document.querySelector(".addbtn");
// const previewDiv = document.querySelector(".preview");
// const backbtn = document.querySelector(".backbtn");
// const sectionop = document.querySelector(".mainsection");
// const imgform = document.querySelector(".imgform");
// const submit = document.querySelector(".submit");
// const submitbtn = document.querySelector(".submitbtn");
// const confirmdelete = document.querySelector(".confirmdelete");
// const latestupdateform = document.querySelector(".latestupdateform");
var formtextarea = document.querySelector(".formtextarea");
const changablespan = document.querySelector(".changablespan");

// console.log(previewDiv);

// addbtn.addEventListener("click", () => {
//   previewDiv.style.display = "flex";
//   imgform.style.transform = "translate(300vw,0)";
//   previewDiv.style.transform = "none";
// });

// backbtn.addEventListener("click", () => {
//   previewDiv.style.transform = "translate(300vw,0)";
//   imgform.style.transform = "translate(0,0)";
// });

// submitbtn.addEventListener("click", () => {
//   console.log("Dawwwwgg");
//   Swal.fire({
//     title: 'Are you sure?',
//     text: "Are you sure you want to delete!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes, delete it!'
//   }).then((result) => {
//     if (result.isConfirmed) {
//       latestupdateform.submit()
//     }
//   })
// });

console.log(formtextarea);
var counternum = 0

counternum = formtextarea.value.length;
changablespan.innerHTML = counternum;
console.log(counternum);

formtextarea.addEventListener('change',(e)=>{
    var counternum = e.target.value.length
    console.log('hello');
    changablespan.innerHTML = counternum
})
