// var valueArr = [];
// document.querySelectorAll(".updatesCheckbox").forEach((checkBox) => {
//   checkBox.addEventListener("change", (e) => {
//     let value = checkBox.value;
//     if (valueArr.includes(value)) {
//       valueArr.filter((val) => val !== value);
//       document.querySelector('.imgform').action=`/imgupdate?`
//     } else {
//       valueArr.push(value);
//     }
//   });
// });


const popup = document.querySelector(".popupimg");
const popupimg = document.querySelector('.popupimg img');
const trigger = document.querySelector('.onclickimg');
const fileimg = document.querySelector(".fileimg");
const Homepage = document.querySelector(".Homepage");



fileimg.addEventListener('onchange',(e)=>{
    console.log(e); 
})


trigger.addEventListener("click", () => {
  console.log("hello");
  popup.style.display = "block";
Homepage.style.backdropFilter = 'blur(20px)';
});
