var formtextarea = document.querySelector(".formtextarea");
const changablespan = document.querySelector(".changablespan");

var counternum = 0

counternum = formtextarea.value.length;
changablespan.innerHTML = counternum;

formtextarea.addEventListener('input',(e)=>{
    var counternum = e.target.value.length
    changablespan.innerHTML = counternum;
})
